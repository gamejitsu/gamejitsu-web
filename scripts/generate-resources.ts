import resourcesJson from "../config/resources.json"
import typesJson from "../config/types.json"
import * as t from "io-ts"
import { isRight } from "fp-ts/lib/Either"
import fs from "fs"
import path from "path"
import camelcase from "camelcase"
import dasherize from "dasherize"

const { keys, values } = Object
const resourcesPath = path.resolve(__dirname, "../lib/api/resources")
const typesPath = path.resolve(__dirname, "../lib/api/types")

type Resources = t.TypeOf<typeof Resources>
type Types = t.TypeOf<typeof Types>
type Attribute = t.TypeOf<typeof Attribute>
type Relationship = t.TypeOf<typeof Relationship>
type GenericAttribute = t.TypeOf<typeof GenericAttribute>
type NonGenericAttribute = t.TypeOf<typeof NonGenericAttribute>

interface File {
  path: string
  contents: string
}

interface ImportMeta {
  name: string
  module: string
  as?: string
}

class InvalidJsonError extends Error {
  errors: t.Errors

  constructor(errors: t.Errors) {
    super(`Invalid JSON: ${reportErrors(errors)}`)
    this.errors = errors
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

const GenericAttribute = t.type({ type: t.string })
const NonGenericAttribute = t.union([
  t.type({
    type: t.literal("object"),
    attributes: t.record(t.string, GenericAttribute)
  }),
  t.type({
    type: t.literal("array"),
    value: t.string
  }),
  t.type({
    type: t.literal("union"),
    values: t.array(t.union([t.string, t.number, t.boolean]))
  })
])

const Attribute = t.union([GenericAttribute, NonGenericAttribute])

const Relationship = t.type({
  cardinality: t.union([t.literal("one"), t.literal("many")]),
  type: t.string,
  include: t.union([t.boolean, t.undefined])
})

const Resources = t.record(
  t.string,
  t.type({
    attributes: t.record(t.string, Attribute),
    relationships: t.record(t.string, Relationship)
  })
)

const Types = t.record(t.string, Attribute)

const ioTsImport: ImportMeta = {
  name: "default",
  as: "t",
  module: "io-ts"
}

function isNonGenericAttribute(attribute: Attribute): attribute is NonGenericAttribute {
  const nonGenericTypes: string[] = NonGenericAttribute.types.map((at) => at.props.type.value)
  return nonGenericTypes.includes(attribute.type)
}

function classify(name: string) {
  return camelcase(name, { pascalCase: true })
}

function reportErrors(errors: t.Errors) {
  return errors.map((error) => error.context.map(({ key }) => key).join(".")).join(", ")
}

function generateResources() {
  const decodedResources = decodeJson(resourcesJson, Resources)
  const decodedTypes = decodeJson(typesJson, Types)
  const resourceFiles = generateResourceFiles(decodedResources, decodedTypes)
  const typeFiles = generateTypeFiles(decodedTypes)
  const files = [...resourceFiles, ...typeFiles]
  const dirs = [resourcesPath, typesPath]

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
  })

  files.forEach((file) => {
    fs.writeFileSync(file.path, file.contents)
  })
}

function resourceFileContents(
  name: string,
  resource: Resources[keyof Resources],
  types: Types,
  resources: Resources
) {
  const varName = classify(name)

  return `
    ${stringifyImports(
      [ioTsImport].concat(
        ...values(resource.attributes).reduce(
          (acc, a) => [...acc, ...importsForAttribute(types, a)],
          [] as ImportMeta[]
        ),
        ...values(resource.relationships).reduce(
          (acc, r) => [...acc, ...importsForRelationship(resources, r)],
          [] as ImportMeta[]
        )
      )
    )}
    import { buildResource, extractValue } from "../resource"
    import { Model } from "gamejitsu/interfaces"

    export interface ${varName} extends Model {
      ${keys(resource.attributes)
        .map((n) => `${n}: ${jsTypeForAttribute(resource.attributes[n], types)}`)
        .concat(
          keys(resource.relationships).map((n) =>
            jsTypeForRelationship(n, resource.relationships[n], resources)
          )
        )
        .join(",\n")}
    }

    export const decoder = t.type({
      id: t.string,
      type: t.literal("${name}"),
      attributes: t.type({
        ${keys(resource.attributes)
          .map((n) => `"${dasherize(n)}": ${varNameForAttribute(types, resource.attributes[n])}`)
          .join(",\n")}
      }),
      relationships: t.type({
        ${keys(resource.relationships)
          .map(
            (n) =>
              `"${dasherize(n)}": ${decoderForRelationship(resource.relationships[n], resources)}`
          )
          .join(",\n")}
      })
    })

    export const transformer = (value: t.TypeOf<typeof decoder>): ${varName} => ({
      id: value.id,
      ${keys(resource.attributes)
        .map((n) => `${n}: value.attributes["${dasherize(n)}"]`)
        .concat(
          keys(resource.relationships).map((n) =>
            transformerForRelationship(n, resource.relationships[n], resources)
          )
        )
        .join(",\n")}
    })

    export default buildResource({
      name: "${name}",
      decode: {
        data: (value: unknown) => extractValue(decoder.decode(value)),
        response: (value: unknown) => extractValue(
          t.type({
            ${includedDecoderForResource(resource)}
          })
          .decode(value)
        )
      },
      transform: {
        data: transformer,
        response: (value) => ${
          values(resource.relationships).some((r) => r.include)
            ? `({ ${includedTransformersForResource(resource)} })`
            : "value"
        }
      },
      encode: (value) => ({
        "attributes": {
          ${keys(resource.attributes)
            .map(
              (n) => `"${dasherize(n)}": ${encoderForAttribute(types, n, resource.attributes[n])}`
            )
            .join(",\n")}
        },
        "relationships": {
          ${keys(resource.relationships).map((n) =>
            encoderForRelationship(n, resource.relationships[n])
          )}
        }
      })
    })
  `
}

