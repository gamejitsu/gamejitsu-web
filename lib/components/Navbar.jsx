import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Link } from '.'
import styled from 'styled-components'

const NavLink = ({ children, href }) => (
  <Box m={1}>
    <Link href={href}>{children}</Link>
  </Box>
)

const Container = styled(Flex)`
  background-color: ${props => props.theme.backgroundColor};
`

const Navbar = () => (
  <Container py={2} px={2} color="white" alignItems="center">
    <Text mr="auto" p={2} fontWeight="bold">
      <NavLink href="/">Gamejitsu</NavLink>
    </Text>
    <NavLink href="/dashboard">Dashboard</NavLink>
    <NavLink href="/reviews">Reviews</NavLink>
  </Container>
)

export default Navbar
