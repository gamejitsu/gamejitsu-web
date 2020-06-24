import { Comment } from "gamejitsu/api/types/comment"
import { DecoratedReplay, decorateReplay } from "gamejitsu/models/replay"
import { Replay } from "gamejitsu/api/resources/replay"
import { ReviewRequest } from "gamejitsu/api/resources/review-request"
import { SkillLevel } from "gamejitsu/api/types/skill-level"

export interface DecoratedReviewRequest {
  skillLevel: SkillLevel
  comment: string | null
  replayId: string
  id: string
  replay: DecoratedReplay
}

interface IncludedReviewRequest {
  replay: Replay[]
}

export const decorateReviewRequests = (
  reviewRequests: ReviewRequest[],
  included: IncludedReviewRequest
) => {
  return reviewRequests.map((reviewRequest) => {
    const replay = included.replay.find((r) => r.id === reviewRequest.replayId)
    if (replay) {
      return {
        skillLevel: reviewRequest.skillLevel,
        comment: reviewRequest.comment,
        replayId: reviewRequest.replayId,
        id: reviewRequest.id,
        replay: decorateReplay(replay)
      }
    }
  })
}
