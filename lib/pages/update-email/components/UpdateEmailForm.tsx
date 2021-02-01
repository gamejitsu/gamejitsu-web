import { Box } from "rebass"
import { object, string } from "yup"
import React, { FunctionComponent, useContext } from "react"

import { updateModel } from "gamejitsu/api"
import { Form, FormGroup, InputGroup } from "gamejitsu/components"
import { UserContext } from "gamejitsu/contexts"
import UserResource from "gamejitsu/api/resources/user"

const initialValues = {
  email: ""
}

type Values = typeof initialValues

const onSubmitUser = async (user: any, values: Values): Promise<void> => {
  console.log("on submit user")
  const { email } = values
  user.email = email
  console.log("user:", user)
  await updateModel(UserResource,user)
  console.log("after user update:")
 // Router.push("/settings")
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

/*const GoogleRecaptchaCoachSignUpForm: FunctionComponent = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.GOOGLE_RECAPTCHA_PUBLIC_KEY}>
      <UpdateEmailForm />
    </GoogleReCaptchaProvider>
  )
}*/

const UpdateEmailForm: FunctionComponent = () => {
  let user = getUser()
  console.log("user:", user)
  //const { executeRecaptcha } = useGoogleReCaptcha()
  //let token: Promise<string>
  //if (executeRecaptcha) token = executeRecaptcha("update_email_page")


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
