import React from "react"

import { listModels } from "gamejitsu/api"
import { Flex, Box, Text } from "rebass"
import { Layout, Card } from "gamejitsu/components"
import { NextPageContext } from "next"
import { ReviewRequest } from "gamejitsu/models"

interface Props {
  reviewRequests: ReviewRequest[]
}

interface State {
  reviewRequests: ReviewRequest[]
}

const getReviewRequests = async (ctx: NextPageContext) => {
  const response = await listModels("review-request", ctx)
  return response.data
}

class CoachDashboardPage extends React.Component<Props, State> {
  static getInitialProps = async (ctx: NextPageContext) => {
    const reviewRequests = await getReviewRequests(ctx)
    return { reviewRequests }
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      reviewRequests: props.reviewRequests
    }
  }

  render() {
    return (
      <Layout title="Coach Dashboard">
        <Box m="20px">
          <Card>
            <Flex flexDirection="column">
              {this.state.reviewRequests.map((reviewRequest) => {
                return (
                  <Box p={3}>
                    <Text p={2}>Review Request</Text>
                    <Text p={2}>Review Request Id: {reviewRequest.id}</Text>
                  </Box>
                )
              })}
            </Flex>
          </Card>
        </Box>
      </Layout>
    )
  }
}

export default CoachDashboardPage