function generateResourceFile(
  name: string,
  resource: Resources[keyof Resources],
  types: Types,
  resources: Resources
): File {
  return {
    path: `${resourcesPath}/${name}.ts`,
    contents: resourceFileContents(name, resource, types, resources)
  }
}

function encoderForAttribute(types: Types, name: string, attribute: Attribute) {
  if (!isNonGenericAttribute(attribute) || attribute.type !== "array") {
    return encoderForTypeName(types, `value.${name}`, attribute.type)
  }

  return `value.${name}.map((v) => ${encoderForTypeName(types, "v", attribute.value)})`
}

function includedTransformersForResource(resource: Resources[keyof Resources]) {
  const includedRelationships = values(resource.relationships).filter((r) => r.include)

  if (includedRelationships.length === 0) {
    return ""
  }

  return `
    included: {
      ${includedRelationships
        .map((r) => `"${r.type}": value.included.filter((r) => r.type === "${r.type}")`)
        .join(",\n")}
    }
  `
}

function includedDecoderForResource(resource: Resources[keyof Resources]) {
  const includedRelationships = values(resource.relationships).filter((r) => r.include)

  if (includedRelationships.length === 0) {
    return ""
  }

  const includedDecoders = includedRelationships
    .map((r) => `${camelcase(r.type)}Decoder`)
    .join(", ")

  return `
    included: t.array(${
      includedRelationships.length === 1 ? includedDecoders : `t.union([ ${includedDecoders} ])`
    })
  `
}

function encoderForRelationship(name: string, relationship: Relationship) {
  const attrName = camelcase(name)
  const encodedName = dasherize(name)

  const encoder = (attrName?: string) => `
    {
      data: {
        ${attrName ? `id: ${attrName}` : "id"},
        type: "${relationship.type}"
      }
    }
  `

  if (relationship.cardinality === "one") {
    return `"${encodedName}": ${encoder(`value.${attrName}Id`)}`
  }

  return `"${encodedName}": value.${attrName}Ids.map((id) => (${encoder()}))`
}

function encoderForTypeName(types: Types, attributeName: string, name: string) {
  return keys(types).includes(name)
    ? `${camelcase(name)}Encoder(${attributeName})`
    : `${attributeName}`
}

function importsForRelationship(resources: Resources, relationship: Relationship) {
  if (!keys(resources).includes(relationship.type)) {
    throw new Error(`Non-existent relationship type: ${relationship.type}`)
  }

  return [
    {
      name: "decoder",
      as: `${camelcase(relationship.type)}Decoder`,
      module: `gamejitsu/api/resources/${dasherize(relationship.type)}`
    }
  ]
}

function importsForAttribute(types: Types, attribute: Attribute) {
  if (!isNonGenericAttribute(attribute) || attribute.type !== "array") {
    return importsForTypeName(types, attribute.type)
  }

  return importsForTypeName(types, attribute.value)
}

function importsForTypeName(types: Types, name: string): ImportMeta[] {
  if (name === "date") {
    return [
      {
        name: "DateFromISOString",
        module: "io-ts-types/lib/DateFromISOString"
      }
    ]
  }

  if (keys(types).includes(name)) {
    const module = `gamejitsu/api/types/${dasherize(name)}`

    return [
      {
        name: `${classify(name)}`,
        module
      },
      {
        name: "encoder",
        as: `${camelcase(name)}Encoder`,
        module
      }
    ]
  }

  return [ioTsImport]
}

function varNameForTypeName(types: Types, name: string) {
  const [meta] = importsForTypeName(types, name)
  return meta.name === "default" ? `${meta.as}.${name}` : meta.name
}

function varNameForAttribute(types: Types, attribute: Attribute) {
  if (!isNonGenericAttribute(attribute)) {
    return varNameForTypeName(types, attribute.type)
  }

  if (attribute.type === "array") {
    return `t.array(${varNameForTypeName(types, attribute.value)})`
  }

  throw new Error(`Unsupported resource attribute type: ${attribute.type}`)
}

