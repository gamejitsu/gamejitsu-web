import styled from "styled-components"

import { FunctionComponent } from "react"

interface Props {
  href: string
  className?: string
  mt?: number
}

const Content = styled.a`
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
  }
`

const LinkMailBold: FunctionComponent<Props> = ({ children, href }) => (
  <Content href={href}>{children}</Content>
)

export default LinkMailBold
