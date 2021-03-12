import React, { FunctionComponent, useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { markdownStyle } from "./markdownStyle"
import ReactMarkdown from "react-markdown"
import { Comment as CommentType } from "gamejitsu/api/types/comment"
import { Box, Flex } from "rebass/styled-components"
import { lighten } from "polished"
import { formatTimestamp } from "gamejitsu/utils/duration"

interface CommentProps {
  comment: CommentType
  selectedComment: CommentType | null
  isCollapsed: boolean
  onSelectComment: (comment: CommentType, expandComment: boolean | null) => void
  onExpandComment: (comment: CommentType) => void
  onCollapseComment: (comment: CommentType) => void
}

interface CommentWrapperProps {
  comment: CommentType
  selectedComment: CommentType | null
}

const Comment: FunctionComponent<CommentProps> = ({
  comment,
  selectedComment,
  isCollapsed,
  onSelectComment,
  onExpandComment,
  onCollapseComment
}) => {
  const commentRef = useRef<HTMLDivElement>(null)
  const [commentText, setCommentText] = useState("")

  useEffect(() => {
    if (selectedComment === comment && commentRef && commentRef.current != null) {
      commentRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }, [selectedComment])

  useEffect(() => {
    let textToDisplay = comment.text
    if (comment.text.length > 120) {
      if (isCollapsed) {
        textToDisplay = comment.text.substring(0, 120) + `...`
      }
    }
    setCommentText(textToDisplay)
  }, [isCollapsed])

  const CommentWrapper = styled(Flex)<CommentWrapperProps>`
    min-height: 120px;
    flex: 1;
    flex-direction: column;
    border-top: 0;
    border: 1px solid ${(props) => props.theme.colors.secondaryColor};
    background-color: ${({ comment, selectedComment, theme }) => {
      return comment !== selectedComment
        ? "#212122"
        : lighten(0.15, theme.colors.lightBackgroundColor)
    }};
  `
  const TimeTag = styled(Box)`
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: black;
    font-weight: bold;
    font-size: 14px;
    padding: 5px;

    a {
      color: black;
    }
  `

  const ExpandCommentTag = styled(Box)`
    color: white;
    font-weight: bold;
    font-size: 14px;
  `

  const MarkdownWrapper = styled(Flex)`
    line-height: 115%;
    color: white;
    cursor: pointer;
    ${markdownStyle}
  `

  return (
    <CommentWrapper ref={commentRef} comment={comment} selectedComment={selectedComment} p={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <TimeTag>
          <a onClick={() => onSelectComment(comment, false)}>
            {formatTimestamp(comment.timestamp)}
          </a>
        </TimeTag>
        {comment.text.length >= 90 ? (
          <ExpandCommentTag>
            {isCollapsed ? (
              <a onClick={() => onExpandComment(comment)}>Expand</a>
            ) : (
              <a onClick={() => onCollapseComment(comment)}>Collapse</a>
            )}
          </ExpandCommentTag>
        ) : null}
      </Flex>
      <MarkdownWrapper
        onClick={() => onSelectComment(comment, true)}
        flexDirection={"column"}
        py={3}
      >
        <ReactMarkdown children={commentText} />
      </MarkdownWrapper>
    </CommentWrapper>
  )
}

export default Comment
