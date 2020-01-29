import styled from "styled-components"

import { Box } from "rebass"
import { FunctionComponent } from "react"

const Content = styled(Box)`
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.lightBackgroundColor},
    transparent
  );
`

const Card: FunctionComponent = ({ children }) => <Content>{children}</Content>

export default Card
