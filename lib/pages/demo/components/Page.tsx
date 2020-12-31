import { Flex, Box } from "rebass"
import { Position, Toaster, Intent } from "@blueprintjs/core"
import React, { SyntheticEvent, useRef, useState, useEffect } from "react"
import styled from "styled-components"

import { Comment } from "gamejitsu/api/types/comment"
import { LayoutDemo, CommentBar, CommentList, CommentFormNew } from "gamejitsu/components"
import { Review } from "gamejitsu/api/resources/review"
import { useWarnIfUnsavedChanges } from "./RefreshPageWarner"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { demoComments } from "../demo-comments/demo-comments"

const VideoContainer = styled(Box)`
  width: 100%;
  border: 1px solid ${(props) => props.theme.secondaryColor};
`

const Title = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const DemoPage: AuthenticatedComponent = () => {
  useWarnIfUnsavedChanges(true)

  const reviewInitial: Review = {
    id: "0",
    comments: demoComments,
    isPublished: false,
    requestId: "0",
    coachId: "0"
  }

  const [review, setReview] = useState(reviewInitial)
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoTimestamp, setVideoTimestamp] = useState(0)
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const onSaveComment = async (savedComment: Comment) => {
    const newComments = selectedComment
      ? review.comments.map((comment) => (comment === selectedComment ? savedComment : comment))
      : review.comments.concat(savedComment)
    const updatedReview = {
      ...review,
      comments: newComments
    }
    setReview(updatedReview)
    setSelectedComment(null)
  }

  const onDeleteComment = async () => {
    const newComments = selectedComment
      ? review.comments.filter((comment) => comment !== selectedComment)
      : review.comments
    const updatedReview = {
      ...review,
      comments: newComments
    }
    setReview(updatedReview)
    setSelectedComment(null)
  }

  const onSetVideoDuration = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    const duration = event.currentTarget.duration
    setVideoDuration(Math.floor(duration))
  }

  const onSetVideoTimestamp = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    if (event.currentTarget.currentTime > videoTimestamp + 60) {
      const timestamp = event.currentTarget.currentTime
      setVideoTimestamp(Math.floor(timestamp))
    }
  }

  const onSelectComment = (comment: Comment | null) => {
    setVideoTimestamp(comment !== null ? comment.timestamp : videoTimestamp)
    setSelectedComment(comment)
  }

  const onDeselectComment = () => {
    setSelectedComment(null)
  }

  const onSaveReview = async () => {
    const AppToaster = Toaster.create({
      className: "recipe-toaster",
      position: Position.TOP
    })
    try {
      AppToaster.show({
        intent: Intent.SUCCESS,
        icon: "tick",
        message: "Review saved!"
      })
    } catch (error) {
      AppToaster.show({
        intent: Intent.DANGER,
        icon: "warning-sign",
        message: "Error saving review. \
        Please try later or contact our support."
      })
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration)
      videoRef.current.currentTime = videoTimestamp
    } else {
      setVideoDuration(0)
    }
  })

  return (
    <LayoutDemo title="Coach Demo">
      <Flex width={["100%", "100%", "67%"]} flexDirection="column">
        <VideoContainer>
          <video
            ref={videoRef}
            onDurationChange={onSetVideoDuration}
            onTimeUpdate={onSetVideoTimestamp}
            width="100%"
            controls
          >
            <source
              src={
                "https://gamejitsu-recorder.s3.eu-west-2.amazonaws.com/videos/d13ddb7d-25ea-4255-b9ce-d7f8742d95b8.mp4"
              }
              type="video/mp4"
            />
          </video>
        </VideoContainer>
        <Flex flexDirection="column">
          <Box py={3}>
            <Title>MATCH NAVIGATION</Title>
          </Box>
          <CommentBar
            comments={review.comments}
            videoDuration={videoDuration}
            onVideoTimestampChange={setVideoTimestamp}
            videoTimestamp={videoTimestamp}
          />
        </Flex>
        <Flex flexDirection="column">
          <Box py={3}>
            <Title>INSERT COMMENT BY COACH</Title>
            <CommentFormNew
              comment={selectedComment}
              onSave={onSaveComment}
              onDelete={onDeleteComment}
              onDeselect={onDeselectComment}
              timestamp={videoTimestamp}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex width={["100%", "100%", "33%"]}>
        <CommentList
          comments={review.comments}
          selectedComment={selectedComment}
          onSelect={onSelectComment}
          onSaveReview={onSaveReview}
        />
      </Flex>
    </LayoutDemo>
  )
}

DemoPage.skipAuthentication = true

export default DemoPage
