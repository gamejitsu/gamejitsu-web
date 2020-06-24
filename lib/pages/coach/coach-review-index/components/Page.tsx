import React from "react"

import { CoachReviewCard } from "."
import { LayoutWithMenu, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import { NextPageContext, NextPage } from "next"
import ReviewResource, { Review } from "gamejitsu/api/resources/review"
import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"

interface Props {
  reviews: (DecoratedReview | undefined)[]
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response
}

const CoachReviewIndex: NextPage<Props> = ({ reviews }) => {
  return (
    <LayoutWithMenu title="Completed Reviews">
      <Title text="COMPLETED REVIEWS" />
      {reviews.map((review) => {
        if (review?.isPublished) return <CoachReviewCard key={review.id} review={review} />
      })}
    </LayoutWithMenu>
  )
}

CoachReviewIndex.getInitialProps = async (ctx: NextPageContext) => {
  const response = await getReviews(ctx)
  const reviews: (DecoratedReview | undefined)[] = decorateReviews(response.data, response.included)
  return { reviews }
}

export default CoachReviewIndex
