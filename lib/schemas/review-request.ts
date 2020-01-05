import { schema, hasOne, embedsOne } from "../schema"
import * as t from "io-ts"

const SkillLevel = t.union([
  t.literal("medium"),
  t.literal("high"),
  t.literal("very_high"),
  t.literal("pro")
])

export default schema({
  skillLevel: embedsOne(SkillLevel),
  replay: hasOne("replay")
})
