import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import { Button } from "gamejitsu/components"
import { Comment } from "gamejitsu/api/types/comment"
import { Box, Flex } from "rebass"
import CommentElement from "./Comment"
import { breakpointDown } from "../../../utils/mediaQueryDevices"

interface Props {
  comments: Comment[]
  selectedComment: Comment | null
  onSelect: (comment: Comment | null) => void
}

const Header = styled(Box)`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 2px solid ${(props) => props.theme.secondaryColor};
  align-items: center;
  padding: 16px;
  width: 100%;
`

const CommentsWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;

  @media ${breakpointDown.md} {
    position: relative;
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

const CommentList: FunctionComponent<Props> = ({ comments, selectedComment, onSelect }) => {
  const [commentsExpanded, setCommentsExpanded] = useState<Comment[]>([])
  const [isAllCollapsed, setIsAllCollapsed] = useState(true)

  const compareTimestamp = (a: Comment, b: Comment) => a.timestamp - b.timestamp
  const sortedComments = comments.sort(compareTimestamp)

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

  const onSelectComment = (comment: Comment, expandComment: boolean | null) => {
    expandComment ? onExpandComment(comment) : null
    return onSelect(comment)
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
      <Flex width="100%" flexDirection="column" ml={[0, 0, 3]} height={["100%"]}>
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
          </Flex>
        </Header>
        <Flex style={{ position: "relative" }} height={"100%"}>
          <CommentsWrapper overflowY="scroll" flexDirection={"column"}>
            {sortedComments.map((comment, index) => {
              let isCollapsed: boolean = true
              commentsExpanded.forEach((commentExpanded) => {
                commentExpanded == comment ? (isCollapsed = false) : ""
              })
              return (
                <Flex key={index.toString()}>
                  <CommentElement
                    comment={comment}
                    onSelectComment={onSelectComment}
                    selectedComment={selectedComment}
                    isCollapsed={isCollapsed}
                    onExpandComment={onExpandComment}
                    onCollapseComment={onCollapseComment}
                  ></CommentElement>
                </Flex>
              )
            })}
          </CommentsWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default CommentList
