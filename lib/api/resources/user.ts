import * as t from "io-ts"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface User extends Model {
  steamId: string
  isSyncingReplays: boolean
  username: string
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("user"),
  attributes: t.type({
    "steam-id": t.string,
    "is-syncing-replays": t.boolean,
    username: t.string
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): User => ({
  id: value.id,
  steamId: value.attributes["steam-id"],
  isSyncingReplays: value.attributes["is-syncing-replays"],
  username: value.attributes["username"]
})

export default buildResource({
  name: "user",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) => extractValue(t.type({}).decode(value))
  },
  transform: {
    data: transformer,
    response: (value) => value
  },
  encode: (value) => ({
    type: "user",
    attributes: {
      "steam-id": value.steamId,
      "is-syncing-replays": value.isSyncingReplays,
      username: value.username
    },
    relationships: {}
  })
})
