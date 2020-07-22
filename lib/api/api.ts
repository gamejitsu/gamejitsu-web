import pluralize from "pluralize"
import { NextPageContext } from "next"
import axios, { Method } from "axios"
import { parseCookies } from "nookies"
import Resource, { Encode, Decode } from "./resource"
import { ServerErrors } from "./errors"
import { Model } from "gamejitsu/interfaces"

interface RequestOptions<T, U> {
  params?: Record<string, string>
  ctx?: NextPageContext
  payload?: T
  encode?: Encode<T>
  decode?: Decode<U>
}

export function findModel<T, U>(
  { decodeOne, name }: Resource<T, U>,
  id: string,
  ctx?: NextPageContext
) {
  return makeRequest(200, "GET", `/${pluralize(name)}/${id}`, { decode: decodeOne, ctx })
}

export function createModel<T, U>(
  { encoder, decodeOne, name }: Resource<T, U>,
  model: Partial<T>,
  ctx?: NextPageContext,
  options?: any
) {
  return makeRequest(201, "POST", `/${pluralize(name)}`, {
    encode: encoder,
    decode: decodeOne,
    payload: model,
    ctx,
    ...options
  })
}

export function updateModel<T extends Model, U>(
  { encoder, decodeOne, name }: Resource<T, U>,
  model: T,
  ctx?: NextPageContext
) {
  return makeRequest(200, "PUT", `/${pluralize(name)}/${model.id}`, {
    encode: encoder,
    decode: decodeOne,
    payload: model,
    ctx
  })
}

export function deleteModel<T extends Model, U>(
  { name }: Resource<T, U>,
  model: T,
  ctx?: NextPageContext
) {
  return makeRequest(204, "DELETE", `/${pluralize(name)}/${model.id}`, { ctx })
}

export function listModels<T, U>({ decodeMany, name }: Resource<T, U>, ctx?: NextPageContext) {
  return makeRequest(200, "GET", `/${pluralize(name)}`, { decode: decodeMany, ctx })
}

export async function makeRequest<T, U>(
  expectedStatus: number,
  method: Method,
  path: string,
  { params, payload, decode, encode, ctx }: RequestOptions<T, U>
): Promise<U> {
  const url = `${process.env.API_ENDPOINT}${path}`
  const { authToken } = parseCookies(ctx)
  let response

  try {
    response = await axios.request({
      method,
      url,
      params,
      headers: {
        ...(authToken ? { Authorization: "Bearer " + authToken } : undefined),
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json"
      },
      data: encode && payload ? encode(payload) : undefined,
      validateStatus: (status) => status === expectedStatus
    })
  } catch (error) {
    if (error.response) {
      if (error.response.status >= 200 && error.response.status < 300) {
        throw new Error(`Unexpected status: ${error.response.status}`)
      }

      throw new ServerErrors(error.response)
    }

    if (error.request) {
      throw new Error(`No response for request: ${url}`)
    }

    throw error
  }

  return decode ? decode(response.data) : response.data
}
