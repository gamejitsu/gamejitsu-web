import { Button } from "gamejitsu/components"
import { Box, Flex, Text } from "rebass"
import { Formik, Form, Field } from "formik"
import React, { FunctionComponent, Fragment } from "react"
import { Comment } from "gamejitsu/models/review"

interface Props {
  comment: Comment | null
  onFinish: (comment: string) => void
  onDelete: () => void
}

const CommentForm: FunctionComponent<Props> = ({ onFinish, onDelete, comment }) => {
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={comment !== null ? { comment: comment.text } : { comment: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          onFinish(values.comment)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex alignItems="center">
              <Box p={3} mr="auto">
                {
                  <Field type="text" name="comment" placeholder="Comment text..." />
                }
              </Box>
            </Flex>
            <Box>
              {comment !== null
                ? <Fragment>
                  <Box p={0}>
                    <Button text="Update comment" type="submit" disabled={isSubmitting} />
                  </Box>
                  < Box>
                    <Button text="Delete comment" type="submit" onClick={onDelete}/>
                  </Box>
                </Fragment>
                : <Button text="Insert comment" type="submit" disabled={isSubmitting} />
              }
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CommentForm
