import { Flex, Box, Text } from "rebass"
import { Button, Card } from "gamejitsu/components"
import React, { FunctionComponent } from "react"
import Router from "next/router"
import { Review } from "gamejitsu/models"

const goToReviewPage = (id: string | undefined) => {
  Router.push("/coach-reviews/" + id)
}

interface Props {
  review: Review
}

const CoachReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Card>
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Review</Text>
        <Text p={2}>User:</Text>
        <Text p={2}>Review Request Id: {review.id}</Text>
      </Box>
      <Box alignSelf="center" pr={3}>
        <Button
          onClick={() => {
            goToReviewPage(review.id)
          }}
          text="Complete review"
        />
      </Box>
    </Flex>
  </Card>
)

export default CoachReviewCard
