import axios, { Method } from "axios"
import { serializeModel, ModelType, ModelOfType } from "./model"
import { deserializeResponse, ResponseType } from "./response"

interface RequestOptions<T> {
  params?: Record<string, string>
  model?: T
}

const findRecord = () => {}

const createRecord = () => {}

const updateRecord = () => {}

const deleteRecord = () => {}

const findAll = () => {}

async function request<T extends ModelType, U extends ResponseType>(
  recordType: T,
  responseType: U,
  method: Method,
  path: string,
  { params, model }: RequestOptions<ModelOfType<T>> = {}
) {
  const url = `${process.env.API_ENDPOINT}${path}`
  const response = await axios.request({ method, url, params, data: serializeModel(model) })
  return deserializeResponse(recordType, responseType, response.data)
}

export { findRecord, createRecord, updateRecord, deleteRecord, findAll }
