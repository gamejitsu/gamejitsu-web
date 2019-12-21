import { Flex, Box, Text } from 'rebass'
import { Button, Card } from '~/components'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'

const goToReviewPage = id => {
  Router.push('/coach-reviews/' + id)
}

const CoachReviewCard = ({ reviewRequest }) => (
  <Card>
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Review</Text>
        <Text p={2}>User:</Text>
        <Text p={2}>Review Request Id: {reviewRequest.id}</Text>
        <Text p={2}>Match ID: {reviewRequest.matchId}</Text>
        <Text p={2}>Skill Level: {reviewRequest.skillLevel}</Text>
      </Box>
      <Box alignSelf="center" pr={3}>
        <Button
          onClick={() => {
            goToReviewPage(reviewRequest.id)
          }}
          text="Complete review"
        />
      </Box>
    </Flex>
  </Card>
)

CoachReviewCard.propTypes = {
  reviewRequest: PropTypes.object
}

export default CoachReviewCard
