import styled from "styled-components"
import { Flex } from "rebass"
import { FunctionComponent, useContext } from "react"
import { DecoratedReplay } from "gamejitsu/models/replay"
import { UserContext } from "gamejitsu/contexts"
import { Tooltip2 } from "@blueprintjs/popover2"
import { Player } from "gamejitsu/api/types/player"

interface MatchHeroesProps {
  replay: DecoratedReplay
}

interface HeroPicProps {
  player: Player
}

const HeroPic: FunctionComponent<HeroPicProps> = ({player}) => {

  interface PictureContainerProps {
    isYourHero: boolean
    heroPortraitUrl: string
  }
  
  const PictureContainer = styled.div<PictureContainerProps>`
    opacity: 0.85;
    background-size: cover;
    background-image: url("${(props) => props.heroPortraitUrl}");
    width: 19.5%;
    cursor: pointer;
    border-radius: 3px;
    border: ${(props) =>
      props.isYourHero
        ? `2px solid  ${props.theme.primaryColor}`
        : `1px solid ${props.theme.textColor}`};

    &:hover{
      opacity: 1;
    }
  `
  const TooltipArea = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
  `
   const user = useContext(UserContext)
   const isYourHero = player?.steamId === user?.steamId
   const heroName = isYourHero ? player.heroName + " (you)" : player.heroName

  return (
    <PictureContainer isYourHero={isYourHero} heroPortraitUrl={player.heroPortraitUrl}>
      <Tooltip2 content={heroName} targetTagName={"div"} className={"h100"}>
        <TooltipArea />
      </Tooltip2>
    </PictureContainer>
  )
}

 const MatchHeroes: FunctionComponent<MatchHeroesProps> = ({replay}) => {

  const Wrapper = styled(Flex)`
    padding-top: 20%;
    position: relative;
  `

  const Container = styled(Flex)`
    top: 0;
    right: 0;
    position: absolute;
  `

  return (
    <Wrapper width={"100%"} flexDirection={"column"}>
      <Container width={"100%"} height={"100%"} flexWrap={"wrap"}>
        <Flex justifyContent={"space-between"} flexWrap={"wrap"} width={"100%"} height={"47%"}>
          {replay.playersDire.map((player, index) => {
            const key = player.steamId ? player.steamId : index.toString()
            return <HeroPic key={key} player={player} />
          })}
        </Flex>
        <Flex justifyContent={"space-between"} flexWrap={"wrap"} width={"100%"} height={"47%"}>
          {replay.playersRadiant.map((player, index) => {
            const key = player.steamId ? player.steamId : index.toString()
            return <HeroPic key={key} player={player} />
          })}
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default MatchHeroes
