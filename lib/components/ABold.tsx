import NextLink from "next/link"
import styled from "styled-components"

import { FunctionComponent } from "react"
import { Box } from "rebass"

interface Props {
  href: string
  className?: string
  mt?: number
}

const Content = styled.a`
  color: white;
  font-weight: bold;
  display: inline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
  }
`

const ABold: FunctionComponent<Props> = ({ children, className, href, mt }) => (
  <NextLink href={href}>
    <Content className={className}>{children}</Content>
  </NextLink>
)

export default ABold
