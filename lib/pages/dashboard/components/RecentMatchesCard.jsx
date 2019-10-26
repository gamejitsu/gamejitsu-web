import React from 'react'
import { Button, Card } from '~/components'
import { HeroImage } from '.'
import { Box, Flex, Text } from 'rebass'

const RecentMatchesCard = ({replay, user}) => (
  <Card>
    <Box p={3} mr="auto">
      <Text p={2}>User ID: {user.id}</Text>
      <Text p={2}>MatchId: {replay.matchId}</Text>
    </Box>
    <Box p={3} mr="auto">
      <div class="Grid">
        <HeroImage src={replay.playersDire[0].image}></HeroImage>
        <HeroImage src={replay.playersDire[1].image}></HeroImage>
        <HeroImage src={replay.playersDire[2].image}></HeroImage>
        <HeroImage src={replay.playersDire[3].image}></HeroImage>
        <HeroImage src={replay.playersDire[4].image}></HeroImage>
      </div>
      <div class="Grid">
      <HeroImage src={replay.playersRadiant[0].image}></HeroImage>
      <HeroImage src={replay.playersRadiant[1].image}></HeroImage>
      <HeroImage src={replay.playersRadiant[2].image}></HeroImage>
      <HeroImage src={replay.playersRadiant[3].image}></HeroImage>
      <HeroImage src={replay.playersRadiant[4].image}></HeroImage>
      </div>
    </Box>
    <Box alignSelf="center" pr={3}>
      <Button text="Request Review" />
    </Box>
  </Card>
)

export default RecentMatchesCard
