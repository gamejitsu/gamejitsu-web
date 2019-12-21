import { Button } from '~/components'
import { Box, Flex, Text } from 'rebass'
import { Formik, Form, Field } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'

const CommentForm = ({ replay, onFinish }) => {
  console.log("replay", replay)
  return (
    <div>
      <Formik
        initialValues={{ }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values)
          console.log(setSubmitting)
          onFinish()
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex direction='column' alignItems='center'>
              <Box p={3} mr="auto">
                <Field type="comment" name="comment" placeholder="Insert comment" />
              </Box>
            </Flex>
            <Box>
              <Button
                text="Submit comment"
                type="submit"
                disabled={isSubmitting}
                replay={replay}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
}

CommentForm.propTypes = {
  replay: PropTypes.object,
  onFinish: PropTypes.func.isRequired
}

export default CommentForm
