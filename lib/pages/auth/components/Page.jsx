import axios from 'axios'
import cookie from 'js-cookie'
import React from 'react'

const Auth = ({ authToken }) => {
  React.useEffect(() => {
    cookie.set('authToken', authToken)
    window.location = '/dashboard'
  }, [authToken])
  return null
}

Auth.getInitialProps = async ({ query }) => {
  const response = await axios.post(
    process.env.API_ENDPOINT + '/sessions',
    {
      data: {
        type: 'session',
        attributes: {
          openid_params: new URLSearchParams(query).toString()
        }
      }
    },
    { headers: { 'Content-Type': 'application/vnd.api+json', Accept: 'application/vnd.api+json' } }
  )
  const authToken = response.data.data.attributes['access-token']
  return { authToken }
}

export default Auth
