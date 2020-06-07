import React from "react"
import CheckoutResource, { Checkout } from "gamejitsu/api/resources/checkout"

import { findModel } from "gamejitsu/api"
import { NextPage } from "next"
import { Layout, Title } from "gamejitsu/components"

interface Props {
  checkout: Checkout
}

const Page: NextPage<Props> = ({ checkout }) => (
  <Layout title="Review Request Checkout">
    <Title text="Checkout" />
    Thanks for the payment
    {checkout.comment}
    {checkout.replayId}
    {checkout.skillLevel}
  </Layout>
)

Page.getInitialProps = async (ctx) => {
  const { data } = await findModel(CheckoutResource, ctx.query.id.toString(), ctx)
  console.log(data)
  return { checkout: data }
}

export default Page
