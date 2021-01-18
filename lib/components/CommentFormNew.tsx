import React, { useState } from "react"
import { Box, Flex } from "rebass"
import { useFormik } from "formik"
import {
  TextArea,
  Intent,
  Toaster,
  Position,
  Toast,
  Dialog,
  Classes,
  Tooltip
} from "@blueprintjs/core"
import { object, string } from "yup"

import { Button } from "gamejitsu/components"
import { Comment } from "gamejitsu/api/types/comment"

interface Props {
  comment: Comment | null
  timestamp: number
  onSave: (comment: Comment) => void
  onDelete: () => void
  onDeselect: () => void
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

const CommentFormNew: CommentFormComponent = ({
  onSave,
  onDelete,
  onDeselect,
  comment,
  timestamp
}) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isUpdateOpen, setIsUpdateOpen] = useState(false)

  const formik = useFormik({
    initialValues: { text: comment ? comment.text : "" },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async ({ text }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      console.log("comment-timestamp:", timestamp)
      await onSave({ text, timestamp })
      resetForm({})
      setSubmitting(false)
    }
  })
  const handleCloseNoDelete = () => {
    setIsDeleteOpen(false)
  }
  const handleDeleteClose = () => {
    onDelete()
    setIsDeleteOpen(false)
  }
  const handleDeleteOpen = () => {
    setIsDeleteOpen(true)
  }

  const handleCloseNoUpdate = () => {
    setIsUpdateOpen(false)
  }
  const handleUpdateClose = async () => {
    await formik.submitForm()
    setIsUpdateOpen(false)
  }
  const handleUpdateOpen = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e?.preventDefault()
    setIsUpdateOpen(true)
  }

  return (
    <div>
      <Flex alignItems="center">
        <Box py={3} width="100%">
          <form onSubmit={formik.handleSubmit}>
            <TextArea
              growVertically={true}
              large={true}
              intent={Intent.PRIMARY}
              onChange={formik.handleChange}
              name={"text"}
              fill={true}
              value={formik.values.text}
              style={{
                backgroundColor: "#212122",
                color: "#eee",
                height: "120px",
                opacity: 0.9,
                padding: "12px",
                boxShadow: "1px 1px #212212"
              }}
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
            <Box mt={3}>
              {comment !== null ? (
                <Flex>
                  <Box p={0} mr={2}>
                    <Button text="Update comment" type="submit" onClick={handleUpdateOpen} />
                  </Box>
                  <Box mr={2}>
                    <Button text="Delete comment" type="button" onClick={handleDeleteOpen} />
                  </Box>
                  <Box>
                    <Button text="Unselect comment" type="button" onClick={onDeselect} />
                  </Box>
                </Flex>
              ) : (
                <Button text="Insert comment" type="submit" />
              )}
            </Box>
          </form>
          <Dialog
            className={Classes.DIALOG}
            icon="info-sign"
            onClose={handleCloseNoDelete}
            title="Delete comment confirmation"
            autoFocus={true}
            canEscapeKeyClose={true}
            canOutsideClickClose={true}
            enforceFocus={true}
            isOpen={isDeleteOpen}
            usePortal={true}
          >
            <div className={Classes.DIALOG_BODY}>
              <p>
                Are you sure you want to delete the comment? Please delete to approve the deletion.
              </p>
            </div>
            <div className={Classes.DIALOG_FOOTER}>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <Tooltip content="This button is hooked up to close the dialog.">
                  <Button text="CLOSE" onClick={handleCloseNoDelete} />
                </Tooltip>
                <Tooltip content="This button is hooked up to delete the comment and close the dialog.">
                  <Button text="DELETE COMMENT" onClick={handleDeleteClose} />
                </Tooltip>
              </div>
            </div>
          </Dialog>

          <Dialog
            className={Classes.DIALOG}
            icon="info-sign"
            onClose={handleCloseNoUpdate}
            title="Update comment confirmation"
            autoFocus={true}
            canEscapeKeyClose={true}
            canOutsideClickClose={true}
            enforceFocus={true}
            isOpen={isUpdateOpen}
            usePortal={true}
          >
            <div className={Classes.DIALOG_BODY}>
              <p>
                Are you sure you want to UPDATE the comment? Press UPDATE to approve the comment
                update.
              </p>
            </div>
            <div className={Classes.DIALOG_FOOTER}>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <Tooltip content="This button is hooked up to close the dialog.">
                  <Button text="CLOSE" onClick={handleCloseNoUpdate} />
                </Tooltip>
                <Tooltip content="This button is hooked up to update the comment and close the dialog.">
                  <Button text="UPDATE COMMENT" onClick={handleUpdateClose} />
                </Tooltip>
              </div>
            </div>
          </Dialog>
        </Box>
      </Flex>
    </div>
  )
}

export default CommentFormNew
