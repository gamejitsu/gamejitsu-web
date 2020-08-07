import * as t from "io-ts"
import {
  decoder as coachDecoder,
  transformer as coachTransformer,
  Coach
} from "gamejitsu/api/resources/coach"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface User extends Model {
  steamId: string
  isSyncingReplays: boolean
  username: string
  hasPublicProfile: boolean
  coachId: string | null
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("user"),
  attributes: t.type({
    "steam-id": t.string,
    "is-syncing-replays": t.boolean,
    username: t.string,
    "has-public-profile": t.boolean
  }),
  relationships: t.type({
    coach: t.type({
      data: t.union([
        t.type({
          type: t.literal("coach"),
          id: t.string
        }),
        t.null
      ])
    })
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): User => ({
  id: value.id,
  steamId: value.attributes["steam-id"],
  isSyncingReplays: value.attributes["is-syncing-replays"],
  username: value.attributes["username"],
  hasPublicProfile: value.attributes["has-public-profile"],
  coachId: value.relationships["coach"].data ? value.relationships["coach"].data.id : null
})

export default buildResource({
  name: "user",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) =>
      extractValue(
        t
          .strict({
            included: t.union([t.array(coachDecoder), t.undefined])
          })
          .decode(value)
      )
  },
  transform: {
    data: transformer,
    response: (value) => ({
      included: {
        coach: (value.included || []).reduce(
          (a, r) => (r.type === "coach" ? [...a, coachTransformer(r)] : a),
          [] as Coach[]
        )
      }
    })
  },
  encode: (value) => ({
    type: "user",
    attributes: {
      "steam-id": value.steamId,
      "is-syncing-replays": value.isSyncingReplays,
      username: value.username,
      "has-public-profile": value.hasPublicProfile
    },
    relationships: {
      coach: {
        data: {
          id: value.coachId,
          type: "coach"
        }
      }
    }
  })
})
