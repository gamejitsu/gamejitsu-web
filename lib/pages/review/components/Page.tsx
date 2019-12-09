import React, { RefObject } from "react"
import { Layout, Card, Comment } from "gamejitsu/components"
import nextCookie from "next-cookies"
import PropTypes from "prop-types"
import axios from "axios"
import { Flex, Box, Text } from "rebass"
import { CommentBar, commentDuration } from "."

const deserializeReview = ({ data, included }: any) => {
  console.log("in deserialize")
  console.log("before return")
  return {
    id: data.id,
    "skill-level": data.attributes["skill-level"],
    comments: data.relationships.comments.map((comment: any) => {
      return included.find((includedComment: any) => {
        return comment.id === includedComment.id
      })
    })
  }
}

const getReview = async (authToken: string) => {
  /*const response = await axios.get(process.env.API_ENDPOINT + '/reviews/id', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })*/
  const response = {
    included: [
      {
        type: "comment",
        id: 1,
        attributes: {
          text: "ultra kill",
          timestamp: 11
        }
      },
      {
        type: "comment",
        id: 2,
        attributes: {
          text: "kill",
          timestamp: 21
        }
      }
    ],
    data: {
      type: "review",
      id: 1,
      attributes: {
        "skill-level": "high"
      },
      relationships: {
        comments: [
          {
            id: 1
          },
          {
            id: 2
          }
        ],
        replay: {
          id: 1,
          attributes: {
            "match-id": "200000"
          }
        }
      }
    }
  }
  console.log(response)
  return deserializeReview(response)
}

function setVideoDuration(this: any, event: any) {
  const duration = event.target.duration
  this.setState({
    videoDuration: Math.floor(duration)
  })
}

function setVideoTimestamp(this: any, event: any) {
  const timestamp = event.target.currentTime
  this.setState({
    videoTimestamp: Math.floor(timestamp)
  })
}

function updateVideoTimestamp(this: any, timestamp: any) {
  this.setState({
    videoTimestamp: timestamp
  })
}

class Review extends React.Component<any, any> {
  videoRef: RefObject<HTMLVideoElement>

  static getInitialProps = async (ctx: any) => {
    const { authToken } = nextCookie(ctx)
    const urlId = ctx.query.id
    const review = await getReview(authToken as any)
    console.log(review)
    console.log("url: ", urlId)
    return { review }
  }

  constructor(props: any) {
    super(props)
    this.videoRef = React.createRef()
    this.state = {
      videoTimestamp: 0,
      videoDuration: 0
    }
  }

  componentDidMount() {
    this.setState({
      videoDuration: this.videoRef.current && this.videoRef.current.duration
    })
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.state.videoTimestamp !== prevState.videoTimestamp) {
      this.videoRef.current && (this.videoRef.current.currentTime = this.state.videoTimestamp)
    }
  }

  render() {
    const comments = this.props.review.comments
    const shownComments = comments.filter((comment: any) => {
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
                  {shownComments.map((comment: any) => {
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

export default Review
