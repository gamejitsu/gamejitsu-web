import { Box, Flex } from "rebass"
import { NextPageContext, NextPage } from "next"
import React from "react"
import styled from "styled-components"

import { CoachReviewCard } from "."
import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"
import { LayoutWithMenu } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import ReviewResource from "gamejitsu/api/resources/review"
import SettingsSVG from "../../../../../svgs/settings.svg"

interface Props {
  reviews: (DecoratedReview | undefined)[]
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response
}

const EmptyReviews = styled(Flex)`
background-color: ${(props) => props.theme.lightBackgroundColor};
font-weight: 40px;
align-items: center;
justify-content: center;
flex-direction: column;
opacity: 0.9;
`

const Title = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`

const CoachReviewIndex: NextPage<Props> = ({ reviews }) => {
  return (
    <LayoutWithMenu title="Completed Reviews">
        <Flex width="100%" flexDirection="column">
          <Title>COMPLETED REVIEWS</Title>
          {reviews.length === 0 ? (
            <EmptyReviews py={5}>
              <Box py={3}>
                <SettingsSVG width="200" height="100" />
              </Box>
              <Box>No reviews completed to show</Box>
            </EmptyReviews>
          ) : (
              reviews.map((review) => {
                if (review?.isPublished) return <CoachReviewCard key={review.id} review={review} />
              })
            )}
        </Flex>
    </LayoutWithMenu>
  )
}

CoachReviewIndex.getInitialProps = async (ctx: NextPageContext) => {
  const response = await getReviews(ctx)
  const reviews: (DecoratedReview | undefined)[] = decorateReviews(response.data, response.included)
  return { reviews }
}

export default CoachReviewIndex
