import React, { FunctionComponent, useState } from "react"
import { Flex, Box, Text as RbText } from "rebass"
import styled from "styled-components"

import { Button, Card, MatchHeroes } from "gamejitsu/components"
import { DecoratedReview } from "gamejitsu/models/review"
import { deleteModel, updateModel } from "gamejitsu/api"
import ReviewResource from "gamejitsu/api/resources/review"
import Router from "next/router"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"

interface Props {
  review: DecoratedReview
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

  const Text = styled(RbText)`
    .warning {
      color: red;
    }

    b {
      font-weight: bold;
    }
  `

  return (
    <Box>
      <Card>
        <Flex justifyContent="space-between" flexWrap={"wrap"}>
          <Flex p={3} alignItems="center" flex={"1 1 300px"}>
            <Box>
              {/* <Text p={2}><b>Coach Skill Level: </b> {review.reviewRequest.skillLevel}</Text> */}
              <Text p={2}>
                <b>Match Id: </b> {review.replay.matchId}
              </Text>
              <Text p={2}>
                <b>Player MMR: </b> {review.reviewRequest.metadata.mmr}
              </Text>
              <Text p={2}>
                <b>Solo/Party: </b> {review.reviewRequest.metadata.isParty ? "Party" : "Solo"}
              </Text>
              <Text p={2}>
                <b>Comment: </b> {review.reviewRequest.comment}
              </Text>
              {review.reviewRequest.metadata.isDisconnected ? (
                <Text p={2}>
                  <div className="warning">
                    The player has reported that he was disconnected in this game. If during replay
                    playback the focus on the hero is lost, please contact support.
                  </div>
                </Text>
              ) : null}
            </Box>
          </Flex>
          <Flex p={3} alignItems="center" flex={["1 1 280px", "0 1 320px"]}>
            <Box width={"100%"}>
              <MatchHeroes replay={review.replay}></MatchHeroes>
            </Box>
          </Flex>
          <Flex p={3} alignItems="center" justifyContent={"space-between"}>
            <Button href={"/coach-reviews/" + review.id} text="Work on review" />
            <Button onClick={() => setPublishReviewIsOpen(true)} text="Publish Review" />
            <Button
              onClick={() => setCancelReviewIsOpen(true)}
              color="#ff1705"
              text="Cancel Review"
            />
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
