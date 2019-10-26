import React from 'react'
import { Button, Card } from '~/components'
import { HeroImage } from '.'
import { Box, Flex, Text } from 'rebass'

const RecentMatchesCard = ({ children }) => (
  <Card>
    <Box p={3} mr="auto">
      <Text p={2}>Test Recent Matches Card</Text>
      <Text p={2}>MatchId: {children.matchId}</Text>
    </Box>
    <Box p={3} mr="auto">
      <div class="Grid">
        <HeroImage src={children.playersDire[0].image}></HeroImage>
        <HeroImage src={children.playersDire[1].image}></HeroImage>
        <HeroImage src={children.playersDire[2].image}></HeroImage>
        <HeroImage src={children.playersDire[3].image}></HeroImage>
        <HeroImage src={children.playersDire[4].image}></HeroImage>
      </div>
      <div class="Grid">
      <HeroImage src={children.playersRadiant[0].image}></HeroImage>
      <HeroImage src={children.playersRadiant[1].image}></HeroImage>
      <HeroImage src={children.playersRadiant[2].image}></HeroImage>
      <HeroImage src={children.playersRadiant[3].image}></HeroImage>
      <HeroImage src={children.playersRadiant[4].image}></HeroImage>
      </div>
    </Box>
    <Box alignSelf="center" pr={3}>
      <Button text="Request Review" />
    </Box>
  </Card>
)

export default RecentMatchesCard
