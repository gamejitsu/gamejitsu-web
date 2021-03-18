import React from "react"
import { Flex, Box } from "rebass/styled-components"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import {
  Container,
  MainTitle,
  SecondaryTitle,
  Spacer,
  ParagraphText,
  ParagraphTitle
} from "../../../components/UtilsComponents"

const Page: AuthenticatedComponent = () => (
  <Container>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Gamejitsu - Customer Reviews</title>
    </Head>
    <Box px={[4]} pt={[4]}>
      <Box>
        <MainTitle>Customer Reviews</MainTitle>
      </Box>
      <Box>
        <ParagraphTitle>Work in progress...</ParagraphTitle>
        <ParagraphText>Our customer reviews are coming...</ParagraphText>
      </Box>
    </Box>
    <Spacer padding={80} />
    <Footer />
  </Container>
)

Page.skipAuthentication = true

export default Page
