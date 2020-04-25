import * as t from "io-ts"
import { isLeft, Either } from "fp-ts/lib/Either"

export type Decode<T> = (value: unknown) => T
export type Encode<T> = (value: T) => any
type Transform<T, U> = (value: T) => U
type DecodeOptions<D, R> = Options<Decode<D>, Decode<R>>
type TransformOptions<D, R, TD, TR> = Options<Transform<D, TD>, Transform<R, TR>>

interface Options<D, R> {
  data: D
  response: R
}

interface BuildResourceOptions<D, R, TD, TR> {
  name: string
  decode: DecodeOptions<D, R>
  transform: TransformOptions<D, R, TD, TR>
  encode: Encode<TD>
}

export default interface Resource<D, R> {
  name: string
  decodeOne: Decode<{ data: D } & R>
  decodeMany: Decode<{ data: D[] } & R>
  encoder: Encode<D>
}

export class DecodingError extends Error {
  errors: t.Errors

  constructor(errors: t.Errors) {
    super(`Decoding failed: ${reportErrors(errors)}`)
    this.errors = errors
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export function buildResource<D, R, TD, TR>({
  name,
  decode,
  transform,
  encode
}: BuildResourceOptions<D, R, TD, TR>) {
  const resource: Resource<TD, TR> = {
    name,
    decodeOne: buildDecode(decode, transform),
    decodeMany: buildDecode(
      {
        ...decode,
        data: (value) => extractValue(t.array(t.any).decode(value)).map((v) => decode.data(v))
      },
      { ...transform, data: (value) => value.map((v) => transform.data(v)) }
    ),
    encoder: buildEncode(encode)
  }

  return resource
}

export function extractValue<T>(value: Either<t.Errors, T>) {
  if (isLeft(value)) {
    throw new DecodingError(value.left)
  }
  return value.right
}

function buildEncode<T>(encode: Encode<T>) {
  return (value: T) => ({
    jsonapi: { version: "1.0" },
    data: { ...encode(value) }
  })
}

function buildDecode<D, R, TD, TR>(
  decoder: DecodeOptions<D, R>,
  transformer: TransformOptions<D, R, TD, TR>
) {
  return (value: unknown) => {
    const decodedValue = extractValue(
      t
        .type({
          jsonapi: t.type({
            version: t.literal("1.0")
          }),
          data: t.any
        })
        .decode(value)
    )

    const { data } = decodedValue
    const decodedResponse = decoder.response(value)
    const decodedData = decoder.data(data)
    return { data: transformer.data(decodedData), ...transformer.response(decodedResponse) }
  }
}

function reportErrors(errors: t.Errors) {
  return errors.map((error) => error.context.map(({ key }) => key).join(".")).join(", ")
}
