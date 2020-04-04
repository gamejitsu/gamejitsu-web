import React, { RefObject, SyntheticEvent } from "react"

import { Comment as CommentType } from "gamejitsu/models/review"
import { CommentBar, CommentForm, CommentMenu } from "."
import { findModel, updateModel } from "gamejitsu/api"
import { Flex, Box, Text } from "rebass"
import { Layout, Card } from "gamejitsu/components"
import { NextPageContext } from "next"
import { Review } from "gamejitsu/models"

interface Props {
  review: Review
}

interface State {
  videoTimestamp: number
  videoDuration: number
  review: Review
  selectedComment: CommentType | null
}

const getReview = async (ctx: NextPageContext, id: string) => {
  const response = await findModel("review", id, ctx)
  return response.data
}

function setVideoDuration(this: ReviewPage, event: SyntheticEvent<HTMLVideoElement, Event>) {
  const duration = event.currentTarget.duration
  this.setState({
    videoDuration: Math.floor(duration)
  })
}

function setVideoTimestamp(this: ReviewPage, event: SyntheticEvent<HTMLVideoElement, Event>) {
  const timestamp = event.currentTarget.currentTime
  this.setState({
    videoTimestamp: Math.floor(timestamp)
  })
}

function updateVideoTimestamp(this: ReviewPage, timestamp: number) {
  this.setState({
    videoTimestamp: timestamp
  })
}

async function onFinish(this: ReviewPage, commentText: string) {
  const newComment = {
    text: commentText,
    timestamp: this.state.videoTimestamp
  }
  const selectedComment = this.state.selectedComment
  selectedComment !== null
    ? (this.state.review.comments = this.state.review.comments.map((comment, index) =>
        index === this.state.review.comments.indexOf(selectedComment) ? newComment : comment
      ))
    : this.state.review.comments.push(newComment)
  const response = await updateModel(this.state.review)
  this.setState({ review: response.data })
}

async function onDelete(this: ReviewPage) {
  const selectedComment = this.state.selectedComment
  selectedComment !== null &&
    (this.state.review.comments = this.state.review.comments.filter(
      (_, index) => index === this.state.review.comments.indexOf(selectedComment)
    ))
  const response = await updateModel(this.state.review)
  this.setState({ review: response.data })
}

class ReviewPage extends React.Component<Props, State> {
  videoRef: RefObject<HTMLVideoElement>
  sidebarRef: RefObject<Element>

  static getInitialProps = async (ctx: NextPageContext) => {
    const urlId = ctx.query.id
    const review = await getReview(ctx, urlId.toString())
    return { review }
  }

  constructor(props: Props) {
    super(props)
    this.videoRef = React.createRef()
    this.sidebarRef = React.createRef()
    this.state = {
      videoTimestamp: 0,
      videoDuration: 0,
      review: props.review,
      selectedComment: null
    }
  }

  componentDidMount() {
    this.setState({
      videoDuration: this.videoRef.current ? this.videoRef.current.duration : 0
    })
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (this.state.videoTimestamp !== prevState.videoTimestamp) {
      this.videoRef.current && (this.videoRef.current.currentTime = this.state.videoTimestamp)
    }
  }

  private onSelect = (comment: CommentType | null) => {
    this.setState({
      videoTimestamp: comment !== null ? comment.timestamp : this.state.videoTimestamp,
      selectedComment: comment
    })
  }

  render() {
    const comments = this.state.review.comments

    return (
      <Layout title="Review">
        <Box m="20px">
          <Card>
            <Flex flexDirection="column">
              <Box p={3}>
                <Text p={2}>Review</Text>
                <Text p={2}>Review Id: {this.state.review.id}</Text>
                <Flex>
                  <Box p={0} flex="1">
                    <video
                      ref={this.videoRef}
                      onDurationChange={setVideoDuration.bind(this)}
                      onTimeUpdate={setVideoTimestamp.bind(this)}
                      width="100%"
                      controls
                    >
                      <source src="/video/sample.mp4" type="video/mp4" />
                    </video>
                  </Box>
                  <Box ref={this.sidebarRef}>
                    <CommentMenu
                      comments={comments}
                      videoTimestamp={this.state.videoTimestamp}
                      onSelect={this.onSelect}
                      sidebarRef={this.sidebarRef}
                    />
                    <CommentForm
                      comment={this.state.selectedComment}
                      onFinish={onFinish.bind(this)}
                      onDelete={onDelete.bind(this)}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Card>
          <CommentBar
            comments={comments}
            videoDuration={this.state.videoDuration}
            onMoveVideoCursor={updateVideoTimestamp.bind(this)}
            videoTimestamp={this.state.videoTimestamp}
          />
        </Box>
      </Layout>
    )
  }
}

export default ReviewPage
