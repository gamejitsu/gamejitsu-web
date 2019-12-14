import { ModelOfType } from "../api/model"
import session from "./session"
import user from "./user"

export type Session = ModelOfType<"session">
export type User = ModelOfType<"user">

export default { session, user }
