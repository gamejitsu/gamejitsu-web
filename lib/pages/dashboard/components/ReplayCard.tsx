import React, { useContext, FunctionComponent } from "react"

import { Button, Card, Link } from "gamejitsu/components"
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
          <Link href={`/review-requests/${replay.id}`}>Request Review Link</Link>
          <Button
            onClick={() => {
              //onSelectReplay({ replay })
            }}
            text="Request Review"
          />
        </Box>
      </Flex>
    </Card>
  )
}

export default RecentMatchesCard
