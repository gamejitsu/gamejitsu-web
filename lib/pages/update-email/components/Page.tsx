import React, { useContext } from "react"

import { UpdateEmailForm } from "."
import { Layout } from "gamejitsu/components"
import { NextPage } from "next"
import { UserContext } from "gamejitsu/contexts"
import { Callout } from "@blueprintjs/core"

const UpdateEmailPage: NextPage = () => {
  const user: any = useContext(UserContext)
  return (
    <Layout title="Coach Sign Up">
      {user.coach?.isApproved ? (
        <Callout title="Coach registration successful" intent="success">
          You can register only once to be a coach.
          <br />
          If you are experiencing issues, send an email to support@gamejitsu.gg
          <br />
          <br />
          You status of approval is: approved.
        </Callout>
      ) : user.coachId ? (
        <Callout title="Coach registration under examination" intent="warning">
          You can register only once to be a coach. We process the applications in 24h.
          <br />
          If your status does not change, send an email to support@gamejitsu.gg
          <br />
          <br />
          You status of approval is: {user.coach.isApproved ? "approved" : "under examination"}.
        </Callout>
      ) : (
        <UpdateEmailForm />
      )}
    </Layout>
  )
}

export default UpdateEmailPage
