import React from "react"
import { Grid, Button, Container, Typography } from "@material-ui/core"
import useStyles from "../assets/css/styles"
import MyButton from "../components/StyledButton"

export default function ImageBanner() {
  const classes = useStyles()
  return (
    <Container
      maxWidth="false"
      disableGutters="true"
      className={classes.imgBannerDiv}
    >
      <div className={classes.imgBannerDivOne}>
        <Grid
          container
          style={{
            padding: "250px 0 0 30px",
            color: "white",
          }}
        >
          <Grid item direction="column">
            <Typography variant="h2" gutterBottom>
              G-Tech Apparal
            </Typography>
            <hr />
            <MyButton></MyButton>
          </Grid>
        </Grid>
      </div>
      <div className={classes.imgBannerDivTwo}>
        <Grid
          container
          style={{
            padding: "250px 0 0 30px",
            color: "white",
          }}
        >
          <Grid item direction="column">
            <Typography variant="h2" gutterBottom>
              Pelagic Color Fishing Companyl
            </Typography>
            <hr />
            <MyButton></MyButton>
          </Grid>
        </Grid>
      </div>
      <div className={classes.imgBannerDivThree}>
        <Grid
          container
          style={{
            padding: "250px 0 0 30px",
            color: "white",
          }}
        >
          <Grid item direction="column">
            <Typography variant="h2" gutterBottom>
              Cherry Coatings
            </Typography>
            <hr />
            <MyButton></MyButton>
          </Grid>
        </Grid>
      </div>
      <div className={classes.imgBannerDivFive}>
        <Grid
          container
          style={{
            padding: "250px 0 0 30px",
            color: "white",
          }}
        >
          <Grid item direction="column">
            <Typography variant="h2" gutterBottom>
              City Square
            </Typography>
            <hr />
            <MyButton></MyButton>
          </Grid>
        </Grid>
      </div>
      <div className={classes.imgBannerDivSix}>
        <Grid
          container
          style={{
            padding: "250px 0 0 30px",
            color: "white",
          }}
        >
          <Grid item direction="column">
            <Typography variant="h2" gutterBottom>
              Genesis Systems
            </Typography>
            <hr />
            <MyButton></MyButton>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
