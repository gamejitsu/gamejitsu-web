import React from "react"

import { LayoutWithMenuUser, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import { NextPage } from "next"
import ReviewResource, { Review } from "gamejitsu/api/resources/review"
import { ReviewCard } from "."
import { Box, Flex } from "rebass"
import SettingsSVG from "../../../../svgs/settings.svg"
import styled from "styled-components"
import { decorateReviews, DecoratedReview } from "gamejitsu/models/review"

interface Props {
  reviews: (DecoratedReview | undefined)[]
}

const EmptyReviews = styled(Flex)`
  witdh: 100%;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Page: NextPage<Props> = ({ reviews }) => (
  <LayoutWithMenuUser title="Reviews">
    <Title text="COMPLETED REVIEWS" />
    <Box mt={3}>
    {reviews.length === 0 ? (
      <EmptyReviews height="30%">
        <Box mt={4} pt={4}>
          <SettingsSVG width="200" height="100" />
        </Box>
        <Box my={4} pb={4}>No reviews available</Box>
      </EmptyReviews>
    ) : (
      reviews.map((review) => {
        if (review !== undefined) return <ReviewCard key={review.id} review={review} />
      })
    )}
    </Box>
  </LayoutWithMenuUser>
)

Page.getInitialProps = async (ctx) => {
  const response = await listModels(ReviewResource, ctx)
  const reviews: (DecoratedReview | undefined)[] = decorateReviews(response.data, response.included)
  return { reviews }
}

export default Page
