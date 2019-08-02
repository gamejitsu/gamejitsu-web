import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

const FooterContent = styled.footer`
  text-align: center;
`

const Footer: React.FC<Props> = ({ text }) => (
  <FooterContent>
    <ul>
      <li>{text}</li>
      <li>test footer</li>
    </ul>
  </FooterContent>
)

export { Footer }
