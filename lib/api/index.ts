import * as t from "io-ts"
import { ModelType } from "../schemas"
import { ModelOfType, Schemas, Attrs, Attr, Relationship, Embedded } from "../schema"

export type ResponseType = "one" | "many"

export type AttributesType<T extends ModelType> = {
  [K in keyof Schemas[T]]: Schemas[T][K] extends Attr | Embedded ? AttributeC<Schemas[T][K]> : never
}

export type RelationshipsType<T extends ModelType> = {
  [K in keyof Schemas[T]]: Schemas[T][K] extends Relationship
    ? Schemas[T][K]["type"] extends "one"
      ? RelationshipC<Schemas[T][K]>
      : t.ArrayC<RelationshipC<Schemas[T][K]>>
    : never
}

export type AttributesC<T extends ModelType> = t.TypeC<AttributesType<T>>
export type RelationshipsC<T extends ModelType> = t.TypeC<RelationshipsType<T>>

export type AttributeC<T extends Attr | Embedded> = T extends Attr
  ? Attrs[T["type"]]
  : T extends Embedded
  ? T["modelType"]
  : never

export type RelationshipC<T extends Relationship> = t.TypeC<{
  type: t.LiteralC<T["modelType"]>
  id: t.StringC
}>

export type ModelC<T extends ModelType = ModelType> = t.TypeC<{
  type: t.LiteralC<T>
  id: t.StringC
  attributes: AttributesC<T>
  relationships: RelationshipsC<T>
}>

export type DataC<T extends ModelType, U extends ResponseType> = U extends "one"
  ? ModelC<T>
  : t.ArrayC<ModelC<T>>

export type IncludedC = t.UnionC<[t.ArrayC<ModelC<ModelType>>, t.UndefinedC]>

export type DeserializedData<T extends ModelType, U extends ResponseType> = U extends "one"
  ? ModelOfType<T>
  : (ModelOfType<T> | undefined)[]

export type DeserializedIncluded = Record<
  ModelType,
  (ModelOfType<ModelType> | undefined)[] | undefined
>

export interface DeserializedResponse<T extends ModelType, U extends ResponseType> {
  data: DeserializedData<T, U>
  included: DeserializedIncluded
}

export * from "./api"
