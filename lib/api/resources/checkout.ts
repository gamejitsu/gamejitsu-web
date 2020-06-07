import * as t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Checkout extends Model {
  skillLevel: SkillLevel
  comment: string | null
  redirectUrl: string | null
  stripeId: string
  replayId: string
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("checkout"),
  attributes: t.type({
    "skill-level": SkillLevel,
    comment: t.union([t.string, t.null]),
    "redirect-url": t.union([t.string, t.null]),
    "stripe-id": t.string
  }),
  relationships: t.type({
    replay: t.type({
      data: t.type({
        type: t.literal("replay"),
        id: t.string
      })
    })
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): Checkout => ({
  id: value.id,
  skillLevel: value.attributes["skill-level"],
  comment: value.attributes["comment"],
  redirectUrl: value.attributes["redirect-url"],
  stripeId: value.attributes["stripe-id"],
  replayId: value.relationships["replay"].data.id
})

export default buildResource({
  name: "checkout",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) => extractValue(t.strict({}).decode(value))
  },
  transform: {
    data: transformer,
    response: (value) => value
  },
  encode: (value) => ({
    type: "checkout",
    attributes: {
      "skill-level": skillLevelEncoder(value.skillLevel),
      comment: value.comment,
      "redirect-url": value.redirectUrl,
      "stripe-id": value.stripeId
    },
    relationships: {
      replay: {
        data: {
          id: value.replayId,
          type: "replay"
        }
      }
    }
  })
})
