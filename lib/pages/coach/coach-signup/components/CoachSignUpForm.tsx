import React, { FunctionComponent, useContext } from "react"
import Router from "next/router"

import { Box, Flex } from "rebass"
import { Button } from "gamejitsu/components"
import { createModel } from "gamejitsu/api"
import { Form, Col } from "react-bootstrap"
import { Formik } from "formik"
import { object, string } from "yup"
import { UserContext } from "gamejitsu/contexts"
import { SelectSkillLevel } from "gamejitsu/components"

//TODO if coach signed up, can't access to the signup page

const getUser = () => {
  const user = useContext(UserContext)
  if (user) return user
  else throw new Error("user null")
}

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

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          photoUrl: "",
          skillLevel: "medium"
        }}
        onSubmit={async (
          { email, firstName, lastName, photoUrl, skillLevel },
          { setSubmitting }
        ) => {
          setSubmitting(true)
          if (
            skillLevel !== "medium" &&
            skillLevel !== "high" &&
            skillLevel !== "very_high" &&
            skillLevel !== "pro"
          ) {
            throw new Error(`Invalid skill level value in coach signup: ${skillLevel}`)
          }
          await createModel("coach", {
            user: user.id,
            email,
            firstName,
            lastName,
            photoUrl,
            skillLevel
          })
          // TODO go to landing page or send alert on dashboard explaining
          Router.push(`/dashboard`)
          setSubmitting(false)
          //TODO onFinish()
        }}
      >
        {({ isSubmitting, values, errors, touched, handleChange, handleSubmit }) => (
          <Flex justifyContent="center">
            <Box width="60%">
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="validationFormik01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="validationFormik02">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="validationFormik03">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <SelectSkillLevel />
                <Form.Row>
                  <Button text="Sign Up as Coach" type="submit" disabled={isSubmitting} />
                </Form.Row>
              </Form>
            </Box>
          </Flex>
        )}
      </Formik>
    </div>
  )
}

export default CoachSignUpForm
