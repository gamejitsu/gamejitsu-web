import axios, { Method } from "axios"
import pluralize from "pluralize"
import { ResponseType } from "."
import { serializeRequest } from "./request"
import { ModelType } from "../schemas"
import { ModelOfType } from "../schema"
import { deserializeResponse } from "./response"

interface RequestOptions<T extends ModelType> {
  params?: Record<string, string>
  model?: ModelOfType<T>
}

export function findRecord<T extends ModelType>(modelType: T, id: string) {
  return request(modelType, "one", "GET", `/${pluralize(modelType)}/${id}`)
}

export function createRecord<T extends ModelType>(model: ModelOfType<T>) {
  return request(model.type, "one", "POST", `/${pluralize(model.type)}`, { model })
}

export function updateRecord<T extends ModelType>(model: ModelOfType<T>) {
  return request(model.type, "one", "PUT", `/${pluralize(model.type)}/${model.id}`, { model })
}

export function deleteRecord<T extends ModelType>(model: ModelOfType<T>) {
  return request(model.type, "one", "DELETE", `/${pluralize(model.type)}/${model.id}`)
}

export function findAll<T extends ModelType>(modelType: T) {
  return request(modelType, "many", "GET", `/${pluralize(modelType)}`)
}

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
