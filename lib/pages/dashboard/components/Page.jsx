import React from 'react'
import { ReviewsCard, RecentMatchesCard } from '.'
import { Layout, Spinner } from '~/components'
import axios from 'axios'
import nextCookie from 'next-cookies'
import { Socket } from 'phoenix'

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
    console.log(replay)
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
  constructor(props) {
    super(props)
    this.state = {
      user: {
        attributes: {}
      }
    }
  }
  componentDidMount() {
    const socket = new Socket(process.env.SOCKET_ENDPOINT + '/socket', {
      params: { token: this.props.authToken }
    })
    socket.connect()
    console.log('post connection')
    const channel = socket.channel('users:' + this.props.user.id)
    channel.join().receive('ok', async ({ messages }) => {
      console.log('catching up', messages)
      const user = await getCurrentUser(this.props.authToken)
      this.setState({ user: user })
      console.log('user receive:', user)

    })
    channel.on('update', userData => {
      this.setState({ user: userData.data })
      console.log('user update:', userData.data)
    })
  }

  render() {
    return (
      <Layout title="Dashboard">
        Requested Reviews
        <ReviewsCard>Test Card</ReviewsCard>
        {this.state.user.attributes['is-syncing-replays']
        ? <Spinner />
        : console.log("non c'è un cazzo frociiiiii")}
        Recent Matches
        {this.props.replays.map(replay => {
          return <RecentMatchesCard key={replay.id} replay={replay} user={this.props.user} />
        })}
      </Layout>
    )
  }
}

Dashboard.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const replays = await getReplays(authToken)
  const user = await getCurrentUser(authToken)
  return { replays, user, authToken }
}

export default Dashboard
