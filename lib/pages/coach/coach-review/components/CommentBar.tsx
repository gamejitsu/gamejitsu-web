import React, { FunctionComponent, useState, useRef, useEffect } from "react"
import styled from "styled-components"

import { Box, Flex } from "rebass"
import { Comment } from "gamejitsu/api/types/comment"
import { commentDuration } from "."
import { formatTimestamp } from "gamejitsu/utils/duration"

interface Props {
  comments: Comment[]
  videoDuration: number
  videoTimestamp: number
  onVideoTimestampChange: (timestamp: number) => void
}

interface ElementCommentProps {
  duration: number
  containerWidth: number
  comment: Comment
}

interface CursorOverlayProps {
  duration: number
  timestamp: number
  containerWidth: number
}

const getWidth = (props: ElementCommentProps) => {
  const totalDuration = props.duration
  return (commentDuration / totalDuration) * props.containerWidth
}

const getX = (props: ElementCommentProps) => {
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
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  height: 120px;
  background: ${(props) => props.theme.lightBackgroundColor};
  border: 1px solid ${(props) => props.theme.activeColor};
`

const T = styled(Box)`
  height: 80%;
  width: 2px;
  background-color: white;
`

const ElementComment = styled(Box) <ElementCommentProps>`
  height: 85%;
  width: 2px;
  background-color: ${(props) => props.theme.primaryColor};
  margin: auto;
`

const Bar = styled(Box)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  width: 85%;
`

const BarText = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 12px;
`

const TimeTag = styled(Box)`
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
`

const getPercentage = (comment: Comment, totalDuration: number) => {
  const commentTimestamp = comment.timestamp
  const percentage = commentTimestamp * 100 / totalDuration
  return Math.round(percentage)
}

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

  const array1 = [...Array(100).keys()]

  return (
    <Container onClick={onBarClick} ref={containerRef}>

      <Flex height="100%" width="100%" justifyContent="center">
        <Box mb={1} mr={3}>
          <Flex height="100%" alignItems="flex-end">
            <Box>
              <BarText>START</BarText>
            </Box>
          </Flex>
        </Box>
        <Bar>
          <Flex height="100%" alignItems="flex-end" justifyContent="space-between">
            {array1.map(key => {
              let isComment = false
              comments.map((comment, index) => {
                const percentage = getPercentage(comment, videoDuration)
                if (percentage === key) {
                  console.log("FOUNDDDDDDD!!!!!!")
                  isComment = true
                }
              })
              if (isComment) {
                return comments.map((comment, index) => {
                  if (getPercentage(comment, videoDuration) === key) {
                    console.log("in return element")
                    console.log(index)
                    console.log(key)
                    return <Box height="100%">
                      <TimeTag>{formatTimestamp(comment.timestamp)}</TimeTag>
                      <ElementComment
                        key={index.toString()}
                        comment={comment}
                        containerWidth={containerWidth}
                        duration={videoDuration}
                      />
                    </Box>
                  }
                })
              }
              else {
                return <T key={key.toString()} />
              }
            })
            }
          </Flex>
        </Bar>
        <Box mb={2} ml={3}>
          <Flex height="100%" alignItems="flex-end">
            <Box>
              <BarText>FINISH</BarText>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

export default CommentBar
