import styled from "styled-components"

import { FunctionComponent } from "react"
import { lighten, darken } from "polished"
import { Link } from "rebass"

interface Props {
  text: string
  onClick?: () => void
  type?: "submit" | "reset" | "button"
  disabled?: boolean
  href?: string
}

const Content = styled.button`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 0;
  box-shadow: inset 0px -3px 0px 0px ${(props) => darken(0.1, props.theme.primaryColor)};

  background-image: linear-gradient(
    to bottom,
    ${(props) => lighten(0.15, props.theme.primaryColor)},
    ${(props) => props.theme.primaryColor}
  );

  padding: 12px 30px;
  font-family: ${(props) => props.theme.textFont};
  font-size: 15px;
  outline: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => lighten(0.25, props.theme.primaryColor)},
      ${(props) => props.theme.primaryColor}
    );
  }

  &:active {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.primaryColor},
      ${(props) => darken(0.10, props.theme.primaryColor)}
    );
    outline: none;
    box-shadow: inset 0px 3px 0px 0px ${(props) => darken(0.1, props.theme.primaryColor)};
  }

  &:focus {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.primaryColor},
      ${(props) => darken(0.10, props.theme.primaryColor)}
    );
    outline: none;
    box-shadow: inset 0px 3px 0px 0px ${(props) => darken(0.1, props.theme.primaryColor)};
  }
`

const Button: FunctionComponent<Props> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  href = ""
}) => (
  <div>
    {href != "" ? (
      <Link href={href}>
        <Content disabled={disabled}>
          {text}
        </Content>
      </Link>
    ) : (
      <Content onClick={onClick} type={type} disabled={disabled}>
        {text}
      </Content>
    )}
  </div>
)

export default Button
