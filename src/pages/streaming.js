import React from "react"
import Layout from "../components/Layout"
import { Grid, Container, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"
import StyledButton from "../components/StyledButton"

export default function Streaming() {
  const classes = useStyles()
  return (
    <Layout>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        className={classes.streamHeaderGrid}
        fixed
      >
        <Grid item>
          <Typography variant="h2" gutterBottom align="center">
            Growing Your Business, Is Our Business
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h2" gutterBottom align="center">
            WEDDING LIVE STREAMING SERVICE
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid item lg={6} md={6} xs={12}>
          <Typography variant="h4" gutterBottom align="left">
            WHY CHOOSE SNAX
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="left">
            SNAX Media uses specialized live streaming equipment for our wedding
            live streaming service. Your guests will be able to view your
            wedding live, sharing every special moment with you. Both of our
            streaming packages include everything you need to stream your
            wedding, including an on-site videographer with professional
            recording, audio and broadcasting equipment.
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Typography variant="h4" gutterBottom align="left">
            WHAT'S INCLUDED:
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="left">
            SNAX Media uses specialized live streaming equipment for our wedding
            live streaming service. Your guests will be able to view your
            wedding live, sharing every special moment with you. Both of our
            streaming packages include everything you need to stream your
            wedding, including an on-site videographer with professional
            recording, audio and broadcasting equipment.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <video
          controlslist="nodownload"
          src="https://snaxmedia.com/wp-content/uploads/2020/08/Live-Stream-Wedding-Video-1-5.mp4"
        ></video>
      </Grid>
    </Layout>
  )
}
