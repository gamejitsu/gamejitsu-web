import React from "react"
import ReviewRequestResource, { ReviewRequest } from "gamejitsu/api/resources/review-request"
import ReviewResource, { Review } from "gamejitsu/api/resources/review"
import ReplayResource, { Replay } from "gamejitsu/api/resources/replay"

import { listModels, createModel, findModel } from "gamejitsu/api"
import { Flex, Box, Text } from "rebass"
import { LayoutWithMenu, Card, Button, Title } from "gamejitsu/components"
import { NextPageContext, NextPage } from "next"
import CoachReviewCard from "./CoachReviewCard"

interface Props {
  reviewRequests: ReviewRequest[]
  reviews: Review[]
}

const getReviewRequests = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewRequestResource, ctx)
  return response.data
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response.data
}

const acceptReviewRequest = async (reviewRequestId: string) => {
  const response = await createModel(ReviewResource, { requestId: reviewRequestId })
  // TODO Maybe add confirm?
  // redirect to perform review page
}

const CoachDashboardPage: NextPage<Props> = ({ reviewRequests, reviews }) => {
  return (
    <LayoutWithMenu title="Coach Dashboard">
      <Title text="Accepted Reviews" />
      {reviews.map( (review) => {
        //const { data: replay } = await findModel(ReplayResource, reviewRequest.replayId)
        //console.log(review.requestId)
        //findModel(ReviewRequestResource, review.requestId).then((res) => {
        //  console.log(res)
       // }).catch(e =>console.log("ERR IS:",e))
        return <CoachReviewCard key={review.id} review={review} />
      })}

      <Title text="Available review requests" />
      <Box m="20px">
        <Card>
          <Flex flexDirection="column">
            {reviewRequests.map((reviewRequest) => {
              return (
                <Box p={3} key={reviewRequest.id}>
                  <Text p={2}>Review Request</Text>
                  <Text p={2}>Review Request Id: {reviewRequest.id}</Text>
                  <Button
                    onClick={() => {
                      acceptReviewRequest(reviewRequest.id)
                    }}
                    text="Accept review"
                  />
                </Box>
              )
            })}
          </Flex>
        </Card>
      </Box>
    </LayoutWithMenu>
  )
}

CoachDashboardPage.getInitialProps = async (ctx: NextPageContext) => {
  console.log("")
  const reviewRequests = await getReviewRequests(ctx)
  const reviews = await getReviews(ctx)
  reviews.map(async (review) => {
    const review1 = await findModel(ReviewResource, review.id, ctx)
    console.log(review1)
  })
  return { reviewRequests, reviews }
}

export default CoachDashboardPage
