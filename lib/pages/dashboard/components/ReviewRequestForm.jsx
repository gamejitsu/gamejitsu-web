import { Button, Layout } from '~/components'
import { Box, Flex, Text } from 'rebass'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'
import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
import cookie from 'js-cookie'
import { HeroImage } from '.'

const ReviewRequestForm = ({ replay, onFinish }) => {
  console.log(replay)
  return (
    <Layout title="Dashboard">
      <div>
        <Formik
          initialValues={{}}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
            console.log(setSubmitting)
            await axios.post(
              process.env.API_ENDPOINT + '/review-requests',
              {
                data: {
                  type: 'review-request',
                  attributes: {
                    'replay-id': replay.id,
                    'skill-level': values.skill
                  }
                }
              },
              {
                headers: {
                  Accept: 'application/vnd.api+json',
                  'Content-Type': 'application/vnd.api+json',
                  Authorization: 'Bearer ' + cookie.get('authToken')
                }
              }
            )
            Router.push(`/dashboard`)
            onFinish()
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex direction='column' alignItems='center'>
                <Box p={3} mr="auto">
                  <Text p={2}>MatchId: {replay.matchId}</Text>
                  <Text p={2}>playedAt: {replay.playedAt}</Text>
                </Box>
                <Box p={3} mr="auto">
                  <div className="Grid">
                    <HeroImage src={replay.playersDire[0].image}></HeroImage>
                    <HeroImage src={replay.playersDire[1].image}></HeroImage>
                    <HeroImage src={replay.playersDire[2].image}></HeroImage>
                    <HeroImage src={replay.playersDire[3].image}></HeroImage>
                    <HeroImage src={replay.playersDire[4].image}></HeroImage>
                  </div>
                  <div className="Grid">
                    <HeroImage src={replay.playersRadiant[0].image}></HeroImage>
                    <HeroImage src={replay.playersRadiant[1].image}></HeroImage>
                    <HeroImage src={replay.playersRadiant[2].image}></HeroImage>
                    <HeroImage src={replay.playersRadiant[3].image}></HeroImage>
                    <HeroImage src={replay.playersRadiant[4].image}></HeroImage>
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
                <Button
                  text="Request Replay"
                  type="submit"
                  disabled={isSubmitting}
                  replay={replay}
                />
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

ReviewRequestForm.propTypes = {
  replay: PropTypes.object,
  onFinish: PropTypes.func.isRequired
}

export default ReviewRequestForm
