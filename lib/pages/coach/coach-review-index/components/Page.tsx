import React from "react"

import { CoachReviewCard } from "."
import { Layout } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import { NextPageContext } from "next"
import { Review } from "gamejitsu/models"

const getReviews = async (ctx: NextPageContext) => {
  const response = await listModels("review")
  return response.data
}

interface Props {
  reviews: Review[]
}

class CoachReviewIndex extends React.Component<Props> {
  static getInitialProps = async (ctx: NextPageContext) => {
    const reviews = await getReviews(ctx)
    return { reviews }
  }

  render() {
    return (
      <Layout title="Reviews">
        Reviews
        {this.props.reviews.map((review) => {
          return <CoachReviewCard key={review.id} review={review} />
        })}
        Completed Reviews
      </Layout>
    )
  }
}

export default CoachReviewIndex
