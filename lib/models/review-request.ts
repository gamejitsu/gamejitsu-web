import { DecoratedReplay, decorateReplay } from "gamejitsu/models/replay"
import { Replay } from "gamejitsu/api/resources/replay"
import { ReviewRequest } from "gamejitsu/api/resources/review-request"
import { SkillLevel } from "gamejitsu/api/types/skill-level"
import { User } from "gamejitsu/api/resources/user"
import { ReviewRequestStatus } from "gamejitsu/api/types/review-request-status"
import { Review } from "gamejitsu/api/resources/review"

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
    const review = included.review.find((re) => reviewRequest.reviewsIds.includes(re.id))
<<<<<<< HEAD
    let status: ReviewRequestStatus = "waiting_for_coach" as ReviewRequestStatus
    review?.isPublished
      ? (status = "published" as ReviewRequestStatus)
      : review?.id
      ? (status = "accepted_by_coach" as ReviewRequestStatus)
      : (status = "waiting_for_coach" as ReviewRequestStatus)
=======
    let status: ReviewRequestStatus = ("waiting_for_coach" as ReviewRequestStatus)
      review?.isPublished 
        ? status = ("published" as ReviewRequestStatus) 
        : review?.id 
        ? status = ("accepted_by_coach" as ReviewRequestStatus)
        : status = ("waiting_for_coach" as ReviewRequestStatus)
>>>>>>> 1f7fe565bedbf3d5d8cdf6c551f71dd9bca77515
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
