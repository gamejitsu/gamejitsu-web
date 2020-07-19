import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"

import { AuthenticatedComponent } from "gamejitsu/interfaces"

import { Footer, Navbar } from "gamejitsu/components"
import LinkMailBold from "gamejitsu/components/LinkMailBold"

interface SecondaryTitleProps {
  color?: string
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

const TextCard = styled(Box)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-grow: 1;
  z-index: 1;
`

const ParagraphTitle = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
`

TextCard.defaultProps = {
  my: 4
}

const Page: AuthenticatedComponent = () => (
  <Box mt={4}>
    <Navbar />
    <Container alignItems="center" flexDirection="column">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - Security</title>
      </Head>
      <TextCard>
        <Box width="900px" mx="auto" my={4} style={{ position: "relative" }}>
          <Flex alignItems="center">
            <Box width="375px">
              <SecondaryTitle>Gamejitsu</SecondaryTitle>
              <MainTitle>Security</MainTitle>
            </Box>
          </Flex>
          <Box width="900px">
            <ParagraphText>
              <ParagraphTitle>Our security philosophy</ParagraphTitle>
                We recognize how important it is to help protect privacy and security. We understand that secure products and services are critical in establishing and maintaining trust with our users. We strive to consistently deliver secure and enjoyable experiences in all of our products and services.
                Security includes everyone. Our users, our coaches, our developers, third party software developers and the security community. Working together we can all make Steam and the Internet safer.

                <ParagraphTitle>Reporting security issues</ParagraphTitle>
                Security of our networks and services is important for us and for you. We take it seriously. If you are a user or a coach and have a security issue to report regarding your personal account, please contact us. This includes password problems, login issues, suspected fraud and account abuse issues.
                If you have discovered a vulnerability in Gamejitsu and/or a Gamejitsu product or have a security incident to report, we encourage you to submit a report to our email.
                You may instead send email describing the issue to <LinkMailBold href="mailto:support@gamejitsu.gg">support@gamejitsu.gg</LinkMailBold>. If you feel the need, please use our public key to encrypt your communications with us.
                We believe in responsible security disclosure practices. In accordance with this we appreciate reporters privately notifying us of vulnerabilities and setting reasonable time frames for response and disclosure based on the severity of the issue. We believe this method provides the most secure environment for users and coaches and the Internet at large.
                We will respond as soon as we can to fix verifiable security issues. When notified of legitimate issues, we will acknowledge your report, begin investigating the issue and will work to correct any vulnerabilities quickly.

                <ParagraphTitle>Hall of Fame</ParagraphTitle>
                We would like to thank the following people for their contribution in ensuring the security of Steam and our applications:
                Be the first...
              </ParagraphText>
          </Box>
        </Box>
      </TextCard>

      <Footer />

    </Container>
  </Box>
)

Page.skipAuthentication = true

export default Page
