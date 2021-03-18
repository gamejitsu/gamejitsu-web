import React, { FunctionComponent, useContext, useRef, useEffect } from "react"
import styled from "styled-components"
import { down } from "customUtils"
import { UserContext } from "gamejitsu/contexts"
import UserEnitiy from "./entities/UserEntity"
import AnonymousEntity from "./entities/AnonymousEntity"
import CoachEntity from "./entities/CoachEntity"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

interface SideBarProps {
  isOpen: boolean
}

interface UlProps {
  isOpen: boolean
}

const Overlay = styled.div<UlProps>`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 50, 0.6);
  transition: all 1s;
`

const Ul = styled.div<UlProps>`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  overflow-y: auto;

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
    bottom: 0;
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
  const sidebarRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (sidebarRef && sidebarRef.current != null) {
      isOpen ? disableBodyScroll(sidebarRef.current) : enableBodyScroll(sidebarRef.current)
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isOpen])

  let loggedEntity = <AnonymousEntity />
  if (user) {
    loggedEntity = user?.coachId ? <CoachEntity user={user} /> : <UserEnitiy user={user} />
  }
  return (
    <>
      <Overlay isOpen={isOpen}></Overlay>
      <Ul ref={sidebarRef} isOpen={isOpen}>
        {loggedEntity}
      </Ul>
    </>
  )
}

export default SideBar
