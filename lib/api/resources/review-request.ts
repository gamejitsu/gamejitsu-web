import * as t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import { Metadata, encoder as metadataEncoder } from "gamejitsu/api/types/metadata"
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
import {
  decoder as reviewDecoder,
  transformer as reviewTransformer,
  Review
} from "gamejitsu/api/resources/review"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface ReviewRequest extends Model {
  skillLevel: SkillLevel
  comment: string | null
  metadata: Metadata
  replayId: string
  userId: string
  reviewsIds: string[]
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("review-request"),
  attributes: t.type({
    "skill-level": SkillLevel,
    comment: t.union([t.string, t.null]),
    metadata: Metadata
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
    }),
    reviews: t.type({
      data: t.array(
        t.type({
          type: t.literal("review"),
          id: t.string
        })
      )
    })
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): ReviewRequest => ({
  id: value.id,
  skillLevel: value.attributes["skill-level"],
  comment: value.attributes["comment"],
  metadata: value.attributes["metadata"],
  replayId: value.relationships["replay"].data.id,
  userId: value.relationships["user"].data.id,
  reviewsIds: value.relationships["reviews"].data.map((r) => r.id)
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
              t.array(
                t.union([
                  replayDecoder,
                  userDecoder,
                  coachDecoder,
                  reviewDecoder,
                  decoder
                ])
              ),
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
        ),

        review: (value.included || []).reduce(
          (a, r) => (r.type === "review" ? [...a, reviewTransformer(r)] : a),
          [] as Review[]
        ),

        "review-request": (value.included || []).reduce(
          (a, r) => (r.type === "review-request" ? [...a, transformer(r)] : a),
          [] as ReviewRequest[]
        )
      }
    })
  },
  encode: (value) => ({
    type: "review-request",
    attributes: {
      "skill-level": skillLevelEncoder(value.skillLevel),
      comment: value.comment,
      metadata: value.metadata ? metadataEncoder(value.metadata) : "{}"
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
      },
      reviews: (value.reviewsIds || []).map((id) => ({
        data: {
          id,
          type: "review"
        }
      }))
    }
  })
})
