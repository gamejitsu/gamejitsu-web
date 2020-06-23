import React from "react"
import ReviewRequestResource, { ReviewRequest } from "gamejitsu/api/resources/review-request"
import ReviewResource from "gamejitsu/api/resources/review"

import { listModels, createModel } from "gamejitsu/api"
import { Flex, Box, Text } from "rebass"
import { LayoutWithMenu, Card, Button, Title } from "gamejitsu/components"
import { NextPageContext, NextPage } from "next"
import CoachReviewCard from "./CoachReviewCard"
import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"

interface Props {
  reviewRequests: ReviewRequest[]
  reviews: (DecoratedReview | undefined)[]
}

const getReviewRequests = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewRequestResource, ctx)
  return response.data
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response
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
      {reviews.map((review) => {
        if (review) {
          return <CoachReviewCard key={review.id} review={review} />
        }
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
  const reviewRequests = await getReviewRequests(ctx)
  const response = await getReviews(ctx)
  const reviews: (DecoratedReview | undefined)[] = decorateReviews(response.data, response.included)
  return { reviewRequests, reviews }
}

export default CoachDashboardPage
