import NextLink from "next/link"
import styled from "styled-components"
import { Box, Flex } from "rebass"
import { FunctionComponent } from "react"
import { transparentize } from "polished"

interface Props {
  href: string
  className?: string
}

const Content = styled(Box)`
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background-color: ${(props) => transparentize(0.5, props.theme.textColor)};
    border-right: 3px solid ${(props) => props.theme.primaryColor};
  }
  /* height: 170px; */
  width: 100%;
  padding: 30px;
  background-color: transparent;
`

const LinkLeftMenu: FunctionComponent<Props> = ({ children, className, href }) => (
  <Flex alignItems="center">
    <NextLink href={href}>
      <Content className={className}>{children}</Content>
    </NextLink>
  </Flex>
)

export default LinkLeftMenu
