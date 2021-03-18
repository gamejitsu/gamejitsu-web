import React from "react"
import { Flex, Box } from "rebass/styled-components"
import Head from "next/head"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import LinkMailBold from "gamejitsu/components/LinkMailBold"
import {
  Container,
  MainTitle,
  SecondaryTitle,
  Spacer,
  ParagraphText,
  ParagraphTitle
} from "../../../components/UtilsComponents"

const Page: AuthenticatedComponent = () => (
  <Container>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Gamejitsu - Security</title>
    </Head>
    <Box px={[4]} pt={[4]}>
      <Box>
        <MainTitle>Security</MainTitle>
      </Box>
      <Box>
        <ParagraphTitle>Our security philosophy</ParagraphTitle>
        <ParagraphText>
          We recognize how important it is to help protect privacy and security. We understand that
          secure products and services are critical in establishing and maintaining trust with our
          users. We strive to consistently deliver secure and enjoyable experiences in all of our
          products and services. Security includes everyone. Our users, our coaches, our developers,
          third party software developers and the security community. Working together we can all
          make Steam and the Internet safer.
        </ParagraphText>
        <ParagraphTitle>Reporting security issues</ParagraphTitle>
        <ParagraphText>
          Security of our networks and services is important for us and for you. We take it
          seriously. If you are a user or a coach and have a security issue to report regarding your
          personal account, please contact us. This includes password problems, login issues,
          suspected fraud and account abuse issues. If you have discovered a vulnerability in
          Gamejitsu and/or a Gamejitsu product or have a security incident to report, we encourage
          you to submit a report to our email. You may instead send email describing the issue to{" "}
          <LinkMailBold href="mailto:support@gamejitsu.gg">support@gamejitsu.gg</LinkMailBold>. If
          you feel the need, please use our public key to encrypt your communications with us. We
          believe in responsible security disclosure practices. In accordance with this we
          appreciate reporters privately notifying us of vulnerabilities and setting reasonable time
          frames for response and disclosure based on the severity of the issue. We believe this
          method provides the most secure environment for users and coaches and the Internet at
          large. We will respond as soon as we can to fix verifiable security issues. When notified
          of legitimate issues, we will acknowledge your report, begin investigating the issue and
          will work to correct any vulnerabilities quickly.
        </ParagraphText>
        <ParagraphTitle>Hall of Fame</ParagraphTitle>
        <ParagraphText>
          We would like to thank the following people for their contribution in ensuring the
          security of Steam and our applications: Be the first...
        </ParagraphText>
      </Box>
    </Box>
    <Spacer padding={60} />
    <Footer />
  </Container>
)

Page.skipAuthentication = true

export default Page
