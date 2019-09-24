import { mount } from 'enzyme'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '~'
import IndexPage from '../pages/index'

test('Index page should match snapshot', () => {
  const home = mount(
    <ThemeProvider theme={theme}>
      <IndexPage />
    </ThemeProvider>
  )

  expect(home).toMatchSnapshot()
})
