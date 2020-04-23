import resourcesJson from "../config/resources.json"
import typesJson from "../config/types.json"
import * as t from "io-ts"
import { isRight } from "fp-ts/lib/Either"
import fs from "fs"
import path from "path"
import camelize from "camelize"

const { keys } = Object
const resourcesPath =  path.resolve(__dirname, "../lib/api/resources")
const typesPath =  path.resolve(__dirname, "../lib/api/types")

type Resources = t.TypeOf<typeof Resources>
type Types = t.TypeOf<typeof Types>

interface File {
  path: string
  contents: string
}

class InvalidJsonError extends Error {
  errors: t.Errors

  constructor(errors: t.Errors) {
    super(`Invalid JSON: ${reportErrors(errors)}`)
    this.errors = errors
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

const GenericAttribute = t.strict({ type: t.string })

const Attribute = t.union([
  t.strict({
    type: t.literal("object"),
    attributes: t.record(t.string, GenericAttribute)
  }),
  t.strict({
    type: t.literal("array"),
    arrayType: t.string
  }),
  t.strict({
    type: t.literal("union"),
    values: t.array(t.union([t.string, t.number, t.boolean]))
  }),
  GenericAttribute
])

const Relationship = t.strict({
  cardinality: t.union([t.literal("one"), t.literal("many")]),
  type: t.string
})

const Resources = t.record(t.string, t.strict({
  attributes: t.record(t.string, Attribute),
  relationships: t.record(t.string, Relationship)
}))

const Types = t.record(t.string, Attribute)

function reportErrors(errors: t.Errors) {
  return errors.map((error) => error.context.map(({ key }) => key).join(".")).join(", ")
}

function generateResources() {
  const decodedResources = decodeJson(resourcesJson, Resources)
  const decodedTypes = decodeJson(typesJson, Types)
  const resourceFiles = generateResourceFiles(decodedResources)
  const typeFiles = generateTypeFiles(decodedTypes)
  const files = [...resourceFiles, ...typeFiles]

  files.forEach((file) => {
    fs.writeFileSync(file.path, file.contents)
  })
}

function generateResourceFile(name: string, resource: Resources[keyof Resources]): File {
  return {
    path: `${resourcesPath}/${name}.ts`,
    contents: 'LOL'
  }
}

function generateTypeFile(name: string, type: Types[keyof Types]): File {
  return {
    path: `${typesPath}/${name}.ts`,
    contents: 'LOL'
  }
}

function generateResourceFiles(resources: Resources): File[] {
  return keys(resources).map((name) => generateResourceFile(name, resources[name])
}

function generateTypeFiles(types: Types): File[] {
  return keys(types).map((name) => generateTypeFile(name, types[name])
}

function decodeJson<T>(json: unknown, type: t.Type<T>) {
  const result = type.decode(json)
  if (isRight(result)) { return result.right }
  throw new InvalidJsonError(result.left)
}

try {
  generateResources()
} catch(error) {
  console.error(error.toString())
  process.exit(1)
}
