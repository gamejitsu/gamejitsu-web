import { schema, attr, hasOne } from "../schema"

export default schema({
  steamId: attr("string"),
  isSyncingReplays: attr("boolean"),
  username: attr("string"),
  coach: hasOne("coach")
})
