import { FunctionComponent, useContext } from "react"
import styled from "styled-components"
import { down } from "customUtils"
import { Box, Flex } from "rebass/styled-components"
import { UserContext } from "gamejitsu/contexts"
import UserEnitiy from "./entities/UserEntity"
import AnonymousEntity from "./entities/AnonymousEntity"
import CoachEntity from "./entities/CoachEntity"

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

const SideBar: FunctionComponent<SideBarProps> = ({ isOpen }) => {
  const user = useContext(UserContext)
  let loggedEntity = <AnonymousEntity />
  if (user) {
    loggedEntity = user?.coachId ? <CoachEntity user={user} /> : <UserEnitiy user={user} />
  }
  return <Ul isOpen={isOpen}>{loggedEntity}</Ul>
}

export default SideBar
