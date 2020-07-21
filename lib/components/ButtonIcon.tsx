import styled, { css } from "styled-components"
import { FunctionComponent } from "react"
import { lighten, darken } from "polished"
import Link from "next/link"
import { Button as BPButton, Classes } from "@blueprintjs/core"
import { Box } from "rebass"
import React from "react"

interface Props {
  text: string
  onClick?: () => void
  type?: "submit" | "reset" | "button"
  disabled?: boolean
  href?: string
  icon?: any
}

import SteamSVG from "../../svgs/steam-icon-new-3.svg"

const baseStyles = css`
  display: inline-flex;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  transition: all 0.05s ease-in-out;

  background: transparent;

  padding: 7px 18px 7px 18px;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => lighten(0.25, props.theme.primaryColor)},
      ${(props) => props.theme.primaryColor}
    );
    color: ${(props) => props.theme.lightBackgroundColor};

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

    outline: none;
    font-family: ${(props) => props.theme.textFont};

    &:active {
      outline: none;
    }
    &:hover svg * {
      stroke: black;
      fill: black;
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

const ButtonIcon: FunctionComponent<Props> = ({ text, href, icon, type = "button", ...props }) =>
  href ? (
    <Link href={href}>
      <LinkContent {...props}>{text}</LinkContent>
    </Link>
  ) : (
    <ButtonContent type={type} {...props}>
      <Box alignSelf="center" verticalAlign="middle" mr={3} display="inline-block">
        <SteamSVG width="40" height="25" />
      </Box>
      {text}
    </ButtonContent>
  )

export default ButtonIcon
