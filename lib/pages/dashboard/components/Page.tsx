import React, { useState, useEffect, FunctionComponent } from "react"
import { Callout } from "@blueprintjs/core"
import { NextPageContext, NextPage } from "next"
import { parseCookies } from "nookies"
import { Flex, Box } from "rebass"
import styled from "styled-components"
import { Socket } from "phoenix"

import ReplayResource from "gamejitsu/api/resources/replay"
import UserResource, { User } from "gamejitsu/api/resources/user"
import ReviewRequestResource from "gamejitsu/api/resources/review-request"
import { DecoratedReplay, decorateReplays } from "gamejitsu/models/replay"
import { Spinner, LayoutWithMenuUser } from "gamejitsu/components"
import { listModels, findModel } from "gamejitsu/api"
import { decorateReviewRequests, DecoratedReviewRequest } from "gamejitsu/models/review-request"
import { UserContext } from "gamejitsu/contexts"
import { ReviewRequestCard, ReplayCardNew } from "."
import SettingsSVG from "../../../../svgs/settings.svg"

interface Props {
  user: User
  replays: DecoratedReplay[]
  reviewRequests: (DecoratedReviewRequest | undefined)[]
}

const Title = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`

const getReplays = async (ctx?: NextPageContext) => {
  const { data } = await listModels(ReplayResource, ctx)
  return decorateReplays(data)
}

const getCurrentUser = async () => {
  const { data } = await findModel(UserResource, "current")
  return data
}

const getReviewRequests = async (ctx: NextPageContext) => {
  return await listModels(ReviewRequestResource, ctx)
}

const EmptyReplays = styled(Flex)`
  witdh: 100%;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const EmptyRequestedReviews = styled(Flex)`
  witdh: 100%;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

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
    <LayoutWithMenuUser title="Dashboard">
      <Box width="1300px">
        {user.hasPublicProfile ? (
          <div />
        ) : (
          <Box mb={4}>
            <Callout title="Private Steam profile detected" intent="danger">
              You need to enable the public profile on Steam to be able to correctly fetch your
              replays.
              <br />
              <br />
              If you are logged in to Steam, you can change your Privacy Settings by navigating to
              your{" "}
              <a href="https://steamcommunity.com/my/edit/settings">
                Profile Privacy Settings Page
              </a>
              .
              <br />
              <br />
              Alternatively, you can navigate to the Profile Privacy Settings page manually:
              <br />
              <br />
              1. From your Steam Profile, click the Edit Profile link under your displayed badge.
              <br />
              2. Click the My Privacy Settings tab
              <br />
              3. Select your privacy state
              <br />
              4. Click the Save button
            </Callout>
          </Box>
        )}
        {user.isSyncingReplays ? <Spinner /> : <div></div>}
        <Title>REQUESTED REVIEWS</Title>
        {props.reviewRequests.length === 0 ? (
          <EmptyRequestedReviews height="30%">
            <Box>
              <SettingsSVG width="200" height="100" />
            </Box>
            <Box mt={4}>No reviews accepted to show</Box>
          </EmptyRequestedReviews>
        ) : (
          props.reviewRequests.map((reviewRequest) => {
            if (reviewRequest)
              return <ReviewRequestCard key={reviewRequest.id} reviewRequest={reviewRequest} />
          })
        )}
        <Title>REPLAYS</Title>
        <Flex flexWrap="wrap">
          {props.replays.length === 0 ? (
            <EmptyReplays height="30%">
              <Box>
                <SettingsSVG width="200" height="100" />
              </Box>
              <Box mt={4}>No reviews accepted to show</Box>
            </EmptyReplays>
          ) : (
            props.replays.map((replay) => {
              return <ReplayCardNew key={replay.id} replay={replay} />
            })
          )}
        </Flex>
      </Box>
    </LayoutWithMenuUser>
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
  const reviewRequestResponse = await getReviewRequests(ctx)
  const reviewRequests: (DecoratedReviewRequest | undefined)[] = decorateReviewRequests(
    reviewRequestResponse.data,
    reviewRequestResponse.included
  )

  return { replays, reviewRequests }
}

export default Page
