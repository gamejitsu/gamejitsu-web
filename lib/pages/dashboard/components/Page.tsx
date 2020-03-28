import React from "react"

import { DeserializedReplay, deserializeReplays } from "gamejitsu/models/replay"
import { Layout, Spinner } from "gamejitsu/components"
import { listModels, findModel, deserializeResponse } from "gamejitsu/api"
import { NextPageContext, NextPage } from "next"
import { parseCookies } from "nookies"
import { ReviewRequestCard, ReplayCard } from "."
import { Socket } from "phoenix"
import { User, ReviewRequest } from "gamejitsu/models"
import { UserContext } from "gamejitsu/contexts"

interface Props {
  user: User
  replays: DeserializedReplay[]
  reviewRequests: ReviewRequest[]
}

interface State {
  replay: DeserializedReplay | null
  replays: DeserializedReplay[]
  socket: Socket | null
  user: User
}

const getReplays = async (ctx?: NextPageContext) => {
  const { data } = await listModels("replay", ctx)
  return deserializeReplays(data)
}

const getCurrentUser = async () => {
  const { data } = await findModel("user", "current")
  return data
}

function onFinish(this: Dashboard) {
  this.setState({ replay: null })
}

const getReviewRequests = async (ctx: NextPageContext) => {
  const { data } = await listModels("review-request", ctx)
  return data
}

class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      user: props.user,
      replays: props.replays,
      replay: null,
      socket: null
    }
  }

  componentDidMount() {
    const { authToken } = parseCookies({})
    const socket = new Socket(process.env.SOCKET_ENDPOINT + "/socket", {
      params: { token: authToken }
    })
    this.setState({ socket })
    socket.connect()
    const channel = socket.channel("users:" + this.state.user.id)
    channel.join().receive("ok", async () => {
      const user = await getCurrentUser()
      this.setState({
        user
      })
    })
    channel.on("update", async (userData) => {
      const { data: user } = deserializeResponse("user", "one", userData)

      if (user.isSyncingReplays) {
        this.setState({ user })
      } else {
        socket.disconnect()
        const replays = await getReplays()
        this.setState({ user, replays })
      }
    })
  }

  componentWillUnmount() {
    this.state.socket && this.state.socket.disconnect()
  }

  render() {
    return (
      <Layout title="Dashboard">
        {this.state.user.isSyncingReplays ? <Spinner /> : <div></div>}
        Reviews Requested
        {this.props.reviewRequests.map((reviewRequest) => {
          return <ReviewRequestCard key={reviewRequest.id} reviewRequest={reviewRequest} />
        })}
        Replay
        {this.state.replays.map((replay) => {
          return <ReplayCard key={replay.id} replay={replay} />
        })}
      </Layout>
    )
  }
}

const Page: NextPage<Omit<Props, "user">> = ({ replays, reviewRequests }) => (
  <UserContext.Consumer>
    {(user) =>
      user ? <Dashboard user={user} replays={replays} reviewRequests={reviewRequests} /> : null
    }
  </UserContext.Consumer>
)

Page.getInitialProps = async (ctx) => {
  const replays = await getReplays(ctx)
  const reviewRequests = await getReviewRequests(ctx)
  return { replays, reviewRequests }
}

export default Page
