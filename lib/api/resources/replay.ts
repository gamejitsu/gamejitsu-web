import * as t from "io-ts"
import { DateFromISOString } from "io-ts-types/lib/DateFromISOString"
import { Player, encoder as playerEncoder } from "gamejitsu/api/types/player"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Replay extends Model {
  matchId: string
  playedAt: Date
  players: Player[]
  duration: number
  isRadiantWin: boolean
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("replay"),
  attributes: t.type({
    "match-id": t.string,
    "played-at": DateFromISOString,
    players: t.array(Player),
    duration: t.number,
    "is-radiant-win": t.boolean
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): Replay => ({
  id: value.id,
  matchId: value.attributes["match-id"],
  playedAt: value.attributes["played-at"],
  players: value.attributes["players"],
  duration: value.attributes["duration"],
  isRadiantWin: value.attributes["is-radiant-win"]
})

export default buildResource({
  name: "replay",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) => extractValue(t.strict({}).decode(value))
  },
  transform: {
    data: transformer,
    response: (value) => value
  },
  encode: (value) => ({
    type: "replay",
    attributes: {
      "match-id": value.matchId,
      "played-at": value.playedAt,
      players: (value.players || []).map((v) => playerEncoder(v)),
      duration: value.duration,
      "is-radiant-win": value.isRadiantWin
    },
    relationships: {}
  })
})
