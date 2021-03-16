import { FunctionComponent, useContext } from "react"
import { UserContext } from "gamejitsu/contexts"
import Burger from './burger';
import styled from 'styled-components'
import { Flex } from 'rebass/styled-components'

const gamejitsuWritingImageSrc = "/images/gamejitsu-writing.svg"

const Nav = styled.nav`
  z-index: 25;
  position: relative;
  max-width: 1920px;
  width: 100%;
  margin: auto;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
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
  const user = useContext(UserContext)
  return (
    <Nav>
      <Logo>
        <img src={gamejitsuWritingImageSrc} style={{width: "100%", height:"auto"}} />
      </Logo>
      <Burger />
    </Nav>
  )
}

export default Navbar