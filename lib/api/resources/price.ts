import * as t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Price extends Model {
  skillLevel: SkillLevel
  amount: number
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("price"),
  attributes: t.type({
    "skill-level": SkillLevel,
    amount: t.number
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): Price => ({
  id: value.id,
  skillLevel: value.attributes["skill-level"],
  amount: value.attributes["amount"]
})

export default buildResource({
  name: "price",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) => extractValue(t.strict({}).decode(value))
  },
  transform: {
    data: transformer,
    response: (value) => value
  },
  encode: (value) => ({
    type: "price",
    attributes: {
      "skill-level": skillLevelEncoder(value.skillLevel),
      amount: value.amount
    },
    relationships: {}
  })
})
