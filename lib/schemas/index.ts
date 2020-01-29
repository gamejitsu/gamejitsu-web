import reviewRequest from "./reviewRequest"
import session from "./session"
import user from "./user"
import replay from "./replay"
import review from "./review"
import coach from "./coach"

export type ModelType = "review-request" | "session" | "user" | "replay" | "review" | "coach"

export default {
  "review-request": reviewRequest,
  session,
  user,
  replay,
  review,
  coach
}
