const formatComponent = (component: number, suffix: string) =>
  component === 0 ? "" : `${component}${suffix}`

const formatTimestamp = (timestamp: number) => {
  const seconds = timestamp % 60
  const minutes = Math.floor(timestamp / 60) % 60
  const hours = Math.floor(timestamp / 3600) % 60
  const components: [number, string][] = [
    [hours, "h"],
    [minutes, "m"],
    [seconds, "s"]
  ]
  return components.map((component) => formatComponent(...component)).join("")
}

export { formatTimestamp }
