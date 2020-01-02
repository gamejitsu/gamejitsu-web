import * as t from "io-ts"
import { ModelType } from "../schemas"
import { Schemas, Attrs, Attr } from "../schema"

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

export * from "./api"
