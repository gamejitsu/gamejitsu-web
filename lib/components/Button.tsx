import styled, { css } from "styled-components"
import { FunctionComponent } from "react"
import { lighten, darken } from "polished"
import Link from "next/link"
import { Button as BPButton, Classes } from "@blueprintjs/core"
import { breakpointDown } from "../utils/mediaQueryDevices"

interface Props {
  text: string
  onClick?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void
  type?: "submit" | "reset" | "button"
  disabled?: boolean
  href?: string
}

const baseStyles = css`
  display: inline-flex;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: inset 0px -3px 0px 0px ${(props) => darken(0.1, props.theme.primaryColor)};
  color: ${(props) => props.theme.backgroundColor};
  transition: all 0.05s ease-in-out;

  background: linear-gradient(
    to bottom,
    ${(props) => lighten(0.15, props.theme.primaryColor)},
    ${(props) => props.theme.primaryColor}
  );

  padding: 12px 30px 14px 30px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;

  @media ${breakpointDown.lg} {
    font-size: 12px;
  }

  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => lighten(0.25, props.theme.primaryColor)},
      ${(props) => props.theme.primaryColor}
    );

    box-shadow: inset 0px -3px 0px 0px ${(props) => darken(0.1, props.theme.primaryColor)};
  }

  &:active {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.primaryColor},
      ${(props) => darken(0.1, props.theme.primaryColor)}
    );

    box-shadow: inset 0px 3px 0px 0px ${(props) => darken(0.1, props.theme.primaryColor)};
    padding-bottom: 12px;
    margin-top: 2px;
  }
`

const ButtonContent = styled(BPButton)`
  &.${Classes.BUTTON} {
    ${baseStyles}

    border: 0;
    outline: none;
    font-family: ${(props) => props.theme.textFont};

    &:active {
      outline: none;
    }
  }
`

const LinkContent = styled.a`
  ${baseStyles}

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.backgroundColor};
  }
`

const Button: FunctionComponent<Props> = ({ text, href, type = "button", onClick, ...props }) =>
  href ? (
    <Link href={href}>
      <LinkContent {...props}>{text}</LinkContent>
    </Link>
  ) : (
    <ButtonContent
      type={type}
      onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (onClick) onClick(event)
      }}
      {...props}
    >
      {text}
    </ButtonContent>
  )

export default Button
