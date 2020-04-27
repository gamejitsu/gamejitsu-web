import React, { FunctionComponent } from "react"

import { Button, Card } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"
import { ReviewRequest } from "gamejitsu/api/resources/review-request"

interface Props {
  reviewRequest: ReviewRequest
}

const ReviewRequestCard: FunctionComponent<Props> = ({ reviewRequest }) => (
  <Card>
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Review Request</Text>
        <Text p={2}>Match ID: {reviewRequest.replayId}</Text>
        <Text p={2}>Skill Level: {reviewRequest.skillLevel}</Text>
      </Box>
      <Box alignSelf="center" pr={3}>
        <Text>State todo</Text>
        <Button onClick={() => {}} text="Cancel" />
      </Box>
    </Flex>
  </Card>
)

export default ReviewRequestCard
