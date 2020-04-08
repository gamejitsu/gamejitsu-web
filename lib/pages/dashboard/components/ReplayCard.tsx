import React, { useContext, FunctionComponent } from "react"
import ReactTooltip from "react-tooltip"

import { Button, Card } from "gamejitsu/components"
import { DeserializedReplay } from "gamejitsu/models/replay"
import { Flex, Box, Text } from "rebass"
import { HeroImage } from "."
import { UserContext } from "gamejitsu/contexts"

interface Props {
  replay: DeserializedReplay
}

const RecentMatchesCard: FunctionComponent<Props> = ({ replay }) => {
  const user = useContext(UserContext)
  return (
    <Card>
      <ReactTooltip place="top" type="light" effect="solid" />
      <Flex flexDirection="row">
        <Box p={3} mr="auto">
          <Text p={2}>User ID: {user?.id}</Text>
          <Text p={2}>MatchId: {replay.matchId}</Text>
          <Text p={2}>playedAt: {new Date(replay.playedAt).toUTCString()}</Text>
        </Box>
        <Box p={3} mr="auto">
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
        </Box>
        <Box alignSelf="center" pr={3}>
          <Button href={`/review-requests/${replay.id}`} text="Request Review" />
        </Box>
      </Flex>
    </Card>
  )
}

export default RecentMatchesCard
