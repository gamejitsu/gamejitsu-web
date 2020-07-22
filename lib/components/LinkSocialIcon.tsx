import styled from "styled-components"
import NextLink from "next/link"

import { FunctionComponent } from "react"
import { Box } from "rebass"

interface Props {
  href: string
  src: string
}

const Content = styled(Box)`
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  margin-bottom: 25px;
  &:hover {
    text-decoration: none;
    color: white;
  }
`

const SocialNetworkBarIcon = styled.img`
  width: 20px;
  position: absolute;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
  }
`

const LinkSocialIcon: FunctionComponent<Props> = ({ href, src }) => (
  <a href={href}>
    <SocialNetworkBarIcon src={src} />
  </a>
)

export default LinkSocialIcon
