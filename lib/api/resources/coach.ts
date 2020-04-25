import t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Coach extends Model {
  email: string
  firstName: string
  lastName: string
  photoUrl: string
  skillLevel: SkillLevel
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("coach"),
  attributes: t.type({
    email: t.string,
    "first-name": t.string,
    "last-name": t.string,
    "photo-url": t.string,
    "skill-level": SkillLevel
  }),
  relationships: t.type({})
})

export const transformer = (value: t.TypeOf<typeof decoder>): Coach => ({
  id: value.id,
  email: value.attributes["email"],
  firstName: value.attributes["first-name"],
  lastName: value.attributes["last-name"],
  photoUrl: value.attributes["photo-url"],
  skillLevel: value.attributes["skill-level"]
})

export default buildResource({
  name: "coach",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) => extractValue(t.type({}).decode(value))
  },
  transform: {
    data: transformer,
    response: (value) => value
  },
  encode: (value) => ({
    attributes: {
      email: value.email,
      "first-name": value.firstName,
      "last-name": value.lastName,
      "photo-url": value.photoUrl,
      "skill-level": skillLevelEncoder(value.skillLevel)
    },
    relationships: {}
  })
})
