import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"
import { SkillLevel } from "./skill-level"
import * as t from "io-ts"

export interface Coach extends Model {
  email: string
  firstName: string
  lastName: string
  photoUrl: string
  skillLevel: SkillLevel
}

export const decoder = (value: unknown) => (
  extractValue(t.type({
    id: t.string,
    attributes: t.type({
      "email": t.string,
      "first-name": t.string,
      "last-name": t.string,
      "photo-url": t.string,
      "skill-level": SkillLevel
    })
  }).decode(value))
)

export const transformer = (value: ReturnType<typeof decoder>): Coach => ({
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
    data: decoder,
    response: (value) => ({})
  },
  transform: {
    data: transformer,
    response: (value: unknown) => ({})
  },
  encode: (value: unknown) => ({})
})
