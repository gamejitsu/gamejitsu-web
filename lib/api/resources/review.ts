import t from "io-ts"
import { Comment, encoder as commentEncoder } from "gamejitsu/api/types/comment"
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
    response: (value: unknown) => extractValue(t.type({}).decode(value))
  },
  transform: {
    data: transformer,
    response: (value) => value
  },
  encode: (value) => ({
    attributes: {
      comments: value.comments.map((v) => commentEncoder(v)),
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
