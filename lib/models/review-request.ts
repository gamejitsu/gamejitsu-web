import { DecoratedReplay, decorateReplay } from "gamejitsu/models/replay"
import { Replay } from "gamejitsu/api/resources/replay"
import { ReviewRequest } from "gamejitsu/api/resources/review-request"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { User } from "gamejitsu/api/resources/user"
import { Review } from "gamejitsu/api/resources/review"

type ReviewRequestStatus = "waiting_for_coach" | "published" | "accepted_by_coach"

export interface DecoratedReviewRequest {
  skillLevel: SkillLevel
  comment: string | null
  replayId: string
  id: string
  replay: DecoratedReplay
  user: User
  status: ReviewRequestStatus
}

interface IncludedReviewRequest {
  replay: Replay[]
  user: User[]
  review: Review[]
}

export const decorateReviewRequests = (
  reviewRequests: ReviewRequest[],
  included: IncludedReviewRequest
) => {
  return reviewRequests.map((reviewRequest) => {
    const replay = included.replay.find((r) => r.id === reviewRequest.replayId)
    const user = included.user.find((u) => u.id === reviewRequest.userId)
    let status: ReviewRequestStatus = "waiting_for_coach"
    included.review.map((review) =>
      review.isPublished ? (status = "published") : (status = "accepted_by_coach")
    )
    if (replay && user) {
      return {
        skillLevel: reviewRequest.skillLevel,
        comment: reviewRequest.comment,
        replayId: reviewRequest.replayId,
        id: reviewRequest.id,
        replay: decorateReplay(replay),
        user,
        status
      }
    } else {
      throw new Error("Replay not found.")
    }
  })
}
