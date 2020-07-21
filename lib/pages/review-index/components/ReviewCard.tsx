import { Flex, Box, Text } from "rebass"
import React, { FunctionComponent } from "react"
import Router from "next/router"
import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { Review } from "gamejitsu/api/resources/review"
import { DecoratedReview } from "gamejitsu/models/review"

interface Props {
  review: DecoratedReview | undefined
}

const goToReviewPage = (id?: string) => {
  Router.push("/reviews/" + id)
}

const ReviewCard: FunctionComponent<Props> = ({ review }) => (
  <Box width="1200px">
    <Card>
      <Flex>
        <Box p={3} mr="auto">
          <Text p={2}>Skill Level: {review?.reviewRequest.skillLevel}</Text>
          <Text p={2}>Comment: {review?.reviewRequest.comment}</Text>
        </Box>
        <Box p={3} mr="auto">
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
        <Box alignSelf="center" pr={3}>
          <Button
            onClick={() => {
              goToReviewPage(review?.id)
            }}
            text="See completed review"
          />
        </Box>
      </Flex>
    </Card>
  </Box>
)

export default ReviewCard
