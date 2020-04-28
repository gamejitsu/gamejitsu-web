import { Flex, Box, Text } from "rebass"
import React, { FunctionComponent } from "react"
import Router from "next/router"
import { Button, Card } from "gamejitsu/components"
import { Review } from "gamejitsu/api/resources/review"

interface Props {
  review: Review
}

const goToReviewPage = (id?: string) => {
  Router.push("/reviews/" + id)
}

const ReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Card title="Completed reviews">
    <Flex>
      <Box p={3} mr="auto">
        <Text p={2}>Review</Text>
        <Text p={2}>Review Id: {review.id}</Text>
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

export default ReviewCard
