import React, { useContext } from "react"
import { Box } from "rebass/styled-components"
import Head from "next/head"
import { Callout } from "@blueprintjs/core"
import { UserContext } from "gamejitsu/contexts"
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

const getCurrentUser = () => useContext(UserContext)

const Page: AuthenticatedComponent = () => {
  const user = getCurrentUser()

  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - Become a Coach</title>
      </Head>
      <Box px={[4]} pt={[4]}>
        <Box>
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
            If you have an MMR greater or equal than 5k, you are entitle to become a Gamejitsu
            Coach.
          </ParagraphText>
          <ParagraphTitle>Skill level</ParagraphTitle>
          <ParagraphText>
            You will be able to pickup reviews based on you skill level:
            <br />
            <br />
            5k MMR: high
            <br />
            6k MMR: very high, high
            <br />
            7k MMR: pro, very high, high
            <br />
            8k MMR: hero, pro, very high, high
          </ParagraphText>
          <ParagraphTitle>Sign Up</ParagraphTitle>
          <ParagraphText>
            If you match the required MMR, and you are not already a coach you can sign up to become
            one at the Gamejitsu.
          </ParagraphText>
          <ParagraphText>
            Email us at <LinkMail mailto="support@gamejitsu.io">support@gamejitsu.io</LinkMail>
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
