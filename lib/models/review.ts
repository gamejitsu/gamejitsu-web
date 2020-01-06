import * as t from "io-ts"
import { Comment } from "../schemas/review"

export type Comment = t.TypeOf<typeof Comment>
