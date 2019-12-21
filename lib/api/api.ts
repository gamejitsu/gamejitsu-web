import axios, { Method } from "axios"
import { serializeModel } from "./model"
import { ModelType } from "../models"
import { ModelOfType } from "../schema"
import { deserializeResponse, ResponseType } from "./response"

interface RequestOptions<T extends ModelType> {
  params?: Record<string, string>
  model?: ModelOfType<T>
}

const findRecord = () => {}

const createRecord = () => {}

const updateRecord = () => {}

const deleteRecord = () => {}

const findAll = () => {}

async function request<T extends ModelType, U extends ResponseType>(
  modelType: T,
  responseType: U,
  method: Method,
  path: string,
  { params, model }: RequestOptions<T> = {}
): DeserializedResponse<T, U> {
  const url = `${process.env.API_ENDPOINT}${path}`
  const response = await axios.request({ method, url, params, data: serializeModel(model) })
  return deserializeResponse(modelType, responseType, response.data)
}

export { findRecord, createRecord, updateRecord, deleteRecord, findAll }
