import React from "react"
import { Grid, Button, Container, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"

export default function DoubleHero() {
  const classes = useStyles()
  return (
    <Container className={classes.doubleHero} maxWidth="false">
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6} md={6}>
          <Typography variant="h2" align="center">
            Video Production. Media Strategy. Digital Marketing.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <Typography variant="subtitle2" align="center">
            Snax Media is a full-service digital marketing agency. We are a
            talented hard-working group of video-focused creatives who love
            helping businesses grow and flourish. We come from an array of
            backgrounds, and all love the creative fluidity of dynamic video
            content. No project is too big or small, our scope ranges from small
            startups to large global brands. Our team of videographers, editors,
            graphic designers, and web developers come together as one cohesive
            unit to create visually, emotionally, and rationally compelling
            content catered to your customers. We first get to know you, the
            client, to better understand the personality of your business. Then
            we work to understand the goals of the organization. Once we grasp
            the personality and goals our work begins.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.doubleHero2}>
        <Grid item xs={12} lg={6} md={3}>
          <iframe
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            src="https://www.youtube.com/embed/0x6-9g8HdZk?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=1&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsnaxmedia.com&amp;widgetid=1"
          />
        </Grid>
        <Grid item xs={12} lg={6} md={9}>
          <Typography
            variant="h4"
            align="center"
            style={{ marginBottom: "20px" }}
          >
            Project Inquiry
          </Typography>
          <Typography variant="subtitle2" align="center">
            Let us know a little bit about your business, what kind of project
            you have in mind, and we will get back to you to set up a call or
            face-to-face meeting to learn more about you and your business and
            discuss in more detail how we can help you.
          </Typography>
          <Button variant="contained" className={classes.mainButton}>
            Contact SNAX
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
