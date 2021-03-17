import React, { useState } from "react"
import styled from "styled-components"
import SideBar from "./Sidebar"
import { down } from "customUtils"

interface StyledBurgerProps {
  isOpen: boolean
}

const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: relative;
  z-index: 20;
  display: none;
  cursor: pointer;

  ${down("sm")} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }) => (isOpen ? "#ccc" : "#ccc")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform 0.4s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transition: transform 0s linear;
      transform: ${({ isOpen }) => (isOpen ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideBar isOpen={isOpen} />
    </>
  )
}

export default Burger
