import React, { useRef, useState, SyntheticEvent, useEffect } from "react"
import { Flex, Box } from "rebass"
import { NextPageContext, NextPage } from "next"
import { LayoutWithMenuUser } from "gamejitsu/components"
import ReviewResource, { Review } from "gamejitsu/api/resources/review"
import { findModel } from "gamejitsu/api"
import { CommentBar, CommentList } from "."
import styled from "styled-components"
import { Comment } from "gamejitsu/api/types/comment"

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
                <source src="/video/sample.mp4" type="video/mp4" />
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
  return response.data
}

ReviewPage.getInitialProps = async (ctx: NextPageContext) => {
  const urlId = ctx.query.id
  const review = await getReview(ctx, urlId.toString())
  return { review }
}

export default ReviewPage
