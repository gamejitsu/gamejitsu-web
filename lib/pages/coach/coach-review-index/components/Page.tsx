import React from "react"

import { CoachReviewCard } from "."
import { LayoutWithMenu, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import { NextPageContext, NextPage } from "next"
import ReviewResource, { Review } from "gamejitsu/api/resources/review"

interface Props {
  reviews: Review[]
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewResource, ctx)
  return response.data
}

const CoachReviewIndex: NextPage<Props> = ({ reviews }) => {
  return (
    <LayoutWithMenu title="Completed Reviews">
      <Title text="Completed Reviews" />
      {reviews.map((review) => {
        if (review.isPublished) return <CoachReviewCard key={review.id} review={review} />
      })}
    </LayoutWithMenu>
  )
}

CoachReviewIndex.getInitialProps = async (ctx: NextPageContext) => {
  const reviews = await getReviews(ctx)
  return { reviews }
}

export default CoachReviewIndex
