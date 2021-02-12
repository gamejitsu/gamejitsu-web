import { Box } from "rebass"
import { object, string } from "yup"
import React, { FunctionComponent, useContext } from "react"

import { updateModel } from "gamejitsu/api"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { UserContext } from "gamejitsu/contexts"
import UserResource from "gamejitsu/api/resources/user"
import Router from "next/router"

const initialValues = {
  email: ""
}

type Values = typeof initialValues

const onSubmitUser = async (user: any, values: Values): Promise<void> => {
  const { email } = values
  user.email = email
  await updateModel(UserResource, user)
  Router.push("/settings")
}

const getUser = () => {
  const user = useContext(UserContext)
  if (user) return user
  else throw new Error("user null")
}

const schema = object({
  email: string()
    .email()
    .required()
})

const UpdateEmailForm: FunctionComponent = () => {
  let user = getUser()

  return (
    <Box width="700px" mx="auto" p={3}>
      <Form
        title="Change Email"
        initialValues={initialValues}
        schema={schema}
        onSubmit={(values) => onSubmitUser(user, values)}
        buttonText="Save"
      >
        {(formik) => (
          <div>
            <FormGroup label="Email" labelFor="text-input">
              <InputGroup onChange={formik.handleChange("email")} id="text-input" />
            </FormGroup>
          </div>
        )}
      </Form>
    </Box>
  )
}

export default UpdateEmailForm
