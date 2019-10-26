import React from 'react'
import { ReviewsCard, RecentMatchesCard } from '.'
import { Layout } from '~/components'
import axios from 'axios'
import nextCookie from 'next-cookies'

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
    console.log("rad0:", playersRadiant[0])
    console.log("dire0:", playersDire[0])
    return {
      matchId: replay.attributes['match-id'],
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

const Dashboard = ({ replays, user }) => (
  <Layout title="Dashboard">
    Requested Reviews
    <ReviewsCard>Test Card</ReviewsCard>
    Recent Matches
    {replays.map((replay) => {
      return <RecentMatchesCard replay={replay} user={user}/>
    })}
  </Layout>
)

Dashboard.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const replays = await getReplays(authToken)
  const user = await getCurrentUser(authToken)
  console.log(user)
  return { replays, user }
}

export default Dashboard
