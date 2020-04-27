import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { Box } from "rebass"
import { Comment } from "gamejitsu/api/types/comment"
import { lighten } from "polished"
import { formatTimestamp } from "gamejitsu/utils/duration"

interface Props {
  comments: Comment[]
  selectedComment: Comment | null
  onSelect: (comment: Comment | null) => void
}

interface ListItemProps {
  comment: Comment
  selectedComment: Comment | null
}

const ListItem = styled.li<ListItemProps>`
  background-color: ${({ comment, selectedComment, theme }) =>
    comment !== selectedComment ? "transparent" : lighten(0.1, theme.lightBackgroundColor)}; };
  cursor: pointer;
`

const CommentList: FunctionComponent<Props> = ({ comments, selectedComment, onSelect }) => {
  const onSelectListItem = (comment: Comment) =>
    comment === selectedComment ? onSelect(null) : onSelect(comment)

  const compareTimestamp = (a: Comment, b: Comment) => a.timestamp - b.timestamp

  const sortedComments = comments.sort(compareTimestamp)

  return (
    <Box overflow="auto" mr="auto">
      <ul>
        {sortedComments.map((comment, index) => (
          <ListItem key={index.toString()} comment={comment} selectedComment={selectedComment}>
            <a onClick={onSelectListItem.bind(null, comment)}>
              {formatTimestamp(comment.timestamp)} - {comment.text}
            </a>
          </ListItem>
        ))}
      </ul>
    </Box>
  )
}

export default CommentList
