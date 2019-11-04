import { Button, Layout } from '~/components'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
import cookie from 'js-cookie'

const ReviewRequestForm = ({ replay }) => {
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
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field type="radio" name="skill" value="pro" />
                <label for="skill">Pro</label>
              </div>
              <div>
                <Field type="radio" name="skill" value="very_high" />
                <label for="skill">Very High</label>
              </div>
              <div>
                <Field type="radio" name="skill" value="high" />
                <label for="skill">High</label>
              </div>
              <div>
                <Field type="radio" name="skill" value="medium" />
                <label for="skill">Medium</label>
              </div>
              <Button text="Requst Replay" type="submit" disabled={isSubmitting} replay={replay} />
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

ReviewRequestForm.propTypes = {
  replay: PropTypes.object
}

export default ReviewRequestForm
