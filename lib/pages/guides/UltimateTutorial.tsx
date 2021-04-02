import React from "react"
import { Box } from "rebass/styled-components"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import { Container, MainTitle, Spacer } from "../../components/UtilsComponents"
import {
  GuideImage,
  GuideHeading3,
  GuideHeading2,
  GuideHeading1,
  GuideUpdate,
  GuideParagraph
} from "./components/GuideElements"

const UltimateTutorial: AuthenticatedComponent = () => {
  return (
    <Container>
      <Box px={[4]} pt={[4]}>
        <Box>
          <MainTitle>The Ultimate tutorial for Dota 2 new players</MainTitle>
        </Box>
      </Box>
      <Spacer padding={60} />
      <Footer />
    </Container>
  )
}

UltimateTutorial.skipAuthentication = true

export { UltimateTutorial }
