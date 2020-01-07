import { Box, Flex } from "rebass"
import { Link, Button, SteamButton } from "."
import queryString from "query-string"
import { useContext, FunctionComponent } from "react"
import styled from "styled-components"
import { destroyCookie } from "nookies"
import { UserContext } from "../contexts"

interface NavLinkProps {
  href: string
}

const NavLink: FunctionComponent<NavLinkProps> = ({ children, href }) => (
  <Box m={1}>
    <Link href={href}>{children}</Link>
  </Box>
)

const Container = styled(Flex)`
  background-color: ${(props) => props.theme.backgroundColor};
`

const login = () => {
  const urlBase = "https://steamcommunity.com/openid/login"
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
    <Container py={2} px={2} color="white" alignItems="center">
      <NavLink href="/">Gamejitsu</NavLink>
      <NavLink href="/dashboard">Dashboard</NavLink>
      <NavLink href="/reviews">Reviews</NavLink>
      <Box mx="auto" />
      {user ? (
        [
          <NavLink key="username" href="/">
            {user.username}
          </NavLink>,
          <Button key="logout" text="Logout" onClick={logout} />
        ]
      ) : (
        <SteamButton onClick={login} />
      )}
    </Container>
  )
}

export default Navbar
