import { Flex, Box } from "rebass"
import { NextPageContext, NextPage } from "next"
import React from "react"
import styled from "styled-components"

import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"
import { DecoratedReviewRequest, decorateReviewRequests } from "gamejitsu/models/review-request"
import { LayoutWithMenu, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import CoachReviewCard from "./CoachReviewCard"
import ReviewRequestCard from "./ReviewRequestCard"
import ReviewRequestResource from "gamejitsu/api/resources/review-request"
import ReviewResource from "gamejitsu/api/resources/review"
import SettingsSVG from "../../../../../svgs/settings.svg"

interface Props {
  reviewRequests: DecoratedReviewRequest[]
  reviews: DecoratedReview[]
}

const getReviewRequests = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewRequestResource, ctx)
  return response
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response
}

const EmptyAcceptedReviews = styled(Flex)`
  witdh: 100%;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const EmptyReviewRequests = styled(Flex)`
  witdh: 100%;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const areAllReviewsPublished = (reviews: DecoratedReview[]) => {
  let areAllPublished = true
  reviews.map((review) => {
    if (review && !review.isPublished) {
      areAllPublished = false
    }
  })
  return areAllPublished
}

const CoachDashboardPage: NextPage<Props> = ({ reviewRequests, reviews }) => {
  return (
    <LayoutWithMenu title="Coach Dashboard">
      <Title text="ACCEPTED REVIEWS" />
      {reviews.length === 0 || areAllReviewsPublished(reviews) ? (
        <EmptyAcceptedReviews height="30%">
          <Box mt={4} pt={4}>
            <SettingsSVG width="200" height="100" />
          </Box>
          <Box mt={4} pb={4}>
            No reviews accepted to show
          </Box>
        </EmptyAcceptedReviews>
      ) : (
        reviews.map((review) => {
          if (review && !review.isPublished) {
            return <CoachReviewCard key={review.id} review={review} />
          }
        })
      )}

      <Title text="AVAILABLE REVIEW REQUESTS" />
      {reviewRequests.length === 0 ? (
        <EmptyReviewRequests height="50%">
          <Box mt={4} pt={4}>
            <SettingsSVG width="200" height="100" />
          </Box>
          <Box mt={4} pb={4}>
            No review requests available
          </Box>
        </EmptyReviewRequests>
      ) : (
        reviewRequests.map((reviewRequest) => {
          return (
            <ReviewRequestCard key={reviewRequest.id.toString()} reviewRequest={reviewRequest} />
          )
        })
      )}
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
