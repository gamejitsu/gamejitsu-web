import styled from "styled-components"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { Box, Flex } from "rebass/styled-components"
import { FunctionComponent } from "react"
import { transparentize } from "polished"

interface MenuLinkProps {
  href: string
  text: string
}

const MenuElement = styled(Box)`
  font-weight: bold;
  transition: all 0.15s ease-in-out;
  font-size: 11px;
  letter-spacing: 1px;
`

interface InnerElementProps {
  isActive: boolean
}

const InnerMenuElement = styled.div<InnerElementProps>`
  position: relative;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  &::before {
    background-color: ${(props) => transparentize(0.5, props.theme.colors.textColor)};
    content: "";
    height: 3px;
    margin-top: 3px;
    left: 0;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 100%;
    transition: opacity 0.2s;
    width: 100%;
  }

  &:hover::before {
    opacity: 1;
  }
`

const MenuLink: FunctionComponent<MenuLinkProps> = ({ text, href }) => {
  const router = useRouter()
  const isActive = router && router.pathname === href
  return (
    <Flex>
      <MenuElement px={3} py={[4, 4, 4, 4, 4]}>
        <InnerMenuElement isActive={isActive}>
          <NextLink href={href}>
            <a>{text}</a>
          </NextLink>
        </InnerMenuElement>
      </MenuElement>
    </Flex>
  )
}

export default MenuLink
