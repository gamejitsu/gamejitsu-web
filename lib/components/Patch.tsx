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
  border: 3px solid white;
  color: white;
  transition: all 0.05s ease-in-out;

  background: transparent;

  padding: 10px 25px 10px 25px;
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
