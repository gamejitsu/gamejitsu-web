import { Flex, Box, Text } from "rebass"
import React, { FunctionComponent } from "react"
import Router from "next/router"
import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { DecoratedReview } from "gamejitsu/models/review"

interface Props {
  review: DecoratedReview | undefined
}

const goToReviewPage = (id?: string) => {
  Router.push("/reviews/" + id)
}

const ReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Box width="100%">
    <Card>
      <Flex justifyContent="space-between">
        <Box p={3}>
          <Text p={2}>Skill Level: {review?.reviewRequest.skillLevel}</Text>
          <Text p={2}>Comment: {review?.reviewRequest.comment}</Text>
        </Box>
        <Flex p={3} alignItems="center">
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
        </Flex>
        <Flex p={3} alignItems="center">
          <Box>
            <Button
              onClick={() => {
                goToReviewPage(review?.id)
              }}
              text="See Completed Review"
            />
          </Box>
        </Flex>
      </Flex>
    </Card>
  </Box>
)

export default ReviewCard
