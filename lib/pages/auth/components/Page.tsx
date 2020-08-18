import { NextPage } from "next"
import { setCookie } from "nookies"
import { stringify as stringifyQueryString } from "querystring"
import { useEffect, useContext } from "react"
import Router from "next/router"

import { createModel } from "gamejitsu/api"
import { UserContext } from "gamejitsu/contexts"
import SessionResource from "gamejitsu/api/resources/session"

interface Props {
  query: Query
}

interface Query {
  redirect?: string
}

const Auth: NextPage<Props> = ({ query }) => {
  const user = useContext(UserContext)
  useEffect(() => {
    query.redirect
      ? Router.push(query.redirect)
      : user?.coachId
      ? Router.push("/coach-dashboard")
      : Router.push("/dashboard")
  })
  return null
}

Auth.getInitialProps = async (ctx) => {
  const { query } = ctx
  const {
    data: { accessToken }
  }: any = await createModel(SessionResource, { openidParams: stringifyQueryString(query) })
  setCookie(ctx, "authToken", accessToken, {})
  return { query }
}

export default Auth
