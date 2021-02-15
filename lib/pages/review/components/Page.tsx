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

const VideoSpeedControl = styled(Flex)`
  cursor: pointer;
  b {
    font-weight: bold;
  }
`

const Title = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const ReviewPage: NextPage<Props> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [review] = useState(props.review)
  const [videoSpeed, setVideoSpeed] = useState(1)
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoTimestamp, setVideoTimestamp] = useState(0)
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null)

  const onSetVideoDuration = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    const duration = event.currentTarget.duration
    setVideoDuration(Math.floor(duration))
  }

  const onSetVideoTimestamp = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    if (event.currentTarget.currentTime > videoTimestamp) {
      const timestamp = event.currentTarget.currentTime
      setVideoTimestamp(Math.floor(timestamp))
    }
  }

  const toggleVideoSpeed = () => {
    const speeds = [1, 2, 3]
    let nextSpeed =
      speeds[(((speeds.indexOf(videoSpeed) + 1) % speeds.length) + speeds.length) % speeds.length]
    setVideoSpeed(nextSpeed)
  }
  // This is a right way, we must wait the useEffect hook after variable update
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = videoSpeed
    }
  }, [videoSpeed])

  const onSelectComment = (comment: Comment | null) => {
    setVideoTimestamp(comment !== null ? comment.timestamp : videoTimestamp)
    setSelectedComment(comment)
  }

  useEffect(() => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration)
    } else {
      setVideoDuration(0)
    }
  }, [])

  useEffect(() => {
    if (
      videoRef.current &&
      Math.floor(videoRef.current.currentTime) != Math.floor(videoTimestamp)
    ) {
      videoRef.current.currentTime = videoTimestamp
    }
  }, [videoTimestamp])

  return (
    <LayoutWithMenuUser title="Review">
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
              src={props.replay.videoUrl ? props.replay.videoUrl : "/video/sample.mp4"}
              type="video/mp4"
            />
          </video>
        </VideoContainer>
        <VideoSpeedControl justifyContent="flex-end" pt={2} onClick={() => toggleVideoSpeed()}>
          <Box>
            Video Speed: <b>{videoSpeed}x</b>
          </Box>
        </VideoSpeedControl>
        <Flex flexDirection="column">
          <Box py={3}>
            <Title>MATCH NAVIGATION</Title>
          </Box>
          <CommentBar
            comments={review.comments}
            videoDuration={videoDuration}
            onVideoTimestampChange={setVideoTimestamp}
            videoTimestamp={videoTimestamp}
            onSelect={onSelectComment}
          />
        </Flex>
      </Flex>
      <Flex width={["100%", "100%", "33%"]}>
        <CommentList
          comments={review.comments}
          selectedComment={selectedComment}
          onSelect={onSelectComment}
        />
      </Flex>
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
