import { schema, attr } from "../schema"

export default schema({
  openidParams: attr("string", true),
  accessToken: attr("string")
})
