import { Flex, Box } from "rebass"
import { formatDistanceToNow } from "date-fns"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3"
import React, { FunctionComponent } from "react"
import Router from "next/router"
import styled from "styled-components"

import { Button, HeroImage } from "gamejitsu/components"
import { createModel } from "gamejitsu/api"
import { DecoratedReviewRequest } from "gamejitsu/models/review-request"
import ReviewResource from "gamejitsu/api/resources/review"

interface Props {
  reviewRequest: DecoratedReviewRequest
}

const Container = styled(Box)`
  border: 1px solid ${(props) => props.theme.activeColor};
  position: relative;
  align-items: center;
  justify-content: center;
  display: grid | inline-grid;
  grid-template-rows: ... | ...;
  background: ${(props) => props.theme.lightBackgroundColor};
  z-index: 1;
  opacity: 0.9;
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

const Title = styled.h1`
  font-weight: bold;
  color: white;
`

const GameInfo = styled.h3`
  color: ${(props) => props.theme.primaryColor};
`

const acceptReviewRequest = async (reviewRequestId: string, token: Promise<string>) => {
  const response = await createModel(
    ReviewResource,
    { requestId: reviewRequestId, coachId: "" },
    undefined,
    { params: { "g-recaptcha-response": await token } }
  )
  // TODO Maybe add confirm?
  Router.push("/coach-dashboard")
}

const ReviewRequestCard: FunctionComponent<Props> = ({ reviewRequest }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  let token: Promise<string>
  if (executeRecaptcha) token = executeRecaptcha("review_request_page")
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
    <Box width="50%" mb={50} px={30}>
      <Container width="100%" height="100%" mb={2}>
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
                <Box mr="auto" mt={4}>
                  Played with {currentPlayer.heroName}
                </Box>
                <Box mt={4}>
                  <Button
                    onClick={() => {
                      acceptReviewRequest(reviewRequest.id, token)
                    }}
                    text="ACCEPT REVIEW"
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

const GoogleRecaptchaReviewRequestCard: FunctionComponent<Props> = (props) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.GOOGLE_RECAPTCHA_PUBLIC_KEY}>
      <ReviewRequestCard {...props} />
    </GoogleReCaptchaProvider>
  )
}

export default GoogleRecaptchaReviewRequestCard
