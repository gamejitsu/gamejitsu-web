import { Position, Toaster } from "@blueprintjs/core"

// Note: If (window || document) do not exist, we are in SSR and Toaster can't be created
export default typeof window !== "undefined"
  ? Toaster.create({
      className: "generic-toaster",
      position: Position.TOP
    })
  : null
