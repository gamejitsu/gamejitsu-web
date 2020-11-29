import { Flex, Box } from "rebass"
import CookieConsent from "react-cookie-consent"
import Head from "next/head"
import queryString from "query-string"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { breakpointDown } from "../../../utils/mediaQueryDevices"
import {Container, Background, Spacer, SecondaryTitle, MainTitle, ParagraphText} from "../../../components/UtilsComponents"

import { AuthenticatedComponent } from "gamejitsu/interfaces"
import {
  Navbar,
  ButtonNew,
  ButtonAlternative,
  ButtonDark,
  Footer,
  Table
} from "gamejitsu/components"

const dota2Experiment = "/images/dota-experiment-1.png"
const dota2Logo = "/images/dota2-resized-logo.png"
const fortniteLogo = "/images/fortnite-resized-logo.png"
const lolLogo = "/images/lol-resized-logo.png"
const mainLogo = "/images/gamejitsu-mascotte-crop.png"
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

const Bold = styled.b`
  font-weight: bold;
`

const FlowText = styled.p`
  color: white;
  font-size: 20px;
  line-height: 30px;
`

const GamesBarImage = styled.img`
  width: 190px;
`

const MainImageContainer = styled(Flex)`
  justify-content: center;

  @media ${breakpointDown.md}  {
    justify-content: flex-end;
    padding-right: 32px;
  }

  @media ${breakpointDown.xs} {
    justify-content: center;
    padding-right: 0;
  }
`

const MainImage = styled.img`
  position: relative;
  max-width: 500px;
  width: 100%;
  
  @media ${breakpointDown.md}  {
    max-width: 400px;
  }
`

const OutsideCircle = styled.div`
  background: transparent;
  border-radius: 50%;
  border: 1.5px solid ${(props) => props.theme.lightBackgroundColor};
  box-sizing: content-box;
  height: 70px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 2px;
  position: relative;
  width: 70px;
`

const InsideCircle = styled.div`
  background: ${(props) => props.theme.lightBackgroundColor};
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
  position:relative;
`

const FlowImage = styled(Box)<FlowImageType>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  position: absolute;
  top: 0; left:0; right:0; bottom:0;
`

const FlowImageTitle = styled(Box)`
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
  font-weight: 550;
  height: 44px;
  padding: 14px;
  text-align: center;
  width: 176px;
