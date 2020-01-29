import styled from "styled-components"

import { lighten } from "polished"
import { FunctionComponent } from "react"

interface Props {
  text: string
  onClick?: () => void
  type?: "submit" | "reset" | "button"
  disabled?: boolean
}

const Content = styled.button`
  background: linear-gradient(
    to bottom,
    ${(props) => lighten(0.3, props.theme.primaryColor)},
    ${(props) => props.theme.primaryColor}
  );
  padding: 12px 30px;
  font-size: 15px;
  outline: 0;
  border: 0;
  cursor: pointer;
`

const Button: FunctionComponent<Props> = ({ text, onClick, type = "button", disabled = false }) => (
  <Content onClick={onClick} type={type} disabled={disabled}>
    {text}
  </Content>
)

export default Button
