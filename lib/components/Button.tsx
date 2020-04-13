import styled from "styled-components"

import { FunctionComponent } from "react"
import { lighten, darken, transparentize } from "polished"
import { Link } from "rebass"

interface Props {
  text: string
  onClick?: () => void
  type?: "submit" | "reset" | "button"
  disabled?: boolean
  href?: string
}

const Content = styled.button`
  transition: background, box-shadow 0.2s ease-in-out;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 0;
  border-bottom: 3px solid ${(props) => darken(0.1, props.theme.primaryColor)};

  background: linear-gradient(
    to bottom,
    ${(props) => lighten(0.25, props.theme.primaryColor)},
    ${(props) => props.theme.primaryColor}
  );

  padding: 12px 30px;
  font-size: 15px;
  outline: 0;
  cursor: pointer;
  font-weight: bold;

  &:active, &:focus {
    outline: 0;
  }

  &:hover {
    background: linear-gradient(
      to bottom,
      ${(props) => lighten(0.3, props.theme.primaryColor)},
      ${(props) => props.theme.primaryColor}
    );

    box-shadow: 0px 0px 20px 0px ${(props) => transparentize(0.8, props.theme.primaryColor)};
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
