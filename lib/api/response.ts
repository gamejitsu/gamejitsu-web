import * as t from "io-ts"
import { isRight } from "fp-ts/lib/Either"
import camelize from "camelize"

import {
  ResponseType,
  AttributesC,
  AttributeC,
  RelationshipsC,
  ModelC,
  DataC,
  IncludedC,
  DeserializedIncluded,
  DeserializedData,
  DeserializedResponse,
  RelationshipC,
  NonNullableRelationshipsC,
  RelationshipValue
} from "."

import {
  ModelOfType,
  Attr,
  isAttr,
  attrTypes,
  isRelationship,
  isEmbedded,
  Relationship,
  RelationshipType,
  Embedded
} from "../schema"

import schemas, { ModelType } from "../schemas"

type ResponseC<T extends ModelType, U extends ResponseType> = t.TypeC<{
  jsonapi: t.TypeC<{
    version: t.LiteralC<"1.0">
  }>
  data: DataC<T, U>
  included: IncludedC
}>

const reportErrors = (errors: t.Errors) => {
  return errors.map((error) => error.context.map(({ key }) => key).join(".")).join(", ")
}

class DeserializationError extends Error {
  errors: t.Errors

  constructor(errors: t.Errors) {
    super(`Deserialization failed: ${reportErrors(errors)}`)
    this.errors = errors
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

const modelTypes = Object.keys(schemas) as ModelType[]

const ModelsT = (() => {
  if (modelTypes.length === 0) {
    return t.undefined
  }

  if (modelTypes.length === 1) {
    return ModelT(modelTypes[0])
  }

  return t.union([
    ModelT(modelTypes[0]),
    ModelT(modelTypes[1]),
    ...modelTypes.slice(2).map((t) => ModelT(t))
  ])
})()

function AttributeT<T extends Attr | Embedded>(field: T): AttributeC<T> {
  if (isAttr(field)) {
    return (field.isOptional
      ? t.union([attrTypes[field.type], t.undefined])
      : attrTypes[field.type]) as AttributeC<T>
  } else {
    const embeddedField = field as Embedded
    return (embeddedField.type === "one"
      ? embeddedField.modelType
      : t.array(embeddedField.modelType)) as AttributeC<T>
  }
}

function AttributesT<T extends ModelType>(modelType: T): AttributesC<T> {
  const schema = schemas[modelType]

  return t.type(
    Object.keys(schema).reduce((acc, key) => {
      const field = schema[key]
      return field && (isAttr(field) || isEmbedded(field))
        ? { ...acc, [key]: AttributeT(field) }
        : acc
    }, {} as AttributesC<T>["props"])
  )
}

function RelationshipT<T extends Relationship>(relationship: T): RelationshipC<T> {
  return t.type({
    type: t.literal(relationship.modelType),
    id: t.string
  })
}

function RelationshipsT<T extends ModelType>(modelType: T): RelationshipsC<T> {
  const schema = schemas[modelType]

  return t.union([
    t.type(
      Object.keys(schema).reduce((acc, key) => {
        const field = schema[key]
        return field && isRelationship(field) ? { ...acc, [key]: RelationshipT(field) } : acc
      }, {} as NonNullableRelationshipsC<T>["props"])
    ),
    t.undefined
  ])
}

function ModelT<T extends ModelType>(modelType: T): ModelC<T> {
  return t.type({
    id: t.string,
    type: t.literal(modelType),
    attributes: AttributesT(modelType),
    relationships: RelationshipsT(modelType)
  })
}

function ResponseT<T extends ModelType, U extends ResponseType>(
  modelType: T,
  responseType: U
): ResponseC<T, U> {
  return t.type({
    jsonapi: t.type({
      version: t.literal("1.0")
    }),

    data: responseType === "one" ? ModelT(modelType) : t.array(ModelT(modelType)),
    included: t.union([t.array(ModelsT), t.undefined])
  }) as ResponseC<T, U>
}

function extractRelationship<T extends RelationshipType>(
  relationship: t.TypeOf<RelationshipValue<Relationship<T>>>,
  type: T
) {
  return type === "one"
    ? (relationship as t.TypeOf<RelationshipValue<Relationship<"one">>>).id
    : (relationship as t.TypeOf<RelationshipValue<Relationship<"many">>>).map((m) => m.id)
}

function extractRelationships<T extends ModelType>({
  relationships,
  type
}: t.TypeOf<ModelC<T>>): Partial<ModelOfType<T>> {
  const schema = schemas[type]

  if (relationships) {
    return (Object.keys(relationships) as (keyof typeof relationships)[]).reduce((acc, key) => {
      const field = schema[key as string]

      return field && isRelationship(field)
        ? {
            ...acc,
            [key]: extractRelationship(
              relationships[key] as t.TypeOf<RelationshipValue<Relationship>>,
              field.type
            )
          }
        : acc
    }, {} as Partial<ModelOfType<T>>)
  } else {
    return {}
  }
}

function extractModel<T extends ModelType>(model: t.TypeOf<ModelC<T>>): ModelOfType<T> {
  return {
    type: model.type,
    id: model.id,
    ...model.attributes,
    ...extractRelationships(model)
  }
}

function extractData<T extends ModelType, U extends ResponseType>(
  responseType: U,
  data: t.TypeOf<DataC<T, U>>
): DeserializedData<T, U> {
  if (responseType === "many") {
    return (data as t.TypeOf<DataC<T, "many">>).map((m) => extractModel(m)) as DeserializedData<
      T,
      U
    >
  } else {
    return extractModel(data as t.TypeOf<DataC<T, "one">>) as DeserializedData<T, U>
  }
}

function extractIncluded(included: t.TypeOf<IncludedC> = []) {
  return included.reduce((acc, model) => {
    return {
      ...acc,
      [model.type]: [...(acc[model.type] || []), model]
    }
  }, {} as DeserializedIncluded)
}

function extractResponse<T extends ModelType, U extends ResponseType>(
  responseType: U,
  { data, included }: t.TypeOf<ResponseC<T, U>>
): DeserializedResponse<T, U> {
  return {
    data: extractData(responseType, data),
    included: extractIncluded(included)
  }
}

export function deserializeResponse<T extends ModelType, U extends ResponseType>(
  modelType: T,
  responseType: U,
  data: any
) {
  const response = ResponseT(modelType, responseType).decode(camelize(data))

  if (isRight(response)) {
    return extractResponse(responseType, response.right)
  } else {
    console.error(JSON.stringify(data, null, 2))
    throw new DeserializationError(response.left)
  }
}
