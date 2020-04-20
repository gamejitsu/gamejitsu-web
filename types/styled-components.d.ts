import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    activeColor: string
    backgroundColor: string
    buttonTextColor: string
    lightBackgroundColor: string
    errorColor: string
    linkColor: string
    primaryColor: string
    secondaryColor: string
    textColor: string
    textFont: string
    borderRadius: string
  }
}
