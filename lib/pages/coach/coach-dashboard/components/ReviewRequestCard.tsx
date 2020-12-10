import { Flex, Box } from "rebass"
import { formatDistanceToNow } from "date-fns"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3"
import React, { FunctionComponent, useEffect } from "react"
import Router from "next/router"
import styled from "styled-components"

import { Button, HeroImage } from "gamejitsu/components"
import { createModel } from "gamejitsu/api"
import { DecoratedReviewRequest } from "gamejitsu/models/review-request"
import ReviewResource from "gamejitsu/api/resources/review"

import { breakpointDown } from "../../../../utils/mediaQueryDevices"

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

const HeroImageWrapper = styled(Flex)`
  margin-right: 16px;

  @media ${breakpointDown.lg} {
    overflow: hidden;
  }
`

const GameInfo = styled.h3`
  color: ${(props) => props.theme.primaryColor};
`

const acceptReviewRequest = async (reviewRequestId: string) => {
  await createModel(
    ReviewResource,
    { requestId: reviewRequestId, coachId: "" },
    undefined
  )
  // TODO Maybe add confirm?
  Router.push("/coach-dashboard")
}

const ReviewRequestCard: FunctionComponent<Props> = ({ reviewRequest }) => {
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
    <Container my={2}>
      <Header>
        <Box mt={3} ml={3} height="30px">
          Played {formatDistanceToNow(new Date(reviewRequest.replay.playedAt), { addSuffix: true })}
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
              <Box mr="auto" mt={4}>
                Played with {currentPlayer.heroName}
              </Box>
              <Box mt={4}>
                <Button
                  onClick={async () => {
                    await acceptReviewRequest(reviewRequest.id)
                  }}
                  text="ACCEPT REVIEW"
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

const GoogleRecaptchaReviewRequestCard: FunctionComponent<Props> = (props) => {
  return (
      <ReviewRequestCard {...props} />
  )
}

export default GoogleRecaptchaReviewRequestCard
