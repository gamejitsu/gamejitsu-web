import reviewRequest from "./reviewRequest"
import session from "./session"
import user from "./user"
import replay from "./replay"
import review from "./review"
import coach from "./coach"
import checkout from "./checkout"

export type ModelType = "review-request" | "session" | "user" | "replay" | "review" | "coach" | "checkout"

export default {
  "review-request": reviewRequest,
  session,
  user,
  replay,
  review,
  coach,
  checkout
}
