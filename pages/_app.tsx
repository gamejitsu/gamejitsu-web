import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { Reset } from "styled-reset"
import { theme } from "gamejitsu"
import jwtDecode from "jwt-decode"
import { parseCookies, destroyCookie } from "nookies"
import NextApp, { AppContext } from "next/app"
import { UserContext } from "gamejitsu/contexts"
import { User } from "gamejitsu/models"
import { NextPageContext } from "next"
import { findModel } from "gamejitsu/api"
import Head from "next/head"

interface Props {
  user: User
}

const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.textFont};
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2');
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`

export default class App extends NextApp<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    let user
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    let { authToken } = parseCookies(ctx) as { authToken?: string }
    authToken = validateTokenExpirationTime(authToken)
    if (authToken === undefined) {
      destroyCookie({}, "authToken")
    }
    authToken && (user = await getCurrentUser(ctx))
    return { pageProps, user }
  }

  render() {
    const { Component, pageProps, user } = this.props

    return (
      <>
        <Head>
          <script src="https://js.stripe.com/v3/" />
        </Head>
        <Reset />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Content>
            <UserContext.Provider value={user}>
              <Component {...pageProps} />
            </UserContext.Provider>
          </Content>
        </ThemeProvider>
      </>
    )
  }
}

const getCurrentUser = async (ctx: NextPageContext) => {
  const { data } = await findModel("user", "current", ctx)
  return data
}

const validateTokenExpirationTime = (authToken?: string) => {
  if (authToken === undefined) {
    return undefined
  }
  const decoded: { exp: number } = jwtDecode(authToken)
  if (decoded.exp > Date.now() / 1000) {
    return authToken
  } else {
    return undefined
  }
}
