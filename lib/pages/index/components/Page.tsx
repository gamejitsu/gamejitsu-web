import React, { FunctionComponent } from "react"
import GameContainerSVG from '../../../../svgs/game-container-red.svg'
import styled from "styled-components"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Navbar, ButtonNew, ButtonAlternative, ButtonDark } from "gamejitsu/components"
import { Flex, Box } from "rebass"

const mainLogo = "/images/gamejitsu-mascotte.svg"
const dota2Logo = "/images/dota2-logo.png"
const lolLogo = "/images/lol-logo.png"
const overwatchLogo = "/images/overwatch-logo.png"
const fortniteLogo = "/images/fortnite-logo.png"

const Container = styled(Flex)`
  background-color: transparent;
`

interface SecondaryTitleProps {
  color?: string
}

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

const GamesBarImage = styled.img`
  width: 190px;
  margin-right: 40px;
  margin-left: 40px;
  position: absolute;
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
    border: 2px solid ${(props) => props.theme.lightBackgroundColor};
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

interface FlowImageType {
  url: string
}

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
`

const PriceCards = styled(Flex)`
  width: 100%;
`

PriceCards.defaultProps = {
  mb: 6
}

interface PriceCardProps {
  icon: string
  title: string
  price: string
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

        <MainFlow flex="1 1 0" alignItems="center">
          <Box width="900px" mx="auto" mb={4} display="block">
            <Flex >
              <Box flex="1 1 0" mr={90}>
                <FlowBox>
                  <SecondaryTitle>Step 01</SecondaryTitle>
                  <IconCircle>3</IconCircle>
                  <Box>
                    <FlowText>The coach submits the video reviewed with text feedbacks in the form of comments</FlowText>
                  </Box>
                </FlowBox>
                <FlowBox>
                  <FlowImage url="/images/despa.png">
                    <FlowImageTitle>Video Analyzing</FlowImageTitle>
                  </FlowImage>
                </FlowBox>
                <FlowBox>
                  <SecondaryTitle>Step 03</SecondaryTitle>
                  <IconCircle>3</IconCircle>
                  <Box>
                    <FlowText>The coach submits the video reviewed with text feedbacks in the form of comments</FlowText>
                  </Box>
                </FlowBox>
                <FlowBox>
                  <FlowImage url="/images/despa.png">
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
                  <FlowImage url="/images/despa.png">
                    <FlowImageTitle>Replay Video</FlowImageTitle>
                  </FlowImage>
                </FlowBox>
                <FlowBox>
                  <SecondaryTitle>Step 02</SecondaryTitle>
                  <IconCircle>2</IconCircle>
                  <Box>
                    <FlowText>A human coach grabs the replay and starts analysing the video</FlowText>
                  </Box>
                </FlowBox>
                <FlowBox>
                  <FlowImage url="/images/despa.png">
                    <FlowImageTitle>Feedback</FlowImageTitle>
                  </FlowImage>
                </FlowBox>
                <FlowBox>
                  <SecondaryTitle>Step 04</SecondaryTitle>
                  <IconCircle>4</IconCircle>
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
              <PriceFeature>4-5k MMR</PriceFeature>
            </PriceCard>

            <PriceCard title="High" price="$6.0" icon="award-badge">
              <PriceFeature>4-5k MMR</PriceFeature>
            </PriceCard>

            <PriceCard title="Very High" price="$8.0" icon="award-badge-3">
              <PriceFeature>4-5k MMR</PriceFeature>
            </PriceCard>

            <PriceCard title="Pro" price="$10.0" icon="vip">
              <PriceFeature>4-5k MMR</PriceFeature>
            </PriceCard>
          </Flex>
        </Box>
      </PriceCards>

    </Container>
  </div>
)

Page.skipAuthentication = true

export default Page
