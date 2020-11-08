import React, { FunctionComponent } from "react"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass"
import { DecoratedReviewRequest } from "gamejitsu/models/review-request"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { prices } from "../../../../public/prices"

interface Props {
  reviewRequest: DecoratedReviewRequest | undefined
}

const skillLevels = SkillLevel.types.map((t) => t.value)

const ReviewRequestCard: FunctionComponent<Props> = ({ reviewRequest }) => (
  <Box width="1200px">
    <Card>
      <Flex>
        <Box p={3} mr="auto" width={1 / 3}>
          <Text p={2}>
            Skill Level: {prices[skillLevels.indexOf(reviewRequest?.skillLevel as SkillLevel)].name}{" "}
            (above {prices[skillLevels.indexOf(reviewRequest?.skillLevel as SkillLevel)].mmr} MMR)
          </Text>
          <Text p={2}>Comment: {reviewRequest?.comment}</Text>
        </Box>
        <Box p={3} mr="auto" width={1 / 3}>
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

export default ReviewRequestCard
