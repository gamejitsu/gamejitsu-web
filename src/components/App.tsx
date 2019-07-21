import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme } from '../theme'
import { Button } from './Button'

const Content: React.FC = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.textFont};
`
const App: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Reset />
      <ThemeProvider theme={theme}>
        <Content>
          <h1>Gamejitsu</h1>
          <Button text="Send Replay"/>
        </Content>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
