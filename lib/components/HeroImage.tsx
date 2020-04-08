import styled from "styled-components"

import { FunctionComponent, useContext } from "react"
import { Player } from "gamejitsu/models/replay"
import { UserContext } from "gamejitsu/contexts"

interface Props {
  player: Player
}

const Content = styled.img`
  width: 40px;
`

const HeroImage: FunctionComponent<Props> = ({ player }) => {
  const user = useContext(UserContext)
  const dataTip = player?.steamId === user?.steamId ? player.heroName + " (you)" : player.heroName
  return <Content data-tip={dataTip} src={player.heroPortraitUrl} />
}

export default HeroImage
