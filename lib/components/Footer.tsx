import styled from "styled-components"
import { FunctionComponent } from "react"
import { Box, Flex } from "rebass"
import { LinkDark, LinkSocialIcon } from "."
import LinkMailBold from "gamejitsu/components/LinkMailBold"

interface Props {}

const gjLogo = "/images/gj-logo.png"

const LineHorizontal = styled.div`
  width: 100%;
  height 1px;
  position: absolute;
  background: ${(props) => props.theme.lightBackgroundColor};
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

const FooterComponent = styled(Flex)`
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

const SocialNetworkBar = styled(Flex)`
  width: 100%;
  text-align: center;
  vertical-align: middle;
  position: relative;
  height: 50px;
`

const Footer: FunctionComponent<Props> = () => (
  <FooterParent>
    <FooterComponent justifyContent="center">
      <Box mx="auto">
        <Box>
          <FooterImage src={gjLogo} />
        </Box>
        <Box width="900px" mx="auto" mt={4} style={{ position: "relative" }}>
          <Flex justifyContent="center">
            <Box flex="1 1 0">
              <FooterTitle>COMPANY</FooterTitle>
              <Box mt={4} mb={25}>
                <LinkDark href="/about-us" mt={4}>
                  About us
                </LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/howitworks">How It Works</LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/careers">Careers</LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/press-inquiries">Press Inquiries</LinkDark>
              </Box>
            </Box>
            <Box flex="1 1 0">
              <FooterTitle>SUPPORT</FooterTitle>
              <Box mt={4} mb={25}>
                <LinkDark href="/privacy-policy">Privacy Policy</LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/terms-of-use">Terms of Use</LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/faq">FAQ</LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/security">Security</LinkDark>
              </Box>
            </Box>
            <Box flex="1 1 0">
              <FooterTitle>COACHES</FooterTitle>
              <Box mt={4} mb={25}>
                <LinkDark href="/become-a-coach">Become a Coach</LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/our-coaches">Our Coaches</LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/demo">Coach Demo</LinkDark>
              </Box>
              <Box mb={25}>
                <LinkDark href="/customer-reviews">Customer Reviews</LinkDark>
              </Box>
            </Box>
            <Box ml={20}>
              <FooterTitle>CONTACT US</FooterTitle>
              <Box mt={4} mb={25}>
                <FooterText>
                  Need help? Email us at{" "}
                  <LinkMailBold href="mailto:support@gamejitsu.gg">
                    support@gamejitsu.gg
                  </LinkMailBold>
                </FooterText>
              </Box>
              <Box mb={25}>
                <FooterText>
                  Are you a Streamer/You Tuber/High Ranked?{" "}
                  <LinkMailBold href="mailto:support@gamejitsu.gg">
                    Apply for Partnership
                  </LinkMailBold>
                </FooterText>
              </Box>
            </Box>
          </Flex>
          <LineHorizontal />
          <SocialNetworkBar mt={4}>
            <Box mr="auto">© Copyright 2020 Gamejitsu. All Rights Reserved.</Box>
            <Box mr={4}>
              <LinkSocialIcon
                href="https://twitter.com/gamejitsu"
                src="/images/social-media-twitter.svg"
              />
            </Box>
            <Box mr={4}>
              <LinkSocialIcon
                href="https://www.facebook.com/GamejitsuCoaching"
                src="/images/social-media-facebook.svg"
              />
            </Box>
            <Box mr={4}>
              <LinkSocialIcon
                href="https://www.instagram.com/gamejitsu/"
                src="/images/social-instagram.svg"
              />
            </Box>
            <Box mr={4}>
              <LinkSocialIcon
                href="https://www.youtube.com/channel/UCcq2lVhkuGt1J7v3xh_Nkng"
                src="/images/social-video-youtube-clip.svg"
              />
            </Box>
            <Box mr={4}>
              <LinkSocialIcon
                href="https://m.twitch.tv/gamejitsu/profile"
                src="/images/video-game-logo-twitch.svg"
              />
            </Box>
            <Box mr={4}>
              <LinkSocialIcon
                href="https://www.linkedin.com/company/gamejitsu/?viewAsMember=true"
                src="/images/professional-network-linkedin.svg"
              />
            </Box>
          </SocialNetworkBar>
        </Box>
      </Box>
    </FooterComponent>
    <FooterBackground />
  </FooterParent>
)

export default Footer
