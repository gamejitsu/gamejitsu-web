import React from "react"

import { listModels, createModel } from "gamejitsu/api"
import { Flex, Box, Text } from "rebass"
import { Layout, Card, Button, Title } from "gamejitsu/components"
import { NextPageContext, NextPage } from "next"
import ReviewRequestResource, { ReviewRequest } from "gamejitsu/api/resources/review-request"
import ReviewResource from "gamejitsu/api/resources/review"

interface Props {
  reviewRequests: ReviewRequest[]
}

const getReviewRequests = async (ctx: NextPageContext) => {
  const response = await listModels(ReviewRequestResource, ctx)
  return response.data
}

const acceptReviewRequest = async (reviewRequestId: string) => {
  const response = await createModel(ReviewResource, { requestId: reviewRequestId })
  // TODO Maybe add confirm?
  // redirect to perform review page
}

//TODO maybe add ReviewRequestCard?
const CoachDashboardPage: NextPage<Props> = ({ reviewRequests }) => {
  return (
    <Layout title="Coach Dashboard">
<<<<<<< Updated upstream
      <Title text="Available review requests" />
=======
      <Title text="Available review requests"/>
>>>>>>> Stashed changes
      <Box m="20px">
        <Card>
          <Flex flexDirection="column">
            {reviewRequests.map((reviewRequest) => {
              return (
                <Box p={3} key={reviewRequest.id}>
                  <Text p={2}>Review Request</Text>
                  <Text p={2}>Review Request Id: {reviewRequest.id}</Text>
                  <Button
                    onClick={() => {
                      acceptReviewRequest(reviewRequest.id)
                    }}
                    text="Accept review"
                  />
                </Box>
              )
            })}
          </Flex>
        </Card>
      </Box>
    </Layout>
  )
}

CoachDashboardPage.getInitialProps = async (ctx: NextPageContext) => {
  const reviewRequests = await getReviewRequests(ctx)
  return { reviewRequests }
}

export default CoachDashboardPage
