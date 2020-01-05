import { NextPage } from "next"
import { setCookie } from "nookies"
import { useEffect } from "react"
import { stringify as stringifyQueryString } from "querystring"
import { createModel } from "gamejitsu/api"
import Router from "next/router"

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
  } = await createModel({
    type: "session",
    accessToken: "",
    openidParams: stringifyQueryString(query)
  })
  setCookie(ctx, "authToken", accessToken, {})

  return {}
}

export default Auth
