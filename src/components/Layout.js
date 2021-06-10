import React from "react"
import Navbar from "./Navbar"
import Footer from ".//Footer"
import "../assets/css/main.css"
import CssBaseline from "@material-ui/core/CssBaseline"

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout