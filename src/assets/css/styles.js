import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: { flexGrow: "1" },
  navbar: {
    backgroundColor: "black",
  },
  doubleHero: {
    minHeight: "800px",
    flexGrow: "1",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  servicesHero: {
    flexGrow: "1",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  contactHero: {
    flexGrow: "1",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  imgBannerDiv: {
    margin: "0 0 0 0",
    width: "100%",
  },
  imgBannerDivOne: {
    height: "850px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://snaxmedia.com/wp-content/uploads/2020/12/G-Tech-Arkansas-Hunting-Trip-2.jpg")`,
  },
  imgBannerDivTwo: {
    height: "850px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://www.snaxmedia.com/wp-content/uploads/2020/07/Pelagic-Color-283.jpg")`,
  },
  imgBannerDivThree: {
    height: "850px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://www.snaxmedia.com/wp-content/uploads/2020/07/Cherry-Coatings-001.jpg")`,
  },
  imgBannerDivFour: {
    height: "850px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://snaxmedia.com/wp-content/uploads/2020/07/Superior-Pool-Service-001.jpg")`,
  },
  imgBannerDivFive: {
    height: "850px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://www.snaxmedia.com/wp-content/uploads/2020/07/City-Square-001.jpg")`,
  },
  imgBannerDivSix: {
    height: "850px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `URL("https://www.snaxmedia.com/wp-content/uploads/2020/07/Genesis-Systems.jpg")`,
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
    backgroundImage: `URL(
      "https://snaxmedia.com/wp-content/uploads/2021/04/SNAX-Media-Banner.jpg"
    )`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "white",
    minHeight: "1200px",
    display: "flex",
    alignItems: "center",
  },
  servicesContainer: {
    backgroundImage: `URL(
      "https://snaxmedia.com/wp-content/uploads/2020/09/Marketing-Services.jpg"
    )`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "white",
    minHeight: "700px",
    display: "flex",
    alignItems: "center",
  },
  contactContainer: {
    backgroundImage: `URL(
      "https://snaxmedia.com/wp-content/uploads/2021/01/Genesis-12-21-20-01.jpg"
    )`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "white",
    minHeight: "700px",
    display: "flex",
    alignItems: "center",
  },
  headerCards: {},
  // mainButton: {
  //   margin: "20px 0 0 0",
  //   backgroundColor: "white",
  //   color: "black",
  //   fontWeight: "bold",
  //   "&:hover": {
  //     backgroundColor: "black",
  //     color: "white",
  //   },
  // },
}))

export default useStyles
