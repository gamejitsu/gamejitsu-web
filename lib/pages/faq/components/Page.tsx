import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer, Navbar } from "gamejitsu/components"
import {
  Container,
  MainTitle,
  SecondaryTitle,
  Spacer,
  ParagraphText,
  ParagraphTitle
} from "../../../components/UtilsComponents"

const ChapterTitle = styled.h3`
  color: white;
  font-size: 27px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Page: AuthenticatedComponent = () => (
  <Container>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Gamejitsu - FAQ</title>
    </Head>
    <Navbar />
<<<<<<< HEAD
    <Spacer padding={80} />
    <Box px={[4]}>
      <Box>
        <SecondaryTitle>Gamejitsu</SecondaryTitle>
        <MainTitle>FAQ</MainTitle>
      </Box>
      <ParagraphText>
        Below you can find common questions that we get asked a lot about our service, our payment
        system and other service-related inquiries. Please feel free to email support@gamejitsu.gg
        at any time, if you have a question regarding our service and your account, or anything else
        that we can help you with.
      </ParagraphText>
      <ChapterTitle>My Account</ChapterTitle>
      <ParagraphTitle>Why can't I log in?</ParagraphTitle>
      <ParagraphText>
        If you have problems loggin in, please make sure that you have a valid Steam account. Log in
        is possible only via Steam. There is no need for a password and the email used is the one
        related to your Steam account.
      </ParagraphText>
      <ParagraphTitle>Can I change my email?</ParagraphTitle>
      <ParagraphText>
        You can't change your email from Gamejitsu, you have to change your email from Steam.
      </ParagraphText>
      <ChapterTitle>Payment</ChapterTitle>
      <ParagraphTitle>What are the possible Gamejitsu prices?</ParagraphTitle>
      <ParagraphText>
        At the moment, 4 prices are available based on the skill level of the coach:
        <br />
        <br />
        1. High (5k MMR) - 10$ per review
        <br />
        2. Experienced (6k MMR) - 17.5$ per review
        <br />
        3. Pro (7k MMR) - 25$ per review
        <br />
        4. Hero (8k MMR) - 30$ per review
      </ParagraphText>
    </Box>
    <Spacer padding={80} />
    <Footer />
  </Container>
=======
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
>>>>>>> 7d4e232c63bc3d6fab9c3817178b76fe48764834
)

Page.skipAuthentication = true

export default Page
