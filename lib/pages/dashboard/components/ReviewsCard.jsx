import { Flex, Box, Text } from 'rebass'
import { Button, Card } from '~/components'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'

const goToReviewPage = id => {
  Router.push('/review/' + id)
}

const ReviewsCard = ({ replayReview }) => (
  <Card>
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Review</Text>
        <Text p={2}>Review Id: {replayReview.id}</Text>
        <Text p={2}>Match ID: {replayReview.matchId}</Text>
        <Text p={2}>Skill Level: {replayReview['skill-level']}</Text>
      </Box>
      <Box alignSelf="center" pr={3}>
        <Button
          onClick={() => {
            goToReviewPage(replayReview.id)
          }}
          text="See completed review"
        />
        <Button onClick={() => {}} text="Cancel" />
      </Box>
    </Flex>
  </Card>
)

ReviewsCard.propTypes = {
  replayReview: PropTypes.object
}

export default ReviewsCard
