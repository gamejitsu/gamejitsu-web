import React, { FunctionComponent } from "react"
import Head from "next/head"
import styled from "styled-components"
import { Flex, Box } from "rebass"

import { AuthenticatedComponent } from "gamejitsu/interfaces"
import GameContainerSVG from '../../../../svgs/dota2-bs-crop-cut.svg'
import GameContainerCSGOSVG from '../../../../svgs/csgo-container-final-2.svg'
import GameContainerLOLSVG from '../../../../svgs/lol-container-new-4.svg'
import GameContainerOWSVG from '../../../../svgs/overwatch-container-1.svg'
import { Navbar, ButtonNew, ButtonAlternative, ButtonDark } from "gamejitsu/components"

const mainLogo = "/images/gamejitsu-mascotte.svg"
const dota2Logo = "/images/dota2-logo.png"
const lolLogo = "/images/lol-logo.png"
const overwatchLogo = "/images/overwatch-logo.png"
const fortniteLogo = "/images/fortnite-logo.png"
const gjLogo = "/images/gj-logo.png"

interface PriceCardProps {
  icon: string
  title: string
  price: string
}

interface SecondaryTitleProps {
  color?: string
}

interface FlowImageType {
  url: string
}

const Container = styled(Flex)`
  background-color: transparent;
`

const SecondaryTitle = styled.h2<SecondaryTitleProps>`
  font-family: "Japanese 3017";
  font-weight: normal;
  letter-spacing: 3px;
  font-size: 21px;
  color: ${(props) => props.color || props.theme.primaryColor};
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

const FlowText = styled.p`
  font-size: 20px;
  margin-bottom: 220px;
  line-height: 20px;
  color: white;
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

const FooterTitle = styled.h3`
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
`

const FooterText = styled(Box)`
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  margin-bottom: 25px;
  height: 10px;
`

const Footer = styled(Flex)`
  flex-grow: 1;
  width: 100%;
  position: absolute;
  height: 200px;
  z-index: 1;
`

const FooterBackground = styled.div`
  top: 0;
  left: 0;
  right 0;
  bottom: 0;
  position: absolute;
  background-image: url('/images/background-hero-unit.jpg');
  background-position: center;
  background-size: cover;
  opacity: 0.1;
`

const FooterImage = styled.img`
  width: 200px;
  position: absolute;
  bottom: -65px;
  left: 100px;
`

const FooterParent = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`

const FooterLink = styled.h3`
  color: white;
  font-weight: bold;
  display: inline;
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
  height: 85px;
  width: 100%;
  position: relative;
`

const GamesBarImage = styled.img`
  width: 190px;
  margin-right: 40px;
  margin-left: 40px;
  position: absolute;
`

const GamesCard = styled(Flex)`
  background-image: url('/images/background-hero-unit.jpg');
  background-size: cover;
  height: 800px;
  width: 100%;
`

const MainFlow = styled(Flex)`
  width: 100%;
  position: relative;
`

const MainImage = styled.img`
  width: 510px;
  position: absolute;
  bottom: -65px;
  right: 0px;
`

const TextCard = styled(Box)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-grow: 1;
  z-index: 1;
`

TextCard.defaultProps = {
  my: 4
}

const OutsideCircle = styled.div`
    position: relative;
    background: transparent;
    border: 1.5px solid ${(props) => props.theme.lightBackgroundColor};
    border-radius: 50%;
    padding: 2px;
    height: 50px;
    width: 50px;
    box-sizing: content-box;
    margin-top: 20px;
    margin-bottom: 20px;
`

const InsideCircle = styled.div`
    background: ${(props) => props.theme.lightBackgroundColor};
    position: relative;
    border-radius: 50%;
    line-height: 50px;
    width: 100%;
    vertical-align: middle;
    text-align: center;
    color: white;
`

const NumberCircle = styled.div`
    background: ${(props) => props.theme.lightBackgroundColor};
    border-radius: 50%;
    line-height: 50px;
    width: 50px;
    vertical-align: middle;
    text-align: center;
    margin-bottom: 250px;
    color: white;
    font-weight: bold;
`

const Line = styled.div`
  background: ${(props) => props.theme.lightBackgroundColor};
  width: 1px;
  height: 1250px;
  position: absolute;
  left: 50%;
  margin-left: -1px;
`

const LineHorizontal = styled.div`
  width: 100%;
  height 1px;
  position: absolute;
  background: ${(props) => props.theme.lightBackgroundColor};
`

const FlowImage = styled(Box) <FlowImageType>`
  background-image: url(${props => props.url});
  background-size: contain;
  width: 380px;
  height: 240px;
  margin-bottom: 150px;
`

const FlowBox = styled(Box)`
  height: 250px;
`

FlowBox.defaultProps = { mt: 50 }

