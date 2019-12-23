import * as t from "io-ts"
import { DateFromISOString } from "io-ts-types/es6/DateFromISOString"
import models, { ModelType } from "./models"

const { string, number, boolean } = t
export const attrTypes = { string, number, date: DateFromISOString, boolean }

export type Schemas = typeof models
export type Attrs = typeof attrTypes
type AttrType = keyof Attrs
type RelationshipType = "one" | "many"

export interface Attr<T extends AttrType = AttrType> {
  kind: "attr"
  type: T
}

interface Relationship<T extends RelationshipType = RelationshipType> {
  kind: "relationship"
  type: T
  modelType: ModelType
}

type TypeOfAttr<T extends Attr> = t.TypeOf<Attrs[T["type"]]>
type TypeOfRelationship<T extends Relationship> = T["type"] extends "one" ? string : string[]
type Schema<T = {}> = T & { [K: string]: Attr | Relationship }

export type ModelOfType<T extends ModelType> = {
  [K in keyof Schemas[T]]: Schemas[T][K] extends Attr
    ? TypeOfAttr<Schemas[T][K]>
    : Schemas[T][K] extends Relationship
    ? TypeOfRelationship<Schemas[T][K]>
    : never
} & {
  type: T
  id: string
}

function relationship<T extends RelationshipType>(type: T, modelType: ModelType): Relationship<T> {
  return { kind: "relationship", type, modelType }
}

export function schema<T>(type: T) {
  return type as Schema<T>
}

export function isAttr(type: Attr | Relationship): type is Attr {
  return type.kind === "attr"
}

export function isRelationship(type: Attr | Relationship): type is Relationship {
  return type.kind === "relationship"
}

export function attr<T extends AttrType>(type: T): Attr<T> {
  return { kind: "attr", type }
}

export function hasOne(modelType: ModelType) {
  return relationship("one", modelType)
}

export function hasMany(modelType: ModelType) {
  return relationship("many", modelType)
}
