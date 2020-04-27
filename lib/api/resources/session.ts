import * as t from "io-ts"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Session extends Model {
  accessToken: string
  openidParams: string | null
}

export const decoder = t.type({
  id: t.string,
  type: t.literal("session"),
  attributes: t.type({
    "access-token": t.string,
    "openid-params": t.union([t.string, t.null])
  })
})

export const transformer = (value: t.TypeOf<typeof decoder>): Session => ({
  id: value.id,
  accessToken: value.attributes["access-token"],
  openidParams: value.attributes["openid-params"]
})

export default buildResource({
  name: "session",
  decode: {
    data: (value: unknown) => extractValue(decoder.decode(value)),
    response: (value: unknown) => extractValue(t.strict({}).decode(value))
  },
  transform: {
    data: transformer,
    response: (value) => value
  },
  encode: (value) => ({
    type: "session",
    attributes: {
      "access-token": value.accessToken,
      "openid-params": value.openidParams
    },
    relationships: {}
  })
})
