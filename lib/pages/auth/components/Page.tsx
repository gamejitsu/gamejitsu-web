import { NextPage } from "next"
import { setCookie } from "nookies"
import { useEffect } from "react"
import { stringify as stringifyQueryString } from "querystring"
import { createRecord } from "gamejitsu/api"
import Router from "next/router"

const Auth: NextPage = () => {
  useEffect(() => {
    Router.push("/dashboard")
  })

  return null
}

Auth.getInitialProps = async (ctx) => {
  const { query } = ctx
  const { authToken } = { authToken: "123" } //createRecord("session", { openidParams: stringifyQueryString(query) })
  setCookie(ctx, "authToken", authToken, {})

  return {}
}

export default Auth
