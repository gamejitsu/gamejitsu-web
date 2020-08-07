import React, { useContext } from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"
import { UserContext } from "gamejitsu/contexts"

import { AuthenticatedComponent } from "gamejitsu/interfaces"

import { Footer, Navbar, LinkDark, LinkBold } from "gamejitsu/components"
import { Callout } from "@blueprintjs/core"

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

TextCard.defaultProps = {
  my: 4
}

const getCurrentUser = () => useContext(UserContext)


const Page: AuthenticatedComponent = () => {
  const user = getCurrentUser()
  return <Box mt={4}>
    <Navbar />
    <Container alignItems="center" flexDirection="column">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - Become a Coach</title>
      </Head>
      {!user?.hasPublicProfile ? (
          <div />
        ) : (
          <Box mb={4}>
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
      <TextCard>
        <Box width="900px" mx="auto" my={4} style={{ position: "relative" }}>
          <Flex alignItems="center">
            <Box width="375px">
              <SecondaryTitle>Gamejitsu</SecondaryTitle>
              <MainTitle>Become a Coach</MainTitle>
            </Box>
          </Flex>
          <Box width="900px">
            <ParagraphText>
              <ParagraphTitle>Required MMR</ParagraphTitle>
              If you have an MMR greater or equal than 4k, you are entitle to become a Gamejitsu
              Coach.
              <ParagraphTitle>Skill level</ParagraphTitle>
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
              <ParagraphTitle>Sign Up</ParagraphTitle>
              If you match the required MMR, and you are not already a coach you can sign up to
              become one at the Gamejitsu
              <LinkBold href="/coach-signup"> coach sign-up page</LinkBold>.
            </ParagraphText>
          </Box>
        </Box>
      </TextCard>

      <Footer />
    </Container>
  </Box>
}

Page.skipAuthentication = true

export default Page
