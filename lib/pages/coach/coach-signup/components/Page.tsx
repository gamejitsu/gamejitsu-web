import React from "react"
import { Layout } from "gamejitsu/components"
import { CoachSignUpForm } from "."
import { NextPage } from "next"

const CoachSignUpPage: NextPage = () => 
  <Layout title="Coach Sign Up">
    <CoachSignUpForm />
  </Layout>


export default CoachSignUpPage