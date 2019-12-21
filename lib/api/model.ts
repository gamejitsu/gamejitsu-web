import dasherize from "dasherize"
import { ModelOfType } from "../schema"
import models, { ModelType } from "../models"

export const serializeModel = <T extends ModelType>(model?: ModelOfType<T>) => {
  if (!model) {
    return null
  }

  const { id } = model
  const schema = models[model.type]

  const attributes = Object.keys(schema).reduce((acc, key) => {
    const field = schema[key]

    if (field.kind === "attr") {
      return { ...acc, [key]: model[key] }
    }
  }, {} as any)

  return JSON.stringify({
    jsonapi: {
      version: "1.0"
    },
    data: {
      id: id,
      attributes: dasherize(attributes)
    }
  })
}
