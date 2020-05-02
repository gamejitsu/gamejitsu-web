import * as t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Checkout extends Model {
  skillLevel: SkillLevel
  comment: string
  replayId: string
  redirectUrl: string
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("checkout"),
  attributes: t.type({
    "skill-level": SkillLevel,
    comment: t.string,
    "replay-id": t.string,
    "redirect-url": t.string
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): Checkout => ({
  id: value.id,
  skillLevel: value.attributes["skill-level"],
  comment: value.attributes["comment"],
  replayId: value.attributes["replay-id"],
  redirectUrl: value.attributes["redirect-url"]
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
      "replay-id": value.replayId,
      "redirect-url": value.redirectUrl
    },
    relationships: {}
  })
})
