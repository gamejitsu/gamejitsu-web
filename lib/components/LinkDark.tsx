import NextLink from "next/link"
import styled from "styled-components"

import { FunctionComponent } from "react"
import { Box } from "rebass"

interface Props {
  href: string
  className?: string
  mt?: number
}

const Content = styled(Box)`
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  margin-bottom: 25px;
  height: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: white;
  }
`

const LinkDark: FunctionComponent<Props> = ({ children, className, href, mt }) => (
  <NextLink href={href}>
    <Content className={className} mt={mt}>
      {children}
    </Content>
  </NextLink>
)

export default LinkDark
