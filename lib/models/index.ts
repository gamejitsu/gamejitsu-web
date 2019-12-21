import reviewRequest from "./review-request"
import session from "./session"
import user from "./user"
import replay from "./replay"

export type ModelType = "review-request" | "session" | "user" | "replay"

export default {
  "review-request": reviewRequest,
  session,
  user,
  replay
}
