import { either } from "fp-ts/lib/Either"
import * as t from "io-ts"

export interface Player {
  steamId: string | null
  heroName: string
  heroPortraitUrl: string
}

const decoder = t.type({
  "steam-id": t.union([t.string, t.null]),
  "hero-name": t.string,
  "hero-portrait-url": t.string
})

export const encoder = (value: Player) => ({
  "steam-id": value.steamId,
  "hero-name": value.heroName,
  "hero-portrait-url": value.heroPortraitUrl
})

export const Player = new t.Type(
  decoder.name,
  (decoder.is as unknown) as t.Is<Player>,
  (u, c) =>
    either.chain(decoder.validate(u, c), (decoded) =>
      t.success({
        steamId: decoded["steam-id"],
        heroName: decoded["hero-name"],
        heroPortraitUrl: decoded["hero-portrait-url"]
      })
    ),
  String
)
