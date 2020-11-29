import React from "react"
import { Flex, Box } from "rebass"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer, Navbar } from "gamejitsu/components"
import {Container, MainTitle, SecondaryTitle, Spacer, ParagraphText} from "../../../components/UtilsComponents"

const Page: AuthenticatedComponent = () => {
  return (

    <Container>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - About Us</title>
      </Head>
      <Navbar />
      <Spacer padding={80} />
      <Box px={[4]}>
        <Box>
          <SecondaryTitle>Gamejitsu</SecondaryTitle>
          <MainTitle>About Us</MainTitle>
        </Box>
        <Box>
          <ParagraphText>
            The Gamejitsu project started in july 2019 from a group of gamers and software
            engineers.
          </ParagraphText>
        </Box>
      </Box>
      <Spacer padding={80} />
      <Footer />
    </Container>
  )
}

Page.skipAuthentication = true

export default Page
