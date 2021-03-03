import React, { useState, useEffect, FunctionComponent } from "react"
import { Callout } from "@blueprintjs/core"
import { NextPageContext, NextPage } from "next"
import { parseCookies } from "nookies"
import { Flex } from "rebass"
import { Socket } from "phoenix"

import ReplayResource from "gamejitsu/api/resources/replay"
import UserResource, { User } from "gamejitsu/api/resources/user"
import ReviewRequestResource from "gamejitsu/api/resources/review-request"
import { DecoratedReplay, decorateReplays } from "gamejitsu/models/replay"
import { Spinner, LayoutWithMenuUser, EmptyCard, Title } from "gamejitsu/components"
import { listModels, findModel } from "gamejitsu/api"
import { decorateReviewRequests, DecoratedReviewRequest } from "gamejitsu/models/review-request"
import { UserContext } from "gamejitsu/contexts"
import { ReviewRequestCard, ReplayCardNew } from "."
import Router from "next/router"

interface Props {
  user: User
  replays: DecoratedReplay[]
  reviewRequests: (DecoratedReviewRequest | undefined)[]
}

const getReplays = async (ctx?: NextPageContext) => {
  const { data } = await listModels(ReplayResource, ctx)
  return decorateReplays(data)
}

const getCurrentUser = async () => {
  const { data } = await findModel(UserResource, "current")
  return data
}

const getReviewRequests = async (ctx: NextPageContext) =>
  await listModels(ReviewRequestResource, ctx)

const areAllReviewRequestsPublished = (reviewRequests: (DecoratedReviewRequest | undefined)[]) => {
  return reviewRequests?.every((reviewRequest) => reviewRequest?.status === "published")
}

const Dashboard: FunctionComponent<Props> = (props) => {
  const [user, setUser] = useState(props.user)
  const [replays, setReplays] = useState(props.replays)
  
  useEffect(() => {
    const { authToken } = parseCookies({})
    const socket = new Socket(process.env.SOCKET_ENDPOINT + "/socket", {params: { token: authToken }})
    socket.connect()
    const channel = socket.channel("users:" + user.id)
    channel.join().receive("ok",  () => {
      console.log("channel joined")
    })
    channel.on("update", async (userData) => {
      const { data: usr } = UserResource.decodeOne(userData)
      if (!usr.isSyncingReplays) {
        socket.disconnect()
        const replays = await getReplays()
        setReplays(replays)
        setUser(usr)
      } else {
        setUser(usr)
      }
    })
    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <LayoutWithMenuUser title="Dashboard">
      <Flex flexDirection="column" width="100%">
        {user.hasPublicProfile ? (
          <div />
        ) : (
          <Flex>
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
          </Flex>
        )}
        {user.isSyncingReplays ? <Spinner /> : <div></div>}
        <Flex width="100%" flexDirection="column">
          <Title text="REQUESTED REVIEWS" />
          {props.reviewRequests.length === 0 ||
          areAllReviewRequestsPublished(props.reviewRequests) ? (
            <EmptyCard text="No request reviews to show" />
          ) : (
            props.reviewRequests.map((reviewRequest) => {
              console.log(reviewRequest)
              if (reviewRequest && reviewRequest.status !== "published"){
                return <ReviewRequestCard key={reviewRequest.id} reviewRequest={reviewRequest} />
              }
            })
          )}
        </Flex>
        <Flex mt={4} flexDirection="column">
          <Title text="REPLAYS" />
          <Flex flexWrap="wrap" justifyContent="space-between">
            {replays.length === 0 ? (
              <EmptyCard text="No recent replays to show" />
            ) : (
              replays.map((replay) => {
                return <ReplayCardNew key={replay.id} replay={replay} />
              })
            )}
          </Flex>
        </Flex>
      </Flex>
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
