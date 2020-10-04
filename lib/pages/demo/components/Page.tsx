import { Flex, Box } from "rebass"
import { NextPageContext, NextPage } from "next"
import { Position, Toaster, Intent } from "@blueprintjs/core"
import React, { SyntheticEvent, useRef, useState, useEffect } from "react"
import styled from "styled-components"

import { Comment } from "gamejitsu/api/types/comment"
import { CommentBar, CommentList, CommentFormNew } from "."
import { LayoutWithMenu } from "gamejitsu/components"
import { Review } from "gamejitsu/api/resources/review"
import { useWarnIfUnsavedChanges } from "./RefreshPageWarner"

interface Props {
  review: Review
}

const VideoContainer = styled(Box)`
  width: 100%;
  border: 1px solid ${(props) => props.theme.secondaryColor};
`

const Title = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const DemoPage: NextPage<Props> = (props) => {
  useWarnIfUnsavedChanges(true)

  const [review, setReview] = useState(props.review)
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
    const timestamp = event.currentTarget.currentTime
    setVideoTimestamp(Math.floor(timestamp))
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
    <LayoutWithMenu title="Coach Review">
      <Box>
        <Flex justifyContent="center">
          <Box>
            <VideoContainer>
              <video
                ref={videoRef}
                onDurationChange={onSetVideoDuration}
                onTimeUpdate={onSetVideoTimestamp}
                width="100%"
                controls
              >
                <source
                  src={"https://gamejitsu-recorder.s3.eu-west-2.amazonaws.com/videos/d13ddb7d-25ea-4255-b9ce-d7f8742d95b8.mp4"}
                  type="video/mp4"
                />
              </video>
            </VideoContainer>
            <Box>
              <Box py={3}>
                <Title>MATCH NAVIGATION</Title>
              </Box>
              <CommentBar
                comments={review.comments}
                videoDuration={videoDuration}
                onVideoTimestampChange={setVideoTimestamp}
                videoTimestamp={videoTimestamp}
              />
            </Box>
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
          </Box>
          <Box>
            <CommentList
              comments={review.comments}
              selectedComment={selectedComment}
              onSelect={onSelectComment}
              onSaveReview={onSaveReview}
            />
          </Box>
        </Flex>
      </Box>
    </LayoutWithMenu>
  )
}

DemoPage.getInitialProps = async (ctx: NextPageContext) => {
  const review: Review = {
    id: "0",
    comments: [{ text: "test", timestamp: 21 }],
    isPublished: false,
    requestId: "0",
    coachId: "0"
  }
  return { review }
}

export default DemoPage
