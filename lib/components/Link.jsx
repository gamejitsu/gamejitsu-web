import NextLink from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Content = styled.a`
  color: ${props => props.theme.linkColor};
  cursor: pointer;
`

const Link = ({ children, href }) => (
  <NextLink href={href}>
    <Content>{children}</Content>
  </NextLink>
)

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired
}

export default Link
