import React, { FunctionComponent, useEffect, useRef, RefObject } from "react"
import styled from "styled-components"

import { Box } from "rebass"
import { Comment } from "gamejitsu/models/review"
import { lighten } from "polished"

interface Props {
  comments: Comment[]
  videoTimestamp: number
  onSelect: (comment: Comment | null) => void
  sidebarRef: RefObject<Element>
}

interface ListItemProps {
  comment: Comment
  videoTimestamp: number
}

const getBackgroundColor = (videoTimestamp: number, comment: Comment, color: string) =>
  videoTimestamp < comment.timestamp - 10 || videoTimestamp > comment.timestamp + 10
    ? "transparent"
    : color

const ListItem = styled.li<ListItemProps>`
  background-color: ${(props) =>
    getBackgroundColor(
      props.videoTimestamp,
      props.comment,
      lighten(0.1, props.theme.lightBackgroundColor)
    )}; };
  cursor: pointer;
`

const didUpdate = (sidebarRef: React.RefObject<Element>, onSelect: Props["onSelect"]) => {
  const clickOutsideList = (event: MouseEvent) => {
    const commentMenu = sidebarRef.current
    if (commentMenu !== null && !commentMenu.contains(event.target as Node)) {
      onSelect(null)
    }
  }

  window.addEventListener("click", clickOutsideList)
  return () => {
    window.removeEventListener("click", clickOutsideList)
  }
}

const CommentMenu: FunctionComponent<Props> = ({
  comments,
  videoTimestamp,
  onSelect,
  sidebarRef
}) => {
  useEffect(didUpdate.bind(null, sidebarRef, onSelect))

  return (
    <Box overflow="auto" mr="auto">
      <ul>
        {comments.map((comment, index) => (
          <ListItem key={index.toString()} videoTimestamp={videoTimestamp} comment={comment}>
            <a onClick={onSelect.bind(null, comment)}>{comment.text}</a>
          </ListItem>
        ))}
      </ul>
    </Box>
  )
}

export default CommentMenu
