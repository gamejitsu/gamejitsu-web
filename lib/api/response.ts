import * as t from "io-ts"
import camelize from "camelize"
import schemas, { ModelType } from "../schemas"

import { isRight } from "fp-ts/lib/Either"
import {
  Attr,
  Attrs,
  attrTypes,
  Embedded,
  isAttr,
  isEmbedded,
  isRelationship,
  Relationship,
  RelationshipType,
  Schemas
} from "../schema"


type AttributeC<T extends Attr | Embedded> = T extends Attr
  ? T["isOptional"] extends true
    ? Attrs[T["type"]]
    : t.UnionC<[Attrs[T["type"]], t.UndefinedC]>
  : T extends Embedded
  ? T["modelType"]
  : never

export type AttributesC<T extends ModelType> = t.TypeC<
  {
    [K in keyof Schemas[T]["_T"]]: Schemas[T][K] extends Attr | Embedded
      ? AttributeC<Schemas[T][K]>
      : never
  }
>

type DataC<T extends ModelType, U extends ResponseType> = U extends "one"
  ? ModelC<T>
  : t.ArrayC<ModelC<T>>

type DeserializedData<T extends ModelType, U extends ResponseType> = U extends "one"
  ? Model<T>
  : Model<T>[]

type DeserializedIncluded = Record<ModelType, Model[] | undefined>

export interface DeserializedResponse<T extends ModelType, U extends ResponseType> {
  data: DeserializedData<T, U>
  included: DeserializedIncluded
}

type IncludedC = t.UnionC<[t.ArrayC<ModelC<ModelType>>, t.UndefinedC]>

export type Model<T extends ModelType = ModelType> = {
  [K in keyof Schemas[T]["_T"]]: Schemas[T][K] extends Attr
    ? ModelAttr<Schemas[T][K]>
    : Schemas[T][K] extends Relationship
    ? ModelRelationship<Schemas[T][K]["type"]>
    : Schemas[T][K] extends Embedded
    ? ModelEmbedded<Schemas[T][K]>
    : never
} & {
  id: string
  type: T
}

type ModelAttr<T extends Attr> = T["isOptional"] extends true
  ? t.TypeOf<Attrs[T["type"]]> | undefined
  : t.TypeOf<Attrs[T["type"]]>

type ModelC<T extends ModelType = ModelType> = t.TypeC<{
  type: t.LiteralC<T>
  id: t.StringC
  attributes: AttributesC<T>
  relationships: RelationshipsC<T>
}>

type ModelEmbedded<T extends Embedded> = T["type"] extends "one"
  ? t.TypeOf<T["modelType"]>
  : t.TypeOf<T["modelType"]>[]

export type ModelRelationship<T extends RelationshipType = RelationshipType> = T extends "one"
  ? string | undefined
  : string[]

type ModelRelationships<T extends ModelType> = {
  [K in keyof Schemas[T]["_T"]]: Schemas[T][K] extends Relationship
    ? ModelRelationship<Schemas[T][K]["type"]>
    : never
}

export type NonNullableRelationshipsC<T extends ModelType = ModelType> = t.TypeC<
  {
    [K in keyof Schemas[T]["_T"]]: Schemas[T][K] extends Relationship
      ? RelationshipC<Schemas[T][K]["type"]>
      : never
  }
>

type RelationshipDataC<T extends Relationship> = t.TypeC<{
  type: t.LiteralC<T["modelType"]>
  id: t.StringC
}>

type RelationshipC<T extends RelationshipType = RelationshipType> = t.TypeC<{
  data: T extends "one"
    ? RelationshipDataC<Relationship<T>>
    : t.ArrayC<RelationshipDataC<Relationship<T>>>
}>

type RelationshipsC<T extends ModelType = ModelType> = t.UnionC<
  [NonNullableRelationshipsC<T>, t.UndefinedC]
>

type ResponseC<T extends ModelType, U extends ResponseType> = t.TypeC<{
  jsonapi: t.TypeC<{
    version: t.LiteralC<"1.0">
  }>
  data: DataC<T, U>
  included: IncludedC
}>

export type ResponseType = "one" | "many"

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

function RelationshipT<T extends Relationship>(relationship: T): RelationshipC<T["type"]> {
  const type = t.type({
    type: t.literal(relationship.modelType),
    id: t.string
  })

  const dataType = relationship.type === "one" ? type : t.array(type)
  return t.type({ data: dataType }) as RelationshipC<T["type"]>
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

function isManyRelationship(
  relationship: t.TypeOf<RelationshipC>
): relationship is t.TypeOf<RelationshipC<"many">> {
  return Array.isArray(relationship.data)
}

function isOneRelationship(
  relationship: t.TypeOf<RelationshipC>
): relationship is t.TypeOf<RelationshipC<"one">> {
  return !isManyRelationship(relationship)
}

function extractRelationship(relationship: t.TypeOf<RelationshipC>) {
  if (isManyRelationship(relationship)) {
    return relationship.data.map((m) => m.id)
  } else if (isOneRelationship(relationship)) {
    return relationship.data.id
  }
}

function extractRelationships<T extends ModelType>({
  relationships,
  type
}: t.TypeOf<ModelC<T>>): ModelRelationships<T> {
  const schema = schemas[type]

  if (relationships) {
    return (Object.keys(relationships) as (keyof typeof relationships)[]).reduce((acc, key) => {
      const field = schema[key as string]

      return field && isRelationship(field)
        ? {
            ...acc,
            [key]: extractRelationship(relationships[key])
          }
        : acc
    }, {} as ModelRelationships<T>)
  } else {
    return {} as ModelRelationships<T>
  }
}

function extractModel<T extends ModelType>(model: t.TypeOf<ModelC<T>>): Model<T> {
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
    return { ...acc, [model.type]: [...(acc[model.type] || []), model] }
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
    throw new DeserializationError(response.left)
  }
}
