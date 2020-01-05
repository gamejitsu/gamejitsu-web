import * as t from "io-ts"
import { ModelOfType } from "../schema"
import { Comment } from "../schemas/review"

export type Review = ModelOfType<"review">
export type Comment = t.TypeOf<typeof Comment>
