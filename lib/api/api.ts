import pluralize from "pluralize"
import { request } from "./request"
import { ModelType } from "../schemas"
import { ModelOfType } from "../schema"

export function findModel<T extends ModelType>(modelType: T, id: string) {
  return request(modelType, "one", 200, "GET", `/${pluralize(modelType)}/${id}`)
}

export function createModel<T extends ModelType>(model: ModelOfType<T>) {
  return request(model.type, "one", 201, "POST", `/${pluralize(model.type)}`, { model })
}

export function updateModel<T extends ModelType>(model: ModelOfType<T>) {
  return request(model.type, "one", 200, "PUT", `/${pluralize(model.type)}/${model.id}`, { model })
}

export function deleteModel<T extends ModelType>(model: ModelOfType<T>) {
  return request(model.type, undefined, 204, "DELETE", `/${pluralize(model.type)}/${model.id}`)
}

export function listModels<T extends ModelType>(modelType: T) {
  return request(modelType, "many", 200, "GET", `/${pluralize(modelType)}`)
}
