import React, { FunctionComponent, useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Box, Flex } from "rebass"
import { lighten } from "polished"
import { Comment } from "gamejitsu/api/types/comment"

interface Props {
  comments: Comment[]
  videoDuration: number
  videoTimestamp: number
  onVideoTimestampChange: (timestamp: number) => void
  onSelect: (comment: Comment | null) => void
}

interface ElementCommentProps {
  duration: number
  containerWidth: number
  comment: Comment
  selected: boolean
}

interface TProps {
  selected: boolean
}

const Container = styled(Box)`
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  height: 90px;
  background: ${(props) => props.theme.lightBackgroundColor};
  border: 1px solid ${(props) => props.theme.activeColor};
`

const T = styled(Box)<TProps>`
  height: 55%;
  width: 3px;
  background-color: ${(props) => (props.selected ? props.theme.highlightColor : "#37373a")};
  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.highlightColor},
      ${(props) => props.theme.highlightColor}
    );
  }
`

const ElementComment = styled(Box)<ElementCommentProps>`
  height: 90%;
  width: 3px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? lighten(0.3, props.theme.primaryColor) : props.theme.primaryColor};
  &:hover {
    background-color: #fff;
  }
`

const Bar = styled(Box)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  width: 100%;
`

const getPercentage = (timestamp: number, duration: number) => {
  const percentage = (timestamp * 100) / duration
  return Math.floor(percentage)
}

const reduceComments = (comments: Comment[]) => {
  const reducer = (accumulator: Record<number, Comment[]>, currentValue: Comment) => {
    return accumulator[currentValue.timestamp]
      ? {
          ...accumulator,
          [currentValue.timestamp]: [...accumulator[currentValue.timestamp], currentValue]
        }
      : { ...accumulator, [currentValue.timestamp]: [currentValue] }
  }
  return comments.reduce(reducer, {} as Record<number, Comment[]>)
}

const CommentBar: FunctionComponent<Props> = ({
  comments,
  videoDuration,
  videoTimestamp,
  onVideoTimestampChange,
  onSelect
}) => {
  let [containerWidth, setContainerWidth] = useState(0)
  let containerRef = useRef<HTMLElement>(null)
  const onBarClick = (e: React.MouseEvent) => {
    const rect = containerRef.current && containerRef.current.getBoundingClientRect()
    const x = e.clientX - (rect ? rect.left : 0)
    const timestamp = Math.floor((x / containerWidth) * videoDuration)
    onVideoTimestampChange(timestamp)
  }

  const onSelectComment = (comment: Comment) => {
    return onSelect(comment)
  }

  useEffect(() => {
    setContainerWidth(containerRef.current ? containerRef.current.offsetWidth : 0)
  })

  const emptyBarsArray = [...Array(100).keys()]

  const reducedComments = reduceComments(comments)

  return (
    <Container>
      <Flex height="100%" width="100%" justifyContent="center" px={2}>
        <Bar onClick={onBarClick} ref={containerRef}>
          <Flex height="100%" alignItems="flex-end" justifyContent="space-between">
            {emptyBarsArray.map((key) => {
              let commentTimestamp = null
              Object.values(reducedComments).forEach((comments: Comment[]) => {
                const percentage = getPercentage(comments[0].timestamp, videoDuration)
                if (percentage === key) {
                  commentTimestamp = comments[0].timestamp
                }
              })
              const selected = key === getPercentage(videoTimestamp, videoDuration)
              if (commentTimestamp) {
                const comments = reducedComments[commentTimestamp]
                return (
                  <ElementComment
                    key={commentTimestamp}
                    comment={comments[0]}
                    containerWidth={containerWidth}
                    duration={videoDuration}
                    selected={selected}
                    onClick={() => onSelectComment(comments[0])}
                  />
                )
              } else {
                return <T selected={selected} key={`${key.toString()}-bar`} />
              }
            })}
          </Flex>
        </Bar>
      </Flex>
    </Container>
  )
}

export default CommentBar
