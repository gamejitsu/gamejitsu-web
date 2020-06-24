import React from "react"
import ReviewRequestResource from "gamejitsu/api/resources/review-request"
import ReviewResource from "gamejitsu/api/resources/review"

import { listModels } from "gamejitsu/api"
import { Flex, Box } from "rebass"
import { LayoutWithMenu, Card, Title } from "gamejitsu/components"
import { NextPageContext, NextPage } from "next"
import CoachReviewCard from "./CoachReviewCard"
import ReviewRequestCard from "./ReviewRequestCard"
import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"
import { DecoratedReviewRequest, decorateReviewRequests } from "gamejitsu/models/review-request"

interface Props {
  reviewRequests: (DecoratedReviewRequest | undefined)[]
  reviews: (DecoratedReview | undefined)[]
}

const getReviewRequests = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewRequestResource, ctx)
  return response
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response
}

const CoachDashboardPage: NextPage<Props> = ({ reviewRequests, reviews }) => {
  return (
    <LayoutWithMenu title="Coach Dashboard">
      <Box width="1300px">
        <Title text="ACCEPTED REVIEWS" />
        <Flex alignItems="center">
          {reviews.map((review) => {
            if (review) {
              return <CoachReviewCard key={review.id} review={review} />
            }
          })}
        </Flex>

        <Title text="AVAILABLE REVIEW REQUESTS" />
        <Flex alignItems="center" flexWrap="wrap">
          {reviewRequests.map((reviewRequest) => {
            if (reviewRequest) {
              return <ReviewRequestCard key={reviewRequest.id} reviewRequest={reviewRequest} />
            }
          })}
        </Flex>
      </Box>
    </LayoutWithMenu>
  )
}

CoachDashboardPage.getInitialProps = async (ctx: NextPageContext) => {
  const reviewRequestsResponse = await getReviewRequests(ctx)
  const response = await getReviews(ctx)
  const reviews: (DecoratedReview | undefined)[] = decorateReviews(response.data, response.included)
  const reviewRequests: (DecoratedReviewRequest | undefined)[] = decorateReviewRequests(
    reviewRequestsResponse.data,
    reviewRequestsResponse.included
  )
  return { reviewRequests, reviews }
}

export default CoachDashboardPage
