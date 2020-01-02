import axios, { Method } from "axios"
import { ResponseType } from "."
import { serializeRequest } from "./request"
import { ModelType } from "../schemas"
import { ModelOfType } from "../schema"
import { deserializeResponse } from "./response"

interface RequestOptions<T extends ModelType> {
  params?: Record<string, string>
  model?: ModelOfType<T>
}

export function findRecord() {}

export function createRecord() {}

export function updateRecord() {}

export function deleteRecord() {}

export function findAll() {}

async function request<T extends ModelType, U extends ResponseType>(
  modelType: T,
  responseType: U,
  method: Method,
  path: string,
  { params, model }: RequestOptions<T> = {}
) {
  const url = `${process.env.API_ENDPOINT}${path}`
  const response = await axios.request({ method, url, params, data: serializeRequest(model) })
  return deserializeResponse(modelType, responseType, response.data)
}
