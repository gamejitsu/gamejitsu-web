import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { Reset } from "styled-reset"
import { theme } from "gamejitsu"
import axios from "axios"
import NextApp, { AppContext } from "next/app"
import nextCookie from "next-cookies"
import { UserContext } from "gamejitsu/components"
import jwtDecode from "jwt-decode"
import cookie from "js-cookie"

interface Props {
  user: any
}

const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${(props) => props.theme.textColor};
  font-family: ${(props) => props.theme.textFont};
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2');
`

export default class App extends NextApp<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    let user
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
      let { authToken } = nextCookie(ctx)
      authToken = validateTokenExpirationTime(authToken as any) as any
      if (authToken == null) {
        cookie.remove("authToken")
      }
      authToken && (user = await getCurrentUser(authToken))
    }
    return { pageProps, user }
  }

  render() {
    const { Component, pageProps, user } = this.props

    return (
      <>
        <Reset />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Content>
            <UserContext.Provider value={{ user }}>
              <Component {...pageProps} />
            </UserContext.Provider>
          </Content>
        </ThemeProvider>
      </>
    )
  }
}

const getCurrentUser = async (authToken: string) => {
  const response = await axios.get(process.env.API_ENDPOINT + "/users/current", {
    headers: { Accept: "application/vnd.api+json", Authorization: "Bearer " + authToken }
  })
  return response.data.data
}

const validateTokenExpirationTime = (authToken: string) => {
  if (authToken == null) {
    return null
  }
  const decoded: { exp: number } = jwtDecode(authToken)
  if (decoded.exp > Date.now() / 1000) {
    return authToken
  } else {
    return null
  }
}
