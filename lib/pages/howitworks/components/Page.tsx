import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"

import { AuthenticatedComponent } from "gamejitsu/interfaces"

import { Footer, Navbar, LinkMailBold } from "gamejitsu/components"

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

const Page: AuthenticatedComponent = () => (
  <Box mt={4}>
    <Navbar />
    <Container alignItems="center" flexDirection="column">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - How It Works</title>
      </Head>
      <TextCard>
        <Box width="900px" mx="auto" my={4} style={{ position: "relative" }}>
          <Flex alignItems="center">
            <Box width="375px">
              <SecondaryTitle>Gamejitsu</SecondaryTitle>
              <MainTitle>How It Works</MainTitle>
            </Box>
          </Flex>
          <Box width="900px">
            <ParagraphTitle>Improve your game, at your own pace.</ParagraphTitle>

            <ParagraphText>
              Select your game: [ Dota 2 ] [ CS:GO ] [ League of Legends ] [ Fortnite ]
            </ParagraphText>

            <ParagraphTitle>Why Gamejitsu?</ParagraphTitle>
            <ParagraphText>
              Personalized coaching, for you and you only. Watching gameplays of professional
              players help, but you have your own style you can build on. Let our coach tailor your
              gameplay for you.
            </ParagraphText>
            <ParagraphText>
              Know exactly what your mistakes are and how to improve. Instead of ambiguous comments
              such as “Farm faster” or “Control your recoil”, our coach pinpoints the exact mistake
              you’ve made and how to improve on it.
            </ParagraphText>
            <ParagraphText>
              Get coaching advice accurate for your skill level. Trying to apply a different skill
              level’s playstyle onto your game might do more harm than good, especially if it is a
              team game where your teammates do not cooperate and you have to take carrying the team
              into your own hands.
            </ParagraphText>
            <ParagraphText>
              Eliminating the need to constantly rewatch your own replays. Don’t turn gaming into a
              drag, let our coaches do your homework for you. All you have to do is to keep playing.
              Think of it as hiring a strategic advisor in your gaming career.
            </ParagraphText>
            <ParagraphTitle>Plan your game strategy with Gamejitsu.</ParagraphTitle>
          </Box>
        </Box>
      </TextCard>

      <Footer />
    </Container>
  </Box>
)

Page.skipAuthentication = true

export default Page
