import { lighten } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Content = styled.button`
  background: linear-gradient(
    to bottom,
    ${props => lighten(0.2, props.theme.primaryColor)},
    ${props => props.theme.primaryColor}
  );

  padding: 12px 30px;
  font-size: 15px;
  outline: 0;
  border: 0;
`

const Button = ({ text, onClick }) => <Content onClick={onClick}>{text}</Content>

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
