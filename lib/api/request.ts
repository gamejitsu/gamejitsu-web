import * as t from "io-ts"
import axios, { Method } from "axios"
import dasherize from "dasherize"
import { parseCookies } from "nookies"
import { NextPageContext } from "next"
import { ModelC, DeserializedResponse, ResponseType, NonNullableRelationshipsC, RelationshipValue } from "."
import { deserializeResponse } from "./response"
import {
  ModelOfType,
  isAttr,
  isEmbedded,
  isRelationship,
  TypeOfRelationship,
  Relationship,
  Schema,
  RelationshipType
} from "../schema"
import schemas, { ModelType } from "../schemas"

interface RequestOptions<T extends ModelType> {
  params?: Record<string, string>
  model?: Partial<ModelOfType<T>>
  ctx?: NextPageContext
}

type ResponseStatus = 200 | 201 | 204

type RequestResult<T extends ModelType, U extends ResponseType | undefined> = U extends undefined
  ? undefined
  : DeserializedResponse<T, NonNullable<U>>

class StatusError extends Error {
  status: number
  expectedStatus: ResponseStatus

  constructor(status: number, expectedStatus: ResponseStatus) {
    super(`Unexpected status: ${status}`)
    this.status = status
    this.expectedStatus = expectedStatus
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

function serializeAttributes<T extends ModelType>(schema: Schema, model: Partial<ModelOfType<T>>) {
  return (Object.keys(model) as (keyof ModelOfType<T>)[]).reduce((acc, key) => {
    const field = schema[key as string]
    return field && (isAttr(field) || isEmbedded(field)) ? { ...acc, [key]: model[key] } : acc
  }, {} as t.TypeOf<NonNullableRelationshipsC<T>>)
}

function serializeRelationship<T extends RelationshipType>(relationship: Relationship<T>, value: TypeOfRelationship<Relationship<T>>): t.TypeOf<RelationshipValue<Relationship<T>>> {
  return relationship.type === "one"
  ? { id: value as TypeOfRelationship<Relationship<"one">>, type: relationship.modelType } as t.TypeOf<RelationshipValue<Relationship<T>>>
  : (value as TypeOfRelationship<Relationship<"many">>).map((id) => ({
      id,
      type: relationship.modelType
    })) as t.TypeOf<RelationshipValue<Relationship<T>>>
}

function serializeRelationships<T extends ModelType>(
  schema: Schema,
  model: Partial<ModelOfType<T>>
) {
  return (Object.keys(model) as (keyof ModelOfType<T>)[]).reduce((acc, key) => {
    const field = schema[key as string]
    return field && isRelationship(field)
      ? {
          ...acc,
          [key]: serializeRelationship(field, model[key] as t.TypeOf<TypeOfRelationship<Relationship<T>>>)
        }
      : acc
  }, {} as t.TypeOf<NonNullableRelationshipsC<T>>)
}

export function serializeRequest<T extends ModelType>(
  modelType: T,
  model?: Partial<ModelOfType<T>>
) {
  if (!model) {
    return null
  }

  const { id } = model
  const schema = schemas[modelType]

  return JSON.stringify({
    jsonapi: {
      version: "1.0"
    },
    data: dasherize({
      id,
      attributes: serializeAttributes(schema, model),
      relationships: serializeRelationships(schema, model)
    })
  })
}

export async function request<T extends ModelType, U extends ResponseType | undefined>(
  modelType: T,
  responseType: U,
  expectedStatus: ResponseStatus,
  method: Method,
  path: string,
  { params, model, ctx }: RequestOptions<T>
): Promise<RequestResult<T, U>> {
  const url = `${process.env.API_ENDPOINT}${path}`
  const { authToken } = parseCookies(ctx)

  const { status, data } = await axios.request({
    method,
    url,
    params,
    headers: {
      ...(authToken ? { Authorization: "Bearer " + authToken } : undefined),
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json"
    },
    data: serializeRequest(modelType, model)
  })

  if (status !== expectedStatus) {
    throw new StatusError(status, expectedStatus)
  } else if (responseType === undefined) {
    return undefined as RequestResult<T, U>
  } else {
    return deserializeResponse(modelType, responseType as NonNullable<U>, data) as RequestResult<
      T,
      U
    >
  }
}
