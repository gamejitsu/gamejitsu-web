import React from 'react'
import { CoachReviewCard } from '../components'
import { Layout } from '~/components'
import nextCookie from 'next-cookies'
import PropTypes from 'prop-types'
import axios from 'axios'

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

class CoachReviewIndex extends React.Component {
  render() {
    return (
      <Layout title="Reviews">
        Reviews Requests
        {this.props.reviewRequests.map(reviewRequest => {
          return <CoachReviewCard key={reviewRequest.id} reviewRequest={reviewRequest} />
        })}
        Completed Reviews
      </Layout>
    )
  }
}

CoachReviewIndex.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const reviewRequests = await getReviewRequests(authToken)
  return { reviewRequests }
}

CoachReviewIndex.propTypes = {
  reviews: PropTypes.array
}

export default CoachReviewIndex
