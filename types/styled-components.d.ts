import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
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
