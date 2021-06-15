import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#fafafa",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: red,
      paper: red,
    },
  },
  typography: {
    htmlFontSize: 18,
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      fontFamily: "Montserrat",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
  },
})

export default theme
