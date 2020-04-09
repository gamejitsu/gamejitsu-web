import { schema, attr, hasOne, embedsOne } from "../schema"
import { SkillLevel } from "./skillLevel"

export default schema({
  email: attr("string"),
  firstName: attr("string"),
  lastName: attr("string"),
  photoUrl: attr("string", true),
  user: hasOne("user"),
  skillLevel: embedsOne(SkillLevel)
})
