import NextLink from "next/link"
import styled from "styled-components"

import { FunctionComponent } from "react"

interface Props {
  href: string
}

const Content = styled.a`
  color: ${(props) => props.theme.linkColor};
  cursor: pointer;
`

const Link: FunctionComponent<Props> = ({ children, href }) => (
  <NextLink href={href}>
    <Content>{children}</Content>
  </NextLink>
)

export default Link
