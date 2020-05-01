import NextLink from "next/link"
import styled from "styled-components"

import { FunctionComponent } from "react"

interface Props {
  href: string
  className?: string
}

const Content = styled.a`
  color: ${(props) => props.theme.linkColor};
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`

const Link: FunctionComponent<Props> = ({ children, className, href }) => (
  <NextLink href={href}>
    <Content className={className}>{children}</Content>
  </NextLink>
)

export default Link
