import React from "react"
import { Flex, Box } from "rebass"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer, Navbar } from "gamejitsu/components"
import {Container, MainTitle, SecondaryTitle, Spacer, ParagraphText, ParagraphTitle} from "../../../components/UtilsComponents"

const Page: AuthenticatedComponent = () => (

  <Container>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Gamejitsu - Customer Reviews</title>
    </Head>
    <Navbar />
    <Spacer padding={80} />
    <Box px={[4]}>
      <Box>
        <SecondaryTitle>Gamejitsu</SecondaryTitle>
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
