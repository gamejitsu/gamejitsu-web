import * as t from "io-ts"
import { Player } from "../schemas/replay"

export type Player = t.TypeOf<typeof Player>
