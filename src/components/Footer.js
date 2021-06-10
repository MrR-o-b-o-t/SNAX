import React from "react"
import { Grid, Container, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container className={classes.root}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h5">SnaxMEDIA</Typography>
            <Typography>214-307-2738</Typography>
            <Typography>info@snaxmedia.com</Typography>
            <Typography>14679 Midway Rd.</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <Typography>Video Production</Typography>
            <Typography>Our Work</Typography>
            <Typography>Live Streaming</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <Typography>Website Design</Typography>
            <Typography>Design</Typography>
            <Typography>Development</Typography>
            <Typography>App Design</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <Typography>Marketing</Typography>
            <Typography>SEO</Typography>
            <Typography>SEM</Typography>
            <Typography>Social Media</Typography>
            <Typography>Print</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
