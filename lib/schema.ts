import * as t from "io-ts"
import { DateFromISOString } from "io-ts-types/es6/DateFromISOString"
import schemas, { ModelType } from "./schemas"

const { string, number, boolean } = t
export const attrTypes = { string, number, date: DateFromISOString, boolean }

export type Schemas = typeof schemas
export type Attrs = typeof attrTypes
type AttrType = keyof Attrs
type RelationshipType = "one" | "many"

export interface Attr<T extends AttrType = AttrType> {
  kind: "attr"
  type: T
}

export interface Relationship<T extends RelationshipType = RelationshipType> {
  kind: "relationship"
  type: T
  modelType: ModelType
}

export interface Embedded<
  T extends RelationshipType = RelationshipType,
  U extends t.TypeC<any> = t.TypeC<any>
> {
  kind: "embedded"
  type: T
  modelType: U
}

type TypeOfAttr<T extends Attr> = t.TypeOf<Attrs[T["type"]]>
type TypeOfRelationship<T extends Relationship> = T["type"] extends "one" ? string : string[]

type TypeOfEmbedded<T extends Embedded> = T["type"] extends "one"
  ? t.TypeOf<T["modelType"]>
  : (t.TypeOf<T["modelType"]> | undefined)[]

type Field = Attr | Relationship | Embedded
type Schema = { [K: string]: Field | undefined }

export type ModelOfType<T extends ModelType> = {
  [K in keyof Schemas[T]]: Schemas[T][K] extends Attr
    ? TypeOfAttr<Schemas[T][K]>
    : Schemas[T][K] extends Relationship
    ? TypeOfRelationship<Schemas[T][K]>
    : Schemas[T][K] extends Embedded
    ? TypeOfEmbedded<Schemas[T][K]>
    : never
} & {
  type: T
  id?: string
}

function relationship<T extends RelationshipType>(type: T, modelType: ModelType): Relationship<T> {
  return { kind: "relationship", type, modelType }
}

function embedded<T extends RelationshipType, U extends t.TypeC<any>>(
  type: T,
  modelType: U
): Embedded<T, U> {
  return { kind: "embedded", type, modelType }
}

export function schema<T>(type: T) {
  return type as T & Schema
}

export function isAttr(field: Field): field is Attr {
  return field.kind === "attr"
}

export function isRelationship(field: Field): field is Relationship {
  return field.kind === "relationship"
}

export function isEmbedded(field: Field): field is Embedded {
  return field.kind === "embedded"
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

export function embedsOne<T extends t.TypeC<any>>(modelType: T) {
  return embedded("one", modelType)
}

export function embedsMany<T extends t.TypeC<any>>(modelType: T) {
  return embedded("many", modelType)
}
