import { Button } from "gamejitsu/components"
import { Box, Flex, Text } from "rebass"
import { Formik, Form, Field } from "formik"
import React, { FunctionComponent } from "react"

interface Props {
  onFinish: () => void
}

const CommentForm: FunctionComponent<Props> = ({ onFinish }) => {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values)
          console.log(setSubmitting)
          onFinish()
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex alignItems="center">
              <Box p={3} mr="auto">
                <Field type="comment" name="comment" placeholder="Insert comment" />
              </Box>
            </Flex>
            <Box>
              <Button text="Submit comment" type="submit" disabled={isSubmitting} />
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CommentForm
