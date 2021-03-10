import { Flex, Box } from "rebass"
import { NextPageContext, NextPage } from "next"
import { Position, Toaster, Intent, Switch } from "@blueprintjs/core"
import React, { SyntheticEvent, useRef, useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import BackTenSecSVG from "../../../../../svgs/back10.svg"
import ForwardTenSecSVG from "../../../../../svgs/forward10.svg"

import {
  CommentBar,
  CommentFormNew,
  Button,
  CommentList,
  LayoutWithMenu,
  useWarnIfUnsavedChanges
} from "gamejitsu/components"

import SaveReviewDialog from "./saveReviewDialog"
import { Comment } from "gamejitsu/api/types/comment"
import { DecoratedReplay } from "gamejitsu/models/replay"
import { DecoratedReview, decorateReview } from "gamejitsu/models/review"
import { findModel, updateModel } from "gamejitsu/api"
import ReviewResource, { Review } from "gamejitsu/api/resources/review"

interface Props {
  review: Review
  replay: DecoratedReplay
}

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

const getReview = async (ctx: NextPageContext, id: string) =>
  await findModel(ReviewResource, id, ctx)

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
  const [videoSpeed, setVideoSpeed] = useState(1)
  const [autoPauseEnabled, setAutoPause] = useState(true)
  const [autosaveEnabled, setAutosave] = useState(true)
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoTimestamp, setVideoTimestamp] = useState(0)
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null)
  const [saveReviewIsOpen, setSaveReviewIsOpen] = useState(false)
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

  const toggleAutosave = () => {
    setAutosave(!autosaveEnabled)
  }

  const closeSaveReviewDialog = () => {
    setSaveReviewIsOpen(false)
  }

  const openSaveReviewDialog = () => {
    setSaveReviewIsOpen(true)
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
    } finally {
      setSaveReviewIsOpen(false)
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

  useEffect(() => {
    const autosave = async () => {
      await updateModel(ReviewResource, review)
    }

    if (autosaveEnabled) {
      autosave()
    }
  }, [autosaveEnabled, review])

  return (
    <>
      <LayoutWithMenu title="Coach Review">
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
              <source src={props.replay.videoUrl ? props.replay.videoUrl : ""} type="video/mp4" />
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
        <Flex width={["100%", "100%", "33%"]} flexDirection="column">
          <Flex justifyContent={"space-between"} alignItems={"center"} minHeight={"64px"}>
            <Flex ml={[0, 0, 3]}>
              <Switch
                style={{ marginBottom: 0 }}
                checked={autosaveEnabled}
                label={autosaveEnabled ? "Autosave Enabled" : "Autosave Disabled"}
                onChange={(e) => toggleAutosave()}
              />
            </Flex>
            {!autosaveEnabled ? (
              <Flex>
                <Button text="Save" type="button" onClick={openSaveReviewDialog} />
              </Flex>
            ) : null}
          </Flex>
          <CommentList
            comments={review.comments}
            selectedComment={selectedComment}
            onSelect={onSelectComment}
          />
        </Flex>
      </LayoutWithMenu>
      <SaveReviewDialog
        isOpen={saveReviewIsOpen}
        onClose={closeSaveReviewDialog}
        onSave={onSaveReview}
      ></SaveReviewDialog>
    </>
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
