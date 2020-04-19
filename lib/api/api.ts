import pluralize from "pluralize"
import { NextPageContext } from "next"
import axios, { Method, AxiosResponse } from "axios"
import { parseCookies } from "nookies"
import Resource, { Encode, Decode } from "./resource"
import { Model } from "gamejitsu/interfaces"

type ResponseStatus = 200 | 201 | 204

interface RequestOptions<T, U> {
  params?: Record<string, string>
  ctx?: NextPageContext
  payload?: T
  encode?: Encode<T>
  decode?: Decode<U>
}

export class StatusError extends Error {
  response: AxiosResponse
  expectedStatus: ResponseStatus

  constructor(response: AxiosResponse, expectedStatus: ResponseStatus) {
    super(`Unexpected status: ${status}`)
    this.response = response
    this.expectedStatus = expectedStatus
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export function findModel<T, U>({ decodeOne, name }: Resource<T, U>, id: string, ctx?: NextPageContext) {
  return makeRequest(200, "GET", `/${pluralize(name)}/${id}`, { decode: decodeOne, ctx })
}

export function createModel<T, U>({ encode, decodeOne, name }: Resource<T, U>, model: T, ctx?: NextPageContext) {
  return makeRequest(201, "POST", `/${pluralize(name)}`, { encode, decode: decodeOne, payload: model, ctx })
}

export function updateModel<T extends Model, U>({ encode, decodeOne, name }: Resource<T, U>, model: T, ctx?: NextPageContext) {
  return makeRequest(200, "PUT", `/${pluralize(name)}/${model.id}`, { encode, decode: decodeOne, payload: model, ctx })
}

export function deleteModel<T extends Model, U>({ name }: Resource<T, U>, model: T, ctx?: NextPageContext) {
  return makeRequest(204, "DELETE", `/${pluralize(name)}/${model.id}`, { ctx })
}

export function listModels<T, U>({ decodeMany, name }: Resource<T, U>, ctx?: NextPageContext) {
  return makeRequest(200, "GET", `/${pluralize(name)}`, { decode: decodeMany, ctx })
}

export async function makeRequest<T, U>(
  expectedStatus: ResponseStatus,
  method: Method,
  path: string,
  { params, payload, decode, encode, ctx }: RequestOptions<T, U>
): Promise<U> {
  const url = `${process.env.API_ENDPOINT}${path}`
  const { authToken } = parseCookies(ctx)

  const response = await axios.request({
    method,
    url,
    params,
    headers: {
      ...(authToken ? { Authorization: "Bearer " + authToken } : undefined),
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json"
    },
    data: encode && payload ? encode(payload) : undefined
  })

  const { status, data } = response

  if (status !== expectedStatus) {
    throw new StatusError(response, expectedStatus)
  }

  return decode ? decode(data) : data
}
