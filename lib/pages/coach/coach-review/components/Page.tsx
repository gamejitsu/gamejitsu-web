import { Flex, Box } from "rebass"
import { NextPageContext, NextPage } from "next"
import { Position, Toaster, Intent } from "@blueprintjs/core"
import React, { SyntheticEvent, useRef, useState, useEffect } from "react"
import styled from "styled-components"

import { Comment } from "gamejitsu/api/types/comment"
import { findModel, updateModel } from "gamejitsu/api"
import {
  LayoutWithMenu,
  CommentBar,
  CommentFormNew,
  CommentList,
  useWarnIfUnsavedChanges
} from "gamejitsu/components"
import ReviewResource, { Review } from "gamejitsu/api/resources/review"
import { DecoratedReview, decorateReview } from "gamejitsu/models/review"
import { DecoratedReplay } from "gamejitsu/models/replay"

interface Props {
  review: Review
  replay: DecoratedReplay
}

const getReview = async (ctx: NextPageContext, id: string) => {
  const response = await findModel(ReviewResource, id, ctx)
  return response
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

const CoachReviewPage: NextPage<Props> = (props) => {
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
      const { data: serverReview } = await updateModel(ReviewResource, review)
      AppToaster.show({
        intent: Intent.SUCCESS,
        icon: "tick",
        message: "Review saved!"
      })
      setReview(serverReview)
      if (selectedComment) {
        setSelectedComment(serverReview.comments[review.comments.indexOf(selectedComment)])
      }
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
    setTimeout(() => onSaveReview(), 30000)
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration)
      videoRef.current.currentTime = videoTimestamp
    } else {
      setVideoDuration(0)
    }
  })

  return (
    <LayoutWithMenu title="Coach Review">
      <Flex width={["100%", "100%", "67%"]} flexDirection="column">
        <VideoContainer>
          <video
            ref={videoRef}
            onDurationChange={onSetVideoDuration}
            onTimeUpdate={onSetVideoTimestamp}
            width="100%"
            controls
          >
            <source src={props.replay.videoUrl ? props.replay.videoUrl : ""} type="video/mp4" />
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
    </LayoutWithMenu>
  )
}

CoachReviewPage.getInitialProps = async (ctx: NextPageContext) => {
  const urlId = ctx.query.id
  const response = await getReview(ctx, urlId.toString())
  const reviewDecorated: DecoratedReview = decorateReview(response.data, response.included)
  const replay: DecoratedReplay = reviewDecorated.replay
  const review: Review = response.data
  return { review, replay }
}

export default CoachReviewPage
