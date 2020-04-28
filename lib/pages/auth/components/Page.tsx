import Router from "next/router"

import { createModel } from "gamejitsu/api"
import { NextPage } from "next"
import { setCookie } from "nookies"
import { stringify as stringifyQueryString } from "querystring"
import { useEffect } from "react"
import SessionResource from "gamejitsu/api/resources/session"

const Auth: NextPage = () => {
  useEffect(() => {
    Router.push("/dashboard")
  })
  return null
}

Auth.getInitialProps = async (ctx) => {
  const { query } = ctx
  const {
    data: { accessToken }
  } = await createModel(SessionResource, { openidParams: stringifyQueryString(query) })
  setCookie(ctx, "authToken", accessToken, {})
  return {}
}

export default Auth
