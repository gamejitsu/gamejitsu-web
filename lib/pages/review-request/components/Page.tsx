import React from "react"
import Router from "next/router"

import { DecoratedReplay, decorateReplays } from "gamejitsu/models/replay"
import ReplayResource from "gamejitsu/api/resources/replay"
import { listModels } from "gamejitsu/api"
import { NextPage } from "next"
import { ReviewRequestForm } from "."

interface Props {
  replay: DecoratedReplay
}

const Page: NextPage<Props> = ({ replay }) => <ReviewRequestForm replay={replay} />

Page.getInitialProps = async (ctx) => {
  const urlId = ctx.query.id
  const { data } = await listModels(ReplayResource, ctx)
  const replay = data.find((r) => r.id === urlId.toString())
  if (!replay) {
    throw new Error(`Expected to find reply with id ${urlId}`)
  }
  return { replay: decorateReplays([replay])[0] }
}

export default Page
