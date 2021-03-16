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
  width: 80px;
  border: ${(props) =>
    props.isYourHero
      ? `2px solid  ${props.theme.colors.primaryColor}`
      : `1px solid ${props.theme.colors.textColor}`};
  border-radius: 3px;
`

const HeroImage: FunctionComponent<Props> = ({ player }) => {
  const user = useContext(UserContext)
  const isYourHero = player?.steamId === user?.steamId
  const heroName = isYourHero ? player.heroName + " (you)" : player.heroName

  return (
    <Tooltip content={heroName} position={Position.RIGHT}>
      <Content src={player.heroPortraitUrl} isYourHero={isYourHero} />
    </Tooltip>
  )
}

export default HeroImage
