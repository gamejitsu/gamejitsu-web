import React from 'react'
import { ReviewsCard, RecentMatchesCard } from '.'
import { Layout } from '~/components'
import axios from 'axios'
import nextCookie from 'next-cookies'

const getReplays = async authToken => {
  console.log('getReplays token: ', authToken)
  const response = await axios.get(process.env.API_ENDPOINT + '/replays', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })
  console.log('dashboard - getReplays : ', response.data)
  return response.data
}

const Dashboard = () => (
  <Layout title="Dashboard">
    Requested Reviews
    <ReviewsCard>Test Card</ReviewsCard>
    Recent Matches
    <RecentMatchesCard>Test Card</RecentMatchesCard>
  </Layout>
)

Dashboard.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const replays = await getReplays(authToken)
  return { replays }
}

export default Dashboard
