import pluralize from "pluralize"
import { NextPageContext } from "next"
import { request } from "./request"
import { ModelType } from "../schemas"
import { Model } from "../schema"

export function findModel<T extends ModelType>(modelType: T, id: string, ctx?: NextPageContext) {
  return request(modelType, "one", 200, "GET", `/${pluralize(modelType)}/${id}`, { ctx })
}

export function createModel<T extends ModelType>(
  modelType: T,
  model: Partial<Model<T>>,
  ctx?: NextPageContext
) {
  return request(modelType, "one", 201, "POST", `/${pluralize(modelType)}`, { model, ctx })
}

export function updateModel<T extends ModelType>(model: Model<T>, ctx?: NextPageContext) {
  return request(model.type, "one", 200, "PUT", `/${pluralize(model.type)}/${model.id}`, {
    model: model as Partial<Model<T>>,
    ctx
  })
}

export function deleteModel<T extends ModelType>(model: Model<T>, ctx?: NextPageContext) {
  return request(model.type, undefined, 204, "DELETE", `/${pluralize(model.type)}/${model.id}`, {
    ctx
  })
}

export function listModels<T extends ModelType>(modelType: T, ctx?: NextPageContext) {
  return request(modelType, "many", 200, "GET", `/${pluralize(modelType)}`, { ctx })
}
