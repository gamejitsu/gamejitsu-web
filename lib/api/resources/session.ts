import t from "io-ts"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Session extends Model {
  accessToken: string
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("session"),
  attributes: t.type({
    "access-token": t.string
  }),
  relationships: t.type({})
})

export const transformer = (value: t.TypeOf<typeof decoder>): Session => ({
  id: value.id,
  accessToken: value.attributes["access-token"]
})

export default buildResource({
  name: "session",
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
      "access-token": value.accessToken
    },
    relationships: {}
  })
})
