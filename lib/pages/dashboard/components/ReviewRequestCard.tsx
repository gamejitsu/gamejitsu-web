import { Flex, Box, Text } from 'rebass'
import { Button, Card } from 'gamejitsu/components'
import PropTypes from 'prop-types'
import React from 'react'

const ReviewRequestCard = ({ reviewRequest }) => (
  <Card>
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Review Request</Text>
        <Text p={2}>Match ID: {reviewRequest.matchId}</Text>
        <Text p={2}>Skill Level: {reviewRequest['skill-level']}</Text>
      </Box>
      <Box alignSelf="center" pr={3}>
        <Text>State todo</Text>
        <Button onClick={() => {}} text="Cancel" />
      </Box>
    </Flex>
  </Card>
)

ReviewRequestCard.propTypes = {
  reviewRequest: PropTypes.object
}

export default ReviewRequestCard
