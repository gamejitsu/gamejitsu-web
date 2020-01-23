import { Box, Flex } from "rebass"
import { Formik } from "formik"
import Router from "next/router"
import React, { FunctionComponent, useContext } from "react"
import { Button } from "gamejitsu/components"
import { createModel } from "gamejitsu/api"
import { UserContext } from "gamejitsu/contexts"
import { object, string } from 'yup'; // for only what you need
import { Form, Col } from "react-bootstrap"

interface Values {
  email: string
  firstName: string
  lastName: string
  photoUrl: string
}

const getUser = () => {
  const user = useContext(UserContext)
  if (user)
    return user
  else
    throw new Error("user null")
}

const schema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required()
});

const CoachSignUpForm: FunctionComponent = () => {
  const user = getUser()

  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{} as Values}
        onSubmit={async ({ email, firstName, lastName, photoUrl }, { setSubmitting }) => {
          setSubmitting(true)
          await createModel("coach", { user: user.id, email, firstName, lastName, photoUrl })

          // go to landing page or send alert on dashboard explaining 
          Router.push(`/dashboard`)
          setSubmitting(false)
          //onFinish()
        }}
      >
        {({ isSubmitting,
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit }) => (
            <Flex justifyContent="center">
              <Box width="60%">
            <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="validationFormik02">
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
                <Form.Group as={Col} controlId="validationFormik01">
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
                <Form.Group as={Col} controlId="validationFormik02">
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
