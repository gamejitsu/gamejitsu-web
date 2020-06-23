import * as t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import { decoder as replayDecoder } from "gamejitsu/api/resources/replay"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface ReviewRequest extends Model {
  skillLevel: SkillLevel
  comment: string | null
  replayId: string
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("review-request"),
  attributes: t.type({
    "skill-level": SkillLevel,
    comment: t.union([t.string, t.null])
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
  comment: value.attributes["comment"],
  replayId: value.relationships["replay"].data.id
})

export default buildResource({
  name: "review-request",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) =>
      extractValue(
        t
          .strict({
            included: t.array(replayDecoder)
          })
          .decode(value)
      )
  },
  transform: {
    data: transformer,
    response: (value) => ({
      included: {
        replay: value.included.filter((r) => r.type === "replay")
      }
    })
  },
  encode: (value) => ({
    type: "review-request",
    attributes: {
      "skill-level": skillLevelEncoder(value.skillLevel),
      comment: value.comment
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
