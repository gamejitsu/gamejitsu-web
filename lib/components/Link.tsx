import NextLink from "next/link"
import PropTypes from "prop-types"
import { FunctionComponent } from "react"
import styled from "styled-components"

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
