import React from "react"
import Layout from "../components/Layout"
import {
  Grid,
  Button,
  TextField,
  Container,
  Typography,
  FormGroup,
} from "@material-ui/core"
import useStyles from "../assets/css/styles"
import VideocamIcon from "@material-ui/icons/Videocam"
import MyButton from "../components/StyledButton"

export default function Contact() {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container className={classes.contactContainer}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Contact SNAX
          </Typography>
        </Grid>
      </Grid>
      {/* TOP CONTACT GRID WITH CONTACT INFO */}
      <Grid
        container
        spacing={10}
        style={{
          padding: "70px 100px 0 100px",
        }}
      >
        <Grid item lg={6} md={6} xs={12}>
          <Typography variant="h4" align="center">
            David McKenzie
          </Typography>
          <hr />
          <Typography variant="subtitle1" align="center">
            Partner
          </Typography>
          <Typography variant="subtitle1" align="center">
            David@SNAXMEDIA.COM
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Typography variant="h4" align="center">
            Scott Donald
          </Typography>
          <hr />
          <Typography variant="subtitle1" align="center">
            Partner
          </Typography>
          <Typography variant="subtitle1" align="center">
            SCOTT@SNAXMEDIA.COM
          </Typography>
        </Grid>
      </Grid>
      {/* BOTTOM CONTACT GRID WITH CONTACT FORM AND MAP */}
      <Grid
        container
        spacing={10}
        style={{
          padding: "100px 100px 50px 100px",
        }}
      >
        <Grid item lg={6} md={6} xs={12}>
          <FormGroup
            column
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField id="filled-basic" label="Name" variant="filled" />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField
              id="filled-basic"
              label="Phone Number"
              variant="filled"
            />
            <TextField id="filled-basic" label="Web Address" variant="filled" />
            <TextField id="filled-basic" label="Message" variant="filled" />
            <MyButton></MyButton>
          </FormGroup>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <MyButton></MyButton>
        </Grid>
      </Grid>
    </Layout>
  )
}
