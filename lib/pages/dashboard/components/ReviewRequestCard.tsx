import React, { FunctionComponent } from "react"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"
import { DecoratedReviewRequest } from "gamejitsu/models/review-request"

interface Props {
  reviewRequest: DecoratedReviewRequest | undefined
}

const ReviewRequestCard: FunctionComponent<Props> = ({ reviewRequest }) => (
  <Box width="1200px">
    <Card>
      <Flex>
        <Box p={3} mr="auto">
          <Text p={2}>Skill Level: {reviewRequest?.skillLevel}</Text>
          <Text p={2}>Comment: {reviewRequest?.comment}</Text>
        </Box>
        <Box p={3} mr="auto">
          <div>
            {reviewRequest?.replay.playersDire.map((player, index) => {
              const key = player.steamId ? player.steamId : index.toString()
              return <HeroImageSmall key={key} player={player} />
            })}
          </div>
          <div>
            {reviewRequest?.replay.playersRadiant.map((player, index) => {
              const key = player.steamId ? player.steamId : index.toString()
              return <HeroImageSmall key={key} player={player} />
            })}
          </div>
        </Box>
        <Box alignSelf="center" pr={3}>
          <Button onClick={() => {}} text="Cancel" />
        </Box>
      </Flex>
    </Card>
  </Box>
)
/**  <Flex>
    <Box p={3} mr="auto">
      <Text p={2}>Review Request</Text>
      <Text p={2}>Match ID: {reviewRequest.replayId}</Text>
      <Text p={2}>Skill Level: {reviewRequest.skillLevel}</Text>
    </Box>
    <Box alignSelf="center" pr={3}>
      <Text>State todo</Text>
      <Button onClick={() => {}} text="Cancel" />
    </Box>
  </Flex> */
export default ReviewRequestCard
