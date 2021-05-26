import styled, { css } from "styled-components"
import React, { FunctionComponent } from "react"
import { lighten, darken } from "polished"
import Link from "next/link"
import { down } from "customUtils"

interface Props {
  text: string
  onClick?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void
  type?: "submit" | "reset" | "button"
  disabled?: boolean
  href?: string
  color?: string
  className?: "normal" | "new" | "alternative" | "dark" | "bw" | "new sign-in"
  icon?: React.ReactNode | null | undefined
}

interface BaseProps {
  color?: string
  disabled?: boolean
}

const baseStyles = css<BaseProps>`
  margin-left: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-right: 4px;
  display: flex;
  line-height: 1;
  padding: 10px 20px 10px 20px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  transition: all 0.07s ease-in-out;
  border: 2px solid ${(props) => (props.color ? props.color : props.theme.colors.primaryColor)};
  font-family: ${(props) => props.theme.textFont};
  border-radius: ${(props) => props.theme.borderRadius};

  &:hover {
    text-decoration: none;
  }

  ${down("md")} {
    font-size: 12px;
  }
`

const BtnNormalStyles = css<BaseProps>`
  box-shadow: inset 0px -3px 0px 0px ${(props) => (props.color ? darken(0.1, props.color) : darken(0.1, props.theme.colors.primaryColor))};
  color: ${(props) => props.theme.colors.backgroundColor};

  svg * {
    stroke: ${(props) => props.theme.colors.backgroundColor};
    fill: ${(props) => props.theme.colors.backgroundColor};
  }

  background: linear-gradient(
    to bottom,
    ${(props) =>
      props.color ? lighten(0.15, props.color) : lighten(0.05, props.theme.colors.primaryColor)},
    ${(props) => (props.color ? props.color : props.theme.colors.primaryColor)}
  );

  &:hover {
    box-shadow: inset 0px -3px 0px 0px ${(props) => (props.color ? darken(0.1, props.color) : darken(0.1, props.theme.colors.primaryColor))};
    background-image: linear-gradient(
      to bottom,
      ${(props) =>
        props.color ? lighten(0.25, props.color) : lighten(0.25, props.theme.colors.primaryColor)},
      ${(props) => (props.color ? props.color : props.theme.colors.primaryColor)}
    );
  }

  &:active {
    box-shadow: inset 0px 3px 0px 0px
      ${(props) => darken(0.1, props.color ? props.color : props.theme.colors.primaryColor)};
    background-image: linear-gradient(
      to bottom,
      ${(props) => (props.color ? props.color : props.theme.colors.primaryColor)},
      ${(props) =>
        props.color ? darken(0.1, props.color) : darken(0.1, props.theme.colors.primaryColor)}
    );
  }
`

const BtnNewStyles = css<BaseProps>`
  background: transparent;
  color: ${(props) => props.theme.colors.primaryColor};

  svg * {
    stroke: ${(props) => props.theme.colors.primaryColor};
    fill: ${(props) => props.theme.colors.primaryColor};
  }

  &:hover {
    color: ${(props) => props.theme.colors.lightBackgroundColor};
    box-shadow: inset 0px -3px 0px 0px ${(props) => darken(0.1, props.theme.colors.primaryColor)};
    background-image: linear-gradient(
      to bottom,
      ${(props) => lighten(0.25, props.theme.colors.primaryColor)},
      ${(props) => props.theme.colors.primaryColor}
    );

    svg * {
      stroke: ${(props) => props.theme.colors.lightBackgroundColor};
      fill: ${(props) => props.theme.colors.lightBackgroundColor};
    }
  }

  &:active {
    box-shadow: inset 0px 3px 0px 0px ${(props) => darken(0.1, props.theme.colors.primaryColor)};
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => darken(0.1, props.theme.colors.primaryColor)}
    );
  }
`

