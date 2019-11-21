import React from 'react'
import { ReviewCard } from '.'
import { Layout } from '~/components'
import nextCookie from 'next-cookies'
import PropTypes from 'prop-types'
//import axios from 'axios'

const deserializeReviews = data => {
  return data.map(review => {
    return {
      id: review.id,
      comments: review.relationships.comments.map(comment => {
        return {
          id: comment.id,
          text: comment.attributes.text,
          timestamp: comment.attributes.timestamp
        }
      }),
      matchId: review.relationships.replay.attributes['match-id'],
      skillLevel: review.attributes['skill-level']
    }
  })
}

//const getReviews = async authToken => {
const getReviews = () => {
  //const response = await axios.get(process.env.API_ENDPOINT + '/reviews', {
  //  headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  //})
  const response = {
    data: [
      {
        id: 1,
        attributes: {
          'skill-level': 'high'
        },
        relationships: {
          comments: [
            {
              id: 1,
              attributes: {
                text: 'ultra kill',
                timestamp: 11
              }
            },
            {
              id: 2,
              attributes: {
                text: 'kill',
                timestamp: 21
              }
            }
          ],
          replay: {
            id: 1,
            attributes: {
              'match-id': '200000'
            }
          }
        }
      },
      {
        id: 2,
        attributes: {
          'skill-level': 'pro'
        },
        relationships: {
          comments: [
            {
              id: 1,
              attributes: {
                text: 'ultra kill',
                timestamp: 31
              }
            },
            {
              id: 2,
              attributes: {
                text: 'kill',
                timestamp: 41
              }
            }
          ],
          replay: {
            id: 1,
            attributes: {
              'match-id': '5500000'
            }
          }
        }
      }
    ]
  }
  return deserializeReviews(response.data)
}

class ReviewIndex extends React.Component {
  render() {
    return (
      <Layout title="Reviews">
        Completed Reviews
        {this.props.reviews.map(review => {
          return <ReviewCard key={review.id} review={review} />
        })}
      </Layout>
    )
  }
}

ReviewIndex.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const reviews = await getReviews(authToken)
  return { reviews }
}

ReviewIndex.propTypes = {
  reviews: PropTypes.array
}

export default ReviewIndex
