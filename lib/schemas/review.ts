import * as t from "io-ts"
import { schema, embedsMany, hasOne } from "../schema"

export const Comment = t.type({
  text: t.string,
  timestamp: t.number
})

export default schema({
  comments: embedsMany(Comment),
  coach: hasOne("coach"),
  request: hasOne("review-request")
})
