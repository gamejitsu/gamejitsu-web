import React from 'react'
import { ReviewsCard, RecentMatchesCard } from '.'
import { Layout } from '~/components'

export default () => (
  <Layout title="Dashboard">
    Requested Reviews
    <ReviewsCard>Test Card</ReviewsCard>
    Recent Matches
    <RecentMatchesCard>Test Card</RecentMatchesCard>
  </Layout>
)