`

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
  width: 24%;
  @media ${breakpointDown.xs} {
    width: 45%;
    margin-bottom: 16px;
  }
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

const GamesBarWrapper = styled(Flex)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  height: 120px;
  position: relative;
  width: 100%;

  @media ${breakpointDown.sm} {
    height: 100px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

const ResponsiveElem = styled.div<ResponsiveElemProps>`
  width:${props => `${props.width ? props.width : "100%"}`};

  @media ${breakpointDown.md} {
    width: 100%;
    order: ${props => `${props.order ? props.order : "1"}`};
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
  <PriceCardContent p="20px" mb={[3,1]}>
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

const LegendStripeElem = styled.div`
  width: 90%;

  @media ${breakpointDown.sm} {
    width: 85%;
  }

  @media ${breakpointDown.xs} {
    min-width: 120px;
  }
`
const LegendStripeElemImg = styled.img`
 height: 270px;

 @media ${breakpointDown.md} {
   height: 210px;
 }

 @media ${breakpointDown.sm} {
   height: 150px;
 }
`

const Page: AuthenticatedComponent = () => (
  <div>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Gamejitsu</title>
    </Head>
    {/* <Navbar /> */}
    {/* <StyledCookieConsent
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
    </StyledCookieConsent> */}
    <Wrapper>
      <Background src="/images/background-hero-unit.jpg" opacity="0.35"/>
      <Container>
        <Spacer padding={80} />
        <Flex flexWrap="wrap">
          <ResponsiveElem width="50%">
            <Box padding="8px 32px">
              <SecondaryTitle>Esport coaching Platform</SecondaryTitle>
              <MainTitle>Hire a Pro Coach from 10$</MainTitle>
              <ParagraphText>Get your game analyzed asynchronously</ParagraphText>
              <ParagraphText>by top quality coaches and start winning</ParagraphText>
              <Flex>
              <Box pt={4}>
                <ButtonNew key="demo" type="button" href="/demo" text="COACH DEMO" />
              </Box>
              <Box pt={4} pl={[3]}>
                  <ButtonAlternative
                    key="howitworks"
                    type="button"
                    href="/howitworks"
                    text="HOW IT WORKS"
                  />
                </Box>
              </Flex>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="50%">
            <MainImageContainer>
              <MainImage src={mainLogo} />
            </MainImageContainer>
          </ResponsiveElem>
        </Flex> 
      </Container>
    </Wrapper>
    <GamesBarWrapper>
      <Container>
        <Flex alignItems="center" height="100%" justifyContent="space-between" overflowX="auto" padding="0 15px">
          <Box minWidth="220px">
            <GamesBarImage src={dota2Logo} />
          </Box>
          <Box minWidth="220px">
            <GamesBarImage src={overwatchLogo} />
          </Box> 
          <Box minWidth="220px">
            <GamesBarImage src={lolLogo} />
          </Box>
          <Box minWidth="220px">
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
              <SecondaryTitle>Asynch Coaching</SecondaryTitle>
              <MainTitle>Welcome to GameJitsu</MainTitle>
            </Box>
          </ResponsiveElem>
          <ResponsiveElem width="60%">
            <Box padding="8px 32px">
              <ParagraphText>
                Gamejitsu uses state-of-the-art technologies to allow you (as a palyer) to get your{" "}
                <Bold>game reviewed without recording your own game</Bold>.
              </ParagraphText>
              <br />
              <ParagraphText>
                Gamejitsu will fetch autonously the game you selected to be reviewed and provides it
                to a coach based on the <Bold>selected MMR</Bold>.
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
      <Background src="/images/background-hero-unit.jpg" opacity="0.7" style={{ backgroundPosition: "top"}} />
      <Container>
        <Spacer padding={40} />
        <ResponsiveElem width="50%">
          <Box padding="8px 32px">
            <SecondaryTitle>Games We Support</SecondaryTitle>
            <MainTitle>Optimize your Skillset</MainTitle>
          </Box>
        </ResponsiveElem>
        <Spacer padding={40} />
        <Flex flexWrap="wrap" overflowX="auto">
          <Flex width={"25%"} paddingLeft={[0, "16px", "32px"]}>
            <LegendStripeElem>
              <LegendStripeElemImg src={dota2Experiment} />
            </LegendStripeElem>
            <LegendStripeElem>
              <LegendStripeElemImg src={dota2Experiment} />
            </LegendStripeElem>
            <LegendStripeElem>
              <LegendStripeElemImg src={dota2Experiment} />
            </LegendStripeElem>
            <LegendStripeElem>
              <LegendStripeElemImg src={dota2Experiment} />
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
              <FlowText>
                Coach reviews your game with text comments bound to your replay
              </FlowText>
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
                Coach reviews your game with text comments bound to your replay
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
          <SecondaryTitle style={{textAlign: "center"}}>Comparison Schema</SecondaryTitle>
          <MainTitle>Built for players</MainTitle>
        </Box>
      </Flex>
      <Flex pl={[2,3]} pr={[2,3]}>
        <Table />
      </Flex>
    </Container>
    <Container>
      <Flex justifyContent="center">
        <Box pt={[4,5]} pb={[4,5]} >
          <ButtonNew key="login" type="button" onClick={login} text="OUR COACHES" />
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
      <Flex justifyContent="space-around" flexWrap="wrap" pl={[2,4]} pr={[2,4]}>
        <PriceCard title="High" price="$10.0" icon="award-badge">
          <PriceFeature>5k MMR or above</PriceFeature>
        </PriceCard>
        <PriceCard title="Expert" price="$17.5" icon="award-badge-3">
          <PriceFeature>6k MMR or above</PriceFeature>
        </PriceCard>
        <PriceCard title="Pro" price="$25.0" icon="vip">
          <PriceFeature>7k MMR or above</PriceFeature>
        </PriceCard>
        <PriceCard title="Hero" price="$30.0" icon="king">
          <PriceFeature>8k MMR or above</PriceFeature>
        </PriceCard>
      </Flex>
      <Spacer padding={60} />
    </Container>
    <Footer /> 
  </div>
)

Page.skipAuthentication = true

export default Page
