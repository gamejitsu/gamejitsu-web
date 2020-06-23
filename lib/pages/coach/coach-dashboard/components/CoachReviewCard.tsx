import React, { FunctionComponent } from "react"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"
import { DecoratedReview } from "gamejitsu/models/review"

interface Props {
  review: DecoratedReview
}

const CoachReviewCard: FunctionComponent<Props> = ({ review }) => (
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
        <Button href={"/coach-reviews/" + review.id} text="Cancel review" />
      </Box>
    </Flex>
  </Card>
)

export default CoachReviewCard
