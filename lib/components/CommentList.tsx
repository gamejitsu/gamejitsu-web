import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"

import { Box, Flex } from "rebass"
import { Comment } from "gamejitsu/api/types/comment"
import { lighten } from "polished"
import { formatTimestamp } from "gamejitsu/utils/duration"
import { Button } from "gamejitsu/components"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"

interface Props {
  displaySaveButton?: boolean
  comments: Comment[]
  selectedComment: Comment | null
  onSelect: (comment: Comment | null) => void
  onSaveReview?: () => void
}

interface ListItemProps {
  comment: Comment
  selectedComment: Comment | null
}

interface ListItemContainerProps {
  isCollapsed: boolean
}

const ListItemContainer = styled(Box)<ListItemContainerProps>`
  min-height: 120px;
  flex: 1;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-top: 0;
  background-color: #212122;
`

const ListItem = styled.li<ListItemProps>`
  background-color: ${({ comment, selectedComment, theme }) => {
    return comment !== selectedComment ? "transparent" : lighten(0.1, theme.lightBackgroundColor)
  }};
  cursor: pointer;
`

const CommentListTitle = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: bold;
  flex-grow: 1;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Header = styled(Box)`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 2px solid ${(props) => props.theme.secondaryColor};
  align-items: center;
  padding: 16px;
  width: 100%;
`

const TimeTag = styled(Box)`
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
`

const LessExpandTag = styled(Box)`
  color: white;
  font-weight: bold;
  font-size: 14px;
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

  const onClickToTimestamp = (comment: Comment) =>
    comment === selectedComment ? onSelect(null) : onSelect(comment)

  const onSelectListItem = (comment: Comment, isCollapsed: boolean) => {
    onExpandComment(comment)
    return comment === selectedComment ? onSelect(null) : onSelect(comment)
  }

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
  const onCollapseComment = (selectedComment: Comment) => {
    const newCommentsExpanded: Comment[] = commentsExpanded
      ? commentsExpanded.filter((comment: Comment) => comment !== selectedComment)
      : commentsExpanded
    setCommentsExpanded(newCommentsExpanded)
  }
  const onExpandComment = (selectedComment: Comment) => {
    const newCommentsExpanded: Comment[] = [...commentsExpanded, selectedComment]
    setCommentsExpanded(newCommentsExpanded)
  }
  return (
    <>
      <Flex
        width="100%"
        flexDirection="column"
        ml={[0, 0, 3]}
        height={["100%", "100%", "87vh"]}
        overflowY="scroll"
      >
        <Header>
          <Flex width="100%">
            <Flex>
              <CommentListTitle>COMMENTS ADDED BY COACH</CommentListTitle>
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
              let isCollapsed: boolean = true
              commentsExpanded.forEach((commentExpanded) => {
                commentExpanded == comment ? (isCollapsed = false) : ""
              })
              return (
                <Flex key={index.toString()}>
                  <ListItemContainer p={3} isCollapsed={isCollapsed}>
                    <Flex alignItems="center" justifyContent="space-between">
                      <TimeTag>
                        <a onClick={onClickToTimestamp.bind(null, comment)}>
                          {formatTimestamp(comment.timestamp)}
                        </a>
                      </TimeTag>
                      {comment.text.length >= 90 ? (
                        <LessExpandTag>
                          {isCollapsed ? (
                            <a onClick={onExpandComment.bind(null, comment)}>Expand</a>
                          ) : (
                            <a onClick={onCollapseComment.bind(null, comment)}>Collapse</a>
                          )}
                        </LessExpandTag>
                      ) : null}
                    </Flex>
                    <Box pt={3}>
                      <ListItem comment={comment} selectedComment={selectedComment}>
                        <a onClick={onSelectListItem.bind(null, comment, isCollapsed)}>
                          {isCollapsed
                            ? `${comment.text.substring(0, 90)} ${
                                comment.text.length < 90 ? `` : `...`
                              }`
                            : comment.text}
                        </a>
                      </ListItem>
                    </Box>
                  </ListItemContainer>
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
