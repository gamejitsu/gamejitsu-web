import * as t from "io-ts"
import { DateFromISOString } from "io-ts-types/lib/DateFromISOString"
import schemas, { ModelType } from "./schemas"

const { string, number, boolean } = t
export const attrTypes = { string, number, date: DateFromISOString, boolean }

export type Schemas = typeof schemas
export type Attrs = typeof attrTypes
type AttrType = keyof Attrs
export type RelationshipType = "one" | "many"

export interface Attr<T extends AttrType = AttrType, U extends boolean = boolean> {
  kind: "attr"
  type: T
  isOptional: U
}

export interface Relationship<T extends RelationshipType = RelationshipType> {
  kind: "relationship"
  type: T
  modelType: ModelType
}

export interface Embedded<T extends RelationshipType = RelationshipType, U extends t.Any = t.Any> {
  kind: "embedded"
  type: T
  modelType: U
}

type TypeOfAttr<T extends Attr> = T["isOptional"] extends true
  ? t.TypeOf<Attrs[T["type"]]> | undefined
  : t.TypeOf<Attrs[T["type"]]>

type TypeOfRelationship<T extends Relationship> = T["type"] extends "one" ? string : string[]

type TypeOfEmbedded<T extends Embedded> = T["type"] extends "one"
  ? t.TypeOf<T["modelType"]>
  : t.TypeOf<T["modelType"]>[]

type Field = Attr | Relationship | Embedded
type Schema<T> = T & { _T: T } & { [K: string]: Field | undefined }

export type ModelOfType<T extends ModelType> = {
  [K in keyof Schemas[T]["_T"]]: Schemas[T][K] extends Attr
    ? TypeOfAttr<Schemas[T][K]>
    : Schemas[T][K] extends Relationship
    ? TypeOfRelationship<Schemas[T][K]>
    : Schemas[T][K] extends Embedded
    ? TypeOfEmbedded<Schemas[T][K]>
    : never
} & {
  id?: string
  type: T
}

function relationship<T extends RelationshipType>(type: T, modelType: ModelType): Relationship<T> {
  return { kind: "relationship", type, modelType }
}

function embedded<T extends RelationshipType, U extends t.Any>(
  type: T,
  modelType: U
): Embedded<T, U> {
  return { kind: "embedded", type, modelType }
}

export function schema<T>(type: T) {
  return { ...type, _T: type } as Schema<T>
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

export function attr<T extends AttrType, U extends boolean>(
  type: T,
  isOptional: U = false as U
): Attr<T, U> {
  return { kind: "attr", type, isOptional }
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
