import * as t from "io-ts"

import { Model } from "../api/response"
import { SkillLevel } from "../schemas/skillLevel"

export type User = Model<"user">
export type Checkout = Model<"checkout">
export type Coach = Model<"coach">
export type Review = Model<"review">
export type Replay = Model<"replay">
export type Session = Model<"session">
export type ReviewRequest = Model<"review-request">

export type SkillLevel = t.TypeOf<typeof SkillLevel>
