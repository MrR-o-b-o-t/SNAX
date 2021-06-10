import React from "react"
import { Grid, Button, Container, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"

export default function ImageBanner() {
  const classes = useStyles()
  return (
    <Container className={classes.imgBannerDiv}>
      <Typography>G-Tech Apparal</Typography>
      <hr />
      <Button className={classes.mainButton}>View Project</Button>
    </Container>
  )
}
