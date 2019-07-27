import React from 'react'
import { AppProps, Container } from 'next/app'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme } from '../lib/theme'

const Content: React.FC = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
`
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo+2');
`

const App: React.FC<AppProps> = ({ Component, pageProps }): React.ReactElement => (
  <Container>
    <Reset />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Content>
        <Component {...pageProps} />
      </Content>
    </ThemeProvider>
  </Container>
)

export default App
