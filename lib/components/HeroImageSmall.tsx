import styled from "styled-components"

import { FunctionComponent, useContext } from "react"
import { Player } from "gamejitsu/api/types/player"
import { UserContext } from "gamejitsu/contexts"
import { Position, Tooltip } from "@blueprintjs/core"

interface Props {
  player: Player
}

interface ContentProps {
  isYourHero: boolean
}

const Content = styled.img<ContentProps>`
  width: 40px;
  border: ${(props) => (props.isYourHero ? "1px" : "0px")} solid
    ${(props) => props.theme.colors.primaryColor};
`

const HeroImageSmall: FunctionComponent<Props> = ({ player }) => {
  const user = useContext(UserContext)
  const isYourHero = player?.steamId === user?.steamId
  const heroName = isYourHero ? player.heroName + " (you)" : player.heroName

  return (
    <Tooltip content={heroName} position={Position.RIGHT}>
      <Content src={player.heroPortraitUrl} isYourHero={isYourHero} />
    </Tooltip>
  )
}

export default HeroImageSmall
