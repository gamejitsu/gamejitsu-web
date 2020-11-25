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
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  opacity: 0.9;
  border: 1px solid ${(props) => props.theme.activeColor};
`

const Page: NextPage<Props> = ({ reviews }) => (
  <LayoutWithMenuUser title="Reviews">
    <Flex width="100%" flexDirection="column">
      <Title text="COMPLETED REVIEWS" />
      <Flex mt={3}>
        {reviews.length === 0 ? (
          <EmptyReviews py={5}>
            <Box py={3}>
              <SettingsSVG width="200" height="100" />
            </Box>
            <Box>No reviews available</Box>
          </EmptyReviews>
        ) : (
          reviews.map((review) => {
            if (review !== undefined) return <ReviewCard key={review.id} review={review} />
          })
        )}
      </Flex>
    </Flex>
  </LayoutWithMenuUser>
)

Page.getInitialProps = async (ctx) => {
  const response = await listModels(ReviewResource, ctx)
  const reviews: (DecoratedReview | undefined)[] = decorateReviews(response.data, response.included)
  return { reviews }
}

export default Page
