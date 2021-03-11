import { generateMedia } from "styled-media-query"

// mediaBreakpoint.lessThan('md')``
// mediaBreakpoint.between('sm','md')``
// mediaBreakpoint.greaterThan('lg')``

const media = generateMedia({
  lg: "1420px",
  md: "1024px",
  sm: "768px",
  xs: "576px"
})

export { media }
