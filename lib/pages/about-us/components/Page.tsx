import React from "react"
import { Box } from "rebass/styled-components"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer, LinkMail } from "gamejitsu/components"
import {
  Container,
  MainTitle,
  Spacer,
  ParagraphText,
  ParagraphTitle
} from "../../../components/UtilsComponents"

const Page: AuthenticatedComponent = () => {
  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - About Us</title>
      </Head>
      <Box px={[4]} pt={[4]}>
        <Box>
          <MainTitle>About Us</MainTitle>
        </Box>
        <Box>
          <ParagraphText>
            Gamejitsu is an idea hatched to fill the current gap in the e-sport coaching industry in
            terms of customizability.
          </ParagraphText>
          <ParagraphTitle>Goal</ParagraphTitle>
          <ParagraphText>
            As most coaches are focusing on video / live coaching, we realized that the only
            possible way currently to learn and improve at your own tempo is to repeatedly watch
            your own replays, and that is both boring and difficult because you might not realise
            your own mistakes. Live coaching might not be suitable for all. Playing at a high level
            requires a good player to focus on multiple things at a time, and a coach talking
            alongside is definitely not helping.
          </ParagraphText>
          <ParagraphTitle>What we do</ParagraphTitle>
          <ParagraphText>
            Enter Gamejitsu, where our coach does your homework for you. We review your replays, we
            list out your mistakes and the ways to correct and improve them. Consider us a platform
            for personalized coaching. Watching pro games help, but only knowing your mistakes will
            you get better on an astronomical scale.
          </ParagraphText>
          <ParagraphTitle>Philosophy</ParagraphTitle>
          <ParagraphText>
            Know thyself and thy adversary to win a hundred battles. Gaming is the same thing.
          </ParagraphText>
          <ParagraphTitle>Share the mission</ParagraphTitle>
          <ParagraphText>
            Interested in joining us? Check out our career openings to see if we are currently
            looking for talents!
          </ParagraphText>
          <ParagraphTitle>Contacts</ParagraphTitle>
          <ParagraphText>
            Want to learn more about our mission? Feel free to contact us at:{" "}
            <LinkMail mailto="support@gamejitsu.io">support@gamejitsu.io</LinkMail>
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
