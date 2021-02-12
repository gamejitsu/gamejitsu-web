import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

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

interface ListItemContainerProps {
  isCollapsed: boolean
  comment: Comment
  selectedComment: Comment | null
}

const ListItemContainer = styled(Box)<ListItemContainerProps>`
  background-color: ${({ comment, selectedComment, theme }) => {
    return comment !== selectedComment ? "#212122" : lighten(0.15, theme.lightBackgroundColor)
  }};
  min-height: 120px;
  flex: 1;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-top: 0;
`

const ListItem = styled.li`
  cursor: pointer;
  white-space: pre-line;
  color: #ffffff;

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 7px;
  }

  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  h4 {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 3px;
  }

  strong {
    font-weight: bold;
  }

  ul {
    list-style-type: disc;
    margin-bottom: 6px;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-bottom: 6px;
    text-align: left;
  }

  li {
    margin-left: 2rem;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  p {
    margin-bottom: 6px;
  }

  strike {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  code {
    font-size: 17px;
    font-family: monospace;
  }

  a {
    text-decoration: none;
  }
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
  const [isAllCollapsed, setIsAllCollapsed] = useState(true)

  const onClickToTimestamp = (comment: Comment) =>
    comment === selectedComment ? onSelect(null) : onSelect(comment)

  const onSelectListItem = (comment: Comment) => {
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
        height={["100%", "100%", "87vh"]}
        overflowY="scroll"
      >
        <Header>
          <Flex width="100%">
            <Flex width="100%">
              <CommentListTitle>COMMENTS ADDED BY COACH</CommentListTitle>
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
              let isCollapsed: boolean = true
              commentsExpanded.forEach((commentExpanded) => {
                commentExpanded == comment ? (isCollapsed = false) : ""
              })
              return (
                <Flex key={index.toString()}>
                  <ListItemContainer
                    comment={comment}
                    selectedComment={selectedComment}
                    p={3}
                    isCollapsed={isCollapsed}
                  >
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
                      <ListItem>
                        <a onClick={onSelectListItem.bind(null, comment)}>
                          {isCollapsed ? (
                            <ReactMarkdown
                              children={
                                comment.text.length <= 90
                                  ? comment.text.substring(0, 90)
                                  : comment.text.substring(0, 90) + `...`
                              }
                            />
                          ) : (
                            <ReactMarkdown children={comment.text} />
                          )}
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
