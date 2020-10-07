import { Flex, Box } from "rebass"
import CookieConsent from "react-cookie-consent"
import Head from "next/head"
import queryString from "query-string"
import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Navbar, ButtonNew, ButtonAlternative, ButtonDark, Footer } from "gamejitsu/components"
import GameContainerCSGOSVG from "../../../../svgs/csgo-container-final-2.svg"
import GameContainerLOLSVG from "../../../../svgs/lol-container-new-4.svg"
import GameContainerOWSVG from "../../../../svgs/overwatch-container-1.svg"
import GameContainerSVG from "../../../../svgs/dota2-bs-crop-cut.svg"

const dota2Logo = "/images/dota2-logo.png"
const fortniteLogo = "/images/fortnite-logo.png"
const lolLogo = "/images/lol-logo.png"
const mainLogo = "/images/gamejitsu-mascotte.svg"
const overwatchLogo = "/images/overwatch-logo.png"

interface PriceCardProps {
  icon: string
  price: string
  title: string
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
  color: ${(props) => props.color || props.theme.primaryColor};
  font-family: "Japanese 3017";
  font-size: 21px;
  font-weight: normal;
  letter-spacing: 3px;
`

const MainTitle = styled.h1`
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`

const ParagraphText = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 5px;
`

const FlowText = styled.p`
  color: white;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 220px;
`

const Background = styled.div`
  background-image: url('/images/background-hero-unit.jpg');
  background-position: center;
  background-size: cover;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  position: absolute;
  right 0;
  top: 0;
`

const HeroUnitParent = styled.div`
  height: 600px;
  position: relative;
  width: 100%;
`

const HeroUnit = styled(Flex)`
  bottom: 0;
  flex-grow: 1;
  height: 600px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`

const GamesBar = styled(Flex)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  height: 85px;
  position: relative;
  width: 100%;
`

const GamesBarImage = styled.img`
  margin-left: 40px;
  margin-right: 40px;
  position: absolute;
  width: 190px;
`

const GamesCard = styled(Flex)`
  background-image: url("/images/background-hero-unit.jpg");
  background-size: cover;
  height: 800px;
  width: 100%;
`

const MainFlow = styled(Flex)`
  position: relative;
  width: 100%;
`

const MainImage = styled.img`
  bottom: -65px;
  position: absolute;
  right: 0px;
  width: 510px;
`

const TextCard = styled(Box)`
  bottom: 0;
  flex-grow: 1;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`

TextCard.defaultProps = {
  my: 4
}

const OutsideCircle = styled.div`
  background: transparent;
  border-radius: 50%;
  border: 1.5px solid ${(props) => props.theme.lightBackgroundColor};
  box-sizing: content-box;
  height: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 2px;
  position: relative;
  width: 50px;
`

const InsideCircle = styled.div`
  background: ${(props) => props.theme.lightBackgroundColor};
  border-radius: 50%;
  color: white;
  line-height: 50px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 100%;
`

const NumberCircle = styled.div`
  background: ${(props) => props.theme.lightBackgroundColor};
  border-radius: 50%;
  color: white;
  font-weight: bold;
  line-height: 50px;
  margin-bottom: 250px;
  text-align: center;
  vertical-align: middle;
  width: 50px;
`

const Line = styled.div`
  background: ${(props) => props.theme.lightBackgroundColor};
  height: 1250px;
  left: 50%;
  margin-left: -1px;
  position: absolute;
  width: 1px;
`

const FlowImage = styled(Box)<FlowImageType>`
  background-image: url(${(props) => props.url});
  background-size: contain;
  height: 240px;
  margin-bottom: 150px;
  width: 380px;
`

const FlowBox = styled(Box)`
  height: 250px;
`

FlowBox.defaultProps = { mt: 50 }

const FlowImageTitle = styled(Box)`
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
  font-weight: 550;
  height: 44px;
  padding: 14px;
  text-align: center;
  width: 176px;
`

const PriceCards = styled(Flex)`
  width: 100%;
`

PriceCards.defaultProps = {
  mb: 6
}

const Price = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  color: white;
  display: inline-flex;
  margin-bottom: 20px;
  margin-left: -20px;
  margin-top: 30px;
  padding: 16px 25px;

  span {
    display: block;
    font-size: 20px;
    font-weight: bold;
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
  align-items: center;
  color: ${(props) => props.theme.textColor};
  display: inline-flex;
  font-size: 14px;
  margin-bottom: 25px;

  img {
    margin-right: 10px;
  }
`

const FlowStepIcon = styled.img`
  height: auto;
  text-align: center;
  vertical-align: middle;
  width: 50%;
`

const StyledCookieConsent = styled(CookieConsent)`
  background: ${(props) => props.theme.textColor};
`

const PriceCard: FunctionComponent<PriceCardProps> = ({ children, icon, title, price }) => (
  <PriceCardContent flex="1" p="20px" mr={3}>
    <Box pb={3}>
      <img src={`/images/icon-${icon}.png`} width="40" />
    </Box>
    <SecondaryTitle color="white">{title}</SecondaryTitle>
    <Price>
      <span>{price}</span> <span>Per Replay</span>
    </Price>
    <div>{children}</div>
    <ButtonDark key="login" type="button" onClick={login} text="Get Started" />
  </PriceCardContent>
)

const PriceFeature: FunctionComponent = ({ children }) => (
  <PriceFeatureContent>
    <img src="/images/icon-check-circle-1.png" width="20" /> {children}
  </PriceFeatureContent>
)

const IconCircle: FunctionComponent = ({ children }) => (
  <OutsideCircle>
    <InsideCircle>{children}</InsideCircle>
  </OutsideCircle>
)
const urlBase = "https://steamcommunity.com/openid/login"

const login = () => {
  const urlQuery = {
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.mode": "checkid_setup",
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.realm": window.origin + "/auth",
    "openid.return_to": window.origin + "/auth"
  }
  const stringified = queryString.stringify(urlQuery)
  window.location.href = urlBase + "?" + stringified
}

const Page: AuthenticatedComponent = () => (
  <div>
    <Navbar />
    <Container alignItems="center" flexDirection="column">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - Home</title>
      </Head>
      <StyledCookieConsent
        location="bottom"
        buttonText="ACCEPT"
        cookieName="CookiePolicy"
        buttonStyle={{
          fontSize: "13px",
          display: "inline-flex",
          "border-radius": "50px",
          border: "2px solid #08ff07",
          color: "#08ff07",
          transition: "all 0.05s ease-in-out",
          background: "transparent",
          padding: "10px 25px 10px 25px",
          "font-size": "15px",
          "font-weight": "bold"
        }}
        expires={150}
      >
        We use necessary cookies to make our site work. We won't set optional cookies unless you
        enable them. Using this tool will set a cookie on your device to remember your preferences.{" "}
        <span style={{ fontSize: "10px" }}>
          For more detailed information about the cookies we use, see our cookies page.
        </span>
      </StyledCookieConsent>
      <HeroUnitParent>
        <HeroUnit>
          <Box width="900px" mx="auto" style={{ position: "relative" }}>
            <Flex alignItems="center" height="100%">
              <Box width="375px">
                <SecondaryTitle>A coaching Platform</SecondaryTitle>
                <MainTitle>Hire a Pro Gaming Coach From 4$</MainTitle>
                <ParagraphText>Get your game analyzed by a ranked coach</ParagraphText>
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
              <MainTitle>Welcome to GameJitsu</MainTitle>
            </Box>
            <Box width="600px">
              <ParagraphText>
                Gamejitsu uses state-of-the-art technologies to allow you and other palyers to get
                their game reviewed without the need of recording their own game. Gamejitsu will
                fetch autonously the game you selected to be reviewed and provides it to a coach
                based on the selected MMR.
              </ParagraphText>
              <ParagraphText>
                Login in the platform is only available via Steam. Your profile has to be public in
                order to see your recent games played.
              </ParagraphText>
            </Box>
          </Flex>
          <Flex justifyContent="center">
            <Box mt={100}>
              <Flex>
                <Box mr={10}>
                  <ButtonNew key="demo" type="button" href="/demo" text="COACH DEMO" />
                </Box>
                <Box ml={10}>
                  <ButtonAlternative
                    key="howitworks"
                    type="button"
                    href="/howitworks"
                    text="HOW IT WORKS"
                  />
                </Box>
              </Flex>
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
            <Box width={1 / 4}>
              <GameContainerSVG width="100%" height="100%" />
            </Box>
            <Box width={1 / 4} ml={-125}>
              <GameContainerCSGOSVG width="101%" height="100%" />
            </Box>
            <Box width={1 / 4} ml={-125}>
              <GameContainerLOLSVG width="100%" height="100%" />
            </Box>
            <Box width={1 / 4} ml={-125}>
              <GameContainerOWSVG width="100%" height="100%" />
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
              <ParagraphText>
                The Gamejitsu flow is composed by 4 simple steps. You don't need to record your own
                game, Gamejitsu will take of it. Gamejitsu will also select the best coach for your
                needs based on the required MMR.
              </ParagraphText>
            </Box>
          </Flex>
        </Box>
      </TextCard>

      <MainFlow flex="1 1 0" alignItems="center">
        <Box width="900px" mx="auto" mb={4} display="block">
          <Flex>
            <Box flex="1 1 0" mr={90}>
              <FlowBox>
                <SecondaryTitle>Step 01</SecondaryTitle>
                <IconCircle>
                  <FlowStepIcon src="/images/step1.png" />
                </IconCircle>
                <Box>
                  <FlowText>
                    You submit a request for a replay to be analyzed by a coach based on MMR
                  </FlowText>
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
                  <FlowText>
                    Coach reviews your game with text comments bound to your replay
                  </FlowText>
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
                  <FlowText>
                    Our professional coach responds to your request and starts the analysis
                  </FlowText>
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
                  <FlowText>
                    You are notified via mail and you can watch the replay analyzed in your
                    dashboard
                  </FlowText>
                </Box>
              </FlowBox>
            </Box>
          </Flex>
          <Flex justifyContent="center">
            <Box mt={100}>
              <Flex>
                <Box mr={10}>
                  <ButtonNew key="login" type="button" onClick={login} text="GET STARTED" />
                </Box>
                <Box ml={10}>
                  <ButtonAlternative href="#pricing" type="button" text="SEE PRICING" />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </MainFlow>

      <TextCard>
        <Box id="pricing" width="900px" mx="auto" my={4} style={{ position: "relative" }}>
          <Flex alignItems="center">
            <Box width="375px">
              <SecondaryTitle>Pricing</SecondaryTitle>
              <MainTitle>We have a least Pricing Module</MainTitle>
            </Box>
            <Box width="600px">
              <ParagraphText>
                Find above our pricing offer. Pro pricing may be subject to variations based on
                custom requests and top level coaches.
              </ParagraphText>
            </Box>
          </Flex>
        </Box>
      </TextCard>

      <PriceCards>
        <Box width="900px" mx="auto" style={{ position: "relative" }}>
          <Flex justifyContent="center">
            <PriceCard title="High" price="$10.0" icon="award-badge">
              <PriceFeature>5k MMR or above</PriceFeature>
            </PriceCard>

            <PriceCard title="Experienced" price="$20.0" icon="award-badge-3">
              <PriceFeature>6k MMR or above</PriceFeature>
            </PriceCard>

            <PriceCard title="Pro" price="$30.0" icon="vip">
              <PriceFeature>7k MMR or above</PriceFeature>
            </PriceCard>
          </Flex>
        </Box>
      </PriceCards>

      <Footer />
    </Container>
  </div>
)

Page.skipAuthentication = true

export default Page
