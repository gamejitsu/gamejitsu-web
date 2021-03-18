import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Card } from "gamejitsu/components"
import { Flex, Box, Text as RbText } from "rebass/styled-components"
import { DecoratedReviewRequest } from "gamejitsu/models/review-request"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { prices } from "../../../../public/prices"
import { reviewStatus } from "../../../../public/reviewStatus"
import { ReviewRequestStatus } from "gamejitsu/api/types/review-request-status"
import { MatchHeroes } from "gamejitsu/components"

interface Props {
  reviewRequest: DecoratedReviewRequest | undefined
}

const Text = styled(RbText)`
  b {
    font-weight: bold;
  }
`

const skillLevels = SkillLevel.types.map((t) => t.value)
const reviewRequestStatus = ReviewRequestStatus.types.map((t) => t.value)

const ReviewRequestCard: FunctionComponent<Props> = ({ reviewRequest }) => (
  <Box width="100%">
    <Card>
      <Flex justifyContent="space-between" flexWrap={"wrap"}>
        <Flex p={3} flex={"1 1 400px"} flexDirection={"column"}>
          <Text p={2}>
            <b>Skill Level:</b>{" "}
            {prices[skillLevels.indexOf(reviewRequest?.skillLevel as SkillLevel)].name} (above{" "}
            {prices[skillLevels.indexOf(reviewRequest?.skillLevel as SkillLevel)].mmr} MMR)
          </Text>
          <Text p={2}>
            <b>Status: </b>
            {
              reviewStatus[
                reviewRequestStatus.indexOf(reviewRequest?.status as ReviewRequestStatus)
              ].name
            }
          </Text>
          <Text p={2}>
            <b>Comment: </b> {reviewRequest?.comment ? reviewRequest.comment : "---"}
          </Text>
        </Flex>
        <Flex p={3} alignItems="center" flex={"0 1 300px"}>
          <Box width={"100%"} px={2}>
            {reviewRequest?.replay ? <MatchHeroes replay={reviewRequest.replay} /> : null}
          </Box>
        </Flex>
      </Flex>
    </Card>
  </Box>
)

export default ReviewRequestCard
