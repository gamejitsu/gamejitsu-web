import { Flex } from "rebass"
import { NextPageContext, NextPage } from "next"
import React from "react"
import styled from "styled-components"

import { CoachReviewCard } from "."
import { DecoratedReview, decorateReviews } from "gamejitsu/models/review"
import { EmptyCard, LayoutWithMenu, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import ReviewResource from "gamejitsu/api/resources/review"

interface Props {
  reviews: (DecoratedReview | undefined)[]
}

const getReviews = async (ctx: NextPageContext) => {
  return await listModels(ReviewResource, ctx)
}

const atLeastOneReviewPublished = (reviews: (DecoratedReview | undefined)[]) => {
  let published = false
  reviews.forEach((review) => {
    console.log("in")
    console.log(review)
    if (review?.isPublished) published = true
  })
  return published
}

const CoachReviewIndex: NextPage<Props> = ({ reviews }) => {
  let isThereAPublished
  if (reviews) isThereAPublished = atLeastOneReviewPublished(reviews)
  return (
    <LayoutWithMenu title="Completed Reviews">
      <Flex width="100%" flexDirection="column">
        <Title text="COMPLETED REVIEWS" />
        {reviews.length === 0 || !isThereAPublished ? (
          <EmptyCard text="No reviews completed to show" />
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
