import React, { FunctionComponent, useState } from "react"

import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { Flex, Box, Text } from "rebass/styled-components"
import { DecoratedReview } from "gamejitsu/models/review"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"

interface Props {
  review: DecoratedReview
}

const CoachDeletedReviewCard: FunctionComponent<Props> = ({ review }) => {
  const [cancelReviewIsOpen, setCancelReviewIsOpen] = useState(false)

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
          <Box alignSelf="center" pr={3}>
            <Button
              color="#ff1705"
              onClick={() => setCancelReviewIsOpen(true)}
              text="Canceled review"
            />
          </Box>
        </Flex>
      </Card>
      <Dialog
        className={Classes.DIALOG}
        icon="warning-sign"
        isOpen={cancelReviewIsOpen}
        onClose={() => setCancelReviewIsOpen(false)}
        title="You deleted the customer review"
        autoFocus={true}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        enforceFocus={true}
        usePortal={true}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>
            <b>
              Please, contact the support at support@gamejitsu.gg and provide an explanation. Thank
              you.
            </b>
          </p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Tooltip content="This button is hooked up to close the dialog.">
              <Button text="Close" onClick={() => setCancelReviewIsOpen(false)} />
            </Tooltip>
          </div>
        </div>
      </Dialog>
    </Box>
  )
}

export default CoachDeletedReviewCard
