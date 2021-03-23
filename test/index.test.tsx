import { mount } from "enzyme"
import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "gamejitsu"
import DemoPage from "../pages/demo"
import { UserContext } from "../lib/contexts"

const user = {
  type: "user" as "user",
  username: "userTest",
  isSyncingReplays: false,
  steamId: "1",
  hasPublicProfile: true,
  email: "foobar@example.com",
  coachId: "10328f42-849e-405d-affc-15373340w0bw",
  id: "10328f42-849e-405d-affc-3537w340cwbf"
}

test("Index page should match snapshot", () => {
  const home = mount(
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={user}>
        <DemoPage />
      </UserContext.Provider>
    </ThemeProvider>
  )

  expect(home).toMatchSnapshot()
})
