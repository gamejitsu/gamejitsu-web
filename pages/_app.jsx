import { Container } from 'next/app'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme } from '~'
import axios from 'axios'
import nextCookie from 'next-cookies'
import { UserContext } from '~/components'

const Content = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2');
`

const App = ({ Component, pageProps, user }) => {
  return (
    <Container>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Content>
          <UserContext.Provider value={{ user }}>
            <Component {...pageProps} />
          </UserContext.Provider>
        </Content>
      </ThemeProvider>
    </Container>
  )
}

App.propTypes = {
  store: PropTypes.object,
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  user: PropTypes.object
}

const getCurrentUser = async authToken => {
  const response = await axios.get(process.env.API_ENDPOINT + '/users/current', {
    headers: { Accept: 'application/vnd.api+json', Authorization: 'Bearer ' + authToken }
  })
  return response.data.data
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  let user
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
    const { authToken } = nextCookie(ctx)
    user = await getCurrentUser(authToken)
  }
  return { pageProps, user }
}

export default App
