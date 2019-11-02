import { Button, Layout } from '~/components'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'

const ReviewRequestForm = ({ replay }) => {
  console.log(replay)
  return (
    <Layout title="Dashboard">
      <div>
        <Formik
          initialValues={{}}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
            console.log(setSubmitting)
            await axios.post(process.env.API_ENDPOINT + '/review-request', {
              headers: { Accept: 'application/vnd.api+json' },
              body: {
                data: {
                  type: 'review-request',
                  attributes: {
                    'replay-id': replay.id,
                    'skill-level': values.skill
                  }
                }
              }
            })
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="radio" name="skill" value="pro" />
              <Field type="radio" name="skill" value="very_high" />
              <Field type="radio" name="skill" value="high" />
              <Field type="radio" name="skill" value="medium" />
              <Button text="Hello" type="submit" disabled={isSubmitting} replay={replay}>
                Submit
              </Button>
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
