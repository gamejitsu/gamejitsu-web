import NextLink from "next/link"
import styled from "styled-components"
import { Box, Flex } from "rebass/styled-components"
import { FunctionComponent } from "react"
import { transparentize } from "polished"
import { boolean } from "io-ts"

interface Props {
  href: string
  className?: string
  isForbidden?: boolean
}

interface ContentProps {
  isForbidden: boolean
}

const Content = styled(Box)<ContentProps>`
  color: ${(props) => props.theme.colors.textColor};
  cursor: ${(props) => (props.isForbidden ? "not-allowed" : "pointer")};
  &:hover {
    text-decoration: none;
    background-color: ${(props) => transparentize(0.5, props.theme.colors.textColor)};
    border-right: 3px solid ${(props) => props.theme.colors.primaryColor};
  }
  /* height: 170px; */
  width: 100%;
  padding: 30px;
  background-color: transparent;
`

const LinkLeftMenu: FunctionComponent<Props> = ({
  children,
  className,
  href,
  isForbidden = false
}) => {
  return (
    <Flex alignItems="center">
      <NextLink href={href}>
        <Content className={className} isForbidden={isForbidden}>
          {children}
        </Content>
      </NextLink>
    </Flex>
  )
}

export default LinkLeftMenu
