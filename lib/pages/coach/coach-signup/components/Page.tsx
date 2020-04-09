import React from "react"

import { CoachSignUpForm } from "."
import { Layout } from "gamejitsu/components"
import { NextPage } from "next"

const CoachSignUpPage: NextPage = () => (
  <Layout title="Coach Sign Up">
    <CoachSignUpForm />
  </Layout>
)

export default CoachSignUpPage
