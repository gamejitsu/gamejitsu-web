import * as t from "io-ts"
import { SkillLevel, encoder as skillLevelEncoder } from "gamejitsu/api/types/skill-level"
import { Metadata, encoder as metadataEncoder } from "gamejitsu/api/types/metadata"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Checkout extends Model {
  skillLevel: SkillLevel
  comment: string | null
  redirectUrl: string | null
  stripeId: string
  email: string | null
  metadata: Metadata
  replayId: string | null
  reviewRequestId: string | null
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("checkout"),
  attributes: t.type({
    "skill-level": SkillLevel,
    comment: t.union([t.string, t.null]),
    "redirect-url": t.union([t.string, t.null]),
    "stripe-id": t.string,
    email: t.union([t.string, t.null]),
    metadata: Metadata
  }),
  relationships: t.type({
    replay: t.type({
      data: t.union([
        t.type({
          type: t.literal("replay"),
          id: t.string
        }),
        t.null
      ])
    }),
    "review-request": t.type({
      data: t.union([
        t.type({
          type: t.literal("review-request"),
          id: t.string
        }),
        t.null
      ])
    })
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): Checkout => ({
  id: value.id,
  skillLevel: value.attributes["skill-level"],
  comment: value.attributes["comment"],
  redirectUrl: value.attributes["redirect-url"],
  stripeId: value.attributes["stripe-id"],
  email: value.attributes["email"],
  metadata: value.attributes["metadata"],
  replayId: value.relationships["replay"].data ? value.relationships["replay"].data.id : null,
  reviewRequestId: value.relationships["review-request"].data
    ? value.relationships["review-request"].data.id
    : null
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
      "stripe-id": value.stripeId,
      email: value.email,
      metadata: value.metadata ? metadataEncoder(value.metadata) : "{}"
    },
    relationships: {
      replay: {
        data: {
          id: value.replayId,
          type: "replay"
        }
      },
      "review-request": {
        data: {
          id: value.reviewRequestId,
          type: "review-request"
        }
      }
    }
  })
})
