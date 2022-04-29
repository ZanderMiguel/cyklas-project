import React from 'react'
import NoContent from "../assets/ImageJaven/NoContent.png";
import { Typography } from "@mui/material";

function Members() {
  return (
    <div 
    style = {{ 
        width: "23.9rem",
        height: "98vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2em"
        }}>
        <img src = {NoContent} alt = "No Content" style = {{ height: "12em" }}/>

        <Typography children = "Nothing to show for now." 
        sx = {{
            fontSize: "0.9em",
            fontWeight: "600",
            color: "white",
            width: "auto",
            height: "max-content"
        }}/>
    </div>
  )
}

export default Members