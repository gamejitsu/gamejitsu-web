import React, { FunctionComponent, useState, useRef, useEffect } from "react"
import styled from "styled-components"

import { Box } from "rebass"
import { Comment } from "gamejitsu/models/review"
import { commentDuration } from "."
import { darken } from "polished"

interface Props {
  comments: Comment[]
  videoDuration: number
  videoTimestamp: number
  onVideoTimestampChange: (timestamp: number) => void
}

interface SquareProps {
  duration: number
  containerWidth: number
  comment: Comment
}

interface CursorOverlayProps {
  duration: number
  timestamp: number
  containerWidth: number
}

const getWidth = (props: SquareProps) => {
  const totalDuration = props.duration
  return (commentDuration / totalDuration) * props.containerWidth
}

const getX = (props: SquareProps) => {
  const commentTimestamp = props.comment.timestamp
  const totalDuration = props.duration
  const ratio = (commentTimestamp - commentDuration / 2) / totalDuration
  return ratio * props.containerWidth
}

const getCursorLeft = (props: CursorOverlayProps) => {
  const timestamp = props.timestamp
  const totalDuration = props.duration
  return (timestamp / totalDuration) * props.containerWidth
}

const Container = styled(Box)`
  background-color: ${(props) => props.theme.secondaryColor};
  position: relative;
  height: 40px;
  background: linear-gradient(
    to bottom,
    ${(props) => darken(0.3, props.theme.primaryColor)},
    ${(props) => props.theme.primaryColor}
  );
`
const Square = styled(Box)<SquareProps>`
  background-color: ${(props) => props.theme.secondaryColor};
  left: ${(props) => `${getX(props)}px`};
  width: ${(props) => `${getWidth(props)}px`};
  height: 100%;
  position: absolute;
  border: 1px solid ${(props) => props.theme.lightBackgroundColor};
`

const CursorOverlay = styled(Box)<CursorOverlayProps>`
  background-color: black;
  opacity: 0.4;
  right: 0;
  left: ${(props) => `${getCursorLeft(props)}px`};
  position: absolute;
  height: 100%;
`

const CommentBar: FunctionComponent<Props> = ({
  comments,
  videoDuration,
  videoTimestamp,
  onVideoTimestampChange
}) => {
  let [containerWidth, setContainerWidth] = useState(0)
  let containerRef = useRef<HTMLElement>(null)

  const onBarClick = (e: React.MouseEvent) => {
    const rect = containerRef.current && containerRef.current.getBoundingClientRect()
    const x = e.clientX - (rect ? rect.left : 0)
    const timestamp = Math.floor((x / containerWidth) * videoDuration)
    onVideoTimestampChange(timestamp)
  }

  useEffect(() => {
    setContainerWidth(containerRef.current ? containerRef.current.offsetWidth : 0)
  })

  return (
    <Container onClick={onBarClick} ref={containerRef}>
      {comments.map((comment, index) => {
        return (
          <Square
            key={index.toString()}
            comment={comment}
            containerWidth={containerWidth}
            duration={videoDuration}
          />
        )
      })}
      <CursorOverlay
        timestamp={videoTimestamp}
        containerWidth={containerWidth}
        duration={videoDuration}
      />
    </Container>
  )
}

export default CommentBar
