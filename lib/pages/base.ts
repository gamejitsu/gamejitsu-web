import axios from 'axios'
import nextCookie from 'next-cookies'

const basePage = {}

const getCurrentUser = async authToken => {
  const response = await axios.get(process.env.API_ENDPOINT + '/users/current', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })
  return response.data.data
}

basePage.getInitialProps = async ctx => {
  const { authToken } = nextCookie(ctx)
  const user = await getCurrentUser(authToken)
  return { user }
}

export default basePage
