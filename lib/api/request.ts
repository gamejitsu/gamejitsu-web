import * as t from "io-ts"
import dasherize from "dasherize"
import { ModelC } from "."
import { ModelOfType } from "../schema"
import schemas, { ModelType } from "../schemas"

export function serializeRequest<T extends ModelType>(model?: ModelOfType<T>) {
  if (!model) {
    return null
  }

  const { id } = model
  const schema = schemas[model.type]

  const attributes = Object.keys(schema).reduce((acc, key) => {
    const field = schema[key]
    return field && field.kind === "attr" ? { ...acc, [key]: model[key] } : acc
  }, {} as t.TypeOf<ModelC<T>>)

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
