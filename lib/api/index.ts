import * as t from "io-ts"
import { ModelType } from "../schemas"
import { Model, Schemas, Attrs, Attr, Relationship, Embedded } from "../schema"

export type ResponseType = "one" | "many"

export type AttributesC<T extends ModelType> = t.TypeC<
  {
    [K in keyof Schemas[T]["_T"]]: Schemas[T][K] extends Attr | Embedded
      ? AttributeC<Schemas[T][K]>
      : never
  }
>

export type NonNullableRelationshipsC<T extends ModelType = ModelType> = t.TypeC<
  {
    [K in keyof Schemas[T]["_T"]]: Schemas[T][K] extends Relationship
      ? RelationshipC<Schemas[T][K]>
      : never
  }
>

export type RelationshipsC<T extends ModelType> = t.UnionC<
  [NonNullableRelationshipsC<T>, t.UndefinedC]
>

export type AttributeC<T extends Attr | Embedded> = T extends Attr
  ? T["isOptional"] extends true
    ? Attrs[T["type"]]
    : t.UnionC<[Attrs[T["type"]], t.UndefinedC]>
  : T extends Embedded
  ? T["modelType"]
  : never

type RelationshipDataC<T extends Relationship> = t.TypeC<{
  type: t.LiteralC<T["modelType"]>
  id: t.StringC
}>

export type RelationshipC<T extends Relationship = Relationship> = t.TypeC<{
  data: T["type"] extends "one" ? RelationshipDataC<T> : t.ArrayC<RelationshipDataC<T>>
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
  ? Model<T>
  : Model<T>[]

export type DeserializedIncluded = Record<ModelType, Model[] | undefined>

export interface DeserializedResponse<T extends ModelType, U extends ResponseType> {
  data: DeserializedData<T, U>
  included: DeserializedIncluded
}

export * from "./api"
export { deserializeResponse } from "./response"
