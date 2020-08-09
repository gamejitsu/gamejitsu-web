import Router from "next/router"

import { createModel } from "gamejitsu/api"
import { NextPage } from "next"
import { setCookie } from "nookies"
import { stringify as stringifyQueryString } from "querystring"
import { useEffect, useContext } from "react"
import SessionResource from "gamejitsu/api/resources/session"
import { UserContext } from "gamejitsu/contexts"

const Auth: NextPage = () => {
  const user = useContext(UserContext)
  useEffect(() => {
    user?.coachId ? Router.push("/coach-dashboard") : Router.push("/dashboard")
  })
  return null
}

Auth.getInitialProps = async (ctx) => {
  const { query } = ctx
  const {
    data: { accessToken }
  }: any = await createModel(SessionResource, { openidParams: stringifyQueryString(query) })
  setCookie(ctx, "authToken", accessToken, {})
  return {}
}

export default Auth
