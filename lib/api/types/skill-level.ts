import * as t from "io-ts"

export const SkillLevel = t.union([
  t.literal("high"),
  t.literal("very_high"),
  t.literal("pro"),
  t.literal("hero")
])

export const encoder = t.identity

export type SkillLevel = t.TypeOf<typeof SkillLevel>
