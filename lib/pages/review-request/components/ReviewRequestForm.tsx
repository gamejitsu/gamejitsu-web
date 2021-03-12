import humanize from "humanize-string"
import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import titleize from "titleize"
import { Checkbox, Slider, Icon } from "@blueprintjs/core"
import { Tooltip2 } from "@blueprintjs/popover2"
import { Box, Flex } from "rebass/styled-components"
import { boolean, number, object, string } from "yup"
import { createModel } from "gamejitsu/api"
import { DecoratedReplay } from "gamejitsu/models/replay"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { MatchHeroes } from "gamejitsu/components"
import { Layout } from "gamejitsu/components"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { prices } from "../../../../public/prices"
import CheckoutResource, { Checkout } from "gamejitsu/api/resources/checkout"

interface Props {
  replay: DecoratedReplay
  replayAvailability: [boolean, string]
}

interface ReplayStatusProps {
  availability: boolean
}

const ReplayStatus = styled(Flex)<ReplayStatusProps>`
  width: 100%;
  border: solid 1px ${(props) => (props.availability ? props.theme.colors.primaryColor : "#f00")};
`

const LabelContent = styled.span`
  white-space: nowrap;
`

const ErrorField = styled(Box)`
  color: red;
`

const PriceField = styled(Box)`
  font-size: 1.25rem;
  font-weight: bold;
`

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
    .integer(),
  isParty: boolean().required(),
  isDisconnected: boolean().required(),
  comment: string().max(255, "Comment Too Long, max length is 255 characters")
})

const ReviewRequestForm: FunctionComponent<Props> = ({ replay, replayAvailability }) => {
  const [error, setError] = useState("")

  const redirectToCheckout = async ({
    comment,
    skillLevel,
    replayId,
    email,
    metadata
  }: Partial<Checkout>) => {
    try {
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
    } catch (error) {
      if (error.message == "Create checkout failed.") {
        setError("Create checkout error")
      } else {
        setError("Unexpected error, please retry later or contact support")
      }
    }
  }

  const onSubmitReviewRequest = async (values: Values): Promise<void> => {
    const { skillLevel, comment, email, isParty, isDisconnected, mmr } = values
    if (!isSkillLevelValid(skillLevel)) {
      throw new Error(`Invalid skill level value in coach signup: ${skillLevel}`)
    }

    if (replay === undefined) {
      throw new Error(`Invalid replay`)
    }
    const metadata = { mmr, isParty, isDisconnected }
    redirectToCheckout({ comment, skillLevel, replayId: replay.id, email, metadata })
  }

  const renderLabel = (val: number) => {
    return <LabelContent>{titleize(humanize(skillLevels[val]))}</LabelContent>
  }

  const [formIsValid, setFormValidity] = useState(false)

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
    if (values.comment.length > 255) {
      errors.comment = "Comment exceeds 255 characters"
    }

    if (Object.keys(errors).length === 0) {
      setFormValidity(true)
    }

    return errors
  }

  return (
    <Layout title="Dashboard">
      {error ? <Box>{error}</Box> : null}
      <Box mx={"auto"} px={[3, 4]} py={[3]} style={{ maxWidth: "640px" }}>
        <ReplayStatus mb={4} p={3} availability={replayAvailability[0]} alignItems={"center"}>
          <Icon
            icon={replayAvailability[0] ? "tick-circle" : "error"}
            iconSize={32}
            intent={replayAvailability[0] ? "success" : "danger"}
          />
          <Box pl={3}>{replayAvailability[1]}</Box>
        </ReplayStatus>
        <Form
          title="REQUEST REVIEW"
          initialValues={initialValues}
          schema={schema}
          validate={validate}
          onSubmit={onSubmitReviewRequest}
          buttonText="Checkout"
          isDisabled={!replayAvailability[0] || !formIsValid}
        >
          {(formik) => (
            <div>
              <MatchHeroes replay={replay}></MatchHeroes>
              <Flex mx={3} my={4}>
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
              </Flex>
              <Flex flexWrap={"wrap"}>
                <Flex flex={"3 1 260px"} mr={[2, 3]}>
                  <FormGroup
                    label="Email"
                    labelFor="email"
                    helperText={"Insert email if you want to receive status notifications"}
                  >
                    <InputGroup
                      onChange={formik.handleChange("email")}
                      id="email"
                      type="email"
                      name="email"
                    />
                  </FormGroup>
                </Flex>
                <Flex flex={"1 1 100px"} mr={[2, 3]}>
                  <FormGroup label="MMR" labelFor="number-input" helperText={"(Required)"}>
                    <Tooltip2
                      content="Add a number which should approximately represent your MMR, if you don't know use 0 instead"
                      targetTagName={"div"}
                    >
                      <InputGroup onChange={formik.handleChange("mmr")} name="MMR" id="MMR" />
                    </Tooltip2>
                  </FormGroup>
                </Flex>
              </Flex>
              <Flex mr={[2, 3]}>
                <FormGroup
                  label="Comment"
                  labelFor="text-input"
                  helperText={"(maximum 250 characters)"}
                >
                  <Tooltip2
                    content="Add any useful info for coaches: coach preference, focus, role etc..."
                    targetTagName={"div"}
                  >
                    <InputGroup
                      leftIcon="warning-sign"
                      onChange={formik.handleChange("comment")}
                      id="text-input-comment"
                    />
                  </Tooltip2>
                </FormGroup>
              </Flex>
              <Flex flexWrap={"wrap"} mt={2}>
                <Flex flex={"1 1 300px"} mr={[2, 3]}>
                  <FormGroup label="Tick this checkbox if you are in a party" labelFor="checkbox">
                    <Checkbox
                      checked={formik.values.isParty}
                      label="Yes, I'm in a party"
                      onChange={() => formik.setFieldValue("isParty", !formik.values.isParty)}
                    />
                  </FormGroup>
                </Flex>
                <Flex flex={"1 1 300px"} mr={[2, 3]}>
                  <FormGroup
                    label="Tick this box if you are disconnected during the game"
                    labelFor="checkbox"
                  >
                    <Checkbox
                      checked={formik.values.isDisconnected}
                      label="Yes, I'm disconnected"
                      onChange={() =>
                        formik.setFieldValue("isDisconnected", !formik.values.isDisconnected)
                      }
                    />
                  </FormGroup>
                </Flex>
              </Flex>
              <ErrorField>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                {formik.errors.mmr ? <div>{formik.errors.mmr}</div> : null}
                {formik.errors.comment ? <div>{formik.errors.comment}</div> : null}
              </ErrorField>
              <Flex justifyContent={"flex-end"}>
                <PriceField>
                  <b>Price</b>: $
                  {prices[skillLevels.indexOf(formik.values.skillLevel as SkillLevel)].priceUSD}
                </PriceField>
              </Flex>
            </div>
          )}
        </Form>
      </Box>
    </Layout>
  )
}

export default ReviewRequestForm
