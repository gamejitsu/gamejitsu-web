import React, { Fragment } from "react"

import { Box, Flex } from "rebass"
import { Button } from "gamejitsu/components"
import { Comment } from "gamejitsu/api/types/comment"
import { useFormik } from "formik"
import { TextArea, Intent, Toaster, Position, Toast } from "@blueprintjs/core"
import { object, string } from "yup"

interface Props {
  comment: Comment | null
  timestamp: number
  onSave: (comment: Comment) => void
  onDelete: () => void
}

const validationSchema = object({
  text: string().required()
})

type CommentFormComponent = (props: Props) => React.ReactElement

const onError = () => {
  const AppToaster = Toaster.create({
    className: "recipe-toaster",
    position: Position.TOP
  })
  AppToaster.show({
    intent: Intent.SUCCESS,
    icon: "tick",
    message: "Review saved!"
  })
}

const CommentFormNew: CommentFormComponent = ({ onSave, onDelete, comment, timestamp }) => {
  const formik = useFormik({
    initialValues: { text: comment ? comment.text : "" },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async ({ text }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      await onSave({ text, timestamp })
      resetForm({})
      setSubmitting(false)
    }
  })
  return (
    <div>
      <Flex alignItems="center">
        <Box height="90px" p={3} width="100%">
          <form onSubmit={formik.handleSubmit}>
            <TextArea
              growVertically={true}
              large={true}
              intent={Intent.PRIMARY}
              onChange={formik.handleChange}
              name={"text"}
              fill={true}
              value={formik.values.text}
            />
            {formik.errors.text ? (
              <Toaster position={Position.TOP}>
                <Toast
                  intent={Intent.DANGER}
                  icon="warning-sign"
                  message={"Error inserting comment.  Comment empty."}
                />
              </Toaster>
            ) : (
              <div />
            )}
            <Box>
              {comment !== null ? (
                <Fragment>
                  <Box p={0}>
                    <Button text="Update comment" type="submit" />
                  </Box>
                  <Box>
                    <Button text="Delete comment" type="button" onClick={onDelete} />
                  </Box>
                </Fragment>
              ) : (
                <Button text="Insert comment" type="submit" />
              )}
            </Box>
          </form>
        </Box>
      </Flex>
    </div>
  )
}

export default CommentFormNew
