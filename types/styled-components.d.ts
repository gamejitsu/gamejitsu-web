import "styled-components"

interface MediaBreakpointObj {
  xs: string
  sm: string
  md: string
  lg: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    breakpointsObj: MediaBreakpointObj
    breakpoints: string[]
    colors: {
      activeColor: string
      backgroundColor: string
      lightBackgroundColor: string
      linkColor: string
      primaryColor: string
      secondaryColor: string
      textColor: string
      textColorDark: string
      highlightColor: string
      lineColor: string
      line2Color: string
    }
    textFont: string
    borderRadius: string
  }
}
