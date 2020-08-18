import React, { useContext } from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"
import { Callout } from "@blueprintjs/core"
import queryString from "query-string"

import { UserContext } from "gamejitsu/contexts"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer, Navbar, LinkBold } from "gamejitsu/components"

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
  console.log("window:", window.origin)
  return (
    <Box mt={4}>
      <Navbar />
      <Container alignItems="center" flexDirection="column">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <title>Gamejitsu - Become a Coach</title>
        </Head>
        <TextCard>
          <Box width="900px" mx="auto" my={4} style={{ position: "relative" }}>
            <Flex alignItems="center">
              <Box width="375px">
                <SecondaryTitle>Gamejitsu</SecondaryTitle>
                <MainTitle>Become a Coach</MainTitle>
              </Box>
            </Flex>
            <Box width="900px">
              {user?.hasPublicProfile || !user ? (
                <div />
              ) : (
                <Box mb={4}>
                  <Callout title="Private Steam profile detected" intent="danger">
                    You need to enable the public profile on Steam to be able to sign up as coach.
                    <br />
                    <br />
                    If you are logged in to Steam, you can change your Privacy Settings by
                    navigating to your{" "}
                    <a href="https://steamcommunity.com/my/edit/settings">
                      Profile Privacy Settings Page
                    </a>
                    .
                    <br />
                    <br />
                    Alternatively, you can navigate to the Profile Privacy Settings page manually:
                    <br />
                    <br />
                    1. From your Steam Profile, click the Edit Profile link under your displayed
                    badge.
                    <br />
                    2. Click the My Privacy Settings tab
                    <br />
                    3. Select your privacy state
                    <br />
                    4. Click the Save button
                  </Callout>
                </Box>
              )}
              <ParagraphTitle>Public Profile</ParagraphTitle>
              <ParagraphText>
                Steam public profile is needed to signup as a coach. If there is no "Private Steam
                profile detected" warning alert on this page, it means your profile is public.
              </ParagraphText>
              <ParagraphTitle>Required MMR</ParagraphTitle>
              <ParagraphText>
                If you have an MMR greater or equal than 4k, you are entitle to become a Gamejitsu
                Coach.
              </ParagraphText>
              <ParagraphTitle>Skill level</ParagraphTitle>
              <ParagraphText>
                You will be able to pickup reviews based on you skill level:
                <br />
                <br />
                4k MMR: medium
                <br />
                5k MMR: high, medium
                <br />
                6k MMR: very high, high, medium
                <br />
                7k MMR: pro, very high, high, medium
              </ParagraphText>
              <ParagraphTitle>Sign Up</ParagraphTitle>
              <ParagraphText>
                If you match the required MMR, and you are not already a coach you can sign up to
                become one at the Gamejitsu
              </ParagraphText>
              {user ? (
                <LinkBold href="/coach-signup"> coach sign-up page</LinkBold>
              ) : (
                <Bold href={urlBase + "?" + stringified}>coach sign-up page</Bold>
              )}
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
