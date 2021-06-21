import React from "react"
import { Link } from "gatsby"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
  withStyles,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import useStyles from "../assets/css/styles"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))

const Navbar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
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
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.navLinks}
            >
              SERVICES
              <ArrowDropDownIcon />
            </Button>
            <StyledMenu
              className={classes.navLinks}
              id="simple-menu"
              variant="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link className={classes.navLinks} to="/about">
                  Marketing Services
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classes.navLinks} to="/design">
                  Website Design
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classes.navLinks} to="/seo">
                  SEO
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classes.navLinks} to="/streaming">
                  Live Streaming
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classes.navLinks} to="/about">
                  Video Production
                </Link>
              </MenuItem>
            </StyledMenu>
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
