import React, { useState, useEffect, FunctionComponent } from "react"
import ReplayResource from "gamejitsu/api/resources/replay"
import UserResource, { User } from "gamejitsu/api/resources/user"
import ReviewRequestResource, { ReviewRequest } from "gamejitsu/api/resources/review-request"

import { DecoratedReplay, decorateReplays } from "gamejitsu/models/replay"
import { Layout, Spinner, Card } from "gamejitsu/components"
import { listModels, findModel } from "gamejitsu/api"
import { NextPageContext, NextPage } from "next"
import { parseCookies } from "nookies"
import { ReviewRequestCard, ReplayCard } from "."
import { Socket } from "phoenix"
import { UserContext } from "gamejitsu/contexts"
import { Box } from "rebass"

interface Props {
  user: User
  replays: DecoratedReplay[]
  reviewRequests: ReviewRequest[]
}

const getReplays = async (ctx?: NextPageContext) => {
  const { data } = await listModels(ReplayResource, ctx)
  return decorateReplays(data)
}

const getCurrentUser = async () => {
  const { data } = await findModel(UserResource, "current")
  return data
}

const getReviewRequests = async (ctx: NextPageContext) => {
  const { data } = await listModels(ReviewRequestResource, ctx)
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
      const { data: user } = UserResource.decodeOne(userData)
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

      <Card title="Review Requested">
        {props.reviewRequests.map((reviewRequest) => {
          return <ReviewRequestCard key={reviewRequest.id} reviewRequest={reviewRequest} />
        })}
      </Card>
      <Box mt={4}>
        <Card title="Replays">
          {replays.map((replay) => {
            return <ReplayCard key={replay.id} replay={replay} />
          })}
        </Card>
      </Box>
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
