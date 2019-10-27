import React from 'react'
import { ReviewsCard, RecentMatchesCard } from '.'
import { Layout, Spinner } from '~/components'
import axios from 'axios'
import nextCookie from 'next-cookies'
import { Socket } from 'phoenix'
import { UserContext } from '../../../components'

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
  return deserializeReplays(response.data)
}

const getCurrentUser = async authToken => {
  const response = await axios.get(process.env.API_ENDPOINT + '/users/current', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })
  return response.data.data
}

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      user: context.user,
      socket: null
    }
  }

  componentDidMount() {
    const socket = new Socket(process.env.SOCKET_ENDPOINT + '/socket', {
      params: { token: this.props.authToken }
    })
    socket.connect()
    const channel = socket.channel('users:' + this.context.user.id)
    channel.join().receive('ok', async ({ messages }) => {
      const user = await getCurrentUser(this.props.authToken)
      this.setState({
        user,
        socket
      })
    })
    channel.on('update', userData => {
      this.setState({ user: userData.data })
    })
  }

  componentWillUnmount() {
    console.log(this.state.socket)
    this.state.socket.disconnect()
  }

  render() {
    console.log(this.context.user)
    return (
      <Layout title="Dashboard">
        Requested Reviews
        <ReviewsCard>Test Card</ReviewsCard>
        {this.state.user.attributes['is-syncing-replays'] ? <Spinner /> : <div></div>}
        Recent Matches
        {this.props.replays.map(replay => {
          return <RecentMatchesCard key={replay.id} replay={replay} />
        })}
      </Layout>
    )
  }
}

Dashboard.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const replays = await getReplays(authToken)
  return { replays, authToken }
}

Dashboard.contextType = UserContext

export default Dashboard
