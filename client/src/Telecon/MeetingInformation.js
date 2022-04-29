import React from 'react'
import NoContent from "../assets/ImageJaven/NoContent.png";
import { Container, Grid, Box, Typography } from "@mui/material";

function MeetingInformation() {
  return (
    <div style = {{ width: "23.9rem", height: "98vh" }}>
    <Typography children = "Meeting Information" 
    sx = {{
      height: "max-content",
      width: "relative",
      color: "white",
      fontWeight: "600",
      padding: "0.8em 0em",
      textAlign: "center"
    }}/>
    </div>
  )
}

export default MeetingInformation