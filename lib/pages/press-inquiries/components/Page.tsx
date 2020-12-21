import React from "react"
import { Box } from "rebass"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer, Navbar, LinkMailBold } from "gamejitsu/components"
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
      <title>Gamejitsu - Press Inquiries</title>
    </Head>
    <Navbar />
    <Spacer padding={80} />
    <Box px={[4]}>
      <Box>
        <SecondaryTitle>Gamejitsu</SecondaryTitle>
        <MainTitle>Press Inquiries</MainTitle>
      </Box>
      <Box>
        <ParagraphTitle>Who we are</ParagraphTitle>
        <ParagraphText>
          Gamejitsu is an esport and entertainment software company founded in 2019 and based in
          London, UK. The company's debut product, a learning platform for Dota 2 players, was
          launched in August 2020. Today, Valve is composed by its founders and software engineers.
          For press inquiries,{" "}
          <LinkMailBold href="mailto:admin@gamejitsu.gg">contact admins</LinkMailBold>.
        </ParagraphText>
      </Box>
    </Box>
    <Spacer padding={80} />
    <Footer />
  </Container>
)

Page.skipAuthentication = true

export default Page
