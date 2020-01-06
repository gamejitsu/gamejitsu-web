import React, { FunctionComponent } from "react"
import styled from "styled-components"

interface Props {
  onClick: () => void
}

const Content = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`

const Image = styled.img`
  width: 80%;
`

const SteamButton: FunctionComponent<Props> = ({ onClick }) => (
  <Content onClick={onClick}>
    <Image src="/images/sits_01.png" />
  </Content>
)

export default SteamButton
