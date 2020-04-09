import { schema, embedsOne, hasOne } from "../schema"
import { SkillLevel } from "./skillLevel"

export default schema({
  skillLevel: embedsOne(SkillLevel),
  replay: hasOne("replay")
})
