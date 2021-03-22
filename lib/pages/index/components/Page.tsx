import { Flex, Box } from "rebass/styled-components"
import CookieConsent from "react-cookie-consent"
import Head from "next/head"
import queryString from "query-string"
import React, { FunctionComponent, useContext } from "react"
import styled from "styled-components"
import { breakpointDown } from "../../../utils/mediaQueryDevices"
import { UserContext } from "gamejitsu/contexts"
import {
  Container,
  Background,
  Spacer,
  SecondaryTitle,
  MainTitle,
  ParagraphText
} from "../../../components/UtilsComponents"

import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Button, Footer, Table, Carousel } from "gamejitsu/components"
import CtaTryDemo from "./components/CtaTryDemo"

const dota2Diagonal = "/images/dota2-bs-crop-cut.png"
const csgoDiagonal = "/images/csgo-container-final-2.png"
const overwatchDiagonal = "/images/overwatch-container-1.png"
const lolDiagonal = "/images/lol-container-new-4.png"

const dota2Logo = "/images/dota2-resized-logo.png"
const fortniteLogo = "/images/fortnite-resized-logo.png"
const lolLogo = "/images/lol-resized-logo.png"
const overwatchLogo = "/images/overwatch-logo.png"

interface PriceCardProps {
  icon: string
  price: string
  title: string
}

interface ResponsiveElemProps {
  width?: string
  order?: string
}

interface FlowImageType {
  url: string
}

interface LegendStripeProps {
  bottom?: string
  left?: string
}

const Bold = styled.b`
  font-weight: bold;
`

const FlowText = styled.p`
  color: white;
  font-size: 20px;
  line-height: 30px;
`

const GamesBarImage = styled.img`
  width: 170px;
`

const OutsideCircle = styled.div`
  background: transparent;
  border-radius: 50%;
  border: 1.5px solid ${(props) => props.theme.colors.lightBackgroundColor};
  box-sizing: content-box;
  height: 70px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 2px;
  position: relative;
  width: 70px;
`

const InsideCircle = styled.div`
  background: ${(props) => props.theme.colors.lightBackgroundColor};
  border-radius: 50%;
  color: white;
  line-height: 70px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 100%;
`

const FlowImageContainer = styled.div`
  width: 100%;
  padding-top: 56%;
  position: relative;
`

const FlowImage = styled(Box)<FlowImageType>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const FlowImageTitle = styled(Box)`
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: black;
  font-weight: 550;
  height: 44px;
  padding: 14px;
  text-align: center;
  width: 176px;
`

const Price = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundColor};
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
  background-color: ${(props) => props.theme.colors.lightBackgroundColor};
  width: 24%;
  @media ${breakpointDown.sm} {
    width: 46.5%;
    margin-bottom: 16px;
  }
`

const PriceFeatureContent = styled.span`
  align-items: center;
  color: ${(props) => props.theme.colors.textColor};
  display: inline-flex;
  font-size: 14px;
  margin-bottom: 25px;

  img {
    margin-right: 10px;
  }
`

const GamesBarWrapper = styled(Flex)`
  background-color: ${(props) => props.theme.colors.lightBackgroundColor};
  height: 95px;
  position: relative;
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

const ResponsiveElem = styled.div<ResponsiveElemProps>`
  width: ${(props) => `${props.width ? props.width : "100%"}`};

  @media ${breakpointDown.md} {
    width: 100%;
    order: ${(props) => `${props.order ? props.order : "1"}`};
  }
`

const FlowStepIcon = styled.img`
  height: auto;
  text-align: center;
  vertical-align: middle;
  width: 50%;
`

const StyledCookieConsent = styled(CookieConsent)`
  background: ${(props) => props.theme.colors.textColor};
`

const PriceCard: FunctionComponent<PriceCardProps> = ({ children, icon, title, price }) => {
  const user = useContext(UserContext)
  return (
    <PriceCardContent p="20px" mb={[3, 1]}>
      <Box pb={3}>
        <img src={`/images/icon-${icon}.png`} width="40" />
      </Box>
      <SecondaryTitle color="white">{title}</SecondaryTitle>
      <Price>
        <span>{price}</span> <span>Per Replay</span>
      </Price>
      <div>{children}</div>
      <Box>
        {user ? (
          user.coachId ? (
            <Button key="login" text="Get Started" href={"/coach-dashboard"} className={"dark"} />
          ) : (
            <Button key="login" text="Get Started" href={"/dashboard"} className={"dark"} />
          )
        ) : (
          <Button key="login" text="Get Started" onClick={login} className={"dark"} />
        )}
      </Box>
    </PriceCardContent>
  )
}

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

const LegendStripeElem = styled.div`
  width: 84%;

  @media ${breakpointDown.md} {
    width: 92%;
  }

  @media ${breakpointDown.sm} {
    width: 85%;
  }

  @media ${breakpointDown.xs} {
    min-width: 120px;
  }
`
const LegendStripeElemImg = styled.img<LegendStripeProps>`
  height: 290px;
  position: relative;
  left: ${(props) => `${props.left ? props.left : "0"}`};
  bottom: ${(props) => `${props.bottom ? props.bottom : "0"}`};

  @media ${breakpointDown.lg} {
    height: 270px;
    bottom: 0;
    left: 0;
  }

  @media ${breakpointDown.md} {
    height: 200px;
  }

  @media ${breakpointDown.sm} {
    height: 150px;
  }
`

