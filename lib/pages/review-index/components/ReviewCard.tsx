import { Flex, Box, Text } from "rebass"
import React, { FunctionComponent } from "react"
import Router from "next/router"
import styled from "styled-components"
import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { DecoratedReview } from "gamejitsu/models/review"
import { breakpointDown } from "../../../utils/mediaQueryDevices"

interface Props {
  review: DecoratedReview | undefined
}

const goToReviewPage = (id?: string) => {
  Router.push("/reviews/" + id)
}

const InfoContainer = styled(Box)`
  flex: 1 1 40%;

  @media ${breakpointDown.sm} {
    flex: 1 1 100%;
  }
`

const HeroesAndCtaContainer = styled(Flex)`
  flex: 2 2 40%;

  @media ${breakpointDown.sm} {
    flex: 1 1 100%;
  }
`

const ReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Box width="100%">
    <Card>
      <Flex flexWrap={["wrap", "wrap", "nowrap"]}>
        <InfoContainer p={3}>
          <Text p={2}>Skill Level: {review?.reviewRequest.skillLevel}</Text>
          <Text p={2}>Comment: {review?.reviewRequest.comment}</Text>
        </InfoContainer>
        <HeroesAndCtaContainer p={3} alignItems="center" justifyContent={"space-between"}>
          <Box>
            <div>
              {review?.replay.playersDire.map((player, index) => {
                const key = player.steamId ? player.steamId : index.toString()
                return <HeroImageSmall key={key} player={player} />
              })}
            </div>
            <div>
              {review?.replay.playersRadiant.map((player, index) => {
                const key = player.steamId ? player.steamId : index.toString()
                return <HeroImageSmall key={key} player={player} />
              })}
            </div>
          </Box>
          <Box>
            <Button
              onClick={() => {
                goToReviewPage(review?.id)
              }}
              text="See Review"
            />
          </Box>
        </HeroesAndCtaContainer>
      </Flex>
    </Card>
  </Box>
)

export default ReviewCard
