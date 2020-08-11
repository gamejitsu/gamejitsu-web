import * as t from "io-ts"
import { Comment, encoder as commentEncoder } from "gamejitsu/api/types/comment"
import {
  decoder as reviewRequestDecoder,
  transformer as reviewRequestTransformer,
  ReviewRequest
} from "gamejitsu/api/resources/review-request"
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
  Coach,
  decoder as coachDecoder,
  transformer as coachTransformer,
  Coach
} from "gamejitsu/api/resources/coach"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Review extends Model {
  comments: Comment[]
  isPublished: boolean
  requestId: string
  coachId: string
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("review"),
  attributes: t.type({
    comments: t.array(Comment),
    "is-published": t.boolean
  }),
  relationships: t.type({
    request: t.type({
      data: t.type({
        type: t.literal("review-request"),
        id: t.string
      })
    }),
    coach: t.type({
      data: t.type({
        type: t.literal("coach"),
        id: t.string
      })
    })
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): Review => ({
  id: value.id,
  comments: value.attributes["comments"],
  isPublished: value.attributes["is-published"],
  requestId: value.relationships["request"].data.id,
  coachId: value.relationships["coach"].data.id
})

export default buildResource({
  name: "review",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) =>
      extractValue(
        t
          .strict({
            included: t.union([
              t.array(
                t.union([
                  reviewRequestDecoder,
                  replayDecoder,
                  userDecoder,
                  coachDecoder,
                  coachDecoder
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
        "review-request": (value.included || []).reduce(
          (a, r) => (r.type === "review-request" ? [...a, reviewRequestTransformer(r)] : a),
          [] as ReviewRequest[]
        ),

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

        coach: (value.included || []).reduce(
          (a, r) => (r.type === "coach" ? [...a, coachTransformer(r)] : a),
          [] as Coach[]
        )
      }
    })
  },
  encode: (value) => ({
    type: "review",
    attributes: {
      comments: (value.comments || []).map((v) => commentEncoder(v)),
      "is-published": value.isPublished
    },
    relationships: {
      request: {
        data: {
          id: value.requestId,
          type: "review-request"
        }
      },
      coach: {
        data: {
          id: value.coachId,
          type: "coach"
        }
      }
    }
  })
})
