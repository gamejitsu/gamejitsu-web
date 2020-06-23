import { Replay } from "gamejitsu/api/resources/replay"
import { Comment } from "gamejitsu/api/types/comment"
import { ReviewRequest } from "gamejitsu/api/resources/review-request"
import { Review } from "gamejitsu/api/resources/review"
import { Coach } from "gamejitsu/api/resources/coach"
import { DecoratedReplay } from "gamejitsu/models/replay"

export interface DecoratedReview {
  reviewRequest: ReviewRequest
  replay: DecoratedReplay
  coachId: string
  comments: Comment[]
  id: string
  isPublished: boolean
  requestId: string
}

interface IncludedReview {
  "review-request": ReviewRequest[]
  replay: Replay[]
  coach: Coach[]
}

const decorateReplay = (replay: Replay) => {
  const playersDire = replay.players.slice(0, 5)
  const playersRadiant = replay.players.slice(5, 10)
  return {
    id: replay.id,
    matchId: replay.matchId,
    playedAt: replay.playedAt,
    playersDire,
    playersRadiant
  }
}

export const decorateReviews = (reviews: Review[], included: IncludedReview) => {
  return reviews.map((review) => {
    const reviewRequest = included["review-request"].find((r) => r.id === review.requestId)
    const replay = included.replay.find((r) => r.id === reviewRequest?.replayId)
    if (reviewRequest && replay) {
      console.log("found:", reviewRequest)
      return {
        reviewRequest,
        replay: decorateReplay(replay),
        coachId: review.coachId,
        comments: review.comments,
        id: review.id,
        isPublished: review.isPublished,
        requestId: review.requestId
      }
    }
  })
}
