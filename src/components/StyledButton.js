import React from "react"
import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const MyButton = styled(Button)({
  // margin: "20px",
  // background: "white",
  // border: "none",
  // borderRadius: "0",
  // color: "black",
  // fontSize: "22px",
  // height: 48,
  // padding: "0 30px",
  // "&:hover": {
  //   backgroundColor: "black",
  //   color: "white",
  // },
})

export default function StyledComponents() {
  return <MyButton>View Our Work</MyButton>
}
