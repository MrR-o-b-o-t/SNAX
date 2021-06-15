import React from "react"
// import { styled } from "@material-ui/core/styles"
import propTypes from "prop-types"
import { Button, withStyles } from "@material-ui/core"
import { grey, black } from "@material-ui/core/colors"

const styles = () => ({
  default: {
    borderRadius: 0,
    fontWeight: "bold",
  },
  primary: {
    "&:hover": {
      backgroundColor: grey[50],
      color: grey[900],
    },
  },
  secondary: {
    "&:hover": {
      backgroundColor: grey[900],
      color: grey[50],
    },
  },
})

const StyledButton = ({ color, children, classes }) => {
  return (
    <Button
      variant="contained"
      color={color}
      size="large"
      classes={{
        root: classes.default,
        containedSecondary: classes.secondary,
        containedPrimary: classes.primary,
      }}
      disabledElevation
    >
      {children}
    </Button>
  )
}

StyledButton.propTypes = {
  color: propTypes.string,
}

export default withStyles(styles)(StyledButton)

// margin: "20px",
// background: "white",
// border: "none",
// borderRadius: "0",
// color: "black",
// fontSize: "22px",
// height: 48,
// padding: "0 30px",
// "&:hover": {
//   backgroundColor: "black",
//   color: "white",
// },
