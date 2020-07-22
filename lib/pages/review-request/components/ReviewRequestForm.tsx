import CheckoutResource, { Checkout } from "gamejitsu/api/resources/checkout"
import humanize from "humanize-string"
import React, { FunctionComponent, useContext } from "react"
import styled from "styled-components"
import titleize from "titleize"

import { Box, Flex } from "rebass"
import { createModel } from "gamejitsu/api"
import { DecoratedReplay } from "gamejitsu/models/replay"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { HeroImage } from "gamejitsu/components"
import { Layout } from "gamejitsu/components"
import { object, string } from "yup"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { Slider } from "@blueprintjs/core"
import { UserContext } from "gamejitsu/contexts"

const redirectToCheckout = async ({ comment, skillLevel, replayId }: Partial<Checkout>) => {
  const stripe = Stripe(process.env.STRIPE_PUBLIC_KEY)
  const {
    data: { stripeId }
  }: any = await createModel(CheckoutResource, {
    comment,
    skillLevel,
    replayId,
    reviewRequestId: null,
    redirectUrl: window.location.origin
  })
  return await stripe.redirectToCheckout({ sessionId: stripeId })
}

interface Props {
  replay: DecoratedReplay
}

const initialValues = {
  skillLevel: "medium",
  replay: null,
  comment: ""
}

type Values = typeof initialValues

const skillLevels = SkillLevel.types.map((t) => t.value)

const isSkillLevelValid = (value: string): value is SkillLevel =>
  (skillLevels as string[]).includes(value)

const schema = object({
  skillLevel: string().required()
})

const getUser = () => {
  const user = useContext(UserContext)
  if (user) return user
  else throw new Error("user null")
}

const LabelContent = styled.span`
  white-space: nowrap;
`

const price: any = {
  0: "4$",
  1: "5$",
  2: "7$",
  3: "10$"
}

const ReviewRequestForm: FunctionComponent<Props> = ({ replay }) => {
  const user = getUser()

  const onSubmitReviewRequest = async (values: Values): Promise<void> => {
    const { skillLevel, comment } = values
    if (!isSkillLevelValid(skillLevel)) {
      throw new Error(`Invalid skill level value in coach signup: ${skillLevel}`)
    }
    if (replay === undefined) {
      throw new Error(`Invalid replay`)
    }
    redirectToCheckout({ comment, skillLevel, replayId: replay.id })
  }

  const renderLabel = (val: number) => {
    return <LabelContent>{titleize(humanize(skillLevels[val]))}</LabelContent>
  }

  return (
    <Layout title="Dashboard">
      <Box width="700px" mx="auto" p={3}>
        <Form
          title="REQUEST REVIEW"
          initialValues={initialValues}
          schema={schema}
          onSubmit={onSubmitReviewRequest}
          buttonText="Checkout"
        >
          {(formik) => (
            <div>
              {user.username}
              <Box p={3} mr="auto">
                <Flex justifyContent="center">
                  {replay.playersDire.map((player, index) => {
                    const key = player.steamId ? player.steamId : index.toString()
                    return <HeroImage key={key} player={player} />
                  })}
                </Flex>
                <Flex justifyContent="center">
                  {replay.playersRadiant.map((player, index) => {
                    const key = player.steamId ? player.steamId : index.toString()
                    return <HeroImage key={key} player={player} />
                  })}
                </Flex>
              </Box>
              <FormGroup label="Skill Level" labelFor="text-input">
                <Box width="250px">
                  <Slider
                    min={0}
                    max={3}
                    stepSize={1}
                    labelStepSize={1}
                    onChange={(value: number) =>
                      formik.setFieldValue("skillLevel", skillLevels[value])
                    }
                    labelRenderer={renderLabel}
                    showTrackFill={true}
                    value={skillLevels.indexOf(formik.values.skillLevel as SkillLevel)}
                    vertical={false}
                    intent="success"
                  />
                </Box>
              </FormGroup>
              <FormGroup label="Comment" labelFor="text-input">
                <InputGroup onChange={formik.handleChange("comment")} id="text-input" />
              </FormGroup>
              <FormGroup label="Price" labelFor="text-input">
                {price[skillLevels.indexOf(formik.values.skillLevel as SkillLevel)]}
              </FormGroup>
            </div>
          )}
        </Form>
      </Box>
    </Layout>
  )
}

export default ReviewRequestForm
