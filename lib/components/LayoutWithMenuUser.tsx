import { Box, Flex } from "rebass"
import { FunctionComponent } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import styled from "styled-components"

import AnalysisCompletedSVG from "../../svgs/analysis-completed.svg"
import CoachDashboardSVG from "../../svgs/coach-dashboard.svg"
import LinkLeftMenu from "./LinkLeftMenu"
import NavbarLeftMenu from "./NavbarLeftMenu"
import SettingsSVG from "../../svgs/settings.svg"

const companyName = "Gamejitsu"

interface Props {
  title?: string
}

interface LeftMenuLinkContentProps {
  isActive: boolean
}

interface LeftMenuLinkProps {
  href: string
}

const LeftMenuLink: FunctionComponent<LeftMenuLinkProps> = ({ children, href }) => {
  const router = useRouter()
  const isActive = router && router.pathname === href
  return (
    <LeftMenuLinkContent isActive={isActive} href={href}>
      {children}
    </LeftMenuLinkContent>
  )
}

const LeftMenu = styled(Box)`
  width: 300px;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  padding-top: 92px;
`

const Container = styled(Box)`
  height: 100vh;
  flex-grow: 1;
  padding: 50px;
  background-image: url("/images/background-hero-unit.jpg");
  background-position: center;
`

const LeftMenuLinkContent = styled(LinkLeftMenu)<LeftMenuLinkContentProps>`
  font-weight: bold;
  transition: all 0.15s ease-in-out;
  position: relative;
  font-size: 12px;
  letter-spacing: 1px;
  margin-left: 2px;
  margin-right: 2px;
  display: flex;
  align-items: center;
`

const MenuTitle = styled(Box)`
  height: 60px;
  font-size: 15px;
  color: white;
  font-weight: bold;
`

const Wrapper = styled(Flex)`
  min-height: 100vh;
  flex-direction: column;
`

const MenuFooterParent = styled(Box)`
  margin-top: 100px;
  position: relative;
  width: 100%;
  flex-grow: 1;
  height: 55vh;
`

const MenuFooter = styled(Flex)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  width: 100%;
  position: absolute;
  bottom: 0;
`

const Logo = styled.div`
  filter: grayscale(1);
  transition: 0.25s filter ease-in-out;
  &:hover {
    filter: grayscale(0);
  }
`

const LayoutWithMenuUser: FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Wrapper>
      <NavbarLeftMenu />
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>{title === undefined ? companyName : `${companyName} - ${title}`}</title>
      </Head>
      <Flex height="100%">
        <LeftMenu>
          <Flex justifyContent="center" mt={4}>
            <MenuTitle>MENU</MenuTitle>
          </Flex>
          <LeftMenuLink href="/dashboard">
            <CoachDashboardSVG width="60" height="35" />
            Dashboard
          </LeftMenuLink>
          <LeftMenuLink href="/reviews">
            <AnalysisCompletedSVG width="60" height="35" />
            Reviews Completed
          </LeftMenuLink>
          <LeftMenuLink href="/settings">
            <SettingsSVG width="60" height="35" />
            Settings
          </LeftMenuLink>
          <MenuFooterParent>
            <MenuFooter justifyContent="center" pb={4}>
              © 2020 - Gamejitsu Copyright.
            </MenuFooter>
          </MenuFooterParent>
        </LeftMenu>
        <Container pt={92}>{children}</Container>
      </Flex>
    </Wrapper>
  </>
)

export default LayoutWithMenuUser
