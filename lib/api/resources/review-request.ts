import * as t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import {
  decoder as replayDecoder,
  transformer as replayTransformer,
  Replay
} from "gamejitsu/api/resources/replay"
import {
  decoder as userDecoder,
  transformer as userTransformer,
  User
} from "gamejitsu/api/resources/user"
import {
  decoder as coachDecoder,
  transformer as coachTransformer,
  Coach
} from "gamejitsu/api/resources/coach"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface ReviewRequest extends Model {
  skillLevel: SkillLevel
  comment: string | null
  replayId: string
  userId: string
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
    }),
    user: t.type({
      data: t.type({
        type: t.literal("user"),
        id: t.string
      })
    })
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): ReviewRequest => ({
  id: value.id,
  skillLevel: value.attributes["skill-level"],
  comment: value.attributes["comment"],
  replayId: value.relationships["replay"].data.id,
  userId: value.relationships["user"].data.id
})

export default buildResource({
  name: "review-request",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) =>
      extractValue(
        t
          .strict({
            included: t.union([
              t.array(t.union([replayDecoder, userDecoder, coachDecoder])),
              t.undefined
            ])
          })
          .decode(value)
      )
  },
  transform: {
    data: transformer,
    response: (value) => ({
      included: {
        replay: (value.included || []).reduce(
          (a, r) => (r.type === "replay" ? [...a, replayTransformer(r)] : a),
          [] as Replay[]
        ),

        user: (value.included || []).reduce(
          (a, r) => (r.type === "user" ? [...a, userTransformer(r)] : a),
          [] as User[]
        ),

        coach: (value.included || []).reduce(
          (a, r) => (r.type === "coach" ? [...a, coachTransformer(r)] : a),
          [] as Coach[]
        )
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
      },
      user: {
        data: {
          id: value.userId,
          type: "user"
        }
      }
    }
  })
})
