import { Classes, Dialog, Tooltip } from "@blueprintjs/core"
import { Button } from "gamejitsu/components"
import React, { FunctionComponent } from "react"

interface Props {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

const SaveReviewDialog: FunctionComponent<Props> = ({ isOpen, onClose, onSave }) => {
  return (
    <Dialog
      className={Classes.DIALOG}
      icon="info-sign"
      onClose={() => onClose()}
      title="Save review confirmation"
      autoFocus={true}
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      enforceFocus={true}
      isOpen={isOpen}
      usePortal={true}
    >
      <div className={Classes.DIALOG_BODY}>
        <p>Are you sure you want to save the review? Please click SAVE to approve the saving.</p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Tooltip content="This button is hooked up to close the dialog.">
            <Button text="CLOSE" onClick={() => onClose()} />
          </Tooltip>
          <Tooltip content="This button is hooked up to save the review and close the dialog.">
            <Button text="SAVE REVIEW" onClick={() => onSave()} />
          </Tooltip>
        </div>
      </div>
    </Dialog>
  )
}

export default SaveReviewDialog
