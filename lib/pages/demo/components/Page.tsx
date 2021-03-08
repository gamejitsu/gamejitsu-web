import { Flex, Box } from "rebass"
import { Position, Toaster, Intent, Switch } from "@blueprintjs/core"
import React, { SyntheticEvent, useRef, useState, useEffect } from "react"
import styled from "styled-components"

import { Comment } from "gamejitsu/api/types/comment"
import {
  CommentBar,
  CommentFormNew,
  CommentListR,
  LayoutDemo,
  useWarnIfUnsavedChanges
} from "gamejitsu/components"
import { Review } from "gamejitsu/api/resources/review"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { demoComments } from "../demo-comments/demo-comments"
import BackTenSecSVG from "../../../../svgs/back10.svg"
import ForwardTenSecSVG from "../../../../svgs/forward10.svg"

const VideoContainer = styled(Box)`
  width: 100%;
  border: 1px solid ${(props) => props.theme.secondaryColor};
`
interface SelectedSpeedProps {
  isSelected: boolean
}

type SeekDirection = "B" | "F"

const SelecetdSpeed = styled.b<SelectedSpeedProps>`
  color: ${(props) => (props.isSelected ? props.theme.primaryColor : "#ccc")};
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #fff;
  }
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
    isDeleted: false,
    requestId: "0",
    coachId: "0"
  }

  const [review, setReview] = useState(reviewInitial)
  const [videoSpeed, setVideoSpeed] = useState(1)
  const [videoDuration, setVideoDuration] = useState(0)
  const [autoPauseEnabled, setAutoPause] = useState(true)
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

  const videoSpeeds = [1, 2, 3, 4]
  const changeVideoSpeed = (speed: number) => {
    setVideoSpeed(speed)
  }

  // This is a right way, we must wait the useEffect hook after variable update
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = videoSpeed
    }
  }, [videoSpeed])

  const pauseVideo = () => {
    if (autoPauseEnabled && videoRef.current) {
      videoRef.current.pause()
    }
  }

  const seekVideo = (direction: SeekDirection, seconds: number) => {
    let s = direction == "B" ? -seconds : seconds
    if (videoRef.current) {
      let videoCurrentTime = Math.floor(videoRef.current.currentTime)
      if (videoCurrentTime + s < videoRef.current.duration && videoCurrentTime + s > 0) {
        videoRef.current.currentTime = Math.floor(videoRef.current.currentTime) + s
      }
    }
  }

  const toggleAutoPause = () => {
    setAutoPause(!autoPauseEnabled)
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
    <LayoutDemo title="Coach Demo">
      <Flex width={["100%", "100%", "67%"]} flexDirection="column">
        <VideoContainer>
          <video
            ref={videoRef}
            onDurationChange={onSetVideoDuration}
            onTimeUpdate={onSetVideoTimestamp}
            width="100%"
            controls
            controlsList="nodownload"
          >
            <source
              src={
                "https://gamejitsu-recorder.s3.eu-west-2.amazonaws.com/videos/d13ddb7d-25ea-4255-b9ce-d7f8742d95b8.mp4"
              }
              type="video/mp4"
            />
          </video>
        </VideoContainer>
        <Flex justifyContent="space-between" alignItems={"center"} pt={2}>
          <Box>
            Video Speed:
            {videoSpeeds.map((speed) => {
              return (
                <SelecetdSpeed
                  key={speed}
                  isSelected={videoSpeed == speed}
                  onClick={() => changeVideoSpeed(speed)}
                >
                  {" "}
                  {speed}x
                </SelecetdSpeed>
              )
            })}
          </Box>
          <Flex justifyContent={"center"}>
            <Box mr={2}>
              <BackTenSecSVG
                width="24"
                height="24"
                onClick={() => seekVideo("B", 10)}
                style={{ cursor: "pointer" }}
              ></BackTenSecSVG>
            </Box>
            <Box>
              <ForwardTenSecSVG
                width="24"
                height="24"
                onClick={() => seekVideo("F", 10)}
                style={{ cursor: "pointer" }}
              >
                P
              </ForwardTenSecSVG>
            </Box>
          </Flex>
        </Flex>
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
        <Flex flexDirection="column">
          <Box pt={3}>
            <Flex pt={3} justifyContent={"space-between"}>
              <Box>
                <Title>INSERT COMMENT BY COACH</Title>
              </Box>
              <Switch
                checked={autoPauseEnabled}
                alignIndicator={"right"}
                label={"Pause video on focus"}
                onChange={(e) => toggleAutoPause()}
              />
            </Flex>
            <CommentFormNew
              comment={selectedComment}
              onSave={onSaveComment}
              onDelete={onDeleteComment}
              onDeselect={onDeselectComment}
              timestamp={videoTimestamp}
              pauseVideo={pauseVideo}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex width={["100%", "100%", "33%"]}>
        <CommentListR
          comments={review.comments}
          selectedComment={selectedComment}
          onSelect={onSelectComment}
        />
      </Flex>
    </LayoutDemo>
  )
}

DemoPage.skipAuthentication = true

export default DemoPage
