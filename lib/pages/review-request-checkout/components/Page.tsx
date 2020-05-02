import React from "react"

import ReviewRequest from "gamejitsu/api/resources/review-request"
import { listModels } from "gamejitsu/api"
import { NextPage } from "next"
import { Layout, Title } from "gamejitsu/components"

interface Props {
}

const Page: NextPage<Props> = () => <Layout title="Review Request Checkout">
  <Title text="Checkout"/>
    Thanks for the payment
</Layout>

Page.getInitialProps = async (ctx) => {
  const { data } = await listModels(ReviewRequest, ctx)
  const urlId = ctx.query.id
  return {}
}

export default Page
