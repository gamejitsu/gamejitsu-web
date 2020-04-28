import styled from "styled-components"

import { FunctionComponent } from "react"

interface Props {
  text: string
}

const Content = styled.h1`
  font-family: "Exo 2";
  font-weight: bold;
  font-size: 22px;
  color: ${(props) => props.theme.linkColor};
`

const Title: FunctionComponent<Props> = ({ text }) => <Content>{text}</Content>

export default Title
