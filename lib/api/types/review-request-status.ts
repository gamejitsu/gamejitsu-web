import * as t from "io-ts"

export const ReviewRequestStatus = t.union([
  t.literal("waiting_for_coach"),
  t.literal("published"),
  t.literal("accepted_by_coach"),
  t.literal("deleted"),
  t.literal("waiting_for_replay")
])

export const encoder = t.identity

export type ReviewRequestStatus = t.TypeOf<typeof ReviewRequestStatus>
