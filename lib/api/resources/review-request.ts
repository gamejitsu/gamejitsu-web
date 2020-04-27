import t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface ReviewRequest extends Model {
  skillLevel: SkillLevel
  replayId: string
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("review-request"),
  attributes: t.type({
    "skill-level": SkillLevel
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

export const transformer = (value: t.TypeOf<typeof decoder>): ReviewRequest => ({
  id: value.id,
  skillLevel: value.attributes["skill-level"],
  replayId: value.relationships["replay"].data.id
})

export default buildResource({
  name: "review-request",
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
      "skill-level": skillLevelEncoder(value.skillLevel)
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
