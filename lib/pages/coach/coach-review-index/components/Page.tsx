import { Flex } from "rebass"
import { NextPageContext, NextPage } from "next"
import React from "react"

import { CoachReviewCard, CoachDeletedReviewCard } from "."
import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"
import { EmptyCard, LayoutWithMenu, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import ReviewResource from "gamejitsu/api/resources/review"

interface Props {
  reviews: (DecoratedReview | undefined)[]
}

const getReviews = async (ctx: NextPageContext) => await listModels(ReviewResource, ctx)

const CoachReviewIndex: NextPage<Props> = ({ reviews }) => (
  <LayoutWithMenu title="Completed Reviews">
    <Flex width="100%" flexDirection="column">
      <Title text="COMPLETED REVIEWS" />
      {reviews.length === 0 ? (
        <EmptyCard text="No reviews completed to show" />
      ) : (
        reviews.map((review) =>
          review?.isPublished ? (
            <CoachReviewCard key={review.id} review={review} />
          ) : review?.isDeleted ? (
            <CoachDeletedReviewCard key={review?.id} review={review} />
          ) : null
        )
      )}
    </Flex>
  </LayoutWithMenu>
)

CoachReviewIndex.getInitialProps = async (ctx: NextPageContext) => {
  const response = await getReviews(ctx)
  const reviews: (DecoratedReview | undefined)[] = decorateReviews(response.data, response.included)
  return { reviews }
}

export default CoachReviewIndex
