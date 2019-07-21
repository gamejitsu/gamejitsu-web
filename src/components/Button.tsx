import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

const Content = styled.button`
  background: linear-gradient(to bottom, ${(props) => lighten(0.2, props.theme.primaryColor)}, ${(props) => props.theme.primaryColor});
  padding: 12px 30px;
  font-size: 25px;
  outline: 0;
  border: 0;
`

interface Props {
  text: string
}


const Button: React.FC<Props> = ({ text }): React.ReactElement => {
  return (
    <Content>
     {text}
    </Content>
  )
}

export { Button }
