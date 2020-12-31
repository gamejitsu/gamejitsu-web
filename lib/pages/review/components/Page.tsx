import { Flex, Box } from "rebass"
import { NextPageContext, NextPage } from "next"
import React, { useRef, useState, SyntheticEvent, useEffect } from "react"
import styled from "styled-components"

import { Comment } from "gamejitsu/api/types/comment"
import { DecoratedReplay } from "gamejitsu/models/replay"
import { DecoratedReview, decorateReview } from "gamejitsu/models/review"
import { findModel } from "gamejitsu/api"
import { LayoutWithMenuUser, CommentBar, CommentList } from "gamejitsu/components"
import ReviewResource, { Review } from "gamejitsu/api/resources/review"

interface Props {
  review: Review
  replay: DecoratedReplay
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

const ReviewPage: NextPage<Props> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [review] = useState(props.review)
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoTimestamp, setVideoTimestamp] = useState(0)
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null)

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

  useEffect(() => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration)
      videoRef.current.currentTime = videoTimestamp
    } else {
      setVideoDuration(0)
    }
  })

  return (
    <LayoutWithMenuUser title="Review">
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
                  src={props.replay.videoUrl ? props.replay.videoUrl : "/video/sample.mp4"}
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
          </Box>
          <Box>
            <CommentList
              comments={review.comments}
              selectedComment={selectedComment}
              onSelect={onSelectComment}
            />
          </Box>
        </Flex>
      </Box>
    </LayoutWithMenuUser>
  )
}

const getReview = async (ctx: NextPageContext, id: string) => {
  const response = await findModel(ReviewResource, id, ctx)
  return response
}

ReviewPage.getInitialProps = async (ctx: NextPageContext) => {
  const urlId = ctx.query.id
  const response = await getReview(ctx, urlId.toString())
  const reviewDecorated: DecoratedReview = decorateReview(response.data, response.included)
  const replay: DecoratedReplay = reviewDecorated.replay
  const review: Review = response.data
  return { review, replay }
}

export default ReviewPage
