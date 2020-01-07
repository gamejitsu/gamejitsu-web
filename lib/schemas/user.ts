import { schema, attr } from "../schema"

export default schema({
  steamId: attr("string"),
  isSyncingReplays: attr("boolean"),
  username: attr("string")
})
