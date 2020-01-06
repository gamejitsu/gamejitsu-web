import React from "react"
import { ReviewCard } from "."
import { Layout } from "gamejitsu/components"

const deserializeReviews = (data: any) => {
  return data.map((review: any) => {
    return {
      id: review.id,
      comments: review.relationships.comments.map((comment: any) => {
        return {
          id: comment.id,
          text: comment.attributes.text,
          timestamp: comment.attributes.timestamp
        }
      }),
      matchId: review.relationships.replay.attributes["match-id"],
      skillLevel: review.attributes["skill-level"]
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
        id: 5,
        attributes: {
          "skill-level": "high"
        },
        relationships: {
          comments: [
            {
              id: 1,
              attributes: {
                text: "ultra kill",
                timestamp: 11
              }
            },
            {
              id: 2,
              attributes: {
                text: "kill",
                timestamp: 21
              }
            }
          ],
          replay: {
            id: 1,
            attributes: {
              "match-id": "200000"
            }
          }
        }
      },
      {
        id: 6,
        attributes: {
          "skill-level": "pro"
        },
        relationships: {
          comments: [
            {
              id: 1,
              attributes: {
                text: "ultra kill",
                timestamp: 31
              }
            },
            {
              id: 2,
              attributes: {
                text: "kill",
                timestamp: 41
              }
            }
          ],
          replay: {
            id: 1,
            attributes: {
              "match-id": "5500000"
            }
          }
        }
      }
    ]
  }
  return deserializeReviews(response.data)
}

class ReviewIndex extends React.Component<any> {
  static getInitialProps = async (ctx: any) => {
    const reviews = await getReviews()
    return { reviews }
  }

  render() {
    return (
      <Layout title="Reviews">
        Completed Reviews
        {this.props.reviews.map((review: any) => {
          return <ReviewCard key={review.id} review={review} />
        })}
      </Layout>
    )
  }
}

export default ReviewIndex
