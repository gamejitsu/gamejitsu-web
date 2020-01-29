import Router from "next/router"

import { NextPage } from "next"
import { useEffect } from "react"
import { setCookie } from "nookies"
import { createModel } from "gamejitsu/api"
import { stringify as stringifyQueryString } from "querystring"

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
  } = await createModel("session", { openidParams: stringifyQueryString(query) })

  setCookie(ctx, "authToken", accessToken, {})

  return {}
}

export default Auth
