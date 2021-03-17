import Head from "next/head"
import jwtDecode from "jwt-decode"
import NextApp, { AppContext } from "next/app"
import React from "react"
import Router from "next/router"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import "../lib/styles.scss"

import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { findModel } from "gamejitsu/api"
import { NextPageContext } from "next"
import { parseCookies, destroyCookie } from "nookies"
import { Reset } from "styled-reset"
import { theme } from "gamejitsu"
import UserResource, { User } from "gamejitsu/api/resources/user"
import { Coach } from "gamejitsu/api/resources/coach"
import { UserContext } from "gamejitsu/contexts"
import Navbar from "gamejitsu/components/responsive-components/header-menu/Navbar"

interface DecoratedUser {
  coach: Coach | undefined
  steamId: string
  isSyncingReplays: boolean
  username: string
  hasPublicProfile: boolean
  coachId: string | null
  id: string
  email: string | null
}

interface Props {
  user: User | DecoratedUser
}

const Content = styled.div`
  margin: auto;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  max-width: 1920px;
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    font-family: ${(props) => props.theme.textFont};
    color: ${(props) => props.theme.colors.textColor};
  }
  input {
    font-family: ${(props) => props.theme.textFont};
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
        handleUserAccessingCoachResources(ctx, user)
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
    const renderAnalytics = () => {
      if (process.env.NODE_ENV === "production") {
        return (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=G-DD40PZGYEM`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                console.log("Load Analytics");
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DD40PZGYEM', {
                  page_path: window.location.pathname,
                });
              `
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                console.log("Load FB Pixel");
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2788245031504574');
                fbq('track', 'PageView');
              `
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=2788245031504574&ev=PageView&noscript=1"
              />
            </noscript>
          </>
        )
      }
    }
    return (
      <>
        <Head>
          <script src="https://js.stripe.com/v3/" />
          {renderAnalytics()}
        </Head>
        <Reset />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Content>
            <UserContext.Provider value={user}>
              <Navbar />
              <Component {...pageProps} />
            </UserContext.Provider>
          </Content>
        </ThemeProvider>
      </>
    )
  }
}

const getCurrentUser = async (ctx: NextPageContext) => {
  const response = await findModel(UserResource, "current", ctx)
  if (response.data?.coachId) {
    const user = response.data
    const coach = response.included.coach.find((c) => c.id === user.coachId)
    return { ...user, coach }
  } else {
    return response.data
  }
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

const handleUserAccessingCoachResources = (ctx: NextPageContext, user: any) => {
  const userForbiddenRoutes = [/\/coach-dashboard.*/, /\/coach-reviews.*/, /\/coach-settings.*/]
  const coachForbiddenRoutes = [/\/dashboard/, /\/reviews.*/, /\/settings.*/]
  // Redirects for coach users
  if (user.coachId) {
    //Special redirect after coach sign_in:
    if (ctx.pathname.match(/\/dashboard/)) {
      user.coachId.approved ? redirectToPage(ctx, "/coach-dashboard") : redirectToPage(ctx)
    } else {
      if (coachForbiddenRoutes.some((route) => route.test(ctx.pathname))) {
        redirectToPage(ctx)
      }
    }
  }
  // Redirects for users
  else {
    if (userForbiddenRoutes.some((route) => route.test(ctx.pathname))) {
      redirectToPage(ctx)
    }
  }
}

// Redirect customers not logged in
const handleUnauthorized = (ctx: NextPageContext) => {
  destroyCookie(ctx, "authToken")
  redirectToPage(ctx)
}

const redirectToPage = (ctx: NextPageContext, pageLink: string = "/") => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: pageLink })
    ctx.res.end()
  } else {
    Router.replace(pageLink)
  }
}
