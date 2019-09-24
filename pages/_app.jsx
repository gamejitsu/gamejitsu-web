import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import { Container } from 'next/app'
import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme, createStore } from '~'

const Content = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2');
`

const App = ({ store, Component, pageProps }) => (
  <Container>
    <Reset />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Content>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Content>
    </ThemeProvider>
  </Container>
)

App.propTypes = {
  store: PropTypes.object,
  Component: PropTypes.node,
  pageProps: PropTypes.object
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default withRedux(createStore)(withReduxSaga(App))
