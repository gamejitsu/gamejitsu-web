import * as t from "io-ts"
import { isRight } from "fp-ts/lib/Either"

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

class DeserializationError extends Error {
  errors: t.Errors

  constructor(errors: t.Errors) {
    super(`Deserialization failed: ${errors}`)
    this.errors = errors
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

const modelTypes = Object.keys(schemas) as ModelType[]

const Models = (() => {
  if (modelTypes.length === 0) {
    return t.undefined
  }

  if (modelTypes.length === 1) {
    return Model(modelTypes[0])
  }

  return t.union([
    Model(modelTypes[0]),
    Model(modelTypes[1]),
    ...modelTypes.slice(2).map((t) => Model(t))
  ])
})()

function Attribute<T extends Attr | Embedded>(attr: T): AttributeC<T> {
  if (isAttr(attr)) {
    return (attr.isOptional
      ? attrTypes[attr.type]
      : t.union([attrTypes[attr.type], t.undefined])) as AttributeC<T>
  } else {
    return (attr as Embedded).modelType as AttributeC<T>
  }
}

function Attributes<T extends ModelType>(modelType: T): AttributesC<T> {
  const schema = schemas[modelType]

  return t.type(
    Object.keys(schema).reduce((acc, key) => {
      const field = schema[key]
      return field && (isAttr(field) || isEmbedded(field))
        ? { ...acc, [key]: Attribute(field) }
        : acc
    }, {} as AttributesC<T>["props"])
  )
}

function Relationship<T extends Relationship>(relationship: T): RelationshipC<T> {
  return t.type({
    type: t.literal(relationship.modelType),
    id: t.string
  })
}

function Relationships<T extends ModelType>(modelType: T): RelationshipsC<T> {
  const schema = schemas[modelType]

  return t.type(
    Object.keys(schema).reduce((acc, key) => {
      const field = schema[key]
      return field && isRelationship(field) ? { ...acc, [key]: Relationship(field) } : acc
    }, {} as RelationshipsC<T>["props"])
  )
}

function Model<T extends ModelType>(modelType: T): ModelC<T> {
  return t.type({
    id: t.string,
    type: t.literal(modelType),
    attributes: Attributes(modelType),
    relationships: Relationships(modelType)
  })
}

function Response<T extends ModelType, U extends ResponseType>(
  modelType: T,
  responseType: U
): ResponseC<T, U> {
  return t.type({
    jsonapi: t.type({
      version: t.literal("1.0")
    }),

    data: responseType === "one" ? Model(modelType) : t.array(Model(modelType)),
    included: t.union([t.array(Models), t.undefined])
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

function extractRelationships<T extends ModelType>(
  model: t.TypeOf<ModelC<T>>
): Partial<ModelOfType<T>> {
  const schema = schemas[model.type]

  return (Object.keys(model.relationships) as (keyof RelationshipsC<T>["props"])[]).reduce(
    (acc, key) => {
      const field = schema[key as string]

      return field && isRelationship(field)
        ? {
            ...acc,
            [key]: extractRelationship(
              model.relationships[key] as t.TypeOf<RelationshipValue<Relationship>>,
              field.type
            )
          }
        : acc
    },
    {} as Partial<ModelOfType<T>>
  )
}

function extractModel<T extends ModelType>(model: t.TypeOf<ModelC<T>>): ModelOfType<T> {
  return {
    type: model.type,
    id: model.id,
    ...model.attributes,
    ...extractRelationships(model)
  } as ModelOfType<T>
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
  const response = Response(modelType, responseType).decode(data)

  if (isRight(response)) {
    return extractResponse(responseType, response.right)
  } else {
    throw new DeserializationError(response.left)
  }
}
