import { Box, Flex } from "rebass"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { object, string } from "yup"
import { Slider } from "@blueprintjs/core"
import humanize from "humanize-string"
import React, { FunctionComponent } from "react"
import Router from "next/router"
import styled from "styled-components"
import titleize from "titleize"

import { createModel } from "gamejitsu/api"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import CoachResource from "gamejitsu/api/resources/coach"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  photoUrl: "",
  skillLevel: "high"
}

type Values = typeof initialValues

const skillLevels = SkillLevel.types.map((t) => t.value)

const isSkillLevelValid = (value: string): value is SkillLevel =>
  (skillLevels as string[]).includes(value)

const onSubmitCoach = async (values: Values, token: Promise<string>): Promise<void> => {
  const { email, firstName, lastName, photoUrl, skillLevel } = values
  if (!isSkillLevelValid(skillLevel)) {
    throw new Error(`Invalid skill level value in coach signup: ${skillLevel}`)
  }
  await createModel(
    CoachResource,
    { email, firstName, lastName, photoUrl, skillLevel, isApproved: false },
    undefined,
    { params: { "g-recaptcha-response": await token } }
  )
  Router.push("/coach-signup")
}

const schema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string()
    .email()
    .required(),
  photoUrl: string(),
  skillLevel: string().required()
})

const LabelContent = styled.span`
  white-space: nowrap;
`

const GoogleRecaptchaCoachSignUpForm: FunctionComponent = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.GOOGLE_RECAPTCHA_PUBLIC_KEY}>
      <CoachSignUpForm />
    </GoogleReCaptchaProvider>
  )
}

const CoachSignUpForm: FunctionComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  let token: Promise<string>
  if (executeRecaptcha) token = executeRecaptcha("coach_signup_page")

  const renderLabel = (val: number) => {
    return <LabelContent>{titleize(humanize(skillLevels[val]))}</LabelContent>
  }

  return (
    <Box mx={"auto"} px={[3, 4]}  style={{ maxWidth: "640px" }}>
      <Form
        title="Sign up as a coach"
        initialValues={initialValues}
        schema={schema}
        onSubmit={(values) => onSubmitCoach(values, token)}
        buttonText="Register"
      >
        {(formik) => (
          <div>
            <FormGroup label="First Name" labelFor="text-input">
              <InputGroup onChange={formik.handleChange("firstName")} id="text-input" />
            </FormGroup>
            <FormGroup label="Last Name" labelFor="text-input">
              <InputGroup onChange={formik.handleChange("lastName")} id="text-input" />
            </FormGroup>
            <FormGroup label="Email" labelFor="text-input">
              <InputGroup onChange={formik.handleChange("email")} id="text-input" />
            </FormGroup>
            <FormGroup label="Photo URL" labelFor="text-input" labelInfo="(optional)">
              <InputGroup
                onChange={formik.handleChange("photoUrl")}
                id="text-input"
                placeholder="Placeholder text"
              />
            </FormGroup>
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
          </div>
        )}
      </Form>
    </Box>
  )
}

export default GoogleRecaptchaCoachSignUpForm
