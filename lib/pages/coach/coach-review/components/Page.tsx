import React, { SyntheticEvent, useRef, useState, useEffect } from "react"

import { Comment } from "gamejitsu/models/review"
import { CommentBar, CommentForm, CommentList } from "."
import { findModel, updateModel } from "gamejitsu/api"
import { Flex, Box, Text } from "rebass"
import { Layout, Card, Button } from "gamejitsu/components"
import { NextPageContext, NextPage } from "next"
import { Review } from "gamejitsu/models"
import { Position, Toaster, Intent } from "@blueprintjs/core"

interface Props {
  review: Review
}

const getReview = async (ctx: NextPageContext, id: string) => {
  const response = await findModel("review", id, ctx)
  return response.data
}

const CoachReviewPage: NextPage<Props> = (props) => {
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

  useEffect(() => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration)
      videoRef.current.currentTime = videoTimestamp
    } else {
      setVideoDuration(0)
    }
  })

  const onSelectComment = (comment: Comment | null) => {
    setVideoTimestamp(comment !== null ? comment.timestamp : videoTimestamp)
    setSelectedComment(comment)
  }

  const onSaveReview = async () => {
    const AppToaster = Toaster.create({
      className: "recipe-toaster",
      position: Position.TOP
    })
    try {
      const { data: serverReview } = await updateModel(review)
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

  return (
    <Layout title="Coach Review">
      <Box m="20px">
        <Card>
          <Flex flexDirection="column">
            <Box p={3}>
              <Text p={2}>Review</Text>
              <Text p={2}>Review Id: {review.id}</Text>
              <Button text="Save review" type="button" onClick={onSaveReview} />
              <Flex>
                <Box p={0} flex="1">
                  <video
                    ref={videoRef}
                    onDurationChange={onSetVideoDuration}
                    onTimeUpdate={onSetVideoTimestamp}
                    width="100%"
                    controls
                  >
                    <source src="/video/sample.mp4" type="video/mp4" />
                  </video>
                </Box>
                <Box>
                  <CommentList
                    comments={review.comments}
                    selectedComment={selectedComment}
                    onSelect={onSelectComment}
                  />
                  <CommentForm
                    comment={selectedComment}
                    onSave={onSaveComment}
                    onDelete={onDeleteComment}
                    timestamp={videoTimestamp}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Card>
        <CommentBar
          comments={review.comments}
          videoDuration={videoDuration}
          onVideoTimestampChange={setVideoTimestamp}
          videoTimestamp={videoTimestamp}
        />
      </Box>
    </Layout>
  )
}

CoachReviewPage.getInitialProps = async (ctx: NextPageContext) => {
  const urlId = ctx.query.id
  const review = await getReview(ctx, urlId.toString())
  return { review }
}

export default CoachReviewPage
