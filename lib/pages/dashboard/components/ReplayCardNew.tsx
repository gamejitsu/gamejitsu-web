import React, { useContext, FunctionComponent } from "react"
import { formatDistanceToNow } from "date-fns"
import { Button } from "gamejitsu/components"
import styled from "styled-components"
import { Flex, Box } from "rebass"

import { DecoratedReplay } from "gamejitsu/models/replay"
import { UserContext } from "gamejitsu/contexts"
import { HeroImage } from "."

import { breakpointDown } from "../../../utils/mediaQueryDevices"

interface Props {
  replay: DecoratedReplay
}

const Container = styled(Box)`
  width: 49%;
  border: 1px solid ${(props) => props.theme.activeColor};
  position: relative;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.lightBackgroundColor};
  opacity: 0.9;

  @media ${breakpointDown.lg} {
    width: 100%;
  }
`

const HorizontalLine = styled.div`
  width: 95%;
  height: 1px;
  background-color: ${(props) => props.theme.textColorDark};
  margin: 0 auto;
`

const Header = styled(Flex)`
  text-align: center;
  vertical-align: middle;
`

const HeroImageWrapper = styled(Flex)`
  margin-right: 16px;

  @media ${breakpointDown.lg} {
    overflow: hidden;
  }
`

const GameInfoWinner = styled.h3`
  color: ${(props) => props.theme.primaryColor};
`

const GameInfoLoser = styled.h3`
  color: red;
`

const RecentMatchesCardNew: FunctionComponent<Props> = ({ replay }) => {
  const user = useContext(UserContext)
  const players = replay.playersDire.concat(replay.playersRadiant)
  const currentPlayer = players.find((player) => {
    const isYourHero = player?.steamId === user?.steamId
    return isYourHero
  })
  if (!currentPlayer) {
    throw new Error("player hero not found")
  }
  const isPlayerRadiant = replay.playersDire.includes(currentPlayer)
  const currentPlayerWon = isPlayerRadiant ? replay.isRadiantWinner : !replay.isRadiantWinner

  return (
    <Container my={2}>
      <Header>
        <Box mt={3} ml={3} height="30px">
          Played {formatDistanceToNow(new Date(replay.playedAt), { addSuffix: true })}
        </Box>
        <Box mt={3} ml="auto" mr={3} height="30px">
          {currentPlayerWon ? (
            <GameInfoWinner>Game won</GameInfoWinner>
          ) : (
            <GameInfoLoser>Game lost</GameInfoLoser>
          )}
        </Box>
      </Header>
      <HorizontalLine />
      <Box px={3} pb={1} mt={4} mb={3}>
        <Flex alignItems="center" justifyContent="center">
          <Box>
            <Flex>
              {replay.playersDire.map((player, index) => {
                const key = player.steamId ? player.steamId : index.toString()
                return (
                  <HeroImageWrapper key={key}>
                    <HeroImage player={player} />
                  </HeroImageWrapper>
                )
              })}
            </Flex>
            <Flex>
              {replay.playersRadiant.map((player, index) => {
                const key = player.steamId ? player.steamId : index.toString()
                return (
                  <HeroImageWrapper mt={2} key={key}>
                    <HeroImage player={player} />
                  </HeroImageWrapper>
                )
              })}
            </Flex>
            <Flex alignItems="center">
              <Box mr="auto" mt={4}>
                <div>Played with {currentPlayer.heroName}</div>
                <div>Duration: {Math.floor(replay.duration / 60)} min</div>
              </Box>
              <Box mt={4}>
                <Button href={`/review-requests/${replay.id}`} text="REQUEST REVIEW" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default RecentMatchesCardNew
