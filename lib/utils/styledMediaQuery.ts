import { makeStyledBreakpoints } from 'styled-breakpoints/core'
const { up, down, between, only } = makeStyledBreakpoints({pathToMediaQueries:['breakpointsObj']});

export { up, down, between, only }
