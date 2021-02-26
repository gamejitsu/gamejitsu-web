import humanize from "humanize-string"
import React, { FunctionComponent, useContext } from "react"
import styled from "styled-components"
import titleize from "titleize"
import { Checkbox, Slider, Tooltip } from "@blueprintjs/core"
import { Box, Flex } from "rebass"
import { boolean, number, object, string } from "yup"

import { createModel } from "gamejitsu/api"
import { DecoratedReplay } from "gamejitsu/models/replay"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { HeroImage } from "gamejitsu/components"
import { Layout } from "gamejitsu/components"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { UserContext } from "gamejitsu/contexts"
import { prices } from "../../../../public/prices"
import CheckoutResource, { Checkout } from "gamejitsu/api/resources/checkout"

const redirectToCheckout = async ({
  comment,
  skillLevel,
  replayId,
  email,
  metadata
}: Partial<Checkout>) => {
  const stripe = Stripe(process.env.STRIPE_PUBLIC_KEY)
  const {
    data: { stripeId }
  }: any = await createModel(CheckoutResource, {
    comment,
    skillLevel,
    replayId,
    reviewRequestId: null,
    email,
    metadata,
    redirectUrl: window.location.origin
  })
  return await stripe.redirectToCheckout({ sessionId: stripeId })
}

interface Props {
  replay: DecoratedReplay
}

const initialValues = {
  skillLevel: "high",
  replay: null,
  comment: "",
  email: "",
  isParty: false,
  mmr: 0,
  isDisconnected: false
}

type Values = typeof initialValues

const skillLevels = SkillLevel.types.map((t) => t.value)

const isSkillLevelValid = (value: string): value is SkillLevel =>
  (skillLevels as string[]).includes(value)

const schema = object({
  skillLevel: string().required(),
  email: string(),
  mmr: number()
    .required()
    .positive()
    .integer()
})

const getUser = () => {
  const user = useContext(UserContext)
  if (user) return user
  else throw new Error("user null")
}

const LabelContent = styled.span`
  white-space: nowrap;
`

const ReviewRequestForm: FunctionComponent<Props> = ({ replay }) => {
  const user = getUser()

  const onSubmitReviewRequest = async (values: Values): Promise<void> => {
    const { skillLevel, comment, email, isParty, isDisconnected, mmr } = values
    if (!isSkillLevelValid(skillLevel)) {
      throw new Error(`Invalid skill level value in coach signup: ${skillLevel}`)
    }

    if (replay === undefined) {
      throw new Error(`Invalid replay`)
    }
    const metadata = { mmr, isParty, isDisconnected }
    console.log("isParty:", isParty)
    console.log("isDisconnected:", isDisconnected)
    console.log("mmr:", mmr)
    redirectToCheckout({ comment, skillLevel, replayId: replay.id, email, metadata })
  }

  const renderLabel = (val: number) => {
    return <LabelContent>{titleize(humanize(skillLevels[val]))}</LabelContent>
  }

  const validate = (values: Values) => {
    const errors: any = {}

    if (!values.email) {
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address"
    }
    if (!values.skillLevel) {
      errors.skillLevel = "Skill level is required"
    } else if (!(skillLevels as string[]).includes(values.skillLevel)) {
      errors.skillLevel = "Invalid skill level"
    }
    if (!values.mmr) {
      errors.mmr = "MMR is required"
    } else if (isNaN(values.mmr)) {
      errors.mmr = "Invalid MMR"
    }
    return errors
  }

  return (
    <Layout title="Dashboard">
      <Box width="700px" mx="auto" p={3}>
        <Form
          title="REQUEST REVIEW"
          initialValues={initialValues}
          schema={schema}
          validate={validate}
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
              Insert email if you want to receive status notifications
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              {formik.errors.mmr ? <div>{formik.errors.mmr}</div> : null}
              <FormGroup label="Email" labelFor="email">
                <InputGroup
                  onChange={formik.handleChange("email")}
                  id="email"
                  type="email"
                  name="email"
                />
              </FormGroup>
              <FormGroup label="Comment" labelFor="text-input">
                <Tooltip content="Add any info you desire: language preferred, coach preference, role, focus, etc...">
                  <InputGroup
                    leftIcon="warning-sign"
                    onChange={formik.handleChange("comment")}
                    id="text-input-comment"
                  />
                </Tooltip>
              </FormGroup>
              <FormGroup label="MMR" labelFor="number-input">
                <Tooltip content="Add a number which should approximately represent your MMR, if you don't know use 0 instead">
                  <InputGroup onChange={formik.handleChange("mmr")} name="MMR" id="MMR" />
                </Tooltip>
              </FormGroup>
              <FormGroup label="Price" labelFor="text-input">
                ${prices[skillLevels.indexOf(formik.values.skillLevel as SkillLevel)].priceUSD}
              </FormGroup>
              <FormGroup label="isParty" labelFor="checkbox">
                <Checkbox
                  checked={formik.values.isParty}
                  label="isParty"
                  onChange={() => formik.setFieldValue("isParty", !formik.values.isParty)}
                />
              </FormGroup>
              <FormGroup label="isDisconnected" labelFor="checkbox">
                <Checkbox
                  checked={formik.values.isDisconnected}
                  label="isDisconnected"
                  onChange={() =>
                    formik.setFieldValue("isDisconnected", !formik.values.isDisconnected)
                  }
                />
              </FormGroup>
            </div>
          )}
        </Form>
      </Box>
    </Layout>
  )
}

export default ReviewRequestForm
