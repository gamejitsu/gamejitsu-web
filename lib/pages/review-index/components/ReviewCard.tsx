import { Flex, Box, Text as RbText } from "rebass"
import React, { FunctionComponent } from "react"
import Router from "next/router"
import styled from "styled-components"
import { Button, Card, MatchHeroes } from "gamejitsu/components"
import { DecoratedReview } from "gamejitsu/models/review"
import { breakpointDown } from "../../../utils/mediaQueryDevices"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { prices } from "../../../../public/prices"

interface Props {
  review: DecoratedReview | undefined
}

const goToReviewPage = (id?: string) => {
  Router.push("/reviews/" + id)
}

const InfoContainer = styled(Box)`
  flex: 1 1 40%;

  @media ${breakpointDown.sm} {
    flex: 1 1 100%;
  }
`

const Text = styled(RbText)`
  b {
    font-weight: bold;
  }
`

const HeroesAndCtaContainer = styled(Flex)`
  flex: 2 2 40%;

  @media ${breakpointDown.sm} {
    flex: 1 1 100%;
  }
`

const ReviewCard: FunctionComponent<Props> = ({ review }) => {
  const skillLevels = SkillLevel.types.map((t) => t.value)
  return (
    <Box width="100%">
      <Card>
        <Flex flexWrap={["wrap", "wrap", "nowrap"]}>
          <InfoContainer p={3}>
            <Text p={2}><b>Skill Level:</b> {prices[skillLevels.indexOf(review?.reviewRequest.skillLevel as SkillLevel)].name}{" "}
            (above {prices[skillLevels.indexOf(review?.reviewRequest.skillLevel as SkillLevel)].mmr} MMR)</Text>
            <Text p={2}><b>Comment: </b> {review?.reviewRequest.comment}</Text>
          </InfoContainer>
          <HeroesAndCtaContainer p={3} alignItems="center" justifyContent={"space-between"}>
            <Box width={"100%"} style={{maxWidth: "240px"}}>{review?.replay ? <MatchHeroes replay={review?.replay} /> : null}</Box>
            <Box pl={3}>
              <Button
                onClick={() => {
                  goToReviewPage(review?.id)
                }}
                text="See Review"
              />
            </Box>
          </HeroesAndCtaContainer>
        </Flex>
      </Card>
    </Box>
    )
  }

export default ReviewCard
