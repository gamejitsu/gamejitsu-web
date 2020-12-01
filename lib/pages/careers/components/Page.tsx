import React, { useContext } from "react"
import { UserContext } from "gamejitsu/contexts"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import queryString from "query-string"
import {
  Container,
  MainTitle,
  SecondaryTitle,
  Spacer,
  ParagraphText,
  ParagraphTitle
} from "../../../components/UtilsComponents"
import { Footer, LinkBold, Navbar } from "gamejitsu/components"

const Bold = styled.a`
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
  }
`

const getCurrentUser = () => useContext(UserContext)

const Page: AuthenticatedComponent = () => {
  const user = getCurrentUser()
  const urlBase = "https://steamcommunity.com/openid/login"

  const urlQuery = {
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.mode": "checkid_setup",
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.realm": window.origin + "/auth?redirect=/coach-signup",
    "openid.return_to": window.origin + "/auth?redirect=/coach-signup"
  }

  const stringified = queryString.stringify(urlQuery)

  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - Careers</title>
      </Head>
      <Navbar />
      <Spacer padding={80} />
      <Box px={[4]}>
        <Box>
          <SecondaryTitle>Gamejitsu</SecondaryTitle>
          <MainTitle>Careers</MainTitle>
        </Box>
        <Box>
          <ParagraphTitle>Coaches</ParagraphTitle>
          <ParagraphText>
            We are actively looking for coaches for Dota 2, requirements is at least 5000 MMR.
            Please, check more details and register as a coach if interested via our
            {user ? (
              <LinkBold href="/coach-signup"> coach sign-up page</LinkBold>
            ) : (
              <Bold href={urlBase + "?" + stringified}> coach sign-up page</Bold>
            )}
            .
          </ParagraphText>
          <ParagraphTitle>Content Creators</ParagraphTitle>
          <ParagraphText>
            We are actively looking for content creators for Dota 2, requirement is at least 6500
            MMR.
          </ParagraphText>
          <ParagraphTitle>Web Designers</ParagraphTitle>
          <ParagraphText>
            We are actively looking for web designers to work on our website and for creating
            advertisment.
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
      <Spacer padding={80} />
      <Footer />
    </Container>
  )
}

Page.skipAuthentication = true

export default Page
