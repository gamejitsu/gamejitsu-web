import React from "react"
import { Box } from "rebass/styled-components"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer, LinkMail } from "gamejitsu/components"
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
    <Box px={[4]} pt={[4]}>
      <Box>
        <MainTitle>Press Inquiries</MainTitle>
      </Box>
      <Box>
        <ParagraphTitle>Who we are</ParagraphTitle>
        <ParagraphText>
          Gamejitsu is an e-sport and entertainment software company founded in 2019 and based in
          London, UK. The company's debut product, a learning platform for Dota 2 players, was
          launched in March 2021. Today, Gamejitsu is composed by its founders and software
          engineers.
        </ParagraphText>
        <br />
        <div>
          For press inquiries <LinkMail mailto="admin@gamejitsu.gg">contact admins</LinkMail>.
        </div>
      </Box>
    </Box>
    <Spacer padding={60} />
    <Footer />
  </Container>
)

Page.skipAuthentication = true

export default Page
