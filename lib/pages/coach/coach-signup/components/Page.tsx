import React, { useContext } from "react"

import { CoachSignUpForm } from "."
import { Layout } from "gamejitsu/components"
import { NextPage } from "next"
import { UserContext } from "gamejitsu/contexts"
import { Callout } from "@blueprintjs/core"

const CoachSignUpPage: NextPage = () => {
  const user: any = useContext(UserContext)
  return (
    <Layout title="Coach Sign Up">
      {user.coachId ? (
        <Callout title="Coach registration under examination" intent="warning">
          You can register only once to be a coach. We process the applications in 24h.
          <br />
          If your status does not change, send an email to support@gamejitsu.gg
          <br />
          <br />
          You status of approval is: {user.coach.isApproved ? "approved" : "under examination"}.
        </Callout>
      ) : (
        <CoachSignUpForm />
      )}
    </Layout>
  )
}

export default CoachSignUpPage
