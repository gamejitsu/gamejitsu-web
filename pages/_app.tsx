import Head from "next/head"
import jwtDecode from "jwt-decode"
import NextApp, { AppContext } from "next/app"
import React from "react"
import Router from "next/router"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/normalize.css/normalize.css"
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css"
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css"
import "react-toastify/dist/ReactToastify.css"

import { AuthenticatedComponent } from "gamejitsu/interfaces/authenticated-component"
import { findModel } from "gamejitsu/api"
import { NextPageContext } from "next"
import { parseCookies, destroyCookie } from "nookies"
import { Reset } from "styled-reset"
import { theme } from "gamejitsu"
import { User } from "gamejitsu/models"
import { UserContext } from "gamejitsu/contexts"
import { ToastContainer } from "react-toastify"

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
  @font-face {
    font-family: 'Japanese 3017';
    src: url('/fonts/Japanese-3017.eot');
    src: url('/fonts/Japanese-3017.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Japanese-3017.woff2') format('woff2'),
         url('/fonts/Japanese-3017.woff') format('woff'),
         url('/fonts/Japanese-3017.ttf')  format('truetype'),
         url('/fonts/Japanese-3017.svg#Japanese 3017') format('svg');
  }
`

function isAuthenticatedComponent(component: any): component is AuthenticatedComponent {
  return "skipAuthentication" in component
}

export default class App extends NextApp<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    if (ctx.req && ctx.req.url && ctx.req.url.startsWith("/auth?")) {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      return { pageProps }
    }
    let requiresAuthentication = true
    let user = null
    let { authToken } = parseCookies(ctx) as { authToken?: string }
    if (isAuthenticatedComponent(Component) && Component.skipAuthentication) {
      requiresAuthentication = false
    }
    if (requiresAuthentication && !isAuthTokenValid(authToken)) {
      handleUnauthorized(ctx)
      return { pageProps }
    }
    if (authToken) {
      try {
        user = await getCurrentUser(ctx)
      } catch (e) {
        if (e.response && e.response.status === 401) {
          if (requiresAuthentication) {
            handleUnauthorized(ctx)
            return { pageProps }
          }
        } else {
          destroyCookie(ctx, "authToken")
          throw e
        }
      }
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
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
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              draggable
              pauseOnHover
            />
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

const isAuthTokenValid = (authToken?: string) => {
  if (authToken === undefined) {
    return false
  }
  let decoded: { exp: number }
  try {
    decoded = jwtDecode(authToken)
  } catch (e) {
    if (e.name === "InvalidTokenError") {
      return false
    }
    throw e
  }
  return decoded.exp > Date.now() / 1000
}

const handleUnauthorized = (ctx: NextPageContext) => {
  destroyCookie(ctx, "authToken")
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: "/" })
    ctx.res.end()
  } else {
    Router.replace("/")
  }
}
