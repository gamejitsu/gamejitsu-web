const formatComponent = (component: number, suffix: string, display: boolean = false) =>
  component === 0 && !display ? "" : `${component}${suffix}`

const formatTimestamp = (timestamp: number) => {
  const seconds = timestamp % 60
  const minutes = Math.floor(timestamp / 60) % 60
  const hours = Math.floor(timestamp / 3600) % 60
  const components: [number, string, boolean?][] = [
    [hours, "h"],
    [minutes, "m"],
    [seconds, "s", true]
  ]
  return components.map((component) => formatComponent(...component)).join("")
}

export { formatTimestamp }
