import { schema, attr, hasOne } from "../schema"

export default schema({
  accessToken: attr("string"),
  replay: hasOne("replay")
})
