import humanize from 'humanize-string'
import React, { FunctionComponent, useContext } from "react"
import styled from "styled-components"
import titleize from 'titleize'

import { Box } from "rebass"
import { createModel } from "gamejitsu/api"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { object, string } from "yup"
import { SkillLevel } from "gamejitsu/models"
import { SkillLevel as SkillLevelSchema } from "gamejitsu/schemas/skillLevel"
import { Slider } from "@blueprintjs/core"
import { UserContext } from "gamejitsu/contexts"
import Router from 'next/router'

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  photoUrl: "",
  skillLevel: "medium"
}

type Values = typeof initialValues

const skillLevels = SkillLevelSchema.types.map((t) => t.value)

const isSkillLevelValid = (value: string): value is SkillLevel => (skillLevels as string[]).includes(value)

const onSubmitCoach = async (values: Values): Promise<void> => {
  const {
    email,
    firstName,
    lastName,
    photoUrl,
    skillLevel
  } = values
  if (!isSkillLevelValid(skillLevel)) {
    throw new Error(`Invalid skill level value in coach signup: ${skillLevel}`)
  }
  await createModel("coach", {
    email,
    firstName,
    lastName,
    photoUrl,
    skillLevel
  })
  Router.push("/coach-dashboard")
}

const getUser = () => {
  const user = useContext(UserContext)
  if (user) return user
  else throw new Error("user null")
}

const schema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  photoUrl: string(),
  skillLevel: string().required()
})

const LabelContent = styled.span`
  white-space: nowrap;
`

const CoachSignUpForm: FunctionComponent = () => {
  const user = getUser()

  const renderLabel = (val: number) => {
    return <LabelContent>
      {titleize(humanize(skillLevels[val]))}
      </LabelContent>
  }

  return (
    <Box width="700px" mx="auto" p={3}>
        <Form title="Sign up as a coach" initialValues={initialValues} schema={schema} onSubmit={onSubmitCoach} buttonText="Register">
          {(formik) => (
            <div>
              <FormGroup label="First Name" labelFor="text-input">
                <InputGroup onChange={formik.handleChange('firstName')} id="text-input" />
              </FormGroup>
              <FormGroup label="Last Name" labelFor="text-input">
                <InputGroup onChange={formik.handleChange('lastName')} id="text-input" />
              </FormGroup>
              <FormGroup label="Email" labelFor="text-input">
                <InputGroup onChange={formik.handleChange('email')} id="text-input" />
              </FormGroup>
              <FormGroup label="Photo URL" labelFor="text-input" labelInfo="(optional)">
                <InputGroup onChange={formik.handleChange('photoUrl')} id="text-input" placeholder="Placeholder text" />
              </FormGroup>
              <FormGroup label="Skill Level" labelFor="text-input">
                <Box width="250px">
                  <Slider
                    min={0}
                    max={3}
                    stepSize={1}
                    labelStepSize={1}
                    onChange={(value: number) => formik.setFieldValue("skillLevel", skillLevels[value])}
                    labelRenderer={renderLabel}
                    showTrackFill={true}
                    value={skillLevels.indexOf(formik.values.skillLevel as SkillLevel)}
                    vertical={false}
                    intent="success"
                  />
                </Box>
              </FormGroup>
            </div>
          )}
        </Form>
    </Box>
  )
}

export default CoachSignUpForm
