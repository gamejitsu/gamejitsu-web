import React, { useContext } from 'react'
import { Box, Flex, Text } from 'rebass'
import { Link, ButtonSteam, UserContext } from '.'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const NavLink = ({ children, href }) => (
  <Box m={1}>
    <Link href={href}>{children}</Link>
  </Box>
)

const Container = styled(Flex)`
  background-color: ${props => props.theme.backgroundColor};
`

const login = () => {
  window.location.href =
    'https://steamcommunity.com/openid/login?openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.realm=http%3A%2F%2Flocalhost%3A3000%2Fauth&openid.return_to=http%3A%2F%2Flocalhost%3A3000%2Fauth'
}

const Navbar = () => {
  const { user } = useContext(UserContext)

  return (
    <Container py={2} px={2} color="white" alignItems="center">
      <NavLink href="/" fontWeight="bold">
        Gamejitsu
      </NavLink>
      <NavLink href="/dashboard">Dashboard</NavLink>
      <Text mr="auto" p={1}>
        <NavLink href="/reviews">Reviews</NavLink>
      </Text>
      {user 
        ? <NavLink href="/">{user.attributes.username}</NavLink>
        : <ButtonSteam onClick={login} />
      }
    </Container>
  )
}

NavLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired
}

export default Navbar
