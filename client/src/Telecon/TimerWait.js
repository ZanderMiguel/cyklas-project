import React from 'react'
import { Box, Typography } from "@mui/material";
import Wait from "../assets/ImageJaven/Wait.png";

function TimerWait() {
  return (
    <>
    <Box
    sx = {{
        width: "relative",
        height: "auto",
        padding: "2.5em 3em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(23,26,32,0.9)",
        borderRadius: "0.5em"
    }}>
        <img src = {Wait} alt = "Wait" style = {{ height: "10em" }}/>

        <Typography children = "A moment to relax"
        sx = {{
            color: "white",
            fontSize: "1.3em",
            fontWeight: "600",
            margin: "1em 0em 0em 0em"
        }}/>

        <Typography children = "Wait for the timer to out"
        sx = {{
            color: "#8E8E8E",
            fontSize: "0.8em",
            fontWeight: "500"
        }}/>
    </Box>
    </>
  )
}

export default TimerWait