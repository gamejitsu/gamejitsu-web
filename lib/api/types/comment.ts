import { either } from "fp-ts/lib/Either"
import * as t from "io-ts"

export interface Comment {
  text: string
  timestamp: number
}

const decoder = t.type({
  text: t.string,
  timestamp: t.number
})

export const encoder = (value: Comment) => ({
  text: value.text,
  timestamp: value.timestamp
})

export const Comment = new t.Type(
  decoder.name,
  (decoder.is as unknown) as t.Is<Comment>,
  (u, c) =>
    either.chain(decoder.validate(u, c), (decoded) =>
      t.success({
        text: decoded["text"],
        timestamp: decoded["timestamp"]
      })
    ),
  String
)
