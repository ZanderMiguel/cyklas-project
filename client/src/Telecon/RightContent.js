import React from 'react'
import { Grid, Typography } from "@mui/material";

function RightContent() {
  return (
    <>
    <Grid item xs = {10} sx = {{ height: "98vh" }}>
        <Typography children = "Hello" sx = {{ color: "white" }}/>
    </Grid>
    </>
  )
}

export default RightContent