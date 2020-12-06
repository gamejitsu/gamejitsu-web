import React, { FunctionComponent } from "react"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"
import { DecoratedReview } from "gamejitsu/models/review"

interface Props {
  review: DecoratedReview
}

const CoachReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Box>
    <Card>
      <Flex justifyContent="space-between">
        <Box p={3}>
          <Text p={2}>Skill Level: {review.reviewRequest.skillLevel}</Text>
          <Text p={2}>Comment: {review.reviewRequest.comment}</Text>
        </Box>
        <Flex p={3} alignItems="center">
          <Box>
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
          </Flex>
          <Box alignSelf="center" pr={3}>
            <Button href={"/coach-reviews/" + review.id} text="Edit review" />
          </Box>
      </Flex>
    </Card>
  </Box>
)

export default CoachReviewCard
