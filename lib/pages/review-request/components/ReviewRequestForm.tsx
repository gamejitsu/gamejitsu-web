import humanize from "humanize-string"
import React, { FunctionComponent, useContext } from "react"
import Router from "next/router"
import styled from "styled-components"
import titleize from "titleize"

import { Box } from "rebass"
import { createModel } from "gamejitsu/api"
import { DecoratedReplay } from "gamejitsu/models/replay"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { HeroImage } from "gamejitsu/components"
import { Layout } from "gamejitsu/components"
import { object, string } from "yup"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { Slider } from "@blueprintjs/core"
import { UserContext } from "gamejitsu/contexts"
import CheckoutResource from "gamejitsu/api/resources/checkout"
import ReviewRequestResource from "gamejitsu/api/resources/review-request"

const redirectToCheckout = async () => {
  const stripe = Stripe("pk_test_gO4hZHVOjk7E3GjH0etoiBAO00c0qpfX0m")
  const {
    data: { id }
  } = await createModel(CheckoutResource, {})
  return await stripe.redirectToCheckout({ sessionId: id })
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

const isSkillLevelValid = (value: string): value is SkillLevel => (skillLevels as string[]).includes(value)

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
    await createModel(ReviewRequestResource, {
      replayId: replay.id,
      skillLevel,
      comment
    })
    Router.push("/coach-dashboard")
  }

  const renderLabel = (val: number) => {
    return <LabelContent>{titleize(humanize(skillLevels[val]))}</LabelContent>
  }

  return (
    <Layout title="Dashboard">
      <Box width="700px" mx="auto" p={3}>
        <Form
          title="Request review"
          initialValues={initialValues}
          schema={schema}
          onSubmit={onSubmitReviewRequest}
          buttonText="Test"
        >
          {(formik) => (
            <div>
              {user.username}
              <Box p={3} mr="auto">
                <div>
                  {replay.playersDire.map((player, index) => {
                    const key = player.steamId ? player.steamId : index.toString()
                    return <HeroImage key={key} player={player} />
                  })}
                </div>
                <div>
                  {replay.playersRadiant.map((player, index) => {
                    const key = player.steamId ? player.steamId : index.toString()
                    return <HeroImage key={key} player={player} />
                  })}
                </div>
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
                <InputGroup id="text-input" />
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
