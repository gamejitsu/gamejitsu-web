import * as t from "io-ts"
import { isRight } from "fp-ts/lib/Either"

export type Decode<T> = (value: unknown) => T
export type Encode<T> = (value: T) => any
type Transform<T, U> = (value: T) => U
type Decoder<D, I> = Response<t.Type<D>, t.Type<I>>
type Transformer<D, I, TD, TI> = Response<Transform<D, TD>, Transform<I, TI>>

interface Response<D, I> {
  data: D
  included: I
}

interface BuildResourceOptions<D, I, TD, TI> {
  name: string
  decoder: Decoder<D, I>
  transformer: Transformer<D, I, TD, TI>
  encode: Encode<TD>
}

export default interface Resource<D, I> {
  name: string;
  decodeOne: Decode<D>, 
  decodeMany: Decode<Response<D[], I>>
  encode: Encode<D>
}

export class DecodingError extends Error {
  errors: t.Errors

  constructor(errors: t.Errors) {
    super(`Decoding failed: ${reportErrors(errors)}`)
    this.errors = errors
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
 
export function buildResource<D, I, TD, TI>({ name, decoder, transformer, encode }: BuildResourceOptions<D, I, TD, TI>) {
  return {
    name,
    decodeOne: buildDecode(decoder, transformer),
    decodeMany: buildDecode(
      { ...decoder, data: t.array(decoder.data) },
      { ...transformer, data: (value) => value.map((v) => transformer.data(v)) }
    ),
    encode: buildEncode(name, encode)
  }
}

function buildEncode<T>(name: string, encode: Encode<T>) {
  return (value: T) => ({
    jsonapi: { version: "1.0" },
    ...encode(value)
  })
}

function buildDecode<D, I, TD, TI>(decoder: Decoder<D, I>, transformer: Transformer<D, I, TD, TI>) {
  return (value: unknown) => {
    const decodedValue = t.type({
      jsonapi: t.type({
        version: t.literal("1.0")
      }),
      data: decoder.data,
      included: decoder.included
    }).decode(value)

    if (isRight(decodedValue)) {
      const { data, included } = decodedValue.right
      return { data: transformer.data(data), included: transformer.included(included) }
    } else {
      throw new DecodingError(decodedValue.left)
    }
  }
}

function reportErrors(errors: t.Errors) {
  return errors.map((error) => error.context.map(({ key }) => key).join(".")).join(", ")
}
