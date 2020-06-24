import React, { FunctionComponent, Fragment } from "react"

import { Box, Flex } from "rebass"
import { Button } from "gamejitsu/components"
import { Comment } from "gamejitsu/api/types/comment"
import { Formik, Form, Field } from "formik"
import { Review } from "gamejitsu/api/resources/review"
import styled from "styled-components"

interface Props {
  comment: Comment | null
  timestamp: number
  onSave: (comment: Comment) => void
  onDelete: () => void
}

const CommentFormNew: FunctionComponent<Props> = ({ onSave, onDelete, comment, timestamp }) => {
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={comment !== null ? { text: comment.text } : { text: "" }}
        onSubmit={async ({ text }, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          await onSave({ text, timestamp })
          resetForm()
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex alignItems="center">
              <Box height="90px" p={3} mr="auto">
                {<Field type="text" name="text" placeholder="Comment text..." />}
              </Box>
            </Flex>
            <Box mr="auto">
              {comment !== null ? (
                <Fragment>
                  <Box p={0}>
                    <Button text="Update comment" type="submit" disabled={isSubmitting} />
                  </Box>
                  <Box>
                    <Button text="Delete comment" type="button" onClick={onDelete} />
                  </Box>
                </Fragment>
              ) : (
                <Button text="Insert comment" type="submit" disabled={isSubmitting} />
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CommentFormNew
