import { either } from "fp-ts/lib/Either"
import * as t from "io-ts"

export interface Metadata {
  mmr: number
  isParty: boolean
}

const decoder = t.type({
  mmr: t.number,
  is_party: t.boolean
})

export const encoder = (value: Metadata) => ({
  mmr: value.mmr,
  is_party: value.isParty
})

export const Metadata = new t.Type(
  decoder.name,
  (decoder.is as unknown) as t.Is<Metadata>,
  (u, c) =>
    either.chain(decoder.validate(u, c), (decoded) =>
      t.success({
        mmr: decoded["mmr"],
        isParty: decoded["is_party"]
      })
    ),
  String
)
