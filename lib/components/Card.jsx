import { Box, Flex } from 'rebass'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled(Box)`
  background-color: ${props => props.theme.secondaryColor};
`
const Card = ({ children }) => (
  <Container>
    <Flex>
      {children}
    </Flex>
  </Container>
)

Card.propTypes = {
  children: PropTypes.node
}

export default Card
