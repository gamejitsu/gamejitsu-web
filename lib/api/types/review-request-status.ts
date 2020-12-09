import * as t from "io-ts"

export const ReviewRequestStatus = t.union([
  t.literal("waiting_for_coach"),
  t.literal("published"),
  t.literal("accepted_by_coach")
])

export const encoder = t.identity

<<<<<<< HEAD
export type ReviewRequestStatus = t.TypeOf<typeof ReviewRequestStatus>
=======
export type ReviewRequestStatus = t.TypeOf<typeof ReviewRequestStatus>
>>>>>>> 1f7fe565bedbf3d5d8cdf6c551f71dd9bca77515
