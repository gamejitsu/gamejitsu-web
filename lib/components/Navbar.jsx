import { Box, Flex } from 'rebass'
import { Link, Button, ButtonSteam, UserContext } from '.'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import React, { useContext } from 'react'
import styled from 'styled-components'
import cookie from 'js-cookie'

const NavLink = ({ children, href }) => (
  <Box m={1}>
    <Link href={href}>{children}</Link>
  </Box>
)

const Container = styled(Flex)`
  background-color: ${props => props.theme.backgroundColor};
`

const login = () => {
  const urlBase = 'https://steamcommunity.com/openid/login'
  const urlQuery = {
    'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
    'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
    'openid.mode': 'checkid_setup',
    'openid.ns': 'http://specs.openid.net/auth/2.0',
    'openid.realm': window.origin + '/auth',
    'openid.return_to': window.origin + '/auth'
  }
  const stringified = queryString.stringify(urlQuery)
  window.location.href = urlBase + '?' + stringified
}

const logout = () => {
  cookie.remove('authToken')
  window.location.href = '/'
}

const Navbar = () => {
  const { user } = useContext(UserContext)

  return (
    <Container py={2} px={2} color="white" alignItems="center">
      <NavLink href="/" fontWeight="bold">
        Gamejitsu
      </NavLink>
      <NavLink href="/dashboard">Dashboard</NavLink>
      <NavLink href="/reviews">Reviews</NavLink>
      <NavLink href="/coach-reviews">Coach Reviews</NavLink>
      <Box mx="auto" />
      {user ? (
        [
          <NavLink key='username' href="/">{user.attributes.username}</NavLink>,
          <Button key='logout' text="Logout" onClick={logout} />
        ]
      ) : (
        <ButtonSteam onClick={login} />
      )}
    </Container>
  )
}

NavLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired
}

export default Navbar
