import Head from "next/head"
import styled from "styled-components"
import { Box, Flex } from "rebass/styled-components"
import { FunctionComponent } from "react"
import { useRouter } from "next/router"

import LinkLeftMenu from "./LinkLeftMenu"

import CoachDashboardSVG from "../../svgs/coach-dashboard.svg"
import AnalysisCompletedSVG from "../../svgs/analysis-completed.svg"
import SettingsSVG from "../../svgs/settings.svg"

import { breakpointDown } from "../utils/mediaQueryDevices"
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

const LeftMenu = styled(Flex)`
  position: relative;
  padding: 64px 0 0;
  width: 280px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.darkBackground};
  min-height: 90vh;

  @media ${breakpointDown.lg} {
    justify-content: center;
    padding-top: 0;
    width: 100%;
    flex-direction: row;
    min-height: 0;
    position: sticky;
    top: 0;
    z-index: 2;
  }
`

const Container = styled(Flex)`
  flex: 1;
  flex-wrap: wrap;
  padding: 32px 32px;
  background-image: url("/images/background-hero-unit.jpg");
  background-position: center;
  background-position: top;
  background-repeat: no-repeat;

  @media ${breakpointDown.lg} {
    width: 100%;
  }

  @media ${breakpointDown.md} {
    padding: 32px 16px;
    min-height: 79vh;
  }
`

const LeftMenuLinkContent = styled(LinkLeftMenu)<LeftMenuLinkContentProps>`
  font-weight: bold;
  transition: background-color 0.15s ease-in-out;
  position: relative;
  font-size: 12px;
  letter-spacing: 1px;
  margin-left: 2px;
  margin-right: 2px;
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.isActive ? transparentize(0.5, props.theme.colors.textColor) : "inherit"};
  border-right: ${(props) =>
    props.isActive ? `3px solid ${props.theme.colors.primaryColor}` : "none"};

  @media ${breakpointDown.lg} {
    justify-content: center;
  }
`

const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  height: 100%;
  min-height: calc(100vh - 75px);

  @media ${breakpointDown.lg} {
    align-items: flex-start;
    flex-direction: column;
  }
`

const MenuFooterParent = styled(Box)`
  position: absolute;
  bottom: 1rem;
  width: 100%;

  @media ${breakpointDown.lg} {
    display: none;
  }
`

const MenuFooter = styled(Flex)`
  text-align: center;
  background-color: ${(props) => props.theme.colors.darkBackground};
`

const MenuElementWrapper = styled.div`
  @media ${breakpointDown.lg} {
    width: 33.3%;
  }
`
const InnerWrapper = styled.div`
  position: sticky;
  top: 70px;
  display: block;

  @media ${breakpointDown.lg} {
    position: relative;
    display: flex;
    top: 0;
    width: 100%;
  }
`

const MenuLinkText = styled.div`
  @media ${breakpointDown.md} {
    display: none;
  }
`

const LayoutWithMenu: FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>{title === undefined ? companyName : `${companyName} - ${title}`}</title>
    </Head>
    <Wrapper>
      <LeftMenu>
        <InnerWrapper>
          <MenuElementWrapper>
            <LeftMenuLink href="/coach-dashboard">
              <CoachDashboardSVG width="60" height="35" />
              <MenuLinkText>Coach Dashboard</MenuLinkText>
            </LeftMenuLink>
          </MenuElementWrapper>
          <MenuElementWrapper>
            <LeftMenuLink href="/coach-reviews">
              <AnalysisCompletedSVG width="60" height="35" />
              <MenuLinkText>Analysis Completed</MenuLinkText>
            </LeftMenuLink>
          </MenuElementWrapper>
          <MenuElementWrapper>
            <LeftMenuLink href="/coach-settings">
              <SettingsSVG width="60" height="35" />
              <MenuLinkText>Settings</MenuLinkText>
            </LeftMenuLink>
          </MenuElementWrapper>
        </InnerWrapper>
        <MenuFooterParent>
          <MenuFooter justifyContent="center" pb={4}>
            © 2021 - Gamejitsu Copyright.
          </MenuFooter>
        </MenuFooterParent>
      </LeftMenu>
      <Container>{children}</Container>
    </Wrapper>
  </>
)

export default LayoutWithMenu
