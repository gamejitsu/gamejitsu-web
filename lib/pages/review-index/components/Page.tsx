import React from "react"

import { EmptyCard, LayoutWithMenuUser, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import { NextPage } from "next"
import ReviewResource from "gamejitsu/api/resources/review"
import { ReviewCard } from "."
import { Flex } from "rebass"
import { decorateReviews, DecoratedReview } from "gamejitsu/models/review"

interface Props {
  reviews: (DecoratedReview | undefined)[]
}

const Page: NextPage<Props> = ({ reviews }) => (
  <LayoutWithMenuUser title="Reviews">
    <Flex width="100%" flexDirection="column">
      <Title text="COMPLETED REVIEWS" />
      <Flex>
        {reviews.length === 0 ? (
          <EmptyCard text="No reviews available" />
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