const FlowImageTitle = styled(Box)`
  text-align: center;
  height: 44px;
  width: 176px;
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
  padding: 14px;
  font-weight: 550;
`

const PriceCards = styled(Flex)`
  width: 100%;
`

PriceCards.defaultProps = {
  mb: 6
}

const Price = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-left: -20px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 16px 25px;
  color: white;
  display: inline-flex;
  align-items: center;

  span {
    display: block;
    font-weight: bold;
    font-size: 20px;
    padding-right: 5px;
  }

  span:last-child {
    display: block;
    font-size: 12px;
  }
`

const PriceCardContent = styled(Box)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
`

const PriceFeatureContent = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  margin-bottom: 25px;

  img {
    margin-right: 10px;
  }
`

const FlowStepIcon = styled.img`
  height: auto;
  width: 50%; 
  vertical-align: middle;
  text-align: center;
`

const SocialNetworkBar = styled(Flex)`
  width: 100%;
  text-align: center;
  vertical-align: middle;
  position: relative;
  height: 50px;
`

const SocialNetworkBarIcon = styled.img`
  width: 20px;
  position: absolute;
`

const PriceCard: FunctionComponent<PriceCardProps> = ({ children, icon, title, price }) =>
  <PriceCardContent flex="1" p="20px" mr={3}>
    <Box pb={3}>
      <img src={`/images/icon-${icon}.png`} width="40" />
    </Box>
    <SecondaryTitle color="white">{title}</SecondaryTitle>
    <Price><span>{price}</span> <span>Per Replay</span></Price>
    <div>
      {children}
    </div>
    <ButtonDark text="Get Started" />
  </PriceCardContent>

const PriceFeature: FunctionComponent = ({ children }) =>
  <PriceFeatureContent><img src="/images/icon-check-circle-1.png" width="20" /> {children}</PriceFeatureContent>

const IconCircle: FunctionComponent = ({ children }) =>
  <OutsideCircle>
    <InsideCircle>
      {children}
    </InsideCircle>
  </OutsideCircle>

const Page: AuthenticatedComponent = () => (
  <div>
    <Navbar />
    <Container alignItems="center" flexDirection="column">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - Home</title>
      </Head>
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

      <GamesBar justifyContent="center">
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
        <Box width="100%" style={{ position: "relative" }}>
          <Box mx="auto" width="900px" mt={5}>
            <SecondaryTitle>Games We Support</SecondaryTitle>
            <MainTitle>Become a Legend</MainTitle>
          </Box>
          <Flex p={4} justifyContent="center">
            <Box width={1 / 4} >
              <GameContainerSVG width="100%" height="auto" />
            </Box>
            <Box width={1 / 4} ml={-125}>
              <GameContainerCSGOSVG width="101%" height="auto" />
            </Box>
            <Box width={1 / 4} ml={-125}>
              <GameContainerLOLSVG width="100%" height="auto" />
            </Box>
            <Box width={1 / 4} ml={-125}>
              <GameContainerOWSVG width="100%" height="auto" />
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

      <MainFlow flex="1 1 0" alignItems="center">
        <Box width="900px" mx="auto" mb={4} display="block">
          <Flex >
            <Box flex="1 1 0" mr={90}>
              <FlowBox>
                <SecondaryTitle>Step 01</SecondaryTitle>
                <IconCircle>
                  <FlowStepIcon src="/images/step1.png" />
                </IconCircle>
                <Box>
                  <FlowText>The coach submits the video reviewed with text feedbacks in the form of comments</FlowText>
                </Box>
              </FlowBox>
              <FlowBox>
                <FlowImage url="/images/step2-image.png">
                  <FlowImageTitle>Video Analyzing</FlowImageTitle>
                </FlowImage>
              </FlowBox>
              <FlowBox>
                <SecondaryTitle>Step 03</SecondaryTitle>
                <IconCircle>
                  <FlowStepIcon src="/images/step3.png" />
                </IconCircle>
                <Box>
                  <FlowText>The coach submits the video reviewed with text feedbacks in the form of comments</FlowText>
                </Box>
              </FlowBox>
              <FlowBox>
                <FlowImage url="/images/step4-image.png">
                  <FlowImageTitle>User Notified</FlowImageTitle>
                </FlowImage>
              </FlowBox>
            </Box>
            <Flex ml={25} mr={25}>
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
              <FlowBox>
                <FlowImage url="/images/step1-image.png">
                  <FlowImageTitle>Replay Video</FlowImageTitle>
                </FlowImage>
              </FlowBox>
              <FlowBox>
                <SecondaryTitle>Step 02</SecondaryTitle>
                <IconCircle>
                  <FlowStepIcon src="/images/step2.png" />
                </IconCircle>
                <Box>
                  <FlowText>A human coach grabs the replay and starts analysing the video</FlowText>
                </Box>
              </FlowBox>
              <FlowBox>
                <FlowImage url="/images/step3-image.jpeg">
                  <FlowImageTitle>Feedback</FlowImageTitle>
                </FlowImage>
              </FlowBox>
              <FlowBox>
                <SecondaryTitle>Step 04</SecondaryTitle>
                <IconCircle>
                  <FlowStepIcon src="/images/step4.png" />
                </IconCircle>
                <Box>
                  <FlowText>The user is notified of the available review and can watch in his/her dashboard</FlowText>
                </Box>
              </FlowBox>
            </Box>
          </Flex>
          <Flex justifyContent="center">
            <Box mt={100}>
              <Flex>
                <Box mr={10}>
                  <ButtonNew text="GET STARTED" />
                </Box>
                <Box ml={10}>
                  <ButtonAlternative text="SEE PRICING" />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </MainFlow>

      <TextCard>
        <Box width="900px" mx="auto" my={4} style={{ position: "relative" }}>
          <Flex alignItems="center">
            <Box width="375px">
              <SecondaryTitle>Pricing</SecondaryTitle>
              <MainTitle>We have a least Pricing Module</MainTitle>
            </Box>
            <Box width="600px">
              <ParagraphText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</ParagraphText>
            </Box>
          </Flex>
        </Box>
      </TextCard>

      <PriceCards>
        <Box width="900px" mx="auto" style={{ position: "relative" }}>
          <Flex justifyContent="center">
            <PriceCard title="Medium" price="$4.0" icon="award-badge-1">
              <PriceFeature>4k MMR or above</PriceFeature>
            </PriceCard>

            <PriceCard title="High" price="$6.0" icon="award-badge">
              <PriceFeature>Above 5k MMR</PriceFeature>
            </PriceCard>

            <PriceCard title="Very High" price="$8.0" icon="award-badge-3">
              <PriceFeature>Above 6k MMR</PriceFeature>
            </PriceCard>

            <PriceCard title="Pro" price="$10.0" icon="vip">
              <PriceFeature>Above 7k MMR</PriceFeature>
            </PriceCard>
          </Flex>
        </Box>
      </PriceCards>

      <FooterParent >
        <Footer justifyContent="center">
          <Box mx="auto">
            <Box>
              <FooterImage src={gjLogo} />
            </Box>
            <Box width="900px" mx="auto" mt={4} style={{ position: "relative" }}>
              <Flex justifyContent="center">
                <Box flex="1 1 0" >
                  <FooterTitle>COMPANY</FooterTitle>
                  <FooterText mt={4}>About us</FooterText>
                  <FooterText>Jobs</FooterText>
                  <FooterText>Site Term of use</FooterText>
                  <FooterText>Press Inquiries</FooterText>
                </Box>
                <Box flex="1 1 0" >
                  <FooterTitle>SUPPORT</FooterTitle>
                  <FooterText mt={4}>Privacy Policy</FooterText>
                  <FooterText>Terms of Use</FooterText>
                  <FooterText>FAQ</FooterText>
                  <FooterText>Security</FooterText>
                </Box>
                <Box flex="1 1 0" >
                  <FooterTitle>RESOURCES</FooterTitle>
                  <FooterText mt={4}>Customer revies</FooterText>
                  <FooterText>Partnership</FooterText>
                  <FooterText>Coach Login</FooterText>
                </Box>
                <Box ml={20}>
                  <FooterTitle>CONTACT US</FooterTitle>
                  <FooterText />
                  <FooterText mt={4}>Need help? Email us at <FooterLink>support@gamejitsu.gg</FooterLink></FooterText>
                  <FooterText>Are you a Streamer/You Tuber/High Ranked? <FooterLink>Apply for Partnership</FooterLink></FooterText>
                </Box>
              </Flex>
              <LineHorizontal />
              <SocialNetworkBar mt={4}>
                <Box mr="auto">
                  © Copyright 2020 Gamejitsu. All Rights Reserved.
              </Box>
                <Box mr={4}>
                  <SocialNetworkBarIcon src="/images/social-media-twitter.svg" />
                </Box>
                <Box mr={4}>
                  <SocialNetworkBarIcon src="/images/social-media-facebook.svg" />
                </Box>
                <Box mr={4}>
                  <SocialNetworkBarIcon src="/images/social-instagram.svg" />
                </Box>
                <Box mr={4}>
                  <SocialNetworkBarIcon src="/images/social-video-youtube-clip.svg" />
                </Box>
                <Box mr={4}>
                  <SocialNetworkBarIcon src="/images/video-game-logo-twitch.svg" />
                </Box>
                <Box mr={4}>
                  <SocialNetworkBarIcon src="/images/professional-network-linkedin.svg" />
                </Box>
              </SocialNetworkBar>
            </Box>
          </Box>
        </Footer>
        <FooterBackground />
      </FooterParent>

    </Container>
  </div>
)

Page.skipAuthentication = true

export default Page
