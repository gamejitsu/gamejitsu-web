import * as t from "io-ts"
import { DateFromISOString } from "io-ts-types/lib/DateFromISOString"
import schemas, { ModelType } from "./schemas"

const { string, number, boolean } = t
export const attrTypes = { string, number, date: DateFromISOString, boolean }

export interface Attr<T extends AttrType = AttrType, U extends boolean = boolean> {
  fieldType: "attr"
  type: T
  isOptional: U
}

type AttrType = keyof Attrs
export type Attrs = typeof attrTypes

export interface Embedded<T extends RelationshipType = RelationshipType, U extends t.Any = t.Any> {
  fieldType: "embedded"
  type: T
  modelType: U
}

type Field = Attr | Relationship | Embedded

export interface Relationship<T extends RelationshipType = RelationshipType> {
  fieldType: "relationship"
  type: T
  modelType: ModelType
}

export type RelationshipType = "one" | "many"
export type Schema<T = {}> = T & { _T: T } & { [K: string]: Field | undefined }
export type Schemas = typeof schemas

function relationship<T extends RelationshipType>(type: T, modelType: ModelType): Relationship<T> {
  return { fieldType: "relationship", type, modelType }
}

function embedded<T extends RelationshipType, U extends t.Any>(
  type: T,
  modelType: U
): Embedded<T, U> {
  return { fieldType: "embedded", type, modelType }
}

export function schema<T>(type: T) {
  return { ...type, _T: type } as Schema<T>
}

export function isAttr(field: Field): field is Attr {
  return field.fieldType === "attr"
}

export function isRelationship(field: Field): field is Relationship {
  return field.fieldType === "relationship"
}

export function isEmbedded(field: Field): field is Embedded {
  return field.fieldType === "embedded"
}

export function attr<T extends AttrType, U extends boolean>(
  type: T,
  isOptional: U = false as U
): Attr<T, U> {
  return { fieldType: "attr", type, isOptional }
}

export function hasOne(modelType: ModelType) {
  return relationship("one", modelType)
}

export function hasMany(modelType: ModelType) {
  return relationship("many", modelType)
}

export function embedsOne<T extends t.Any>(modelType: T) {
  return embedded("one", modelType)
}

export function embedsMany<T extends t.TypeC<any>>(modelType: T) {
  return embedded("many", modelType)
}
