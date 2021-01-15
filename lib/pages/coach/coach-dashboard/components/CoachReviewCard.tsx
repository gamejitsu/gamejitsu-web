import React, { FunctionComponent } from "react"
import { Flex, Box, Text } from "rebass"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { DecoratedReview } from "gamejitsu/models/review"
import { deleteModel, updateModel } from "gamejitsu/api"
import ReviewResource from "gamejitsu/api/resources/review"
import Router from "next/router"

interface Props {
  review: DecoratedReview
}

const onDelete = (review: DecoratedReview) => {
  deleteModel(ReviewResource, review)
  Router.push(window.location.pathname)
}

const onPublish = async (review: DecoratedReview) => {
  review.isPublished = true
  await updateModel(ReviewResource, review)
  Router.push(window.location.pathname)
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
        <Flex p={3} alignItems="center">
          <Box>
            <Button href={"/coach-reviews/" + review.id} text="Work on review" />
            <Button onClick={onDelete.bind(null, review)} text="Cancel review" />
            <Button onClick={onPublish.bind(null, review)} text="Publish review" />
          </Box>
        </Flex>
      </Flex>
    </Card>
  </Box>
)

export default CoachReviewCard
