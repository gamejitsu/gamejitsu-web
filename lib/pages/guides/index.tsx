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
      <Box px={[4]} pt={[4]}>
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
          pusblish_date={"10/21/2021"}
        />
      </Box>
      <Spacer padding={60} />
      <Footer />
    </Container>
  )
}

Guides.skipAuthentication = true

export { Guides }
