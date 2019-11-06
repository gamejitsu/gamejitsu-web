import { Box, Text } from 'rebass'
import { Button, Card } from '~/components'
import PropTypes from 'prop-types'
import React from 'react'

const ReviewsCard = ({ replayReview }) => (
  <Card>
    <Box p={3} mr="auto">
      <Text p={2}>Review</Text>
      <Text p={2}>Review Id: {replayReview.id}</Text>
      <Text p={2}>Match ID: {replayReview.matchId}</Text>
      <Text p={2}>Skill Level: {replayReview['skill-level']}</Text>
    </Box>
    <Box alignSelf='center' pr={3}>
      <Button onClick={() => {}} text="Pending review by..." />
      <Button onClick={() => {}} text="Cancel" />
    </Box>
  </Card>
)

ReviewsCard.propTypes = {
  replayReview: PropTypes.object,
}

export default ReviewsCard
