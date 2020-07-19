import styled from "styled-components"

import { FunctionComponent } from "react"
import { Box, Flex } from "rebass"
import { LinkDark, LinkMailBold, LinkBold, LinkSocialIcon } from "."

interface Props {
}

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
                            <LinkDark href="/" mt={4}>About us</LinkDark>
                            <LinkDark href="/">Jobs</LinkDark>
                            <LinkDark href="/terms-of-use">Site Term of Use</LinkDark>
                            <LinkDark href="/">Press Inquiries</LinkDark>
                        </Box>
                        <Box flex="1 1 0">
                            <FooterTitle>SUPPORT</FooterTitle>
                            <LinkDark href="/privacy-policy" mt={4}>Privacy Policy</LinkDark>
                            <LinkDark href="/terms-of-use">Terms of Use</LinkDark>
                            <LinkDark href="/">FAQ</LinkDark>
                            <LinkDark href="/security">Security</LinkDark>
                        </Box>
                        <Box flex="1 1 0">
                            <FooterTitle>RESOURCES</FooterTitle>
                            <LinkDark href="/" mt={4}>Customer Reviews</LinkDark>
                            <LinkDark href="/">Partnership</LinkDark>
                            <LinkDark href="/">Coach Login</LinkDark>
                        </Box>
                        <Box ml={20}>
                            <FooterTitle>CONTACT US</FooterTitle>
                            <FooterText />
                            <FooterText mt={4}>
                                Need help? Email us at <LinkMailBold href="mailto:support@gamejitsu.gg">support@gamejitsu.gg</LinkMailBold>
                            </FooterText>
                            <FooterText>
                                Are you a Streamer/You Tuber/High Ranked?{" "}
                                <LinkBold href="/">Apply for Partnership</LinkBold>
                            </FooterText>
                        </Box>
                    </Flex>
                    <LineHorizontal />
                    <SocialNetworkBar mt={4}>
                        <Box mr="auto">© Copyright 2020 Gamejitsu. All Rights Reserved.</Box>
                        <Box mr={4}>
                            <LinkSocialIcon href="/" src="/images/social-media-twitter.svg" />
                        </Box>
                        <Box mr={4}>
                            <LinkSocialIcon href="https://www.facebook.com/gamejitsu" src="/images/social-media-facebook.svg" />
                        </Box>
                        <Box mr={4}>
                            <LinkSocialIcon href="https://www.instagram.com/gamejitsu/" src="/images/social-instagram.svg" />
                        </Box>
                        <Box mr={4}>
                            <LinkSocialIcon href="/" src="/images/social-video-youtube-clip.svg" />
                        </Box>
                        <Box mr={4}>
                            <LinkSocialIcon href="https://m.twitch.tv/gamejitsu/profile" src="/images/video-game-logo-twitch.svg" />
                        </Box>
                        <Box mr={4}>
                            <LinkSocialIcon href="https://www.linkedin.com/company/gamejitsu/?viewAsMember=true" src="/images/professional-network-linkedin.svg" />
                        </Box>
                    </SocialNetworkBar>
                </Box>
            </Box>
        </FooterComponent>
        <FooterBackground />
    </FooterParent>
)

export default Footer
