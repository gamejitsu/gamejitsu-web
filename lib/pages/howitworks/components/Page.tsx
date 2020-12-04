import React from "react"
import { Box } from "rebass"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import {
  Container,
  MainTitle,
  SecondaryTitle,
  Spacer,
  ParagraphText,
  ParagraphTitle,
  FlowImage
} from "../../../components/UtilsComponents"
import { Footer, Navbar } from "gamejitsu/components"

const Page: AuthenticatedComponent = () => (
  <Container>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Gamejitsu - How It Works</title>
    </Head>
    <Navbar />
    <Spacer padding={80} />
    <Box px={[4]}>
      <Box>
        <SecondaryTitle>Gamejitsu</SecondaryTitle>
        <MainTitle>How It Works</MainTitle>
      </Box>
      <Box>
        <ParagraphTitle>Improve your game, at your own pace.</ParagraphTitle>
        <ParagraphText>
          Select your game: [ Dota 2 ] [ CS:GO ] [ League of Legends ] [ Fortnite ]
        </ParagraphText>
        <FlowImage url="/images/user-dashboard.png" imageHeight="61" />
        <ParagraphTitle>Why Gamejitsu?</ParagraphTitle>
        <ParagraphText>
          Personalized coaching, for you and you only. Watching gameplays of professional players
          help, but you have your own style you can build on. Let our coach tailor your gameplay for
          you.
        </ParagraphText>
        <ParagraphText>
          Know exactly what your mistakes are and how to improve. Instead of ambiguous comments such
          as “Farm faster” or “Control your recoil”, our coach pinpoints the exact mistake you’ve
          made and how to improve on it.
        </ParagraphText>
        <ParagraphText>
          Get coaching advice accurate for your skill level. Trying to apply a different skill
          level’s playstyle onto your game might do more harm than good, especially if it is a team
          game where your teammates do not cooperate and you have to take carrying the team into
          your own hands.
        </ParagraphText>
        <ParagraphText>
          Eliminating the need to constantly rewatch your own replays. Don’t turn gaming into a
          drag, let our coaches do your homework for you. All you have to do is to keep playing.
          Think of it as hiring a strategic advisor in your gaming career.
        </ParagraphText>
        <ParagraphTitle>Plan your game strategy with Gamejitsu.</ParagraphTitle>
        <FlowImage url="/images/coach-dashboard.png" imageHeight="61" />
      </Box>
    </Box>
    <Spacer padding={80} />
    <Footer />
  </Container>
)

Page.skipAuthentication = true

export default Page
