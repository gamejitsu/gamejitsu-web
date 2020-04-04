import React from "react"
import Router from "next/router"

import { DeserializedReplay, deserializeReplays } from "gamejitsu/models/replay"
import { listModels } from "gamejitsu/api"
import { NextPage } from "next"
import { ReviewRequestForm } from "."

interface Props {
  replay: DeserializedReplay
}

const Page: NextPage<Props> = ({ replay }) => <ReviewRequestForm replay={replay} />

Page.getInitialProps = async (ctx) => {
  const urlId = ctx.query.id
  const { data } = await listModels("replay", ctx)
  const replay = data.find((r) => r.id === urlId.toString())
  if (!replay) {
    throw new Error(`Expected to find reply with id ${urlId}`)
  }
  return { replay: deserializeReplays([replay])[0] }
  // TODO maybe remove?
  Router.push("/dashboard")
}

export default Page
