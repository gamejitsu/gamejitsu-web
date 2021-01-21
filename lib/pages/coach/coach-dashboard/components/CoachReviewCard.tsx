import React, { FunctionComponent, useState } from "react"
import { Flex, Box, Text } from "rebass"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { DecoratedReview } from "gamejitsu/models/review"
import { deleteModel, updateModel } from "gamejitsu/api"
import ReviewResource from "gamejitsu/api/resources/review"
import Router from "next/router"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"

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

const CoachReviewCard: FunctionComponent<Props> = ({ review }) => {
  const [publishReviewIsOpen, setPublishReviewIsOpen] = useState(false)
  const [cancelReviewIsOpen, setCancelReviewIsOpen] = useState(false)

  const publishReview = async (review: DecoratedReview) => {
    try {
      setPublishReviewIsOpen(false)
      review.isPublished = true
      await updateModel(ReviewResource, review)
      Router.push(window.location.pathname)
    } catch (error) {
      throw Error(error)
    }
    Router.push("/coach-dashboard")
  }

  const cancelReview = async (review: DecoratedReview) => {
    try {
      setCancelReviewIsOpen(false)
      await deleteModel(ReviewResource, review)
      Router.push(window.location.pathname)
    } catch (error) {
      throw Error(error)
    }
    Router.push("/coach-dashboard")
  }

  return (
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
              <Button onClick={() => setPublishReviewIsOpen(true)} text="Publish Review" />
              <Button
                onClick={() => setCancelReviewIsOpen(true)}
                color="#ff1705"
                text="Cancel Review"
              />
            </Box>
          </Flex>
        </Flex>
      </Card>

      <Dialog
        className={Classes.DIALOG}
        icon="info-sign"
        isOpen={publishReviewIsOpen}
        onClose={() => setPublishReviewIsOpen(false)}
        title="Are you sure to publish?"
        autoFocus={true}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        enforceFocus={true}
        usePortal={true}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>Click "Publish Review" to confirm the publication of the review to the customer</p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Tooltip content="This button is hooked up to close the dialog.">
              <Button text="Close" onClick={() => setPublishReviewIsOpen(false)} />
            </Tooltip>
            <Tooltip content="This button is hooked up to publish the review.">
              <Button
                text="Publish review"
                onClick={() => {
                  publishReview(review)
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Dialog>

      <Dialog
        className={Classes.DIALOG}
        icon="warning-sign"
        isOpen={cancelReviewIsOpen}
        onClose={() => setCancelReviewIsOpen(false)}
        title="Are you sure to delete?"
        autoFocus={true}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        enforceFocus={true}
        usePortal={true}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>
            Click "Publish Review" to confirm the publication of the review to the customer. Please,
            do that only if there is an important error with the video.{" "}
            <b>Once delete, the review cannot be re-accepted.</b>
          </p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Tooltip content="This button is hooked up to close the dialog.">
              <Button text="Close" onClick={() => setCancelReviewIsOpen(false)} />
            </Tooltip>
            <Tooltip content="This button is hooked up to delete the review.">
              <Button
                color="#ff1705"
                text="Cancel review"
                onClick={() => {
                  cancelReview(review)
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Dialog>
    </Box>
  )
}

export default CoachReviewCard
