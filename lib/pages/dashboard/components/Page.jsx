import { Layout, Spinner } from '~/components'
import { ReviewRequestCard, ReplayCard, ReviewRequestForm } from '.'
import { Socket } from 'phoenix'
import { UserContext } from '../../../components'
import axios from 'axios'
import nextCookie from 'next-cookies'
import PropTypes from 'prop-types'
import React from 'react'

const deserializePlayers = players => {
  return players.map(player => {
    return {
      name: player['hero-name'],
      image: player['hero-portrait-url']
    }
  })
}

const deserializeReplays = data => {
  return data.data.map(replay => {
    const playersDire = deserializePlayers(replay.attributes.players.slice(0, 5))
    const playersRadiant = deserializePlayers(replay.attributes.players.slice(5, 10))
    return {
      id: replay.id,
      matchId: replay.attributes['match-id'],
      playedAt: replay.attributes['played-at'],
      playersDire,
      playersRadiant
    }
  })
}

const getReplays = async authToken => {
  const response = await axios.get(process.env.API_ENDPOINT + '/replays', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })
  console.log(response.data)
  return deserializeReplays(response.data)
}

const getCurrentUser = async authToken => {
  const response = await axios.get(process.env.API_ENDPOINT + '/users/current', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })
  return response.data.data
}

function onSelectReplay({ replay }) {
  this.setState({ replay })
}

function onFinish() {
  this.setState({ replay: null })
}

const deserializeReviewRequests = data => {
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
                timestamp: Date.now()
              }
            ]
          }
        }
      }
    }
  })
}

const getReviewRequests = async authToken => {
  const response = await axios.get(process.env.API_ENDPOINT + '/review-requests', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })
  return deserializeReviewRequests(response.data)
}

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      user: context.user,
      replays: props.replays,
      socket: null
    }
  }

  componentDidMount() {
    const socket = new Socket(process.env.SOCKET_ENDPOINT + '/socket', {
      params: { token: this.props.authToken }
    })
    socket.connect()
    const channel = socket.channel('users:' + this.context.user.id)
    channel.join().receive('ok', async () => {
      const user = await getCurrentUser(this.props.authToken)
      this.setState({
        user,
        socket
      })
    })
    channel.on('update', async userData => {
      const replays = await getReplays(this.props.authToken)
      this.setState({ user: userData.data , replays })
    })
  }

  componentWillUnmount() {
    this.state.socket.disconnect()
  }

  render() {
    return this.state.replay ? (
      <ReviewRequestForm replay={this.state.replay} onFinish={onFinish.bind(this)} />
    ) : (
      <Layout title="Dashboard">
        {this.state.user.attributes['is-syncing-replays'] ? <Spinner /> : <div></div>}
        Reviews Requested
        {this.props.reviewRequests.map(reviewRequest => {
          return <ReviewRequestCard key={reviewRequest.id} reviewRequest={reviewRequest} />
        })}
        Replay
        {this.state.replays.map(replay => {
          return (
            <ReplayCard
              key={replay.id}
              replay={replay}
              onSelectReplay={onSelectReplay.bind(this)}
            />
          )
        })}
      </Layout>
    )
  }
}

Dashboard.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const replays = await getReplays(authToken)
  const reviewRequests = await getReviewRequests(authToken)
  return { replays, reviewRequests, authToken }
}

Dashboard.propTypes = {
  replays: PropTypes.array,
  reviewRequests: PropTypes.array,
  authToken: PropTypes.string
}

Dashboard.contextType = UserContext

export default Dashboard
