import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"

import { AuthenticatedComponent } from "gamejitsu/interfaces"

import { Footer, Navbar } from "gamejitsu/components"

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

const ChapterTitle = styled.h1`
  color: white;
  font-size: 27px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`

const ParagraphTitle = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
`

TextCard.defaultProps = {
  my: 4
}

const Page: AuthenticatedComponent = () => (
  <Box mt={4}>
    <Navbar />
    <Container alignItems="center" flexDirection="column">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - FAQ</title>
      </Head>
      <TextCard>
        <Box width="900px" mx="auto" my={4} style={{ position: "relative" }}>
          <Flex alignItems="center">
            <Box width="375px">
              <SecondaryTitle>Gamejitsu</SecondaryTitle>
              <MainTitle>FAQ</MainTitle>
            </Box>
          </Flex>
          <Box width="900px">
            <ParagraphText>
              Below you can find common questions that we get asked a lot about our service, our
              payment system and other service-related inquiries. Please feel free to email
              support@gamejitsu.gg at any time, if you have a question regarding our service and
              your account, or anything else that we can help you with.
              <ChapterTitle>My Account</ChapterTitle>
              <ParagraphTitle>Why can't I log in?</ParagraphTitle>
              If you have problems loggin in, please make sure that you have a valid Steam account.
              Log in is possible only via Steam. There is no need for a password and the email used
              is the one related to your Steam account.
              <ParagraphTitle>Can I change my email?</ParagraphTitle>
              You can't change your email from Gamejitsu, you have to change your email from Steam.
              <ParagraphTitle>Can I get my old games reviewed?</ParagraphTitle>
              Steam keeps replays just for 2 weeks, so you will be able to get your replays reviewed that do not go over this time range.
              <ChapterTitle>Payment</ChapterTitle>
              <ParagraphTitle>What are the possible Gamejitsu prices?</ParagraphTitle>
              At the moment, 4 prices are available based on the skill level of the coach:
              <br />
              <br />
              1. High (5k MMR) - 10$ per review
              <br />
              2. Experienced (6k MMR) - 15$ per review
              <br />
              3. Pro (7k MMR) - 25$ per review
              <br />
              4. Hero (8k MMR) - (30$ or custom price) per review
            </ParagraphText>
          </Box>
        </Box>
      </TextCard>

      <Footer />
    </Container>
  </Box>
)

Page.skipAuthentication = true

export default Page
