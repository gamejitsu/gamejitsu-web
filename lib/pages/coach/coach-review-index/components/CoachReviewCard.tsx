import React, { FunctionComponent } from "react"

import { Button, Card } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"
import { Review } from "gamejitsu/api/resources/review"

interface Props {
  review: Review
}

const CoachReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Card title="Reviews">
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Review</Text>
        <Text p={2}>User:</Text>
        <Text p={2}>Review Request Id: {review.id}</Text>
      </Box>
      <Box alignSelf="center" pr={3}>
        <Button href={"/coach-reviews/" + review.id} text="Complete review" />
      </Box>
    </Flex>
  </Card>
)

export default CoachReviewCard
