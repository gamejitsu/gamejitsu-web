import axios from "axios"
import cookie from "js-cookie"
import { NextPage } from "next"
import { useEffect } from "react"

interface Props {
  authToken: string
}

const Auth: NextPage<Props> = ({ authToken }) => {
  useEffect(() => {
    cookie.set("authToken", authToken)
    window.location.href = "/dashboard"
  }, [authToken])
  return <div />
}

Auth.getInitialProps = async ({ query }) => {
  const initialQueryRecord: Record<string, string> = {}

  const queryRecord = Object.keys(query).reduce((acc, key) => {
    const value = query[key]

    if (typeof value === 'string') {
      return { ...acc, [key]: value }
    } else {
      return { ...acc, [key]: value[value.length - 1] }
    }
  }, initialQueryRecord)

  const response = await axios.post(
    process.env.API_ENDPOINT + "/sessions",
    {
      data: {
        type: "session",
        attributes: {
          openid_params: new URLSearchParams(queryRecord).toString()
        }
      }
    },
    { headers: { "Content-Type": "application/vnd.api+json", Accept: "application/vnd.api+json" } }
  )
  const authToken = response.data.data.attributes["access-token"]
  return { authToken }
}

export default Auth
