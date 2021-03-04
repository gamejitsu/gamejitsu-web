import { Flex, Box,  Text as RbText  } from "rebass"
import React, { FunctionComponent, useState } from "react"
import { Button, Card, MatchHeroes } from "gamejitsu/components"
import { DecoratedReview } from "gamejitsu/models/review"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"
import { breakpointDown } from "../../../utils/mediaQueryDevices"
import styled from "styled-components"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { prices } from "../../../../public/prices"

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

const Text = styled(RbText)`
  b {
    font-weight: bold;
  }
`

const DeletedReviewCard: FunctionComponent<Props> = ({ review }) => {
  const [cancelReviewIsOpen, setCancelReviewIsOpen] = useState(false)
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
