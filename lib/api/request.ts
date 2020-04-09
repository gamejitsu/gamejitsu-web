import * as t from "io-ts"
import axios, { Method } from "axios"
import dasherize from "dasherize"
import schemas, { ModelType } from "../schemas"

import { deserializeResponse, Model, ModelRelationship } from "./response"
import { isAttr, isEmbedded, isRelationship, Relationship, Schema } from "../schema"
import { NextPageContext } from "next"
import { parseCookies } from "nookies"
import {
  AttributesC,
  DeserializedResponse,
  NonNullableRelationshipsC,
  ResponseType
} from "./response"

interface RequestOptions<T extends ModelType> {
  params?: Record<string, string>
  model?: Partial<Model<T>> | Model<T>
  ctx?: NextPageContext
}

type RequestResult<T extends ModelType, U extends ResponseType | undefined> = U extends undefined
  ? undefined
  : DeserializedResponse<T, NonNullable<U>>

type ResponseStatus = 200 | 201 | 204

export class StatusError extends Error {
  status: number
  expectedStatus: ResponseStatus

  constructor(status: number, expectedStatus: ResponseStatus) {
    super(`Unexpected status: ${status}`)
    this.status = status
    this.expectedStatus = expectedStatus
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

function isManyRelationship(
  relationship: ModelRelationship
): relationship is ModelRelationship<"many"> {
  return Array.isArray(relationship)
}

function serializeAttributes(schema: Schema, model: Partial<Model>) {
  return (Object.keys(model) as (keyof typeof model)[]).reduce((acc, key) => {
    const field = schema[key as string]
    return field && (isAttr(field) || isEmbedded(field)) ? { ...acc, [key]: model[key] } : acc
  }, {} as t.TypeOf<AttributesC<ModelType>>)
}

function serializeRelationship(relationship: Relationship, value: ModelRelationship) {
  return {
    data: isManyRelationship(value)
      ? value.map((id) => ({ id, type: relationship.modelType }))
      : { id: value, type: relationship.modelType }
  }
}

function serializeRelationships(schema: Schema, model: Partial<Model>) {
  return (Object.keys(model) as (keyof typeof model)[]).reduce((acc, key) => {
    const field = schema[key as string]
    return field && isRelationship(field)
      ? { ...acc, [key]: serializeRelationship(field, model[key]) }
      : acc
  }, {} as t.TypeOf<NonNullableRelationshipsC>)
}

export function serializeRequest(modelType: ModelType, model?: Partial<Model>) {
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
