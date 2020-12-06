import React from "react"
import { Flex, Box } from "rebass"
import { NextPageContext, NextPage } from "next"
import styled from "styled-components"

import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"
import { DecoratedReviewRequest, decorateReviewRequests } from "gamejitsu/models/review-request"
import { LayoutWithMenu } from "gamejitsu/components"
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

const Title = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`

const getReviewRequests = async (ctx: NextPageContext) => {
  return await listModels(ReviewRequestResource, ctx)
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response
}

const EmptyAcceptedReviews = styled(Flex)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.9;
  border: 1px solid ${(props) => props.theme.activeColor};
`

const EmptyReviewRequests = styled(Flex)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.9;
  border: 1px solid ${(props) => props.theme.activeColor};
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
      <Flex flexDirection="column" width="100%">
        <Flex width="100%" flexDirection="column">
          <Title>ACCEPTED REVIEWS</Title>
          {reviews.length === 0 || areAllReviewsPublished(reviews) ? (
            <EmptyAcceptedReviews width="100%" py={5}>
              <Box py={3}>
                <SettingsSVG width="200" height="100" />
              </Box>
              <Box>No reviews accepted to show</Box>
            </EmptyAcceptedReviews>
          ) : (
              reviews.map((review) => {
                if (review && !review.isPublished)
                  return <CoachReviewCard key={review.id} review={review} />
              })
            )}
        </Flex>
        <Flex mt={4} flexDirection="column" width="100%">
          <Title>AVAILABLE REVIEW REQUESTS</Title>
          <Flex flexWrap="wrap" justifyContent="space-between">
            {reviewRequests.length === 0 ? (
              <EmptyReviewRequests width="100%" py={5}>
                <Box py={3}>
                  <SettingsSVG width="200" height="100" />
                </Box>
                <Box>No review requests available</Box>
              </EmptyReviewRequests>
            ) : (
                reviewRequests.map((reviewRequest) => {
                  return (
                    <ReviewRequestCard key={reviewRequest.id.toString()} reviewRequest={reviewRequest} />
                  )
                })
              )}
          </Flex>
        </Flex>
      </Flex>
    </LayoutWithMenu >
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
