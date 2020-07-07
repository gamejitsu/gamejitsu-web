import React, { useContext, FunctionComponent } from "react"
import { formatDistanceToNow } from "date-fns"
import { Button } from "gamejitsu/components"
import styled from "styled-components"
import { Flex, Box } from "rebass"

import { DecoratedReplay } from "gamejitsu/models/replay"
import { UserContext } from "gamejitsu/contexts"
import { HeroImage } from "."

interface Props {
  replay: DecoratedReplay
}

const Container = styled(Box)`
  border: 1px solid ${(props) => props.theme.activeColor};
  position: relative;
  align-items: center;
  justify-content: center;
  display: grid | inline-grid;
  grid-template-rows: ... | ...;
  background: ${(props) => props.theme.lightBackgroundColor};
  z-index: 1;
  opacity: 0.9;
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

const Title = styled.h1`
  font-weight: bold;
  color: white;
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
  const currentPlayerWon = isPlayerRadiant ? replay.radiantWin : !replay.radiantWin

  return (
    <Box width="50%" mb={50} px={30}>
      <Container width="100%" height="100%" mb={2}>
        <Header>
          <Box mt={3} ml={3} height="30px">
            <Title>LATEST GAMES</Title>
          </Box>
          <Box mt={3} ml={3} height="30px">
            Played {formatDistanceToNow(new Date(replay.playedAt), { addSuffix: true })}
          </Box>
          <Box mt={3} ml="auto" mr={3} height="30px">
            { currentPlayerWon  ? <GameInfoWinner>Game won</GameInfoWinner> :  <GameInfoLoser>Game lost</GameInfoLoser>}
           
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
                    <Box mr={3}>
                      <HeroImage key={key} player={player} />
                    </Box>
                  )
                })}
              </Flex>
              <Flex>
                {replay.playersRadiant.map((player, index) => {
                  const key = player.steamId ? player.steamId : index.toString()
                  return (
                    <Box mt={2} mr={3}>
                      <HeroImage key={key} player={player} />
                    </Box>
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
    </Box>
  )
}

export default RecentMatchesCardNew
