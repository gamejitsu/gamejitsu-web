import { mount } from 'enzyme'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'gamejitsu'
import IndexPage from '../pages/index'
import { UserContext } from '../lib/components'

const user = {
  attributes: {
    username: 'userTest'
  }
}

test('Index page should match snapshot', () => {
  const home = mount(
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user }}>
        <IndexPage />
      </UserContext.Provider>
    </ThemeProvider>
  )

  expect(home).toMatchSnapshot()
})
