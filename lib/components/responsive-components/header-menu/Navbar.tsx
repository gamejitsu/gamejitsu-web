import { FunctionComponent, useContext } from "react"
import NextLink from "next/link"
import Burger from "./Burger"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"

const gamejitsuWritingImageSrc = "/images/gamejitsu-writing.svg"

const Nav = styled.nav`
  z-index: 25;
  position: relative;
  max-width: 1920px;
  width: 100%;
  margin: auto;
  align-items: center;
  min-height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Logo = styled(Flex)`
  filter: grayscale(1);
  cursor: pointer;
  max-width: 175px;
  transition: 0.25s filter ease-in-out;
  &:hover {
    filter: grayscale(0);
  }
`

const Navbar: FunctionComponent = () => {
  return (
    <Nav>
      <Box pl={[2, 2, 2, 3, 3]}>
        <Logo>
          <NextLink href="/">
            <img src={gamejitsuWritingImageSrc} style={{ width: "100%", height: "auto" }} />
          </NextLink>
        </Logo>
      </Box>
      <Burger />
    </Nav>
  )
}

export default Navbar
