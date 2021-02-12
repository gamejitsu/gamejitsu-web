import React from "react"

import { UpdateEmailForm } from "."
import { Layout } from "gamejitsu/components"
import { NextPage } from "next"

const UpdateEmailPage: NextPage = () => (
  <Layout title="Update Email">
    <UpdateEmailForm />
  </Layout>
)

export default UpdateEmailPage
