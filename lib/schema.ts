import * as t from "io-ts"
import date from "io-ts-types/es6/DateFromISOString"
import models, { ModelType } from "./models"

const { string, number, boolean } = t
const attrTypes = { string, number, date, boolean }

type Models = typeof models
type Attrs = typeof attrTypes
type AttrType = keyof Attrs
type RelationshipType = "one" | "many"

interface Attr<T extends AttrType = any> {
  kind: "attr"
  type: T
}

interface Relationship<T extends RelationshipType = any> {
  kind: "relationship"
  type: T
  modelType: ModelType
}

type TypeOfAttr<T extends Attr> = t.TypeOf<Attrs[T["type"]]>
type TypeOfRelationship<T extends Relationship> = T["type"] extends "one" ? string : string[]
type Model<T, U> = T & { type: U, id: string }
type Field = Attr | Relationship
type Schema<T> = T & { [K: string]: Field }

export type ModelOfType<T extends ModelType> = Model<{
  [K in keyof Models[T]]:
    Models[T][K] extends Attr ?
      TypeOfAttr<Models[T][K]> :
      Models[T][K] extends Relationship ?
        TypeOfRelationship<Models[T][K]> :
        never
}, T>

function relationship<T extends RelationshipType>(type: T, modelType: ModelType): Relationship<T> {
  return { kind: "relationship", type, modelType }
}

export function schema<T extends Record<string, Field>>(type: T): Schema<T> {
  return type
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
