import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import { Container, MainTitle, Spacer } from "../../components/UtilsComponents"
import { TileGuide } from "./components/TileGuide"

const Guides: AuthenticatedComponent = () => {
  return (
    <Container>
      <Box px={[4]} py={[4]}>
        <Box>
          <MainTitle>News</MainTitle>
        </Box>
        <TileGuide
          href={"/guides/the_ultimate_tutorial_for_new_dota2_players"}
          title={"Ultimate tutorial for new Dota 2 Players - 1 / 10"}
          abstract={
            "With the recent Netflix Dota 2 series being a huge hit, I imagined that there aresome new players who want to try out Dota 2 itself but are struggling to do so because Dota 2 is notoriously hard to learn. While Dota 2 does have some new player content available on the web (and Valve is hard at work refurbishing the new player experience... hopefully), however there is a drastic lack of written content."
          }
          thumbnail={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/thumb_compressed_medium.jpg"
          }
          coach={"Storm"}
          pusblish_date={"04/04/2021"}
        />
      </Box>
      <Box px={[4]} py={[4]}>
        <Box>
          <MainTitle>Guides</MainTitle>
        </Box>
        <TileGuide
          href={"/guides/position_5_master_guide"}
          title={"Position 5 master guide"}
          abstract={
            "This guide intends to look more closely at position 5 and show the different ways the role can be played. I'll also provide examples of heroes who fulfill the specific types of play styles each subrole can take. I am hoping lower-ranked players who wish to increase their MMR can use this information to pick the role they are best suited for and veteran players to find new ways to enjoy Dota."
          }
          thumbnail={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/position_5_master_guide/position_5_master_guide_thumb.png"
          }
          coach={"Otomo"}
          pusblish_date={"21/01/2021"}
        />
      </Box>
      <Spacer padding={60} />
      <Footer />
    </Container>
  )
}

Guides.skipAuthentication = true

export { Guides }
