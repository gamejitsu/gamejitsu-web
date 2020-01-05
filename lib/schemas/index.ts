import reviewRequest from "./review-request"
import session from "./session"
import user from "./user"
import replay from "./replay"
import review from "./review"

export type ModelType = "review-request" | "session" | "user" | "replay" | "review"

export default {
  "review-request": reviewRequest,
  session,
  user,
  replay,
  review
}
