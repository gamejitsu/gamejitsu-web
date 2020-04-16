import queryString from "query-string"
import styled from "styled-components"

import { Box, Flex } from "rebass"
import { destroyCookie } from "nookies"
import { UserContext } from "../contexts"
import { Link, Button, ImageButton } from "."
import { useContext, FunctionComponent } from "react"
import { transparentize } from "polished";

const urlBase = "https://steamcommunity.com/openid/login"

const steamImageSrc = "/images/steam-button.png"
const gamejitsuWritingImageSrc = "/images/gamejitsu-writing.svg"

interface NavLinkProps {
  href: string
}

const NavLinkContent = styled(Link)`
  font-weight: bold;
  transition: all 0.15s ease-in-out;
  position: relative;

  &::before {
    background: -webkit-radial-gradient(
      center,
      ellipse,
      ${(props) => transparentize(0.5, props.theme.textColor)} 0,
      transparent 80%
    );
    content: '';
    height: 10px;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 100%;
    transition: opacity .2s;
    width: 100%;
  }

  &:hover::before {
    opacity: 1;
  }
`

const NavLink: FunctionComponent<NavLinkProps> = ({ children, href }) => (
  <Box m={2}>
    <NavLinkContent href={href}>{children}</NavLinkContent>
  </Box>
)

const Container = styled(Flex)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
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

const Navbar: FunctionComponent = () => {
  const user = useContext(UserContext)

  return (
    <Container py={3} px={3} color="white" alignItems="center">
      <Box mr="auto">
        <Flex alignItems="center">
          <Box width="175px" mr={3}>
            <Logo>
              <ImageButton href="/" imageSrc={gamejitsuWritingImageSrc} />
            </Logo>
          </Box>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/coach-reviews">Coach Reviews</NavLink>
          <NavLink href="/coach-signup">Coach SignUp</NavLink>
          <NavLink href="/coach-dashboard">Coach Dashboard</NavLink>
        </Flex >
      </Box>
      {user ? (
        [
          <NavLink key="username" href="/">
            {user.username}
          </NavLink>,
          <Button key="logout" text="Logout" onClick={logout} />
        ]
      ) : (
          <Box width="150px">
            <ImageButton onClick={login} imageSrc={steamImageSrc} />
          </Box>
        )}
    </Container>
  )
}

export default Navbar
