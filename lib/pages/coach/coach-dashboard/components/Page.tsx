import React from "react"
import { Flex } from "rebass/styled-components"
import { NextPageContext, NextPage } from "next"

import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"
import { DecoratedReviewRequest, decorateReviewRequests } from "gamejitsu/models/review-request"
import { LayoutWithMenu, EmptyCard, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import CoachReviewCard from "./CoachReviewCard"
import ReviewRequestCard from "./ReviewRequestCard"
import ReviewRequestResource from "gamejitsu/api/resources/review-request"
import ReviewResource from "gamejitsu/api/resources/review"

interface Props {
  reviewRequests: DecoratedReviewRequest[]
  reviews: DecoratedReview[]
}

const getReviewRequests = async (ctx: NextPageContext) => {
  return await listModels(ReviewRequestResource, ctx)
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response
}

const isThereANonCompletedReview = (reviews: DecoratedReview[]) => {
  let isThereANonCompletedReview = false
  reviews.map((review) => {
    if (!review?.isPublished && !review?.isDeleted) {
      isThereANonCompletedReview = true
    }
  })
  return isThereANonCompletedReview
}

const CoachDashboardPage: NextPage<Props> = ({ reviewRequests, reviews }) => {
  return (
    <LayoutWithMenu title="Coach Dashboard">
      <Flex flexDirection="column" width="100%">
        <Flex width="100%" flexDirection="column">
          <Title text="ACCEPTED REVIEWS" />
          {reviews.length === 0 || !isThereANonCompletedReview(reviews) ? (
            <EmptyCard text="No reviews accepted to show" />
          ) : (
            reviews.map((review) => {
              if (!review?.isPublished && !review?.isDeleted)
                return <CoachReviewCard key={review.id} review={review} />
            })
          )}
        </Flex>
        <Flex mt={4} flexDirection="column" width="100%">
          <Title text="AVAILABLE REVIEW REQUESTS" />
          <Flex flexWrap="wrap" justifyContent="space-between">
            {reviewRequests.length === 0 ? (
              <EmptyCard text="No review requests available" />
            ) : (
              reviewRequests.map((reviewRequest) => {
                return (
                  <ReviewRequestCard
                    key={reviewRequest.id.toString()}
                    reviewRequest={reviewRequest}
                  />
                )
              })
            )}
          </Flex>
        </Flex>
      </Flex>
    </LayoutWithMenu>
  )
}

CoachDashboardPage.getInitialProps = async (ctx: NextPageContext) => {
  const reviewRequestsResponse = await getReviewRequests(ctx)
  const response = await getReviews(ctx)
  const reviews: DecoratedReview[] = decorateReviews(response.data, response.included)
  const reviewRequests: DecoratedReviewRequest[] = decorateReviewRequests(
    reviewRequestsResponse.data,
    reviewRequestsResponse.included
  )
  return { reviewRequests, reviews }
}

export default CoachDashboardPage
