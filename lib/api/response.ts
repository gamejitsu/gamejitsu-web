import * as t from "io-ts"
import { isRight, Either } from "fp-ts/lib/Either"
import { Model, ModelAttributes, ModelRegistry, ModelType, ModelOfType } from "./model"

export type ResponseType = "one" | "many"

interface DeserializedResponse<T extends ModelType, U extends ResponseType> {
  data: U extends "one" ? ModelOfType<T> : (ModelOfType<T> | undefined)[]
  included: {
    [K in ModelType]: (ModelOfType<K> | undefined)[]
  }
}

interface Response<T extends ModelType, U extends ResponseType> {
  jsonapi: {
    version: "1.0"
  }
  data: ResponseData<T, U>
  included: Model[]
}

type ResponseData<T extends ModelType, U extends ResponseType> = U extends "one"
  ? ResponseRecord<T>
  : ResponseRecord<T>[]

interface ResponseRecord<T extends ModelType> {
  id: string
  type: T
  attributes: ModelAttributes[T]
}

class DeserializationError extends Error {
  errors: t.Errors

  constructor(errors: t.Errors) {
    super(`Deserialization failed: ${errors}`)
    this.errors = errors
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

const ResponseRecord = (modelType: ModelType) =>
  t.type({
    id: t.string,
    type: t.literal(modelType),
    attributes: ModelRegistry.props[modelType]
  })

const Response = (modelType: ModelType, responseType: ResponseType) =>
  t.type({
    jsonapi: t.type({
      version: t.literal("1.0")
    }),

    data: responseType === "one" ? ResponseRecord(modelType) : t.array(ResponseRecord(modelType)),

    included: t.array(Model)
  })

const extractRecord = <T extends ModelType>(record: ResponseRecord<T>) => {
  const model: ModelOfType<T> = {
    id: record.id,
    ...record.attributes
  }

  return model
}

const extractData = <T extends ModelType, U extends ResponseType>(
  responseType: U,
  data: ResponseData<T, U>
) => {
  if (responseType === "one") {
    return extractRecord(data as ResponseData<T, "one">)
  } else {
    return (data as ResponseData<T, "many">).map((r) => extractRecord(r))
  }
}

const extractResponse = <T extends ModelType, U extends ResponseType>(
  responseType: U,
  { data, included }: Response<T, U>
) => {
  const deserializedResponse = {
    data: extractData(responseType, data),
    included: included.reduce((acc, record) => ({
      ...acc,
      [record.type]: [...acc[record.type], record]
    }))
  }

  return deserializedResponse
}

export function deserializeResponse<T extends ModelType, U extends ResponseType>(
  modelType: T,
  responseType: U,
  data: any
): DeserializedResponse<T, U>

export function deserializeResponse<T extends ModelType, U extends ResponseType>(
  modelType: T,
  responseType: U,
  data: any
) {
  const response: Either<t.Errors, Response<T, U>> = Response(modelType, responseType).decode(
    data
  ) as Either<t.Errors, Response<T, U>>

  if (isRight(response)) {
    return extractResponse(responseType, response.right)
  } else {
    throw new DeserializationError(response.left)
  }
}