function decoderForRelationship(relationship: Relationship, resources: Resources) {
  const dataDecoder = `
    t.type({
      type: t.literal("${relationship.type}"),
      id: t.string
    })
  `

  if (relationship.cardinality === "one") {
    return `
      t.type({
        data: ${dataDecoder}
      })
    `
  }

  return `
    t.type({
      data: t.array(${dataDecoder})
    })
  `
}

function transformerForRelationship(
  name: string,
  relationship: Relationship,
  resources: Resources
) {
  const attrName = camelcase(name)
  const relationshipDataKey = `value.relationships["${dasherize(name)}"].data`
  const key = relationship.cardinality === "one" ? `${attrName}Id` : `${attrName}Ids`

  const value =
    relationship.cardinality === "one"
      ? `${relationshipDataKey}.id`
      : `${relationshipDataKey}.map((r) => r.id)`

  return `${key}: ${value}`
}

function jsTypeForTypeName(name: string, types: Types) {
  return name === "date" || keys(types).includes(name) ? classify(name) : name
}

function jsTypeForAttribute(attribute: Attribute, types: Types) {
  if (!isNonGenericAttribute(attribute)) {
    return jsTypeForTypeName(attribute.type, types)
  }

  if (attribute.type === "array") {
    return `${jsTypeForTypeName(attribute.value, types)}[]`
  }

  return attribute.type
}

function jsTypeForRelationship(name: string, relationship: Relationship, resources: Resources) {
  if (relationship.cardinality === "one") {
    return `${name}Id: string`
  }

  return `${name}Ids: string[]`
}

function stringifyImports(imports: ImportMeta[]) {
  const importsByModule: Record<string, ImportMeta[]> = imports.reduce(
    (acc, meta) => ({
      ...acc,
      [meta.module]: (acc[meta.module] || []).concat(meta)
    }),
    {} as Record<string, ImportMeta[]>
  )

  return keys(importsByModule)
    .map((moduleName) => {
      const imports = importsByModule[moduleName]
      const defaultImport = imports.find((i) => i.name === "default")

      const names = imports
        .filter((i) => i.name !== "default")
        .map((i) => `${i.name}${i.as ? ` as ${i.as}` : ""}`)
        .join(", ")

      return `import ${
        defaultImport ? `${defaultImport.as}, ` : ""
      }{ ${names} } from "${moduleName}"`
    })
    .join("\n")
}

function typeFileContents(types: Types, name: keyof Types) {
  const attribute = types[name]
  const varName = classify(name)

  if (!attribute || !isNonGenericAttribute(attribute) || attribute.type === "array") {
    throw new Error(`Unsupported root type: ${name}`)
  }

  if (attribute.type === "union") {
    return `
      import t from "io-ts"

      export const ${varName} = t.union([
        ${attribute.values.map((v) => `t.literal(${JSON.stringify(v)})`).join(",\n")}
      ])

      export const encoder = t.identity

      export type ${varName} = t.TypeOf<typeof ${varName}>
    `
  }

  return `
    import { either } from "fp-ts/lib/Either"
    ${stringifyImports(
      [ioTsImport].concat(
        ...values(attribute.attributes).reduce(
          (acc, a) => [...acc, ...importsForTypeName(types, a.type)],
          [] as ImportMeta[]
        )
      )
    )}

    export interface ${varName} {
      ${keys(attribute.attributes)
        .map((n) => `${n}: ${jsTypeForAttribute(attribute.attributes[n], types)}`)
        .join(",\n")}
    }

    const decoder = t.type({
      ${keys(attribute.attributes)
        .map((n) => `"${dasherize(n)}": ${varNameForTypeName(types, attribute.attributes[n].type)}`)
        .join(",\n")}
    })

    export const encoder = (value: ${varName}) => ({
      ${keys(attribute.attributes)
        .map((n) => `"${dasherize(n)}": value.${n}`)
        .join(",\n")}
    })

    export const ${varName} = new t.Type(
      decoder.name,
      decoder.is as unknown as t.Is<${varName}>,
      (u, c) => (
        either.chain(decoder.validate(u, c), (decoded) => t.success({
          ${keys(attribute.attributes)
            .map((n) => `${n}: decoded["${dasherize(n)}"]`)
            .join(",\n")}
        }))
      ),
      String
    )
  `
}

function generateResourceFiles(resources: Resources, types: Types): File[] {
  return keys(resources).map((name) =>
    generateResourceFile(name, resources[name], types, resources)
  )
}

function generateTypeFiles(types: Types): File[] {
  return keys(types).map((name) => ({
    path: `${typesPath}/${dasherize(name)}.ts`,
    contents: typeFileContents(types, name)
  }))
}

function decodeJson<T>(json: unknown, type: t.Type<T>) {
  const result = type.decode(json)
  if (isRight(result)) {
    return result.right
  }
  throw new InvalidJsonError(result.left)
}

try {
  generateResources()
} catch (error) {
  console.error(error.toString())
  process.exit(1)
}
