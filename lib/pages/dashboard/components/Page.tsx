import React, { useState, useEffect, FunctionComponent } from "react"

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

const getReviewRequests = async (ctx: NextPageContext) => {
  const { data } = await listModels("review-request", ctx)
  return data
}

const Dashboard: FunctionComponent<Props> = (props) => {
  const [user, setUser] = useState(props.user)
  const [replays, setReplays] = useState(props.replays)
  const [socket, setSocket] = useState<Socket | null>(null)
  useEffect(() => {
    const { authToken } = parseCookies({})
    const currentSocket = socket
      ? socket
      : new Socket(process.env.SOCKET_ENDPOINT + "/socket", {
          params: { token: authToken }
        })
    setSocket(currentSocket)
    currentSocket.connect()
    const channel = currentSocket.channel("users:" + user.id)
    channel.join().receive("ok", async () => {
      const user = await getCurrentUser()
      setUser(user)
    })
    channel.on("update", async (userData) => {
      const { data: user } = deserializeResponse("user", "one", userData)
      if (user.isSyncingReplays) {
        setUser(user)
      } else {
        currentSocket.disconnect()
        const replays = await getReplays()
        setUser(user)
        setReplays(replays)
      }
    })
    return () => {
      currentSocket.disconnect()
    }
  }, [])

  return (
    <Layout title="Dashboard">
      {user.isSyncingReplays ? <Spinner /> : <div></div>}
      Reviews Requested
      {props.reviewRequests.map((reviewRequest) => {
        return <ReviewRequestCard key={reviewRequest.id} reviewRequest={reviewRequest} />
      })}
      Replay
      {replays.map((replay) => {
        return <ReplayCard key={replay.id} replay={replay} />
      })}
    </Layout>
  )
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
