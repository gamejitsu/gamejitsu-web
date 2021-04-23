import Head from "next/head"
import React from "react"
import { Box, Flex } from "rebass/styled-components"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import styled from "styled-components"
import { Container, MainTitle, Spacer } from "../../components/UtilsComponents"
import Link from "next/link"
import {
  GuideImage,
  GuideHeading3,
  GuideHeading2,
  GuideHeading1,
  GuideUpdate,
  GuideParagraph
} from "./components/GuideElements"
import { WhatsNext } from "./components/WhatsNext"
import GuideCarousel from "./components/GuideCarousel"

const GuideBanner = styled.img`
  width: 100%;
  height: auto;
`
const ScaffoldingGuide: AuthenticatedComponent = () => {
  return (
    <>
      <Head>
        <title>{`Gamejitsu - ScaffoldingGuide`}</title>
      </Head>
      <Container>
        <Box px={[4]} pt={[4]}>
          <a id="start"></a>
          <Box display={["none", "none", "block"]}>
            <GuideBanner
              src={
                "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7k_mmr_phoenix_position_5_guide/005_bannerwithtext.jpg"
              }
            />
          </Box>
          <Box>
            <MainTitle>Main title</MainTitle>
          </Box>
          <GuideHeading2>Headings 2</GuideHeading2>
          <GuideParagraph>
            <ul>
              <li>
                Don't be afraid to Egg. Sometimes you just have to go in and die for your team to
                actually play the game. Try to position your Egg in a way to bait the enemy closer
                to your team instead of trying to Egg to ensure it doesn’t break.
              </li>
            </ul>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch01"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c01_001_pickdk.jpg", "lowq_c01_002_pickdk.jpg"]}
          />
        </Box>
        <Flex>
          <Box pr={[3]}>
            <Link href="/guides">
              <div style={{ fontWeight: "bold", cursor: "pointer" }}>&larr;Back</div>
            </Link>
          </Box>
          <Box>
            <Link href="#start">
              <div style={{ fontWeight: "bold", cursor: "pointer" }}>&uarr;Top</div>
            </Link>
          </Box>
        </Flex>
        <WhatsNext />
        <Spacer padding={60} />
        <Footer />
      </Container>
    </>
  )
}

ScaffoldingGuide.skipAuthentication = true

export { ScaffoldingGuide }
