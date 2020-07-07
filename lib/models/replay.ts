import { Player } from "gamejitsu/api/types/player"
import { Replay } from "gamejitsu/api/resources/replay"

export interface DecoratedReplay {
  id: string
  matchId: string
  playedAt: Date
  playersDire: Player[]
  playersRadiant: Player[]
  duration: number
  radiantWin: boolean
}

export const decorateReplays = (replays: Replay[]) => {
  return replays.map((replay) => {
    const playersDire = replay.players.slice(0, 5)
    const playersRadiant = replay.players.slice(5, 10)
    return {
      id: replay.id,
      matchId: replay.matchId,
      playedAt: replay.playedAt,
      duration: replay.duration,
      radiantWin: replay.radiantWin,
      playersDire,
      playersRadiant
    }
  })
}

export const decorateReplay = (replay: Replay) => {
  const playersDire = replay.players.slice(0, 5)
  const playersRadiant = replay.players.slice(5, 10)
  return {
    id: replay.id,
    matchId: replay.matchId,
    playedAt: replay.playedAt,
    duration: replay.duration,
    radiantWin: replay.radiantWin,
    playersDire,
    playersRadiant
  }
}
