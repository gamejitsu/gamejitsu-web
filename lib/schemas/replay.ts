import * as t from "io-ts"
import { schema, attr, embedsMany } from "../schema"

export const Player = t.type({
  steamId: t.union([t.string, t.null]),
  heroName: t.string,
  heroPortraitUrl: t.string
})

export default schema({
  matchId: attr("string"),
  playedAt: attr("date"),
  players: embedsMany(Player)
})
