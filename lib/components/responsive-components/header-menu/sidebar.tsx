import { FunctionComponent } from "react"
import styled from "styled-components"
import { down } from "customUtils"
import { ButtonTest } from "gamejitsu/components"
import SteamSVG from "../../../../svgs/steam-icon-new-3.svg"
import { Box, Flex } from "rebass/styled-components"

interface SideBarProps {
  isOpen: boolean
}

interface UlProps {
  isOpen: boolean
}

const Ul = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  ${down("sm")} {
    flex-flow: column nowrap;
    background-color: rgba(25, 27, 29, 0.925);
    position: fixed;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.7s ease-in-out;

    li {
      color: #fff;
    }
  }
`

const SteamIcon: FunctionComponent = () => {
  return (
    <Box
      alignSelf="center"
      verticalAlign="middle"
      mr={2}
      display="flex"
      width={"24px"}
      height={"15px"}
    >
      <SteamSVG height="100%" />
    </Box>
  )
}

const SideBar: FunctionComponent<SideBarProps> = ({ isOpen }) => {
  return (
    <Ul isOpen={isOpen}>
      <li>Bar</li>
      <li>Linnk</li>
      <li>Foo</li>
      <ButtonTest text={"SIGN IN"} className={"normal"} icon={<SteamIcon />} />
      <ButtonTest text={"SIGN IN"} className={"alternative"} icon={<SteamIcon />} />
      <ButtonTest text={"SIGN IN"} className={"normal"} />
      <ButtonTest text={"SIGN IN"} href={"#"} className={"new"} icon={<SteamIcon />} />
      <ButtonTest text={"SIGN IN"} href={"#"} className={"dark"} icon={<SteamIcon />} />
    </Ul>
  )
}

export default SideBar
