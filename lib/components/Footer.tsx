import styled from "styled-components"
import { FunctionComponent } from "react"
import { Box, Flex } from "rebass"
import { LinkDark, LinkSocialIcon } from "."
import {Container} from "./UtilsComponents"
import LinkMailBold from "gamejitsu/components/LinkMailBold"
import { breakpointDown } from "../../lib/utils/mediaQueryDevices"

interface Props {}

interface FooterColProps {
  hiddenOnMobile?: boolean
}

const gjLogo = "/images/gj-logo-1.png"

const GjLogoContainer = styled.img`
  width: 72%;
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
  margin-bottom: 16px;
  line-height: 20px;
`

const FooterColS = styled(Flex)<FooterColProps>`
  width:25%;
  flex-direction: column;

  @media ${breakpointDown.md} {
    display: ${props => props.hiddenOnMobile ? "none!important" : "flex"};
    width: 33%;
  }

  @media ${breakpointDown.xs} {
    width: 50%;
  }
`
const FooterColL = styled(Flex)`
  flex-direction: column;
  width:100%;
`

const Footer: FunctionComponent<Props> = () => (
  <Container>
    <Flex flexWrap="wrap" width="100%" px={[4]} pt={4} style={{borderTop: "1px solid #222"}}>
      <FooterColS>
        <FooterTitle>COMPANY</FooterTitle>
        <Box mb={3} mt={[3,4]}>
          <LinkDark href="/about-us">About us</LinkDark>
        </Box>
        <Box mb={3}>
          <LinkDark href="/howitworks">How It Works</LinkDark>
        </Box>
        <Box mb={3}>
          <LinkDark href="/careers">Careers</LinkDark>
        </Box>
        <Box mb={[4,3]}>
          <LinkDark href="/press-inquiries">Press Inquiries</LinkDark>
        </Box>
      </FooterColS>
      <FooterColS>
        <FooterTitle>SUPPORT</FooterTitle>
        <Box mb={3} mt={[3,4]}>
          <LinkDark href="/privacy-policy">Privacy Policy</LinkDark>
        </Box>
        <Box mb={3}>
          <LinkDark href="/terms-of-use">Terms of Use</LinkDark>
        </Box>
        <Box mb={3}>
          <LinkDark href="/faq">FAQ</LinkDark>
        </Box>
        <Box mb={3}>
          <LinkDark href="/security">Security</LinkDark>
        </Box>
      </FooterColS>
      <FooterColS>
        <FooterTitle>COACHES</FooterTitle>
        <Box mb={3} mt={[3,4]}>
          <LinkDark href="/become-a-coach">Become a Coach</LinkDark>
        </Box>
        <Box mb={3}>
          <LinkDark href="/our-coaches">Our Coaches</LinkDark>
        </Box>
        <Box mb={3}>
          <LinkDark href="/demo">Coach Demo</LinkDark>
        </Box>
        <Box mb={3}>
          <LinkDark href="/customer-reviews">Customer Reviews</LinkDark>
        </Box>
      </FooterColS>
      <FooterColS hiddenOnMobile={true} alignItems="center" justifyContent="flex-start">
        <GjLogoContainer src={gjLogo} />
      </FooterColS>
    </Flex>
    <Flex px={[4]}  width="100%">
      <FooterColL pt={4}>
        <FooterTitle>CONTACT US</FooterTitle>
        <Box mt={[3]}>
          <FooterText>
            Are you a Streamer/You Tuber/High Ranked?{" "}
            <LinkMailBold href="mailto:support@gamejitsu.gg">
              Apply for Partnership
            </LinkMailBold>
          </FooterText>
        </Box>
        <Box>
          <FooterText>
            Need help? Email us at{" "}
            <LinkMailBold href="mailto:support@gamejitsu.gg">
              support@gamejitsu.gg
            </LinkMailBold>
          </FooterText>
        </Box>
      </FooterColL>
    </Flex>
    <Flex px={[4]} pb={4} pt={[2,4]} width="100%" flexWrap="wrap">
      <Flex width={[1, 1/2]} order={[2,1]} >
        <Box>© Copyright 2020 Gamejitsu.<br />All Rights Reserved.</Box>
      </Flex>
      <Flex width={[1, 1/2]} pb={[3,0]} order={[1,2]} justifyContent={["flex-start", "flex-end"]} alignItems="center">
        <Flex pr={3} mr={2}>
          <LinkSocialIcon
            href="https://twitter.com/gamejitsu"
            src="/images/social-media-twitter.svg"
          />
        </Flex>
        <Flex pr={3} mr={2}>
          <LinkSocialIcon
            href="https://www.facebook.com/GamejitsuCoaching"
            src="/images/social-media-facebook.svg"
          />
        </Flex>
        <Flex  pr={3} mr={2}>
          <LinkSocialIcon
            href="https://www.instagram.com/gamejitsu/"
            src="/images/social-instagram.svg"
          />
        </Flex>
        <Flex pr={3} mr={2}>
          <LinkSocialIcon
            href="https://www.youtube.com/channel/UCcq2lVhkuGt1J7v3xh_Nkng"
            src="/images/social-video-youtube-clip.svg"
          />
        </Flex>
        <Flex pr={3} mr={2}>
          <LinkSocialIcon
            href="https://m.twitch.tv/gamejitsu/profile"
            src="/images/video-game-logo-twitch.svg"
          />
        </Flex>
        <Flex  pr={3} mr={2}>
          <LinkSocialIcon
            href="https://www.linkedin.com/company/gamejitsu/?viewAsMember=true"
            src="/images/professional-network-linkedin.svg"
          />
        </Flex>
      </Flex>
    </Flex>
  </Container>
)

export default Footer
