import * as t from "io-ts"
import { ModelType } from "../schemas"
import { ModelOfType, Schemas, Attrs, Attr } from "../schema"

export type ResponseType = "one" | "many"

export type AttributesType<T extends ModelType> = {
  [K in keyof Schemas[T]]: Schemas[T][K] extends Attr ? Attrs[Schemas[T][K]["type"]] : never
}

export type AttributesC<T extends ModelType> = t.TypeC<AttributesType<T>>

export type ModelC<T extends ModelType = ModelType> = t.TypeC<{
  type: t.LiteralC<T>
  id: t.StringC
  attributes: AttributesC<T>
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
