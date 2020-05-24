import styled from "styled-components"

import { FunctionComponent } from "react"

interface Props {
  text: string
}

const Content = styled.h1`
  font-family: "Japanese 3017";
  font-weight: normal;
  letter-spacing: 3px;
  font-size: 22px;
  color: ${(props) => props.theme.primaryColor};
`

const Title: FunctionComponent<Props> = ({ text }) => <Content>{text}</Content>

export default Title
