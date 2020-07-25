import React from "react"
import { NextPage } from "next"
import styled from "styled-components"
import { Flex, Box } from "rebass"

import CheckoutResource, { Checkout } from "gamejitsu/api/resources/checkout"
import { LayoutWithMenuUser } from "gamejitsu/components"
import { findModel } from "gamejitsu/api"
import CheckoutSVG from "../../../../svgs/checkout.svg"

interface Props {
  checkout: Checkout
}

const Title = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`

const CheckoutCard = styled(Flex)`
  witdh: 100%;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Page: NextPage<Props> = ({ checkout }) => (
  <LayoutWithMenuUser title="Review Request Checkout">
    <Title>PAYMENT DONE!</Title>
    <CheckoutCard height="100%">
      <Box>
        <CheckoutSVG width="200" height="100" />
      </Box>
      <Box mt={4}>
        {" "}
        Thanks, the payment successfully went through!
        <br />
        <br />
        We will notify you as soon as the review is completed by a {checkout.skillLevel} level
        coach. <br />
        It will take approximately 24h.
        <br />
      </Box>
    </CheckoutCard>
  </LayoutWithMenuUser>
)

Page.getInitialProps = async (ctx) => {
  const { data } = await findModel(CheckoutResource, ctx.query.id.toString(), ctx)
  return { checkout: data }
}

export default Page
