import React from 'react'
import { AppProps, Container } from 'next/app'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme, createStore } from '~'
import { Provider } from 'react-redux'
import { Store } from '~/createStore'
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'

interface Props extends AppProps {
  store: Store
}

const Content: React.FC = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2');
`

const App: React.FC<Props> = ({ store, Component, pageProps }): React.ReactElement => (
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

export default withRedux(createStore)(withReduxSaga(App))
