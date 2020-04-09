import React, { FunctionComponent } from "react"
import Router from "next/router"

import { Box, Flex, Text } from "rebass"
import { Button, Layout } from "gamejitsu/components"
import { createModel } from "gamejitsu/api"
import { DeserializedReplay } from "gamejitsu/models/replay"
import { Formik, Form, Field } from "formik"
import { HeroImage } from "gamejitsu/components"
import { SkillLevel } from "gamejitsu/models"

const redirectToCheckout = async () => {
  const stripe = Stripe("pk_test_gO4hZHVOjk7E3GjH0etoiBAO00c0qpfX0m")
  const {
    data: { id }
  } = await createModel("checkout", {})
  return await stripe.redirectToCheckout({ sessionId: id })
}

interface Props {
  replay: DeserializedReplay
}

const ReviewRequestForm: FunctionComponent<Props> = ({ replay }) => {
  return (
    <Layout title="Dashboard">
      <div>
        <Formik
          initialValues={{ skill: "medium" } as { skill: SkillLevel }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true)
            // TODO re add redirect to checkout
            //redirectToCheckout()
            await createModel("review-request", { replay: replay.id, skillLevel: values.skill })
            setSubmitting(false)
            Router.push("/dashboard")
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex flexDirection="column" alignItems="center">
                <Box p={3} mr="auto">
                  <Text p={2}>MatchId: {replay.matchId}</Text>
                  <Text p={2}>playedAt: {new Date(replay.playedAt).toUTCString()}</Text>
                </Box>
                <Box p={3} mr="auto">
                  <div>
                    {replay.playersDire.map((player, index) => {
                      const key = player.steamId ? player.steamId : index.toString()
                      return <HeroImage key={key} player={player} />
                    })}
                  </div>
                  <div>
                    {replay.playersRadiant.map((player, index) => {
                      const key = player.steamId ? player.steamId : index.toString()
                      return <HeroImage key={key} player={player} />
                    })}
                  </div>
                </Box>
                <Box m={2} p={2} bg="primary" width={[1, 1, 1]}>
                  <Field type="radio" name="skill" value="pro" />
                  <label htmlFor="skill">Pro</label>
                </Box>
                <Box m={2} p={2} width={[1, 1, 1]}>
                  <Field type="radio" name="skill" value="very_high" />
                  <label htmlFor="skill">Very High</label>
                </Box>
                <Box m={2} p={2} width={[1, 1, 1]}>
                  <Field type="radio" name="skill" value="high" />
                  <label htmlFor="skill">High</label>
                </Box>
                <Box m={2} p={2} width={[1, 1, 1]}>
                  <Field type="radio" name="skill" value="medium" />
                  <label htmlFor="skill">Medium</label>
                </Box>
                <Text p={2}>Price: 4£</Text>
              </Flex>
              <Box>
                <Button text="Request Replay" type="submit" disabled={isSubmitting} />
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default ReviewRequestForm
