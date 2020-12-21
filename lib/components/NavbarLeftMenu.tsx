import { Box, Flex } from "rebass"
import { destroyCookie } from "nookies"
import { transparentize } from "polished"
import { useContext, FunctionComponent } from "react"
import { useRouter } from "next/router"
import queryString from "query-string"
import styled from "styled-components"

import { ButtonIcon, ButtonNew, ImageButton } from "."
import { UserContext } from "../contexts"

import Link from "./Link"
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
  font-size: 14px;
  letter-spacing: 1px;
  margin-left: 2px;
  margin-right: 2px;

  @media ${breakpointDown.sm} {
    display: none;
  }

  &::before {
    background-color: ${(props) => transparentize(0.5, props.theme.textColor)};
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

const Container = styled(Flex)`
  position: relative;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
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

const NavbarLeftMenu: FunctionComponent = () => {
  const user = useContext(UserContext)

  return (
    <Container py={20} px={3} color="white" alignItems="center">
      <Flex>
        <Flex alignItems="center" ml={4}>
          <Box width="185px">
            <ImageButton key="image-button" href="/" imageSrc={gamejitsuWritingImageSrc} />
          </Box>
        </Flex>
      </Flex>
      {user ? (
        user?.coachId ? (
          [
            <NavLink key="username" href="/coach-settings">
              Coach {user?.username}
            </NavLink>,
            <ButtonNew key="logout" text="LOGOUT" onClick={logout} />
          ]
        ) : (
          [
            <NavLink key="username" href="/settings">
              {user.username}
            </NavLink>,
            <ButtonNew key="logout" text="LOGOUT" onClick={logout} />
          ]
        )
      ) : (
        <Box>
          <ButtonIcon key="login" text="SIGN IN" icon={user} onClick={login} />
        </Box>
      )}
    </Container>
  )
}

export default NavbarLeftMenu
