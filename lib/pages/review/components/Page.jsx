import React from 'react'
import { Layout, Card, Comment } from '~/components'
import nextCookie from 'next-cookies'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Flex, Box, Text } from 'rebass'
import { CommentBar, commentDuration } from '.'

const deserializeReplayReviewRequests = data => {
  return data.data.map(data => {
    return {
      id: data.id,
      matchId: data.relationships.replay.data.id,
      'skill-level': data.attributes['skill-level'],
      review: data.relationships.review || {
        data: {
          attributes: {
            comments: [
              {
                text: 'ultra kill',
                timestamp: 11
              },
              {
                text: 'ultra',
                timestamp: 38
              },
              {
                text: 'test kill test test test test',
                timestamp: 43
              },
              {
                text:
                  'lorem ipsum lorem ipsum lorem ipsum' +
                  'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                timestamp: 90
              },
              {
                text: 'yo kill',
                timestamp: 100
              },
              {
                text: 'kill',
                timestamp: 120
              }
            ]
          }
        }
      }
    }
  })
}

const getReplayReviewRequests = async authToken => {
  const response = await axios.get(process.env.API_ENDPOINT + '/review-requests', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })
  return deserializeReplayReviewRequests(response.data)
}

function setVideoDuration(event) {
  const duration = event.target.duration
  this.setState({
    videoDuration: Math.floor(duration)
  })
}

function setVideoTimestamp(event) {
  const timestamp = event.target.currentTime
  this.setState({
    videoTimestamp: Math.floor(timestamp)
  })
}

function updateVideoTimestamp(timestamp) {
  this.setState({
    videoTimestamp: timestamp
  })
}

class Review extends React.Component {
  constructor() {
    super()
    this.videoRef = React.createRef()
    this.state = {
      videoTimestamp: 0,
      videoDuration: 0
    }
  }

  componentDidMount() {
    this.setState({
      videoDuration: this.videoRef.current.duration
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.videoTimestamp !== prevState.videoTimestamp) {
      this.videoRef.current.currentTime = this.state.videoTimestamp
    }
  }

  render() {
    const comments = this.props.reviewRequested.review.data.attributes.comments
    const shownComments = comments.filter(comment => {
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
              <Text p={2}>Review Id: {this.props.reviewRequested.id}</Text>
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
                  {shownComments.map(comment => {
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

Review.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const urlId = ctx.query.id
  const replayReviewRequests = await getReplayReviewRequests(authToken)
  const reviewRequested = replayReviewRequests.find(review => {
    return review.id === urlId
  })
  return { reviewRequested }
}

Review.propTypes = {
  reviewRequested: PropTypes.object
}

export default Review
