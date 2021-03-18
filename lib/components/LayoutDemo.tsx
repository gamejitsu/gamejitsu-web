import Head from "next/head"
import styled from "styled-components"
import { Box, Flex } from "rebass/styled-components"
import { FunctionComponent } from "react"
import { useRouter } from "next/router"
import LinkLeftMenu from "./LinkLeftMenu"
import CoachDashboardSVG from "../../svgs/coach-dashboard.svg"
import AnalysisCompletedSVG from "../../svgs/analysis-completed.svg"
import SettingsSVG from "../../svgs/settings.svg"
import { transparentize } from "polished"
import { down } from "customUtils"
import { breakpointDown } from "../utils/mediaQueryDevices"

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
    <LeftMenuLinkContent isActive={isActive} href={href} isForbidden={true}>
      {children}
    </LeftMenuLinkContent>
  )
}

const LeftMenu = styled(Flex)`
  position: relative;
  padding: 64px 0 0;
  width: 280px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.lightBackgroundColor};

  @media ${breakpointDown.lg} {
    justify-content: center;
    padding-top: 0;
    width: 100%;
    flex-direction: row;
    min-height: 0;
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

  @media ${breakpointDown.md} {
    padding: 32px 16px;
  }

  @media ${breakpointDown.sm} {
    min-height: 72vh;
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

const DemoMode = styled(Flex)`
  justify-content: center;
  font-weight: bold;
  font-size: 10px;
  color: ${(props) => props.theme.colors.primaryColor};
  border-top: 1px dotted ${(props) => props.theme.colors.primaryColor};
`

const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  min-height: calc(100vh - 75px);

  @media ${breakpointDown.lg} {
    align-items: stretch;
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
  background-color: ${(props) => props.theme.colors.lightBackgroundColor};
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
      <DemoMode order={[2, 2, 2, 2, 1]} py={2} width="100%">
        DEMO MODE
      </DemoMode>
      <LeftMenu order={[1, 1, 1, 1, 2]}>
        <InnerWrapper>
          <MenuElementWrapper>
            <LeftMenuLink href="#">
              <CoachDashboardSVG width="60" height="35" />
              <MenuLinkText>Coach Dashboard</MenuLinkText>
            </LeftMenuLink>
          </MenuElementWrapper>
          <MenuElementWrapper>
            <LeftMenuLink href="#">
              <AnalysisCompletedSVG width="60" height="35" />
              <MenuLinkText>Analysis Completed</MenuLinkText>
            </LeftMenuLink>
          </MenuElementWrapper>
          <MenuElementWrapper>
            <LeftMenuLink href="#">
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
      <Container order={[3]}>{children}</Container>
    </Wrapper>
  </>
)

export default LayoutWithMenu
