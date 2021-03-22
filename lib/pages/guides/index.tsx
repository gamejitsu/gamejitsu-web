import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"
import NextLink from "next/link"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import { Container, MainTitle, SecondaryTitle, Spacer } from "../../components/UtilsComponents"

const Guides: AuthenticatedComponent = () => {
  return (
    <Container>
      <Box px={[4]} pt={[4]}>
        <Box>
          <MainTitle>Guides</MainTitle>
        </Box>
        <NextLink href={"/guides/sample_guide"}>
          <a>Sample guide</a>
        </NextLink>
      </Box>
      <Spacer padding={60} />
      <Footer />
    </Container>
  )
}

Guides.skipAuthentication = true

export { Guides }
