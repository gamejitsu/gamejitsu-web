import { Flex, Box, Text } from "rebass"
import React, { FunctionComponent, useState } from "react"
import { Button, Card, HeroImageSmall } from "gamejitsu/components"
import { DecoratedReview } from "gamejitsu/models/review"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"
import { breakpointDown } from "../../../utils/mediaQueryDevices"
import styled from "styled-components"

interface Props {
  review: DecoratedReview | undefined
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

const DeletedReviewCard: FunctionComponent<Props> = ({ review }) => {
  const [cancelReviewIsOpen, setCancelReviewIsOpen] = useState(false)

  return (
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
                color="#ff1705"
                onClick={() => setCancelReviewIsOpen(true)}
                text="Canceled Review"
              />
            </Box>
          </HeroesAndCtaContainer>
        </Flex>
      </Card>
      <Dialog
        className={Classes.DIALOG}
        icon="warning-sign"
        isOpen={cancelReviewIsOpen}
        onClose={() => setCancelReviewIsOpen(false)}
        title="Coach deleted your review"
        autoFocus={true}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        enforceFocus={true}
        usePortal={true}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>
            <b>Please, contact the support at support@gamejitsu.gg.</b>
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

export default DeletedReviewCard
