import React from "react"

import { CoachReviewCard } from "."
import { Layout } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import { NextPageContext, NextPage } from "next"
import { Review } from "gamejitsu/models"

interface Props {
  reviews: Review[]
}

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels("review")
  return response.data
}

const CoachReviewIndex: NextPage<Props> = ({ reviews }) => {
  return (
    <Layout title="Reviews">
      Reviews
      {reviews.map((review) => {
        return <CoachReviewCard key={review.id} review={review} />
      })}
      Completed Reviews
    </Layout>
  )
}

CoachReviewIndex.getInitialProps = async (ctx: NextPageContext) => {
  const reviews = await getReviews(ctx)
  return { reviews }
}

export default CoachReviewIndex
