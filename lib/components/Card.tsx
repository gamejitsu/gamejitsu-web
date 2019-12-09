import { Box } from 'rebass'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled(Box)`
  background-color: ${props => props.theme.backgroundColor};
`
const Card = ({ children }) => <Container>{children}</Container>

Card.propTypes = {
  children: PropTypes.node
}

export default Card
