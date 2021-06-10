import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import useStyles from "../assets/css/styles"
import Hidden from "@material-ui/core/Hidden"

const Navbar = () => {
  const classes = useStyles()
  return (
    <nav className="classes.root">
      <AppBar position="sticky" className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.title}>
            <img
              className={classes.title}
              src="https://snaxmedia.com/wp-content/uploads/2020/06/Snax-Media-White-8-300x35.png"
            />
          </Typography>
          <Hidden xsDown>
            <Link className={classes.navLinks} to="/">
              WORK
            </Link>
            <Link className={classes.navLinks} to="/about">
              SERVICES
            </Link>
            <Link className={classes.navLinks} to="/contact">
              CONTACT
            </Link>
          </Hidden>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <MenuIcon />
          </Hidden>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default Navbar
