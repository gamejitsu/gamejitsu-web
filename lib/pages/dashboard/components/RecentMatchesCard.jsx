import { Box, Text } from 'rebass'
import { Button, Card } from '~/components'
import { HeroImage } from '.'
import { UserContext } from '../../../components'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

const RecentMatchesCard = ({ replay, onSelectReplay }) => {
  const { user } = useContext(UserContext)

  return (
    <Card>
      <Box p={3} mr="auto">
        <Text p={2}>User ID: {user.id}</Text>
        <Text p={2}>MatchId: {replay.matchId}</Text>
        <Text p={2}>playedAt: {replay.playedAt}</Text>
      </Box>
      <Box p={3} mr="auto">
        <div className="Grid">
          <HeroImage src={replay.playersDire[0].image}></HeroImage>
          <HeroImage src={replay.playersDire[1].image}></HeroImage>
          <HeroImage src={replay.playersDire[2].image}></HeroImage>
          <HeroImage src={replay.playersDire[3].image}></HeroImage>
          <HeroImage src={replay.playersDire[4].image}></HeroImage>
        </div>
        <div className="Grid">
          <HeroImage src={replay.playersRadiant[0].image}></HeroImage>
          <HeroImage src={replay.playersRadiant[1].image}></HeroImage>
          <HeroImage src={replay.playersRadiant[2].image}></HeroImage>
          <HeroImage src={replay.playersRadiant[3].image}></HeroImage>
          <HeroImage src={replay.playersRadiant[4].image}></HeroImage>
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
    </Card>
  )
}

RecentMatchesCard.propTypes = {
  replay: PropTypes.object,
  onSelectReplay: PropTypes.func.isRequired
}

export default RecentMatchesCard
