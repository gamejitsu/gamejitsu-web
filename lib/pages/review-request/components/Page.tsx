import React from "react"
import axios from "axios"
import get from "lodash.get"
import { DecoratedReplay, decorateReplays } from "gamejitsu/models/replay"
import ReplayResource from "gamejitsu/api/resources/replay"
import { listModels } from "gamejitsu/api"
import { NextPage } from "next"
import { ReviewRequestForm } from "."

interface Props {
  replay: DecoratedReplay
  replayAvailability: [boolean, string]
}

const Page: NextPage<Props> = ({ replay, replayAvailability }) => <ReviewRequestForm key={replay.id} replay={replay} replayAvailability={replayAvailability}  />

Page.getInitialProps = async (ctx) => {
  const urlId = ctx.query.id
  const { data } = await listModels(ReplayResource, ctx)
  const replay = data.find((r) => r.id === urlId.toString())
  if (!replay) {
    throw new Error(`Expected to find reply with id ${urlId}`)
  }
  let replayIsPresent = true
  let replayIsPresentMessage = "Your replay is eligible for a review!"
  /* try {
    const gameInfo = await axios.get(`https://api.opendota.com/api/matches/${replay.matchId}`)
    const replayUrl = get(gameInfo, ["data", "replay_url"], false)
    if (replayUrl) {
      await axios.head(replayUrl)
    }
  } catch(err) 
  {
    const openDotaRegExp = new RegExp('opendota.com')
    const valveaRegExp = new RegExp('valve.net')
  
    if (openDotaRegExp.test(err.config.url)) {
      replayIsPresent = true
      replayIsPresentMessage = "We cannot detect if your replay is ready"
    } else if (valveaRegExp.test(err.config.url) && err.response.status == 404) {
      replayIsPresent = false
      replayIsPresentMessage = "We cannot find your replay, please retry later or try with a different match"
      
    } 
  } */

  return { replay: decorateReplays([replay])[0], replayAvailability: [replayIsPresent, replayIsPresentMessage] }
}

export default Page
