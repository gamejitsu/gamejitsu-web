import React, { FunctionComponent } from "react"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"
import { DecoratedReview } from "gamejitsu/models/review"
import { deleteModel } from "gamejitsu/api"
import ReviewResource from "gamejitsu/api/resources/review"

interface Props {
  review: DecoratedReview
}

const onDelete = (review: DecoratedReview) => {
  deleteModel(ReviewResource, review)
}

const CoachReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Box width="1200px">
    <Card>
      <Flex>
        <Box p={3} mr="auto">
          <Text p={2}>Skill Level: {review.reviewRequest.skillLevel}</Text>
          <Text p={2}>Comment: {review.reviewRequest.comment}</Text>
        </Box>
        <Box p={3} mr="auto">
          <div>
            {review.replay.playersDire.map((player, index) => {
              const key = player.steamId ? player.steamId : index.toString()
              return <HeroImageSmall key={key} player={player} />
            })}
          </div>
          <div>
            {review.replay.playersRadiant.map((player, index) => {
              const key = player.steamId ? player.steamId : index.toString()
              return <HeroImageSmall key={key} player={player} />
            })}
          </div>
        </Box>
        <Box alignSelf="center" pr={3}>
          <Button href={"/coach-reviews/" + review.id} text="Complete review" />
          <Button onClick={onDelete.bind(null, review)} text="Cancel review" />
        </Box>
      </Flex>
    </Card>
  </Box>
)

export default CoachReviewCard
