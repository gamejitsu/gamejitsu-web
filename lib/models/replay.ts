import * as t from "io-ts"
import { ModelOfType } from "../schema"
import { Player } from "../schemas/replay"

export type Replay = ModelOfType<"replay">
export type Player = t.TypeOf<typeof Player>
