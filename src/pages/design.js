import React from "react"
import Layout from "../components/Layout"
import { Grid, Container, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"
import StyledButton from "../components/StyledButton"

export default function Design() {
  const classes = useStyles()
  return (
    <Layout>
      <Container className={classes.design} maxWidth="false">
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            We Create Websites That Work For You
          </Typography>
        </Grid>
        <Grid
          container
          style={{
            padding: "70px 120px 0 100px",
          }}
        >
          {/* TOP CONTACT GRID WITH CONTACT INFO */}
          <Grid item lg={6} md={6} xs={12}>
            <img
              style={{
                maxWidth: "500px",
              }}
              // className={classes.title}
              src="https://snaxmedia.com/wp-content/uploads/2020/12/Fortress-Mockups-2.jpg"
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h4" align="left">
              Creative Design
            </Typography>
            <Typography variant="subtitle1" align="left">
              Showcase your business online with a professional website, online
              store, or portfolio. With Snax Media, you can take your brick and
              mortar business and create a thriving online storefront.
            </Typography>
            <Grid item lg={6} md={6} xs={12}>
              <Typography variant="subtitle1" align="left">
                FRONTEND DESIGN
              </Typography>
              <Typography variant="subtitle1" align="left">
                BRAND DESIGN
              </Typography>
              <Typography variant="subtitle1" align="left">
                DESIGN USER EXPERIENCE
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            padding: "70px 100px 0 100px",
          }}
        >
          <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h4" align="left">
              Development
            </Typography>
            <Typography variant="subtitle1" align="left">
              Most businesses aren’t cookie-cutter. Your website shouldn’t be
              either. Our background in e-commerce, logo design, copywriting,
              programming, and business development means we can approach each
              project with a talented team who ensures your website is uniquely
              yours.
            </Typography>
            <Grid item lg={6} md={6} xs={12}>
              <Typography variant="subtitle1" align="left">
                WEB DEVELOPMENT
              </Typography>
              <Typography variant="subtitle1" align="left">
                MOBILE DEVELOPMENT
              </Typography>
              <Typography variant="subtitle1" align="left">
                DATA & ANALYTICS
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <img
              style={{
                maxWidth: "500px",
              }}
              // className={classes.title}
              src="https://snaxmedia.com/wp-content/uploads/2020/12/Pelagic-Color-Desktop.jpg"
            />
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            padding: "70px 100px 0 100px",
          }}
        >
          <Grid item lg={6} md={6} xs={12}>
            <img
              style={{
                maxWidth: "500px",
              }}
              // className={classes.title}
              src="https://snaxmedia.com/wp-content/uploads/2020/12/CaseByChase-Mockup.jpg"
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12} align="left">
            <Typography variant="h4">
              Creative Design + Solid Development
            </Typography>
            <Typography variant="subtitle1">
              Web design is customer experience focused while web development
              deals with the backend mechanisms that make sure everything on the
              surface works flawlessly. Pair the two together to create a
              website that doesn’t just look good, but is also intuitive and
              easy to navigate. Over the last 10 years Snax Media has attracted
              top talent in both website design and webs development. Our
              clients range from small service companies to large multinational
              corporations. No matter the size of your business, Snax is here to
              help.
            </Typography>
            <Grid item lg={6} md={6} xs={12} align="left">
              <Typography variant="subtitle1">USER RESEARCH</Typography>
              <Typography variant="subtitle1">
                PRODUCT & BRAND STRATEGY
              </Typography>
              <Typography variant="subtitle1">TECHNOLOGY STRATEGY</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* BOTTOM CONTACT GRID WITH CONTACT FORM AND MAP */}
        <Grid
          container
          align="center"
          style={{
            padding: "100px 100px 50px 100px",
          }}
        >
          <Grid item lg={12} md={12} xs={12}>
            <Typography>Contact Us</Typography>
            <StyledButton color="primary">Click Here</StyledButton>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
