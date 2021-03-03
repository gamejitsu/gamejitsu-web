import { Flex, Box } from "rebass"
import { NextPage } from "next"
import React from "react"
import styled from "styled-components"

import { findModel } from "gamejitsu/api"
import { LayoutWithMenuUser } from "gamejitsu/components"
import CheckoutResource, { Checkout } from "gamejitsu/api/resources/checkout"
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
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.96;
  border: 1px solid ${(props) => props.theme.activeColor};
`

const Page: NextPage<Props> = ({ checkout }) => (
  <LayoutWithMenuUser title="Review Request Checkout">
    <Flex width="100%" flexDirection="column">
      <Title>PAYMENT DONE!</Title>
      <CheckoutCard py={5}>
        <Box>
          <CheckoutSVG width="200" height="100" />
        </Box>
        <Box mt={4} p={3}>
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
    </Flex>
  </LayoutWithMenuUser>
)

Page.getInitialProps = async (ctx) => {
  const { data } = await findModel(CheckoutResource, ctx.query.id.toString(), ctx)
  return { checkout: data }
}

export default Page
