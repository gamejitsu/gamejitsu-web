import React, { RefObject, SyntheticEvent } from "react"
import { Layout, Card, Comment } from "gamejitsu/components"
import { findModel } from "gamejitsu/api"
import { Flex, Box, Text } from "rebass"
import { CommentBar, commentDuration, CommentForm } from "."
import { NextPageContext } from "next"
import { Review } from "gamejitsu/models"

interface Props {
  review: Review
}

interface State {
  videoTimestamp: number
  videoDuration: number
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

function onFinish(this: ReviewPage) {
  //TODO save the review
}

class ReviewPage extends React.Component<Props, State> {
  videoRef: RefObject<HTMLVideoElement>

  static getInitialProps = async (ctx: NextPageContext) => {
    const urlId = ctx.query.id
    const review = await getReview(ctx, urlId.toString())
    return { review }
  }

  constructor(props: Props) {
    super(props)
    this.videoRef = React.createRef()
    this.state = {
      videoTimestamp: 0,
      videoDuration: 0
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

  render() {
    const comments = this.props.review.comments
    const shownComments = comments.filter((comment) => {
      const timeRange = commentDuration / 2
      const videoTimestamp = this.state.videoTimestamp
      const commentTimestamp = comment.timestamp
      const beginTimestamp = commentTimestamp - timeRange
      const endTimestamp = commentTimestamp + timeRange
      return videoTimestamp > beginTimestamp && videoTimestamp < endTimestamp
    })
    return (
      <Layout title="Review">
        <Card>
          <Flex flexDirection="column">
            <Box p={3}>
              <Text p={2}>Review</Text>
              <Text p={2}>Review Id: {this.props.review.id}</Text>
              <Flex>
                <Box p={0} mx="auto">
                  <video
                    ref={this.videoRef}
                    onDurationChange={setVideoDuration.bind(this)}
                    onTimeUpdate={setVideoTimestamp.bind(this)}
                    width="800"
                    controls
                  >
                    <source src="/static/video/sample.mp4" type="video/mp4" />
                  </video>
                </Box>
                <Box>
                  <CommentForm onFinish={onFinish.bind(this)} />
                  {shownComments.map((comment) => {
                    return <Comment key={comment.timestamp} comment={comment} />
                  })}
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
      </Layout>
    )
  }
}

export default ReviewPage
