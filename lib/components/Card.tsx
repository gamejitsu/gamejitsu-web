import styled from "styled-components"

import { Elevation, Card as BPCard } from "@blueprintjs/core"
import { FunctionComponent } from "react"

const Content = styled(BPCard)`
  padding: 0;
`

const Card: FunctionComponent = ({ children }) => (
  <Content elevation={Elevation.THREE}>{children}</Content>
)

export default Card
