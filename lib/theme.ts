import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  // Used for styled-breakpoints
  breakpointsObj: {
    xs: "576px",
    sm: "768px",
    md: "1024px",
    lg: "1420px"
  },
  // Used for Rebass
  breakpoints: ["576px", "768px", "1024px", "1420px"],
  colors: {
    activeColor: "#454545",
    backgroundColor: "#00030c",
    highlightColor: "#3518e5",
    lightBackgroundColor: "#212329",
    linkColor: "#ffffff",
    primaryColor: "#08ff07",
    secondaryColor: "#6d6d6d",
    textColor: "#bdbdc5",
    textColorDark: "#5b5a5a",
    lineColor: "#3a3c43",
    line2Color: "#3c3c3c"
  },
  textFont: "'Montserrat',sans-serif",
  borderRadius: "50px"
}

export default theme
