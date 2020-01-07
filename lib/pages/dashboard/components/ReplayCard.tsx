import { Flex, Box, Text } from "rebass"
import React, { useContext, FunctionComponent } from "react"
import { Button, Card } from "gamejitsu/components"
import { UserContext } from "gamejitsu/contexts"
import { HeroImage } from "."
import { DeserializedReplay } from "./Page"

interface Props {
  replay: DeserializedReplay
  onSelectReplay: ({ replay }: { replay: DeserializedReplay }) => void
}

const RecentMatchesCard: FunctionComponent<Props> = ({ replay, onSelectReplay }) => {
  const user = useContext(UserContext)

  return (
    <Card>
      <Flex flexDirection="row">
        <Box p={3} mr="auto">
          <Text p={2}>User ID: {user?.id}</Text>
          <Text p={2}>MatchId: {replay.matchId}</Text>
          <Text p={2}>playedAt: {new Date(replay.playedAt).toUTCString()}</Text>
        </Box>
        <Box p={3} mr="auto">
          <div className="Grid">
            <HeroImage src={replay.playersDire[0].heroPortraitUrl}></HeroImage>
            <HeroImage src={replay.playersDire[1].heroPortraitUrl}></HeroImage>
            <HeroImage src={replay.playersDire[2].heroPortraitUrl}></HeroImage>
            <HeroImage src={replay.playersDire[3].heroPortraitUrl}></HeroImage>
            <HeroImage src={replay.playersDire[4].heroPortraitUrl}></HeroImage>
          </div>
          <div className="Grid">
            <HeroImage src={replay.playersRadiant[0].heroPortraitUrl}></HeroImage>
            <HeroImage src={replay.playersRadiant[1].heroPortraitUrl}></HeroImage>
            <HeroImage src={replay.playersRadiant[2].heroPortraitUrl}></HeroImage>
            <HeroImage src={replay.playersRadiant[3].heroPortraitUrl}></HeroImage>
            <HeroImage src={replay.playersRadiant[4].heroPortraitUrl}></HeroImage>
          </div>
        </Box>
        <Box alignSelf="center" pr={3}>
          <Button
            onClick={() => {
              onSelectReplay({ replay })
            }}
            text="Request Review"
          />
        </Box>
      </Flex>
    </Card>
  )
}

export default RecentMatchesCard
