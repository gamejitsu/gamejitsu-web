import React from "react"

import { EmptyCard, LayoutWithMenuUser, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import { NextPage } from "next"
import ReviewResource from "gamejitsu/api/resources/review"
import { ReviewCard, DeletedReviewCard } from "."
import { Flex } from "rebass"
import { decorateReviews, DecoratedReview } from "gamejitsu/models/review"

interface Props {
  reviews: DecoratedReview[]
}

const isTheReviewListEmpty = (reviews: DecoratedReview[]) => {
  let isTheReviewListEmpty = true
  reviews.map((review) => {
    // If the review is not deleted and not published means it is showed already as review request to the user
    if (!review.isDeleted && !review.isPublished) {
    } else {
      // If at least one review is published the review page is not empty
      if (review.isPublished) {
        isTheReviewListEmpty = false
      }
      // If at least one review is deleted the review page is not empty
      if (review.isDeleted) {
        isTheReviewListEmpty = false
      }
    }
  })
  return isTheReviewListEmpty
}

const Page: NextPage<Props> = ({ reviews }) => (
  <LayoutWithMenuUser title="Reviews">
    <Flex width="100%" flexDirection="column">
      <Title text="COMPLETED REVIEWS" />
      {reviews.length === 0 || isTheReviewListEmpty(reviews) ? (
        <EmptyCard text="No reviews available" />
      ) : (
        reviews.map((review) => {
          if (review !== undefined && review.isPublished)
            return <ReviewCard key={review.id} review={review} />
          if (review !== undefined && review.isDeleted)
            return <DeletedReviewCard key={review.id} review={review} />
        })
      )}
    </Flex>
  </LayoutWithMenuUser>
)

Page.getInitialProps = async (ctx) => {
  const response = await listModels(ReviewResource, ctx)
  const reviews: DecoratedReview[] = decorateReviews(response.data, response.included)
  return { reviews }
}

export default Page
