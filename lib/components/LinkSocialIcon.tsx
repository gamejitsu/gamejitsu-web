import styled from "styled-components"
import NextLink from "next/link"

import { FunctionComponent } from "react"
import { Box, Link } from "rebass"

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
  height: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
  }
`

const LinkSocialIcon: FunctionComponent<Props> = ({ href, src }) => (
  <Link href={href}>
    <SocialNetworkBarIcon src={src} />
  </Link>
)

export default LinkSocialIcon