const BtnAlternativeStyles = css<BaseProps>`
  background: ${(props) => props.theme.colors.lightBackgroundColor};
  border: 2px solid ${(props) => props.theme.colors.lightBackgroundColor};
  color: white;

  svg * {
    stroke: white;
    fill: white;
  }

  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => lighten(0.25, props.theme.colors.primaryColor)},
      ${(props) => props.theme.colors.primaryColor}
    );
    border: 2px solid ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.lightBackgroundColor};
    svg * {
      stroke: ${(props) => props.theme.colors.lightBackgroundColor};
      fill: ${(props) => props.theme.colors.lightBackgroundColor};
    }
    box-shadow: inset 0px -3px 0px 0px ${(props) => darken(0.1, props.theme.colors.primaryColor)};
  }

  &:active {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => darken(0.1, props.theme.colors.primaryColor)}
    );
    box-shadow: inset 0px 3px 0px 0px ${(props) => darken(0.1, props.theme.colors.primaryColor)};
  }
`

const BtnDarkStyles = css<BaseProps>`
  background: ${(props) => props.theme.colors.backgroundColor};
  border: 2px solid #000;
  color: white;

  svg * {
    stroke: white;
    fill: white;
  }

  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => lighten(0.25, props.theme.colors.primaryColor)},
      ${(props) => props.theme.colors.primaryColor}
    );
    color: ${(props) => props.theme.colors.lightBackgroundColor};
    border: 2px solid ${(props) => props.theme.colors.primaryColor};
    svg * {
      stroke: ${(props) => props.theme.colors.lightBackgroundColor};
      fill: ${(props) => props.theme.colors.lightBackgroundColor};
    }

    box-shadow: inset 0px -3px 0px 0px ${(props) => darken(0.1, props.theme.colors.primaryColor)};
  }

  &:active {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.primaryColor},
      ${(props) => darken(0.1, props.theme.colors.primaryColor)}
    );

    box-shadow: inset 0px 3px 0px 0px ${(props) => darken(0.1, props.theme.colors.primaryColor)};
  }
`

const BtnBWStyles = css<BaseProps>`
  background: ${(props) => props.theme.colors.lightBackgroundColor};
  border: 2px solid ${(props) => props.theme.colors.lightBackgroundColor};
  color: white;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.lightBackgroundColor},
      ${(props) => darken(0.02, props.theme.colors.lightBackgroundColor)}
    );
    border: 2px solid ${(props) => props.theme.colors.primaryColor};
    color: white;
    box-shadow: inset 0px -3px 0px 0px ${(props) => darken(0.1, props.theme.colors.lightBackgroundColor)};
  }

  &:active {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.lightBackgroundColor},
      ${(props) => darken(0.07, props.theme.colors.lightBackgroundColor)}
    );
    box-shadow: inset 0px 3px 0px 0px
      ${(props) => darken(0.11, props.theme.colors.lightBackgroundColor)};
  }
`

const ButtonContent = styled.button`
  ${baseStyles}

  &.new {
    ${BtnNewStyles}
  }

  &.normal {
    ${BtnNormalStyles}
  }

  &.alternative {
    ${BtnAlternativeStyles}
  }

  &.dark {
    ${BtnDarkStyles}
  }

  &.bw {
    ${BtnBWStyles}
  }
`

const LinkContent = styled.a`
  ${baseStyles}

  &.new {
    ${BtnNewStyles}
  }

  &.normal {
    ${BtnNormalStyles}
  }

  &.alternative {
    ${BtnAlternativeStyles}
  }

  &.dark {
    ${BtnDarkStyles}
  }

  &.bw {
    ${BtnBWStyles}
  }
`

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const Button: FunctionComponent<Props> = ({ text, href, type, onClick, color, icon, ...props }) => {
  return (
    <ButtonWrapper>
      {href ? (
        <Link href={href}>
          <LinkContent {...props}>
            {icon ? icon : null}
            {text}
          </LinkContent>
        </Link>
      ) : (
        <ButtonContent
          type={type}
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            if (onClick) onClick(event)
          }}
          color={color}
          {...props}
        >
          {icon ? icon : null}
          {text}
        </ButtonContent>
      )}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  type: "button",
  className: "normal",
  disabled: false
}

export default Button
