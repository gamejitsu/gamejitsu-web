import React, { FunctionComponent } from "react"
import styled from "styled-components"

interface Props {
  onClick?: () => void
  href?: string
  imageSrc: string
  type?: "submit" | "reset" | "button"
}

const styles = () => `
  margin: 0;
  padding: 0;
  border: 0;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
`
const Button = styled.button(styles)

const Link = styled.a(styles)

const Image = styled.img`
  width: 100%;
`
const ImageButton: FunctionComponent<Props> = ({ onClick, imageSrc, type = "button", href = "" }) =>
  href != "" ? (
    <Link href={href}>
      <Image src={imageSrc} />
    </Link>
  ) : (
    <Button onClick={onClick} type={type}>
      <Image src={imageSrc} />
    </Button>
  )

export default ImageButton
