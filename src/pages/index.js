import React from "react"
import Layout from "../components/Layout"
import DoubleHero from "../components/DoubleHero"
import ImageBanner from "../components/ImageBanner"
import { Grid, Button, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"
import VideocamIcon from "@material-ui/icons/Videocam"
import MyButton from "../components/StyledButton"

export default function Home() {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container className={classes.homeContainer}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Need Some Snax?
          </Typography>
          <Typography variant="subtitle2" align="center">
            SNAX Media is a full-service digital media agency specializing in
            video production, website design, and digital marketing.
          </Typography>
        </Grid>
        <Grid
          className={classes.headerCards}
          container
          spacing={4}
          align="center"
        >
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <VideocamIcon fontSize="large"></VideocamIcon>
            <Typography variant="h5">Video Production</Typography>
            <Typography variant="subtitle2">
              Captivating video is a great way to inform, communicate, and sell.
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <VideocamIcon fontSize="large"></VideocamIcon>
            <Typography variant="h5">Video Production</Typography>
            <Typography variant="subtitle2">
              Captivating video is a great way to inform, communicate, and sell.
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <VideocamIcon fontSize="large"></VideocamIcon>
            <Typography variant="h5">Video Production</Typography>
            <Typography variant="subtitle2">
              Captivating video is a great way to inform, communicate, and sell.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <MyButton></MyButton>
          </Grid>
        </Grid>
      </Grid>
      <DoubleHero />
      <ImageBanner />
    </Layout>
  )
}
