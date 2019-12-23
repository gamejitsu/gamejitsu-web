import axios, { Method } from "axios"
import { serializeModel } from "./model"
import { ModelType } from "../models"
import { ModelOfType } from "../schema"
import { deserializeResponse } from "./response"

export type ResponseType = "one" | "many"

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
  const response = await axios.request({ method, url, params, data: serializeModel(model) })
  return deserializeResponse(modelType, responseType, response.data)
}
