import React, { FunctionComponent } from "react"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass/styled-components"
import { DecoratedReview } from "gamejitsu/models/review"
import styled from "styled-components"
import { breakpointDown } from "../../../../utils/mediaQueryDevices"

interface Props {
  review: DecoratedReview
}

const InfoContainer = styled(Box)`
  flex: 1 1 50%;

  @media ${breakpointDown.sm} {
    flex: 1 1 100%;
  }
`

const HeroesAndCtaContainer = styled(Flex)`
  flex: 2 2 50%;

  @media ${breakpointDown.sm} {
    flex: 1 1 100%;
  }
`

const CoachReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Box>
    <Card>
      <Flex flexWrap={["wrap", "wrap", "nowrap"]}>
        <InfoContainer p={3}>
          <Text p={2}>Skill Level: {review.reviewRequest.skillLevel}</Text>
          <Text p={2}>Comment: {review.reviewRequest.comment}</Text>
        </InfoContainer>
        <HeroesAndCtaContainer p={3} alignItems="center" justifyContent={"space-between"}>
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
          <Box alignSelf="center" pr={3}>
            <Button href={"/coach-reviews/" + review.id} text="Edit review" />
          </Box>
        </HeroesAndCtaContainer>
      </Flex>
    </Card>
  </Box>
)

export default CoachReviewCard
