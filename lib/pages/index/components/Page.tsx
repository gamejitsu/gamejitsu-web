import React from "react"
import styled from "styled-components"

import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Navbar } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"

const mainLogo = "/images/gamejitsu-mascotte.svg"

const Container = styled(Flex)`
  background-color: transparent;
  top: 0;
  left: 0;
  right 0;
  padding: 0;
`

const SecondaryTitle = styled.h2`
  font-family: "Japanese 3017";
  font-weight: normal;
  letter-spacing: 3px;
  font-size: 21px;
  color: ${(props) => props.theme.primaryColor};
`

const MainTitle = styled.h1`
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-top: 13px;
  margin-bottom: 13px;
`

const ParagraphText = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  line-height: 20px;
`

const Background = styled.div`
top: 0;
left: 0;
right 0;
bottom: 0;
position: absolute;
background-image: url('/images/background-hero-unit.jpg');
background-position: center;
background-size: cover;
opacity: 0.3;
`

const HeroUnitParent = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
`

const HeroUnit = styled(Flex)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-grow: 1;
  position: absolute;  
  height: 600px;
  z-index: 1;
`

const GamesBar = styled(Flex)`
  background-color: #343030;
  top: 0;
  left: 0;
  right 0;
`

const GamesCard = styled(Flex)`
  background-image: url('/images/background-hero-unit.jpg');
  background-size: cover;
`

const Image = styled.img`
  width: 510px;
  position: absolute;
  bottom: -65px;
  right: 0px;
`

const TextCard = styled.div`
top: 0;
bottom: 0;
left: 0;
right: 0;
flex-grow: 1;
height: 600px;
z-index: 1;
`

const Page: AuthenticatedComponent = () => (
  <div>
    <Navbar />
    <Container alignItems="center" flexWrap='wrap'>
      <HeroUnitParent>
        <HeroUnit>
          <Box width="900px" mx="auto" style={{ position: "relative" }}>
            <Flex alignItems="center" height="100%">
              <Box width="375px">
                <SecondaryTitle>A coaching Platform</SecondaryTitle>
                <MainTitle>Hire a Pro Gaming Coach From 10$</MainTitle>
                <ParagraphText>Browse through hundreds of gaming coaches</ParagraphText>
                <ParagraphText>who will help you improve your skills</ParagraphText>
              </Box>
            </Flex>
            <Image src={mainLogo} />
          </Box>
        </HeroUnit>
        <Background />
      </HeroUnitParent>

      <GamesBar py={3} px={4} width={1}>
        test
      </GamesBar>

      <TextCard>
        <Box width="900px" mx="auto" my={6} style={{ position: "relative" }}>
          <Flex alignItems="center">
            <Box width="375px">
              <SecondaryTitle>Top Notch Platform</SecondaryTitle>
              <MainTitle>Welcome to the GameJitsu</MainTitle>
            </Box>
            <Box width="600px">
              <ParagraphText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</ParagraphText>
              <ParagraphText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</ParagraphText>
            </Box>
          </Flex>
        </Box>
      </TextCard>

      <GamesCard width={1} my={2} height="600px">
        <Box width={1} px={4} py={4}>
          <SecondaryTitle>Games We Support</SecondaryTitle>
          <MainTitle>Become a Legend</MainTitle>
        </Box>
      </GamesCard>
    </Container>
  </div>
)

Page.skipAuthentication = true

export default Page
