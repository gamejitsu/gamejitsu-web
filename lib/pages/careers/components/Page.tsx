import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import {
  Container,
  MainTitle,
  SecondaryTitle,
  Spacer,
  ParagraphText,
  ParagraphTitle
} from "../../../components/UtilsComponents"
import { Footer } from "gamejitsu/components"

const Page: AuthenticatedComponent = () => {
  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - Careers</title>
      </Head>
      <Box px={[4]} pt={[4]}>
        <Box>
          <MainTitle>Careers</MainTitle>
        </Box>
        <Box>
          <ParagraphTitle>Coaches</ParagraphTitle>
          <ParagraphText>
            We are actively looking for coaches for Dota 2, requirements is at least 5000 MMR.
            Please, check more details and write us at contact@gamejitsu.io.
          </ParagraphText>
          <ParagraphTitle>Content Creators</ParagraphTitle>
          <ParagraphText>
            We are actively looking for content creators for Dota 2, requirement is at least 6500
            MMR.
          </ParagraphText>
          <ParagraphTitle>Web Designers</ParagraphTitle>
          <ParagraphText>
            We are actively looking for web designers to work on our website and for creating
            advertisement.
          </ParagraphText>
          <ParagraphTitle>Engineering</ParagraphTitle>
          <ParagraphText>
            There are currently no open positions on the engineering team.
          </ParagraphText>
          <ParagraphTitle>Marketing</ParagraphTitle>
          <ParagraphText>
            There are currently no open positions on the marketing team.
          </ParagraphText>
        </Box>
      </Box>
      <Spacer padding={60} />
      <Footer />
    </Container>
  )
}

Page.skipAuthentication = true

export default Page
