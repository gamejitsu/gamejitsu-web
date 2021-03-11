import styled, { css } from "styled-components"
import { FunctionComponent } from "react"
import { lighten, darken } from "polished"

interface Props {
  text: string
  onClick?: () => void
  type?: "submit" | "reset" | "button"
  disabled?: boolean
  href?: string
}

const baseStyles = css`
  display: inline-flex;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: inset 0px -3px 0px 0px ${(props) => darken(0.1, props.theme.colors.primaryColor)};
  color: ${(props) => props.theme.colors.backgroundColor};
  transition: all 0.05s ease-in-out;

  background: linear-gradient(
    to bottom,
    ${(props) => lighten(0.15, props.theme.colors.primaryColor)},
    ${(props) => props.theme.colors.primaryColor}
  );

  padding: 12px 30px 14px 30px;
  font-size: 15px;
  font-weight: bold;
`

const LinkContent = styled.a`
  ${baseStyles}
  text-decoration: none;

  &:hover {
    cursor: default;
    text-decoration: none;
  }
`

const Patch: FunctionComponent<Props> = ({ text, href, type = "button", ...props }) => (
  <LinkContent {...props}>{text}</LinkContent>
)

export default Patch
