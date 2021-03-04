import { Flex, Box } from "rebass"
import { formatDistanceToNow } from "date-fns"
import React, { FunctionComponent, useState } from "react"
import Router from "next/router"
import styled from "styled-components"
import { Button, HeroImage } from "gamejitsu/components"
import { createModel } from "gamejitsu/api"
import { DecoratedReviewRequest } from "gamejitsu/models/review-request"
import ReviewResource from "gamejitsu/api/resources/review"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"
import { breakpointDown } from "../../../../utils/mediaQueryDevices"
import { prices } from "../../../../../public/prices"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
const skillLevels = SkillLevel.types.map((t) => t.value)

interface Props {
  reviewRequest: DecoratedReviewRequest
}

const Container = styled(Box)`
  width: 49%;
  border: 1px solid ${(props) => props.theme.activeColor};
  position: relative;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.lightBackgroundColor};
  opacity: 0.9;

  @media ${breakpointDown.lg} {
    width: 100%;
  }
`

const HorizontalLine = styled.div`
  width: 95%;
  height: 1px;
  background-color: ${(props) => props.theme.textColorDark};
  margin: 0 auto;
`

const Header = styled(Flex)`
  text-align: center;
  vertical-align: middle;
`

const GameInfo = styled.h3`
  color: ${(props) => props.theme.primaryColor};
`

const ReviewRequestCard: FunctionComponent<Props> = ({ reviewRequest }) => {
  const [acceptReviewIsOpen, setAcceptReviewIsOpen] = useState(false)
  const [pendingReviewWarning, setPendingReviewWarning] = useState(false)

  const acceptReviewRequest = async (reviewRequestId: string) => {
    try {
      setAcceptReviewIsOpen(false)
      await createModel(ReviewResource, { requestId: reviewRequestId, coachId: "" }, undefined)
    } catch (error) {
      if (error.message === "some_reviews_are_not_published_or_not_deleted") {
        setPendingReviewWarning(true)
        console.log(error)
      } else {
        throw Error(error)
      }
    }
    Router.push("/coach-dashboard")
  }

  const players = reviewRequest.replay.playersDire.concat(reviewRequest.replay.playersRadiant)
  const playedHeroUser = reviewRequest.user
  const currentPlayer = players.find((player) => {
    const isYourHero = player?.steamId === playedHeroUser.steamId
    return isYourHero
  })
  if (!currentPlayer) {
    throw new Error("player hero not found")
  }

  return (
    <>
      <Container my={2}>
        <Header>
          <Box mt={3} ml={3} height="30px">
            Played{" "}
            {formatDistanceToNow(new Date(reviewRequest.replay.playedAt), { addSuffix: true })}
          </Box>
          <Box mt={3} ml="auto" mr={3} height="30px">
            <GameInfo>Game won</GameInfo>
          </Box>
        </Header>
        <HorizontalLine />
        <Box px={3} pb={1} mt={4} mb={3}>
          <Flex alignItems="center" justifyContent="center">
            <Box>
              <Flex>
                {reviewRequest.replay.playersDire.map((player, index) => {
                  const key = player.steamId ? player.steamId : index.toString()
                  return (
                    <Box mr={3} key={key}>
                      <HeroImage player={player} />
                    </Box>
                  )
                })}
              </Flex>
              <Flex>
                {reviewRequest.replay.playersRadiant.map((player, index) => {
                  const key = player.steamId ? player.steamId : index.toString()
                  return (
                    <Box mt={2} mr={3} key={key}>
                      <HeroImage player={player} />
                    </Box>
                  )
                })}
              </Flex>
              <Flex alignItems="center">
                <Flex>
                  <Box mr="auto" mt={4}>
                    Played with {currentPlayer.heroName} <br />
                    Match ID: {reviewRequest.replay.matchId} <br />
                    Price: ${prices[skillLevels.indexOf(reviewRequest.skillLevel)].priceUSD}
                  </Box>
                </Flex>
                <Box mt={4}>
                  <Button onClick={() => setAcceptReviewIsOpen(true)} text="ACCEPT REVIEW" />
                </Box>
              </Flex>
              <Box mt={4}>Comment: {reviewRequest.comment}</Box>
            </Box>
          </Flex>
        </Box>
      </Container>

      <Dialog
        className={Classes.DIALOG}
        icon="info-sign"
        isOpen={acceptReviewIsOpen}
        onClose={() => setAcceptReviewIsOpen(false)}
        title="Are you sure?"
        autoFocus={true}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        enforceFocus={true}
        usePortal={true}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>Click "Accept Review" to confirm the acceptation of the review request</p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Tooltip content="This button is hooked up to close the dialog.">
              <Button text="Cancel" onClick={() => setAcceptReviewIsOpen(false)} />
            </Tooltip>
            <Tooltip content="This button is hooked up to accept the review.">
              <Button
                text="Accept review"
                onClick={() => {
                  acceptReviewRequest(reviewRequest.id)
                }}
              />
            </Tooltip>
          </div>
        </div>
      </Dialog>

      <Dialog
        className={Classes.DIALOG}
        icon="warning-sign"
        isOpen={pendingReviewWarning}
        onClose={() => setPendingReviewWarning(false)}
        title="Warning"
        autoFocus={true}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        enforceFocus={true}
        usePortal={true}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>You can only accept one review at time.</p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Tooltip content="">
              <Button text="Ok" onClick={() => setPendingReviewWarning(false)} />
            </Tooltip>
          </div>
        </div>
      </Dialog>
    </>
  )
}

const GoogleRecaptchaReviewRequestCard: FunctionComponent<Props> = (props) => {
  return <ReviewRequestCard {...props} />
}

export default GoogleRecaptchaReviewRequestCard
