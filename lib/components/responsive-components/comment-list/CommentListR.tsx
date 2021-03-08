import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import { Button } from "gamejitsu/components"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"
import { Comment } from "gamejitsu/api/types/comment"
import { Box, Flex } from "rebass"

interface Props {
  displaySaveButton?: boolean
  comments: Comment[]
  selectedComment: Comment | null
  onSelect: (comment: Comment | null) => void
  onSaveReview?: () => void
}

const Header = styled(Box)`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 2px solid ${(props) => props.theme.secondaryColor};
  align-items: center;
  padding: 16px;
  width: 100%;
`

const CommentList: FunctionComponent<Props> = ({
  comments,
  selectedComment,
  onSelect,
  onSaveReview,
  displaySaveButton
}) => {
  const [isSaveReviewOpen, setIsSaveReviewOpen] = useState(false)
  const [commentsExpanded, setCommentsExpanded] = useState<Comment[]>([])
  const [isAllCollapsed, setIsAllCollapsed] = useState(true)

  const compareTimestamp = (a: Comment, b: Comment) => a.timestamp - b.timestamp
  const sortedComments = comments.sort(compareTimestamp)

  const handleCloseNoSaveReview = () => {
    setIsSaveReviewOpen(false)
  }
  const handleSaveReviewClose = () => {
    if (onSaveReview) {
      onSaveReview()
      setIsSaveReviewOpen(false)
    }
  }
  const handleSaveReviewOpen = () => {
    setIsSaveReviewOpen(true)
  }
  const onExpandAllComments = () => {
    setCommentsExpanded(comments)
    setIsAllCollapsed(false)
  }
  const onCollapseAllComments = () => {
    setCommentsExpanded([])
    setIsAllCollapsed(true)
  }
  return (
    <>
      <Flex
        width="100%"
        flexDirection="column"
        ml={[0, 0, 3]}
        height={["100%"]}
        overflowY="scroll"
      >
        <Header>
          <Flex width="100%">
            <Flex width="100%">
              COMMENTS ADDED BY COACH
              <Flex key="saveButton" justifyContent="flex-end" alignItems="center" width="50%">
                <Box>
                  {isAllCollapsed ? (
                    <Button
                      text="Expand all"
                      type="button"
                      onClick={onExpandAllComments.bind(null, comments)}
                    />
                  ) : (
                    <Button
                      text="Collapse all"
                      type="button"
                      onClick={onCollapseAllComments.bind(null, comments)}
                    />
                  )}
                </Box>
              </Flex>
            </Flex>
            {onSaveReview
              ? [
                  displaySaveButton ? (
                    <Flex
                      key="saveButton"
                      width="50%"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Box>
                        <Button text="Save" type="button" onClick={handleSaveReviewOpen} />
                      </Box>
                    </Flex>
                  ) : null
                ]
              : null}
          </Flex>
        </Header>
        <Box>
          <ul>
            {sortedComments.map((comment, index) => {
              return (
                <Flex key={index.toString()}>
                 zzz
                </Flex>
              )
            })}
          </ul>
        </Box>
      </Flex>
      {onSaveReview ? (
        <Dialog
          className={Classes.DIALOG}
          icon="info-sign"
          onClose={handleCloseNoSaveReview}
          title="Save review confirmation"
          autoFocus={true}
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          enforceFocus={true}
          isOpen={isSaveReviewOpen}
          usePortal={true}
        >
          <div className={Classes.DIALOG_BODY}>
            <p>
              Are you sure you want to save the review? Please click SAVE to approve the saving.
            </p>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Tooltip content="This button is hooked up to close the dialog.">
                <Button text="CLOSE" onClick={handleCloseNoSaveReview} />
              </Tooltip>
              <Tooltip content="This button is hooked up to save the review and close the dialog.">
                <Button text="SAVE REVIEW" onClick={handleSaveReviewClose} />
              </Tooltip>
            </div>
          </div>
        </Dialog>
      ) : (
        <div />
      )}
    </>
  )
}

export default CommentList
