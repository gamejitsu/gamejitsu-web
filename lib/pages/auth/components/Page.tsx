import { NextPage } from "next"
import { setCookie } from "nookies"
import { useEffect } from "react"
import { stringify as stringifyQueryString } from "querystring"
import { createModel } from "gamejitsu/api"
import Router from "next/router"
import { Session } from "gamejitsu/models"

const Auth: NextPage = () => {
  useEffect(() => {
    Router.push("/dashboard")
  })

  return null
}

Auth.getInitialProps = async (ctx) => {
  const { query } = ctx
  const session = {} as Session
  session.type = "session"
  session.accessToken = ""
  session.openidParams = stringifyQueryString(query)
  const { data: { accessToken } } = await createModel(session)
  setCookie(ctx, "authToken", accessToken, {})

  return {}
}

export default Auth
