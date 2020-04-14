import React from "react"

import { Layout, Title } from "gamejitsu/components"
import { listModels } from "gamejitsu/api"
import { NextPage } from "next"
import { Review } from "gamejitsu/models"
import { ReviewCard } from "."

interface Props {
  reviews: Review[]
}

const Page: NextPage<Props> = ({ reviews }) => (
  <Layout title="Reviews">
    <Title text="Completed Reviews"/>
    {reviews.map((review) => (
      <ReviewCard key={review.id} review={review} />
    ))}
  </Layout>
)

Page.getInitialProps = async (ctx) => {
  const { data } = await listModels("review", ctx)
  return { reviews: data }
}

export default Page
