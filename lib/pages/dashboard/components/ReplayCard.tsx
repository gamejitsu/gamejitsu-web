import React, { useContext, FunctionComponent } from "react"
import { formatDistanceToNow } from "date-fns"

import { Button, Card } from "gamejitsu/components"
import styled from "styled-components"

import { DecoratedReplay } from "gamejitsu/models/replay"
import { Player } from "gamejitsu/api/types/player"
import { Flex, Box, Text } from "rebass"
import { HeroImage } from "."
import { UserContext } from "gamejitsu/contexts"

interface Props {
  replay: DecoratedReplay
}

interface UserImageProps {
  userPlayer: Player
}

const UserImageContent = styled.img`
  width: 120px;
  display: block;
`

const UserImage: FunctionComponent<UserImageProps> = ({ userPlayer }) => {
  return <UserImageContent src={userPlayer.heroPortraitUrl} />
}

const RecentMatchesCard: FunctionComponent<Props> = ({ replay }) => {
  const user = useContext(UserContext)
  const players = replay.playersDire.concat(replay.playersRadiant)
  const currentPlayer = players.find((player) => {
    const isYourHero = player?.steamId === user?.steamId
    return isYourHero
  })
  if (!currentPlayer) {
    throw new Error("player hero not found")
  }

  return (
    <Flex flexDirection="row">
      <Box mr="auto">
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <Box>
            <UserImage userPlayer={currentPlayer} />
            You played as {currentPlayer.heroName}
            <Text p={2}>{formatDistanceToNow(new Date(replay.playedAt), { addSuffix: true })}</Text>
          </Box>
        </Flex>
      </Box>
      <Box p={3}>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <div>
              {replay.playersDire.map((player, index) => {
                const key = player.steamId ? player.steamId : index.toString()
                return <HeroImage key={key} player={player} />
              })}
            </div>
            <div>
              {replay.playersRadiant.map((player, index) => {
                const key = player.steamId ? player.steamId : index.toString()
                return <HeroImage key={key} player={player} />
              })}
            </div>
            <Button href={`/review-requests/${replay.id}`} text="Request Review" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default RecentMatchesCard