const Page: AuthenticatedComponent = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu</title>
      </Head>
      <StyledCookieConsent
        location="bottom"
        buttonText="ACCEPT"
        cookieName="CookiePolicy"
        buttonStyle={{
          display: "inline-flex",
          borderRadius: "50px",
          border: "2px solid #08ff07",
          color: "#08ff07",
          transition: "all 0.05s ease-in-out",
          background: "transparent",
          padding: "10px 25px 10px 25px",
          fontSize: "15px",
          fontWeight: "bold"
        }}
        expires={150}
      >
        We use necessary cookies to make our site work. We won't set optional cookies unless you
        enable them. Using this tool will set a cookie on your device to remember your preferences.{" "}
        <span style={{ fontSize: "10px" }}>
          For more detailed information about the cookies we use, see our cookies page.
        </span>
      </StyledCookieConsent>
      <Carousel carouselId={"homepageCarousel"}>
        {[<CtaTryDemo key="demo1" />, <CtaTryDemo key="demo2" />]}
      </Carousel>
      <GamesBarWrapper>
        <Container>
          <Flex
            alignItems="center"
            height="100%"
            justifyContent="space-between"
            overflowX="auto"
            padding="0 15px"
          >
            <Box minWidth="215px">
              <GamesBarImage src={dota2Logo} />
            </Box>
            <Box minWidth="215px">
              <GamesBarImage src={overwatchLogo} />
            </Box>
            <Box minWidth="215px">
              <GamesBarImage src={lolLogo} />
            </Box>
            <Box minWidth="215px">
              <GamesBarImage src={fortniteLogo} />
            </Box>
          </Flex>
        </Container>
      </GamesBarWrapper>
      <Container>
        <Spacer padding={60} />
        <Flex flexWrap="wrap">
          <ResponsiveElem width="35%">
            <Box padding="8px 32px">
              <SecondaryTitle>Async Coaching</SecondaryTitle>
              <MainTitle>Welcome to GameJitsu</MainTitle>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="60%">
            <Box padding="8px 32px">
              <ParagraphText>
                Gamejitsu uses state-of-the-art technologies to allow you (as a player) to get your{" "}
                <Bold>game reviewed without recording your own game</Bold>.
              </ParagraphText>
              <br />
              <ParagraphText>
                Gamejitsu will fetch autonomously the game you selected to be reviewed and provides
                it to a coach based on the <Bold>selected MMR</Bold>.
              </ParagraphText>
              <br />
              <ParagraphText>
                Login in the platform is only available via Steam. Your profile has to be public in
                order to see your recent games played.
              </ParagraphText>
            </Box>
          </ResponsiveElem>
        </Flex>
        <Spacer padding={40} />
      </Container>
      <Wrapper>
        <Background
          src="/images/background-hero-unit.jpg"
          opacity="0.7"
          style={{ backgroundPosition: "top" }}
        />
        <Container>
          <Spacer padding={40} />
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <SecondaryTitle>Games We Support</SecondaryTitle>
              <MainTitle>Optimize your Skill Set</MainTitle>
            </Box>
          </ResponsiveElem>
          <Spacer padding={40} />
          <Flex flexWrap="wrap" overflowX="auto" pt={[0, 0, 4]}>
            <Flex width={"25%"} pl={[0, "16px", 0]}>
              <LegendStripeElem>
                <LegendStripeElemImg src={dota2Diagonal} />
              </LegendStripeElem>
              <LegendStripeElem>
                <LegendStripeElemImg left="12px" bottom="24px" src={csgoDiagonal} />
              </LegendStripeElem>
              <LegendStripeElem>
                <LegendStripeElemImg src={overwatchDiagonal} />
              </LegendStripeElem>
              <LegendStripeElem>
                <LegendStripeElemImg left="12px" bottom="24px" src={lolDiagonal} />
              </LegendStripeElem>
            </Flex>
          </Flex>
          <Spacer padding={60} />
        </Container>
      </Wrapper>
      <Container>
        <Spacer padding={30} />
        <Flex flexWrap="wrap">
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <SecondaryTitle>The Process</SecondaryTitle>
              <MainTitle>Steps of the user flow of Gamejitsu</MainTitle>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <ParagraphText>
                The Gamejitsu flow is composed by <Bold>4 simple steps</Bold>.
              </ParagraphText>
              <ParagraphText>
                <Bold>You don't need to record your own game</Bold>, Gamejitsu will take care of it.
                Gamejitsu will also select the best coach for your needs, based on the required MMR.
              </ParagraphText>
            </Box>
          </ResponsiveElem>
        </Flex>
      </Container>
      <Container>
        <Spacer padding={30} />
        <Flex flexWrap="wrap" padding="32px 0">
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <SecondaryTitle>Step 01</SecondaryTitle>
              <IconCircle>
                <FlowStepIcon src="/images/step1.png" />
              </IconCircle>
              <Box padding="0 32px 0 0">
                <FlowText>
                  You submit a request for a replay to be analyzed by our selected coach based on
                  MMR
                </FlowText>
              </Box>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <FlowImageContainer>
                <FlowImage url="/images/step1-image.png">
                  <FlowImageTitle>Replay Video</FlowImageTitle>
                </FlowImage>
              </FlowImageContainer>
            </Box>
          </ResponsiveElem>
        </Flex>
        <Spacer padding={30} />
        <Flex flexWrap="wrap" padding="32px 0">
          <ResponsiveElem width="50%" order="2">
            <Box padding="8px 32px">
              <FlowImageContainer>
                <FlowImage url="/images/step2-image.png">
                  <FlowImageTitle>Video Analyzing</FlowImageTitle>
                </FlowImage>
              </FlowImageContainer>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="50%" order="1">
            <Box padding="8px 32px">
              <SecondaryTitle>Step 02</SecondaryTitle>
              <IconCircle>
                <FlowStepIcon src="/images/step2.png" />
              </IconCircle>
              <Box padding="0 32px 0 0">
                <FlowText>
                  Our professional coach responds to your request and starts the analysis
                </FlowText>
              </Box>
            </Box>
          </ResponsiveElem>
        </Flex>
        <Spacer padding={30} />
        <Flex flexWrap="wrap" padding="32px 0">
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <SecondaryTitle>Step 03</SecondaryTitle>
              <IconCircle>
                <FlowStepIcon src="/images/step3.png" />
              </IconCircle>
              <Box padding="0 32px 0 0">
                <FlowText>Coach reviews your game with text comments bound to your replay</FlowText>
              </Box>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <FlowImageContainer>
                <FlowImage url="/images/step3-image.png">
                  <FlowImageTitle>Feedback</FlowImageTitle>
                </FlowImage>
              </FlowImageContainer>
            </Box>
          </ResponsiveElem>
        </Flex>
        <Spacer padding={30} />
        <Flex flexWrap="wrap" padding="32px 0">
          <ResponsiveElem width="50%" order="2">
            <Box padding="8px 32px">
              <FlowImageContainer>
                <FlowImage url="/images/step4-image1.png">
                  <FlowImageTitle>User Notified</FlowImageTitle>
                </FlowImage>
              </FlowImageContainer>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="50%" order="1">
            <Box padding="8px 32px">
              <SecondaryTitle>Step 04</SecondaryTitle>
              <IconCircle>
                <FlowStepIcon src="/images/step4.png" />
              </IconCircle>
              <Box padding="0 32px 0 0">
                <FlowText>
                  You are notified via mail and you can watch the replay analyzed in your dashboard
                </FlowText>
              </Box>
            </Box>
          </ResponsiveElem>
        </Flex>
      </Container>
      <Container>
        <Spacer padding={30} />
        <Flex justifyContent="center">
          <Box padding="32px 8px">
            <SecondaryTitle style={{ textAlign: "center" }}>Comparison Schema</SecondaryTitle>
            <MainTitle>Built for players</MainTitle>
          </Box>
        </Flex>
        <Flex pl={[2, 3]} pr={[2, 3]}>
          <Table />
        </Flex>
      </Container>
      <Container>
        <Flex justifyContent="center">
          <Box pt={[4, 5]} pb={[4, 5]}>
            <Button key="ourcoaches" text="OUR COACHES" href="/our-coaches" className={"new"} />
          </Box>
        </Flex>
      </Container>
      <Container>
        <Spacer padding={30} />
        <Flex flexWrap="wrap">
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <SecondaryTitle>Pricing</SecondaryTitle>
              <MainTitle>We have a least Pricing Module</MainTitle>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="50%">
            <Flex alignItems="center" height="100%">
              <Box padding="8px 32px">
                <ParagraphText>
                  Find above our pricing offer. Pro pricing may be subject to variations based on
                  custom requests and top level coaches.
                </ParagraphText>
              </Box>
            </Flex>
          </ResponsiveElem>
        </Flex>
      </Container>
      <Container>
        <Flex justifyContent="space-around" flexWrap="wrap" pl={[2, 4]} pr={[2, 4]}>
          <PriceCard title="High" price="$10.0" icon="award-badge">
            <PriceFeature>5k MMR or above</PriceFeature>
          </PriceCard>
          <PriceCard title="Expert" price="$17.5" icon="award-badge-3">
            <PriceFeature>6k MMR or above</PriceFeature>
          </PriceCard>
          <PriceCard title="Pro" price="$25.0" icon="vip">
            <PriceFeature>7k MMR or above</PriceFeature>
          </PriceCard>
          <PriceCard title="Hero" price="$50.0" icon="king">
            <PriceFeature>8k MMR or above</PriceFeature>
          </PriceCard>
        </Flex>
        <Spacer padding={60} />
      </Container>
      <Footer />
    </div>
  )
}

Page.skipAuthentication = true

export default Page
