import React from 'react'
import { Layout, Card, Comment } from '~/components'
import nextCookie from 'next-cookies'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Flex, Box, Text } from 'rebass'
import { CommentBar, commentDuration } from '.'

const deserializeReview = ({data, included}) => {
  console.log('in deserialize')
    console.log('before return')
    return {
      id: data.id,
      'skill-level': data.attributes['skill-level'],
      comments: data.relationships.comments.map(comment => {
        return included.find(includedComment => {
          return comment.id === includedComment.id
        })
      })
    }
}

const getReview = async authToken => {
  /*const response = await axios.get(process.env.API_ENDPOINT + '/reviews/id', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })*/
  const response = {
    included: [
      {
        "type": "comment",
        "id": 1,
        attributes: {
          text: 'ultra kill',
          timestamp: 100
        }
      },
      {
        "type": "comment",
        "id": 2,
        attributes: {
          text: 'kill',
          timestamp: 200
        }

      }
    ],
    data: {
      "type": "review",
      id: 1,
      attributes: {
        'skill-level': 'high'
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
            'match-id': '200000'
          }
        }
      }
    }
  }
  console.log(response)
  return deserializeReview(response)
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
    const comments = this.props.review.comments
    console.log("comments:", comments)
    const shownComments = comments.filter(comment => {
      console.log("comment: ", comment)
      const timeRange = commentDuration / 2
      console.log("timeRange: ", timeRange)

      const videoTimestamp = this.state.videoTimestamp
      console.log("videoTimestamp: ", videoTimestamp)

      const commentTimestamp = comment.attributes.timestamp
      console.log("commentTimestamp: ", commentTimestamp)

      const beginTimestamp = commentTimestamp - timeRange
      console.log("beginTimestamp: ", beginTimestamp)

      const endTimestamp = commentTimestamp + timeRange
      console.log("endTimestamp: ", endTimestamp)

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
                  test
                  {shownComments.map(comment => {
                    console.log(comment)
                    return <Comment key={comment.attributes.timestamp} comment={comment} />
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
  const review = await getReview(authToken)
  console.log(review)
  console.log('url: ', urlId)
  return { review }
}

Review.propTypes = {
  review: PropTypes.object
}

export default Review
