import { schema, attr, hasOne } from "../schema"

export default schema({
  email: attr("string"),
  firstName: attr("string"),
  lastName: attr("string"),
  photoUrl: attr("string", true),
  user: hasOne("user")
})
