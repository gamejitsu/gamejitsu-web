import React, { useContext } from "react"
import { UserContext } from "gamejitsu/contexts"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import queryString from "query-string"

import { Footer, LinkBold, Navbar } from "gamejitsu/components"

interface SecondaryTitleProps {
  color?: string
}

const Container = styled(Flex)`
  background-color: transparent;
`

const SecondaryTitle = styled.h2<SecondaryTitleProps>`
  font-family: "Japanese 3017";
  font-weight: normal;
  letter-spacing: 3px;
  font-size: 21px;
  color: ${(props) => props.color || props.theme.primaryColor};
`

const MainTitle = styled.h1`
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`

const ParagraphText = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  line-height: 20px;
`

const TextCard = styled(Box)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-grow: 1;
  z-index: 1;
`

const ParagraphTitle = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
`

const Bold = styled.a`
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
  }
`

TextCard.defaultProps = {
  my: 4
}

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
    <Box mt={4}>
      <Navbar />
      <Container alignItems="center" flexDirection="column">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <title>Gamejitsu - Careers</title>
        </Head>
        <TextCard>
          <Box width="900px" mx="auto" my={4} style={{ position: "relative" }}>
            <Flex alignItems="center">
              <Box width="375px">
                <SecondaryTitle>Gamejitsu</SecondaryTitle>
                <MainTitle>Careers</MainTitle>
              </Box>
            </Flex>
            <Box width="900px">
            <ParagraphTitle>Coaches</ParagraphTitle>
              <ParagraphText>We are actively looking for coaches for Dota 2, requirements is at least 5000 MMR. Please, check more details and register as a coach if interested via our 
              {user ? (
                <LinkBold href="/coach-signup"> coach sign-up page</LinkBold>
              ) : (
                <Bold href={urlBase + "?" + stringified}>coach sign-up page</Bold>
              )}.
              </ParagraphText>
              <ParagraphTitle>Content Creators</ParagraphTitle>
              <ParagraphText>We are actively looking for content creators for Dota 2, requirement is at least 6500 MMR.</ParagraphText>
              <ParagraphTitle>Web Designers</ParagraphTitle>
              <ParagraphText>We are actively looking for web designers to work on our website and for creating advertisment.</ParagraphText>
              <ParagraphTitle>Engineering</ParagraphTitle>
              <ParagraphText>There are currently no open positions on the engineering team.</ParagraphText>
              <ParagraphTitle>Marketing</ParagraphTitle>
              <ParagraphText>There are currently no open positions on the marketing team.</ParagraphText>
            </Box>
          </Box>
        </TextCard>
        <Footer />
      </Container>
    </Box>
  )
}

Page.skipAuthentication = true

export default Page
