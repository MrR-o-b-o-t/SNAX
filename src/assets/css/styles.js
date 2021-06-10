import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: { flexGrow: "1" },
  navbar: {
    backgroundColor: "black",
  },
  doubleHero: {
    flexGrow: "1",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    paddingBottom: "30px",
  },
  imgBannerDiv: {
    margin: "340px 0 0 30px",
  },
  imgBanner: {
    height: "850px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://snaxmedia.com/wp-content/uploads/2020/07/Superior-Pool-Service-001.jpg")`,
  },
  imgBanner2: {
    height: "850px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://snaxmedia.com/wp-content/uploads/2020/07/Superior-Pool-Service-001.jpg")`,
  },
  imgBanner3: {
    height: "850px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://snaxmedia.com/wp-content/uploads/2020/07/Superior-Pool-Service-001.jpg")`,
  },
  footer: {
    textAlign: "center",
    display: "flex",
    height: "300px",
    alignItems: "center",
    background: "black",
    color: "white",
    padding: "2rem 0 2rem 0",
    width: "100%",
    position: "fixed",
    bottom: "0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: "20px",
  },
  title: {
    flexGrow: 1,
    width: "200px",
  },
  navLinks: {
    textDecoration: "none",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
  },
  homeContainer: {
    paddingTop: "200px",
    backgroundImage: `URL(
      "https://snaxmedia.com/wp-content/uploads/2021/04/SNAX-Media-Banner.jpg"
    )`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "white",
    height: "900px",
  },
  headerCards: {
    // display: "flex",
    paddingTop: "100px",
  },
  mainButton: {
    margin: "30px",
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}))

export default useStyles
