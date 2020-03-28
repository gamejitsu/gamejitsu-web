import * as t from "io-ts"

import { Player } from "../schemas/replay"
import { Replay } from "."

export type Player = t.TypeOf<typeof Player>
export type DeserializedReplay = ReturnType<typeof deserializeReplays>[number]

export const deserializeReplays = (replays: Replay[]) => {
  return replays.map((replay) => {
    const playersDire = replay.players.slice(0, 5)
    const playersRadiant = replay.players.slice(5, 10)

    return {
      id: replay.id,
      matchId: replay.matchId,
      playedAt: replay.playedAt,
      playersDire,
      playersRadiant
    }
  })
}
