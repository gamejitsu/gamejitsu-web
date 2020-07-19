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

const LinkMailBold: FunctionComponent<Props> = ({ children, className, href, mt }) => (
  <Box className={className} mt={mt}>
    <Content href={href}>{children}</Content>
  </Box>
)

export default LinkMailBold
