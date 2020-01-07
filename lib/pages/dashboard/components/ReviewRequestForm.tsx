import { Box, Flex, Text } from "rebass"
import { Formik, Form, Field } from "formik"
import Router from "next/router"
import React, { FunctionComponent } from "react"
import { Button, Layout } from "gamejitsu/components"
import { HeroImage } from "."
import { DeserializedReplay } from "./Page"
import { createModel } from "gamejitsu/api"
import { SkillLevel } from "gamejitsu/models/reviewRequest"

interface Props {
  replay: DeserializedReplay
  onFinish: () => void
}

const ReviewRequestForm: FunctionComponent<Props> = ({ replay, onFinish }) => {
  console.log(replay)
  return (
    <Layout title="Dashboard">
      <div>
        <Formik
          initialValues={{ skill: "medium" } as { skill: SkillLevel }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
            console.log(setSubmitting)
            await createModel("review-request", { replay: replay.id, skillLevel: values.skill })
            Router.push(`/dashboard`)
            onFinish()
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
                  <div className="Grid">
                    <HeroImage src={replay.playersDire[0].heroPortraitUrl}></HeroImage>
                    <HeroImage src={replay.playersDire[1].heroPortraitUrl}></HeroImage>
                    <HeroImage src={replay.playersDire[2].heroPortraitUrl}></HeroImage>
                    <HeroImage src={replay.playersDire[3].heroPortraitUrl}></HeroImage>
                    <HeroImage src={replay.playersDire[4].heroPortraitUrl}></HeroImage>
                  </div>
                  <div className="Grid">
                    <HeroImage src={replay.playersRadiant[0].heroPortraitUrl}></HeroImage>
                    <HeroImage src={replay.playersRadiant[1].heroPortraitUrl}></HeroImage>
                    <HeroImage src={replay.playersRadiant[2].heroPortraitUrl}></HeroImage>
                    <HeroImage src={replay.playersRadiant[3].heroPortraitUrl}></HeroImage>
                    <HeroImage src={replay.playersRadiant[4].heroPortraitUrl}></HeroImage>
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
