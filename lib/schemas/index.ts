import { ModelOfType } from "../schema"
import reviewRequest from "./review-request"
import session from "./session"
import user from "./user"
import replay from "./replay"

export type ModelType = "review-request" | "session" | "user" | "replay"

export type ReviewRequest = ModelOfType<"review-request">
export type Session = ModelOfType<"session">
export type User = ModelOfType<"user">
export type Replay = ModelOfType<"replay">

export default {
  "review-request": reviewRequest,
  session,
  user,
  replay
}
