import * as t from "io-ts"
import dasherize from "dasherize"
import models from "../models"

interface BaseModel {
  id: string
}

export type ModelAttributes = t.TypeOf<typeof ModelRegistry>
export type ModelType = keyof ModelAttributes
export type ModelOfType<T extends ModelType> = ModelAttributes[T] & BaseModel
export type Model = t.TypeOf<typeof Model>

export const ModelRegistry = t.type(models)

export const Model =
  Object.values(ModelRegistry.props).reduce<t.Mixed | undefined>((union, model) => {
    if (!union) {
      return model
    } else {
      return t.union([union, model])
    }
  }, undefined) || t.undefined

export const serializeModel = <T extends BaseModel>(model?: T) => {
  if (!model) {
    return null
  }

  const { id, ...attributes } = model

  return JSON.stringify({
    jsonapi: {
      version: "1.0"
    },
    data: {
      id: model.id,
      attributes: dasherize(attributes)
    }
  })
}
