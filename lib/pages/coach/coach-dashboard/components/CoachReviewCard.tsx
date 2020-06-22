import React, { FunctionComponent } from "react"

import { Button, Card, HeroImage } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"
import { Review } from "gamejitsu/api/resources/review"
import { ReviewRequest } from "gamejitsu/api/resources/review-request"
import { Replay } from "gamejitsu/api/resources/replay"

interface Props {
  review: Review
  reviewRequest?: ReviewRequest
  replay?: Replay
}

const CoachReviewCard: FunctionComponent<Props> = ({ review, reviewRequest, replay }) => (
  <Card>
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Skill Level:</Text>
        <Text p={2}>Comment: </Text>
      </Box>
      <Box p={3} mr="auto">
      </Box>
      <Box alignSelf="center" pr={3}>
        <Button href={"/coach-reviews/" + review.id} text="Complete review" />
        <Button href={"/coach-reviews/" + review.id} text="Cancel review" />
      </Box>
    </Flex>
  </Card>
)

export default CoachReviewCard
