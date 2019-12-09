import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Content = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`

const Image = styled.img`
  width: 80%;
`

const ButtonSteam = ({ onClick }) => (
  <Content onClick={onClick}>
    <Image src="/static/images/sits_01.png" />
  </Content>
)

ButtonSteam.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ButtonSteam
