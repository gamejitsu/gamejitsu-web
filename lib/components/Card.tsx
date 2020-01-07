import { Box } from "rebass"
import { FunctionComponent } from "react"
import styled from "styled-components"

const Content = styled(Box)`
  background-color: ${(props) => props.theme.backgroundColor};
`

const Card: FunctionComponent = ({ children }) => <Content>{children}</Content>

export default Card
