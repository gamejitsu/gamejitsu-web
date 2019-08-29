import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { theme } from '~'
import Home from '../pages/index'

test('Home Test', () => {
  const home = mount(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
  expect(home).toMatchSnapshot()
})
