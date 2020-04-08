import React from "react"

import { AuthenticatedComponent } from "gamejitsu/interfaces/authenticated-component"
import { Layout } from "gamejitsu/components"

const Page: AuthenticatedComponent = () => <Layout></Layout>

Page.skipAuthentication = true

export default Page
