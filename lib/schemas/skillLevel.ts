import * as t from "io-ts"

export const SkillLevel = t.union([
  t.literal("medium"),
  t.literal("high"),
  t.literal("very_high"),
  t.literal("pro")
])
