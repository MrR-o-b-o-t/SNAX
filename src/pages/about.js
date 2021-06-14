import React from "react"
import Layout from "../components/Layout"
import DoubleHero from "../components/DoubleHero"
import ImageBanner from "../components/ImageBanner"
import { Grid, Button, Container, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"
import VideocamIcon from "@material-ui/icons/Videocam"
import MyButton from "../components/StyledButton"

export default function About() {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container className={classes.servicesContainer}>
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Marketing Services
          </Typography>
        </Grid>
      </Grid>
      <Container className={classes.servicesHero} maxWidth="false">
        <Grid container spacing={10}>
          <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h4" align="left">
              Video Production
            </Typography>
            <Typography variant="subtitle2" align="left">
              Snax Media is a full-service digital marketing agency. We are a
              talented hard-working group of video-focused creatives who love
              helping businesses grow and flourish. We come from an array of
              backgrounds, and all love the creative fluidity of dynamic video
              content. No project is too big or small, our scope ranges from
              small startups to large global brands. Our team of videographers,
              editors, graphic designers, and web developers come together as
              one cohesive unit to create visually, emotionally, and rationally
              compelling content catered to your customers. We first get to know
              you, the client, to better understand the personality of your
              business. Then we work to understand the goals of the
              organization. Once we grasp the personality and goals our work
              begins.
            </Typography>
            <MyButton></MyButton>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h4" align="center">
              Photography
            </Typography>
            <Typography variant="subtitle2" align="center">
              Photography will act as an auxiliary to your global marketing
              strategy by conveying the purpose, context, and lifestyle of your
              brand or business. Clear and creative photos demonstrate the
              credibility of your business or brand by establishing an authentic
              image of who you are and what you are all about. Customers will
              trust your business because of your authenticity and will want to
              support you because of the trust you have established.
            </Typography>
            <MyButton></MyButton>
          </Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h4" align="center">
              Website Design
            </Typography>
            <Typography variant="subtitle2" align="center">
              A majority of consumers are searching online for information that
              will help them make smarter purchasing decisions. In fact,
              according to the eCommerce Foundation, 88 % of consumers will
              research product and service information before they make an
              online or in-store purchase. This trend in buying behavior
              underlines the importance of the website for today’s businesses.
            </Typography>
            <MyButton></MyButton>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h4" align="center">
              Search Engine Optimization
            </Typography>
            <Typography variant="subtitle2" align="center">
              Marketing is difficult — and digital marketing is even more so.
              And the black-box nature of SEO can make it the most difficult
              form of marketing. However, when done well, there is very little
              that can compete with a powerful, organic search engine
              optimization to support your business. Organic listings build
              trust with local customers, and all the best business
              relationships are established on the basis of trust.
            </Typography>
            <MyButton></MyButton>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
