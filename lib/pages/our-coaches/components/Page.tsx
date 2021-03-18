import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import { coachData } from "../../../../public/coachData"
import CoachCard from "./CoachCard"
import { Container, MainTitle, SecondaryTitle, Spacer } from "../../../components/UtilsComponents"

interface Coach {
  id: number
  name: string
  username: string
  reviewsStars: number
  description: string
  mmr: number
  roles: string[]
  achievements: string[]
  image?: string
  game: string
}

const Page: AuthenticatedComponent = () => (
  <Container>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Gamejitsu - Our Coaches</title>
    </Head>
    <Box px={[4]} pt={[4]}>
      <Box>
        <MainTitle>Our Coaches</MainTitle>
      </Box>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {coachData.length === 0 ? (
          <div />
        ) : (
          coachData.map((coach: Coach) => {
            return <CoachCard key={coach.id} coach={coach} />
          })
        )}
      </Flex>
    </Box>
    <Spacer padding={60} />
    <Footer />
  </Container>
)

Page.skipAuthentication = true

export default Page
