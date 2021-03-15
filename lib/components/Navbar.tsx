import queryString from "query-string"
import styled from "styled-components"
import Link from "./Link"

import { Box, Flex } from "rebass/styled-components"
import { destroyCookie } from "nookies"
import { UserContext } from "../contexts"
import { ButtonIcon, ButtonNew, ImageButton } from "."
import { useContext, FunctionComponent } from "react"
import { transparentize } from "polished"
import { useRouter } from "next/router"
import { breakpointDown } from "../utils/mediaQueryDevices"

const urlBase = "https://steamcommunity.com/openid/login"

const gamejitsuWritingImageSrc = "/images/gamejitsu-writing.svg"

interface NavLinkContentProps {
  isActive: boolean
}

interface NavLinkProps {
  href: string
}

const NavLinkContent = styled(Link)<NavLinkContentProps>`
  font-weight: bold;
  transition: all 0.15s ease-in-out;
  position: relative;
  font-size: 9px;
  letter-spacing: 1px;
  margin-left: 2px;
  margin-right: 2px;

  &::before {
    background-color: ${(props) => transparentize(0.5, props.theme.colors.textColor)};
    content: "";
    height: 5px;
    margin-top: 3px;
    left: 0;
    opacity: ${(props) => (props.isActive ? "1" : "0")};
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 100%;
    transition: opacity 0.2s;
    width: 100%;
  }

  &:hover::before {
    opacity: 1;
  }
`

const NavLink: FunctionComponent<NavLinkProps> = ({ children, href }) => {
  const router = useRouter()
  const isActive = router && router.pathname === href
  return (
    <Box m={2}>
      <NavLinkContent isActive={isActive} href={href}>
        {children}
      </NavLinkContent>
    </Box>
  )
}

const Logo = styled.div`
  filter: grayscale(1);
  transition: 0.25s filter ease-in-out;
  &:hover {
    filter: grayscale(0);
  }
`

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

const logout = () => {
  destroyCookie({}, "authToken")
  window.location.href = "/"
}

const FlexWithOrderLogo = styled(Flex)`
  @media ${breakpointDown.sm} {
    order: 1;
    align-items: center;
    width: 50%;
  }
`

const FlexWithOrderLinks = styled(Flex)`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
  @media ${breakpointDown.sm} {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    padding: 16px 0;
  }
`

const FlexWithOrderButton = styled(Flex)`
  @media ${breakpointDown.sm} {
    order: 2;
    width: 50%;
    justify-content: flex-end;
  }
`

const Navbar: FunctionComponent = () => {
  const user = useContext(UserContext)
  return (
    <Flex pt={[3, 2]} px={3} color="white" flexWrap="wrap">
      <FlexWithOrderLogo>
        <Box width="175px">
          <Logo>
            <ImageButton key="home" href="/" imageSrc={gamejitsuWritingImageSrc} />
          </Logo>
        </Box>
      </FlexWithOrderLogo>
      <FlexWithOrderLinks>
        <NavLink key="demo" href="/demo">
          WATCH DEMO
        </NavLink>
        {user
          ? user?.coachId
            ? [
                <NavLink key="coach-reviews" href="/coach-reviews">
                  COACH REVIEWS
                </NavLink>,
                <NavLink key="coach-dashboard" href="/coach-dashboard">
                  COACH DASHBOARD
                </NavLink>,
                <NavLink key="username" href="/coach-settings">
                  Coach {user?.username}
                </NavLink>
              ]
            : [
                <NavLink key="dashboard" href="/dashboard">
                  DASHBOARD
                </NavLink>,
                <NavLink key="reviews" href="/reviews">
                  REVIEWS
                </NavLink>,
                <NavLink key="username" href="/settings">
                  {user.username}
                </NavLink>
              ]
          : null}
      </FlexWithOrderLinks>
      <FlexWithOrderButton>
        {user ? (
          <ButtonNew key="logout" text="LOGOUT" onClick={logout} />
        ) : (
          <ButtonIcon key="login" text="SIGN IN" icon={user} onClick={login} />
        )}
      </FlexWithOrderButton>
    </Flex>
  )
}

export default Navbar
