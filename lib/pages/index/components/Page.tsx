import React, { FunctionComponent } from "react"
import GameContainerSVG from '../../../../svgs/game-container-red.svg'
import ExternalCircleSVG from '../../../../svgs/steps-external-circle.svg'
import InternalCircleSVG from '../../../../svgs/steps-circle.svg'

import styled from "styled-components"

import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Navbar, ButtonIcon } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"

const mainLogo = "/images/gamejitsu-mascotte.svg"
const dota2Logo = "/images/dota2-logo.png"
const csgoLogo = "/images/csgo-logo.png"
const lolLogo = "/images/lol-logo.png"
const overwatchLogo = "/images/overwatch-logo.png"
const fortniteLogo = "/images/fortnite-logo.png"


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
  margin-top: 20px;
  margin-bottom: 20px;
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
  background-color: ${(props) => props.theme.lightBackgroundColor};
  top: 0;
  left: 0;
  right 0;
  height: 85px;
`

const GamesCard = styled(Flex)`
  background-image: url('/images/background-hero-unit.jpg');
  background-size: cover;
  top: 0;
  left: 0;
  right 0;
  height: 800px;
  width: 100%;
  position: relative;
`

const MainFlow = styled(Flex)`
  top: 0;
  left: 0;
  right 0;
  height: 800px;
  width: 100%;
  position: relative;
`

const MainImage = styled.img`
  width: 510px;
  position: absolute;
  bottom: -65px;
  right: 0px;
`

const GamesBarImage = styled.img`
  width: 190px;
  margin-right: 40px;
  margin-left: 40px;
  position: absolute;
`

const TextCard = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-grow: 1;
  height: 464px;
  z-index: 1;
`

const OutsideCircle = styled.div`
    position: relative;
    background: transparent;
    border: 2px solid #ccc;
    border-radius: 50%;
    padding: 2px;
    height: 50px;
    width: 50px;
    box-sizing: content-box;
`

const InsideCircle = styled.div`
    background: #ccc;
    border-radius: 50%;
    line-height: 50px;
    width: 100%;
    vertical-align: middle;
    text-align: center;
`

const NumberCircle = styled.div`
    background: #ccc;
    border-radius: 50%;
    line-height: 50px;
    width: 50px;
    vertical-align: middle;
    text-align: center;
    margin-bottom: 100px;
`

const Line = styled.div`
  background: #ccc;
  width: 1px;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -1px;
`

const IconCircle: FunctionComponent = ({ children }) =>
  <OutsideCircle>
    <InsideCircle>
      {children}
    </InsideCircle>
  </OutsideCircle>

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
            <MainImage src={mainLogo} />
          </Box>
        </HeroUnit>
        <Background />
      </HeroUnitParent>

      <GamesBar width={1} justifyContent="center" style={{ position: "relative" }}>
        <Box ml={200} width={1 / 4}>
          <GamesBarImage style={{ bottom: "-52px" }} src={fortniteLogo} />
        </Box>
        <Box width={1 / 4}>
          <GamesBarImage style={{ bottom: "27px" }} src={overwatchLogo} />
        </Box>
        <Box width={1 / 4}>
          <GamesBarImage style={{ bottom: "-30px" }} src={dota2Logo} />
        </Box>
        <Box width={1 / 4}>
          <GamesBarImage style={{ bottom: "-16px" }} src={lolLogo} />
        </Box>
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

      <GamesCard>
        <Box width="900px" mx="auto" style={{ position: "relative" }}>
          <Box mt={5} width="375px">
            <SecondaryTitle>Games We Support</SecondaryTitle>
            <MainTitle>Become a Legend</MainTitle>
          </Box>
          <Flex justifyContent="center">
            <Box width={1 / 4} ml={-400} mt={100}>
              <GameContainerSVG width="480" height="330" />
            </Box>
            <Box width={1 / 4} ml="auto" mt={50}>
              <GameContainerSVG width="480" height="330" />
            </Box>
            <Box width={1 / 4} ml="auto" mt={100}>
              <GameContainerSVG width="480" height="330" />
            </Box>
            <Box width={1 / 4} ml="auto" mt={50}>
              <GameContainerSVG width="480" height="330" />
            </Box>
          </Flex>
        </Box>
      </GamesCard>

      <TextCard>
        <Box width="900px" mx="auto" my={6} style={{ position: "relative" }}>
          <Flex alignItems="center" justifyContent="center">
            <Box width="375px">
              <SecondaryTitle>The Process</SecondaryTitle>
              <MainTitle>Steps of the user flow of Gamejitsu</MainTitle>
            </Box>
            <Box width="600px">
              <ParagraphText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</ParagraphText>
            </Box>
          </Flex>
        </Box>
      </TextCard>
      <IconCircle>1</IconCircle>

      <MainFlow>
        <Box width="900px" mx="auto" my={6}>
          <Flex justifyContent="center">
            <Box flex="1 1 0">
              <SecondaryTitle>Step 01</SecondaryTitle>
              <IconCircle>1</IconCircle>
              <Box>image</Box>
              <SecondaryTitle>Step 03</SecondaryTitle>
              <Box>image</Box>
              <IconCircle>1</IconCircle>
            </Box>
            <Flex>
              <Box style={{ position: "relative" }}>
                <Line />
                <Box style={{ position: "absolute", left: "-25px" }}>
                  <NumberCircle>1</NumberCircle>
                  <NumberCircle>2</NumberCircle>
                  <NumberCircle>3</NumberCircle>
                  <NumberCircle>4</NumberCircle>
                </Box>
              </Box>
            </Flex>
            <Box flex="1 1 0" ml={90}>
              <SecondaryTitle>Step 02</SecondaryTitle>
              <IconCircle>1</IconCircle>
              <Box>image</Box>
              <SecondaryTitle>Step 04</SecondaryTitle>
              <Box>image</Box>
              <IconCircle>1</IconCircle>
            </Box>
          </Flex>
        </Box>
      </MainFlow>
    </Container>
  </div>
)

Page.skipAuthentication = true

export default Page
