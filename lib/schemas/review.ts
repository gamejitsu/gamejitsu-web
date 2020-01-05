import * as t from "io-ts"
import { schema, embedsMany } from "../schema"

export const Comment = t.type({
  text: t.string
})

export default schema({
  comments: embedsMany(Comment)
})
