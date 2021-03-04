import { DecoratedReplay, decorateReplay } from "gamejitsu/models/replay"
import { Replay } from "gamejitsu/api/resources/replay"
import { ReviewRequest } from "gamejitsu/api/resources/review-request"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { User } from "gamejitsu/api/resources/user"
import { ReviewRequestStatus } from "gamejitsu/api/types/review-request-status"
import { Review } from "gamejitsu/api/resources/review"
import { Metadata } from "gamejitsu/api/types/metadata"

export interface DecoratedReviewRequest {
  skillLevel: SkillLevel
  comment: string | null
  replayId: string
  id: string
  replay: DecoratedReplay
  user: User
  status: ReviewRequestStatus
  metadata: Metadata
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
    const review = included.review.find((re) => reviewRequest.reviewsIds.includes(re.id))
    let status: ReviewRequestStatus = "waiting_for_coach" as ReviewRequestStatus

    if (!replay?.videoUrl) {
      status = "waiting_for_replay" as ReviewRequestStatus
    } else {
      if (review?.isPublished) {
        status = "published" as ReviewRequestStatus
      } else if (review?.isDeleted) {
        status = "deleted" as ReviewRequestStatus
      } else {
        if (review?.id) {
          status = "accepted_by_coach" as ReviewRequestStatus
        } else {
          status = "waiting_for_coach" as ReviewRequestStatus
        }
      }
    }

    if (replay && user) {
      return {
        skillLevel: reviewRequest.skillLevel,
        comment: reviewRequest.comment,
        replayId: reviewRequest.replayId,
        id: reviewRequest.id,
        replay: decorateReplay(replay),
        user,
        metadata: reviewRequest.metadata,
        status
      }
    } else {
      throw new Error("Replay not found.")
    }
  })
}
