import styled from "styled-components"

import { FunctionComponent } from "react"

interface Props {
  text: string
}

const Content = styled.h1`
  font-family: "Montserrat";
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 22px;
  color: white;
`

const Title: FunctionComponent<Props> = ({ text }) => <Content>{text}</Content>

export default Title
