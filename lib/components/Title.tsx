import styled from "styled-components"

import { FunctionComponent } from "react"

interface Props {
  text: string
}

const Content = styled.h1`
  font-family: "Montserrat";
  font-weight: bold;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`

const Title: FunctionComponent<Props> = ({ text }) => <Content>{text}</Content>

export default Title
