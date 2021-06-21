import React from "react"
import Layout from "../components/Layout"
import { Grid, Container, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"
import StyledButton from "../components/StyledButton"
import { StylesContext } from "@material-ui/styles"
import VideocamIcon from "@material-ui/icons/Videocam"

export default function Streaming() {
  const classes = useStyles()
  return (
    <Layout>
      <Container
        disableGutters="true"
        maxWidth="false"
        className={classes.streamingContainer}
      >
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
              SNAX Media uses specialized live streaming equipment for our
              wedding live streaming service. Your guests will be able to view
              your wedding live, sharing every special moment with you. Both of
              our streaming packages include everything you need to stream your
              wedding, including an on-site videographer with professional
              recording, audio and broadcasting equipment.
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h4" gutterBottom align="left">
              WHAT'S INCLUDED:
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="left">
              SNAX Media uses specialized live streaming equipment for our
              wedding live streaming service. Your guests will be able to view
              your wedding live, sharing every special moment with you. Both of
              our streaming packages include everything you need to stream your
              wedding, including an on-site videographer with professional
              recording, audio and broadcasting equipment.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <iframe
              src="https://snaxmedia.com/wp-content/uploads/2020/08/Live-Stream-Wedding-Video-1-5.mp4"
              frameborder="0"
              width="100%"
              height="750px"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Snaxx Wedding Live Stream Service"
            ></iframe>
          </Grid>
          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              xs={12}
              style={{
                backgroundColor: "#143840",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={12}>
                <Typography
                  style={{ margin: "0px auto", paddingBottom: "40px" }}
                >
                  SHARE EVERY MOMENT
                </Typography>
                <Typography style={{ margin: "0px auto" }}>
                  Limitations of gatherings due to COVID-19 has made it
                  difficult to share your wedding day with friends and family.
                  With our live streaming service you will be able to include
                  those that are unable to travel or attend your wedding.
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <img
                width="100%"
                height="100%"
                src="https://snaxmedia.com/wp-content/uploads/2020/08/Share-Every-Moment-1080.jpg"
              ></img>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6} md={6} xs={12}>
              <img
                width="100%"
                height="100%"
                src="https://snaxmedia.com/wp-content/uploads/2020/08/Remote-Internet-Access-1080.jpg"
              ></img>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xs={12}
              style={{
                backgroundColor: "#734949",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={12}>
                <Typography
                  style={{ margin: "0px auto", paddingBottom: "40px" }}
                >
                  SHARE EVERY MOMENT
                </Typography>
                <Typography style={{ margin: "0px auto" }}>
                  Limitations of gatherings due to COVID-19 has made it
                  difficult to share your wedding day with friends and family.
                  With our live streaming service you will be able to include
                  those that are unable to travel or attend your wedding.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              xs={12}
              style={{
                backgroundColor: "#D9B2A9",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item xs={12}>
                <Typography
                  style={{ margin: "0px auto", paddingBottom: "40px" }}
                >
                  SHARE EVERY MOMENT
                </Typography>
                <Typography style={{ margin: "0px auto" }}>
                  Limitations of gatherings due to COVID-19 has made it
                  difficult to share your wedding day with friends and family.
                  With our live streaming service you will be able to include
                  those that are unable to travel or attend your wedding.
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <img
                width="100%"
                height="100%"
                src="https://snaxmedia.com/wp-content/uploads/2020/08/From-Start-To-Finish-1080.jpg"
              ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classes.headerCards}
          container
          spacing={2}
          align="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h5">HOW IT WORKS</Typography>
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
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <VideocamIcon fontSize="large"></VideocamIcon>
            <Typography variant="h5">Video Production</Typography>
            <Typography variant="subtitle2">
              Captivating video is a great way to inform, communicate, and sell.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
