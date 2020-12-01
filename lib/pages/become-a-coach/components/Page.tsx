import React, { useContext } from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"
import { Callout } from "@blueprintjs/core"
import queryString from "query-string"
import { UserContext } from "gamejitsu/contexts"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer, Navbar, LinkBold } from "gamejitsu/components"
import {
  Container,
  MainTitle,
  SecondaryTitle,
  Spacer,
  ParagraphText,
  ParagraphTitle
} from "../../../components/UtilsComponents"

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
        <title>Gamejitsu - Become a Coach</title>
      </Head>
      <Navbar />
      <Spacer padding={80} />
      <Box px={[4]}>
        <Box>
          <SecondaryTitle>Gamejitsu</SecondaryTitle>
          <MainTitle>Become a Coach</MainTitle>
        </Box>
        <Box>
          {user?.hasPublicProfile || !user ? (
            <div />
          ) : (
            <Box>
              <Callout title="Private Steam profile detected" intent="danger">
                You need to enable the public profile on Steam to be able to sign up as coach.
                <br />
                <br />
                If you are logged in to Steam, you can change your Privacy Settings by navigating to
                your{" "}
                <a href="https://steamcommunity.com/my/edit/settings">
                  Profile Privacy Settings Page
                </a>
                .
                <br />
                <br />
                Alternatively, you can navigate to the Profile Privacy Settings page manually:
                <br />
                <br />
                1. From your Steam Profile, click the Edit Profile link under your displayed badge.
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
            If you match the required MMR, and you are not already a coach you can sign up to become
            one at the Gamejitsu
          </ParagraphText>
          {user ? (
            <LinkBold href="/coach-signup"> coach sign-up page</LinkBold>
          ) : (
            <Bold href={urlBase + "?" + stringified}>coach sign-up page</Bold>
          )}
        </Box>
      </Box>
      <Spacer padding={80} />
      <Footer />
    </Container>
  )
}

Page.skipAuthentication = true

export default Page
