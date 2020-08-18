import queryString from "query-string"
import styled from "styled-components"
import Link from "./Link"

import { Box, Flex } from "rebass"
import { destroyCookie } from "nookies"
import { UserContext } from "../contexts"
import { ButtonIcon, ButtonNew, ImageButton } from "."
import { useContext, FunctionComponent } from "react"
import { transparentize } from "polished"
import { useRouter } from "next/router"

const urlBase = "https://steamcommunity.com/openid/login"

const steamImageSrc = "/images/steam-button.png"
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
  background-color: transparent;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right 0;
`

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

const NavbarLeftMenu: FunctionComponent = () => {
  const user = useContext(UserContext)

  return (
    <Container py={2} px={3} color="white" alignItems="center">
      <Box mr="auto">
        <Flex alignItems="center">
          <Box width="175px" mr={3} ml={50}>
            <Logo>
              <ImageButton key="image-button" href="/" imageSrc={gamejitsuWritingImageSrc} />
            </Logo>
          </Box>
        </Flex>
      </Box>
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
