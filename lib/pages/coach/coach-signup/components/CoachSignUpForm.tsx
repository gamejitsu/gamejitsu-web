import React, { FunctionComponent, useContext } from "react"
import Router from "next/router"

import { Box, Flex } from "rebass"
import { Button } from "gamejitsu/components"
import { createModel } from "gamejitsu/api"
import { Formik } from "formik"
import { object, string } from "yup"
import { UserContext } from "gamejitsu/contexts"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { Slider, Divider, Card, Elevation } from "@blueprintjs/core"
import { SkillLevel } from "gamejitsu/schemas/skillLevel"
import titleize from 'titleize'
import humanize from 'humanize-string'



//TODO if coach signed up, can't access to the signup page

const getUser = () => {
  const user = useContext(UserContext)
  if (user) return user
  else throw new Error("user null")
}

const skillLevels = SkillLevel.types.map((t) => t.value)

const schema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string()
    .email()
    .required(),
  skillLevel: string().required()
})

const CoachSignUpForm: FunctionComponent = () => {
  const user = getUser()

  let sliderVal = 0

  const renderLabel = (val: number) =>
    titleize(humanize(skillLevels[val]))

  return (
    <Box width="700px" mx="auto" p={3}>
      <Card elevation={Elevation.THREE}>
        <Form title="Sign up as a coach">
          <FormGroup label="First Name" labelFor="text-input">
            <InputGroup id="text-input" />
          </FormGroup>
          <FormGroup label="Last Name" labelFor="text-input">
            <InputGroup id="text-input" />
          </FormGroup>
          <FormGroup label="Email" labelFor="text-input">
            <InputGroup id="text-input" />
          </FormGroup>
          <FormGroup label="Photo URL" labelFor="text-input" labelInfo="(optional)">
            <InputGroup id="text-input" placeholder="Placeholder text" />
          </FormGroup>
          <FormGroup label="Skill Level" labelFor="text-input">
            <Box width="250px">
              <Slider
                min={0}
                max={3}
                stepSize={1}
                labelStepSize={1}
                onChange={() => { }}
                labelRenderer={renderLabel}
                showTrackFill={true}
                value={sliderVal}
                vertical={false}
              />
            </Box>
          </FormGroup>
          <Box my={4}>
            <Divider />
          </Box>
          <Flex justifyContent="flex-end">
            <Button text="Register" />
          </Flex>
        </Form>
      </Card>
    </Box>
  )
}

export default CoachSignUpForm
