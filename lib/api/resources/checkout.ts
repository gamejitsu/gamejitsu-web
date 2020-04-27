import * as t from "io-ts"
import { buildResource, extractValue } from "../resource"
import { Model } from "gamejitsu/interfaces"

export interface Checkout extends Model {}

export const decoder = t.type({
  id: t.string,
  type: t.literal("checkout"),
  attributes: t.type({})
})

export const transformer = (value: t.TypeOf<typeof decoder>): Checkout => ({
  id: value.id
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
    attributes: {},
    relationships: {}
  })
})
