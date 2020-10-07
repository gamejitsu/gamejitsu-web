import Head from "next/head"
import styled from "styled-components"
import { Box, Flex } from "rebass"
import { FunctionComponent } from "react"
import { useRouter } from "next/router"

import NavbarLeftMenu from "./NavbarLeftMenu"
import LinkLeftMenu from "./LinkLeftMenu"

import CoachDashboardSVG from "../../svgs/coach-dashboard.svg"
import AnalysisCompletedSVG from "../../svgs/analysis-completed.svg"
import SettingsSVG from "../../svgs/settings.svg"
import { transparentize } from "polished"

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

const LinkDemo = styled(Box)`
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background-color: ${(props) => transparentize(0.5, props.theme.textColor)};
    border-right: 3px solid ${(props) => props.theme.primaryColor};
  }
  heigth: 170px;
  width: 100%;
  padding: 30px;
  background-color: transparent;
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

const LayoutWithMenu: FunctionComponent<Props> = ({ title, children }) => (
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
            <MenuTitle>COACH MENU</MenuTitle>
          </Flex>
          <LinkDemo href="/coach-dashboard">
            <Flex alignItems="center">
              <CoachDashboardSVG width="60" height="35" />
              Coach Dashboard
            </Flex>
          </LinkDemo>
          <LinkDemo href="/placeholder">
            <Flex alignItems="center">
              <AnalysisCompletedSVG width="60" height="35" />
              Analysis Completed
            </Flex>
          </LinkDemo>
          <LinkDemo href="/coach-settings">
            <Flex alignItems="center">
              <SettingsSVG width="60" height="35" />
              Settings
            </Flex>
          </LinkDemo>
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

export default LayoutWithMenu
