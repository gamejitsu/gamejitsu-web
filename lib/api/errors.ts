import { AxiosResponse } from "axios"
import { extractValue } from "./resource"
import * as t from "io-ts"

export type ServerError = t.TypeOf<typeof ServerError>

export const ServerError = t.partial({
  code: t.string,
  source: t.type({ pointer: t.string }),
  title: t.string,
  detail: t.string
})

const serverErrorsDecoder = t.type({
  jsonapi: t.type({ version: t.literal("1.0") }),
  errors: t.array(ServerError)
})

export class ServerErrors extends Error {
  response: AxiosResponse
  errors: ServerError[]

  constructor(response: AxiosResponse) {
    super(`Server error: ${response.status}`)
    this.response = response

    this.errors = extractValue(serverErrorsDecoder.decode(response.data)).errors.map((error) => ({
      code: error.code,
      source: error.source,
      title: error.title,
      detail: error.detail
    }))

    Object.setPrototypeOf(this, new.target.prototype)
  }
}
