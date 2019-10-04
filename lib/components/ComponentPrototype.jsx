import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Navbar = ({ children }) => (
    {children}
)

Navbar.propTypes = {
  title: PropTypes.string,
  children: PropType.node
}

export default Navbar
