import { Flex, Box, Text } from "rebass"
import { Button, Card } from "gamejitsu/components"
import PropTypes from "prop-types"
import React from "react"
import Router from "next/router"

const goToReviewPage = (id: any) => {
  Router.push("/reviews/" + id)
}

const ReviewCard = ({ review }: any) => (
  <Card>
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Review</Text>
        <Text p={2}>Review Id: {review.id}</Text>
        <Text p={2}>Match ID: {review.matchId}</Text>
        <Text p={2}>Skill Level: {review.skillLevel}</Text>
      </Box>
      <Box alignSelf="center" pr={3}>
        <Button
          onClick={() => {
            goToReviewPage(review.id)
          }}
          text="See completed review"
        />
      </Box>
    </Flex>
  </Card>
)

ReviewCard.propTypes = {
  review: PropTypes.object
}

export default ReviewCard
