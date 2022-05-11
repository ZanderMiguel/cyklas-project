import React from 'react'
import { CssBaseline, Box, Typography, Button, Grid, Container, Backdrop } from "@mui/material";
import Background89 from "../assets/ImageJaven/Background89.png";
import hqdefault from "../assets/ImageJaven/hqdefault.jpg";
import { TimerOutlined } from "@mui/icons-material";
import QuestionResult from "./QuestionResult";
import LivequizMulti from "./TeleconSide/LivequizMulti";
import LivequizImagemulti from "./TeleconSide/LivequizImagemulti";
import LivequizTF from "./TeleconSide/LivequizTF";
import LivequizSA from "./TeleconSide/LivequizSA";
import LivequizTimer from "./TeleconSide/LivequizTimer";

function LivequizStudentrankings() {

  return (
    <>
    <CssBaseline/>
    <Box
    sx = {{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Background89})`,
        backgroundSize: 'cover',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
    <Container maxWidth = "md">
        <Grid container item xs = {12}
        sx = {{
            border: "1px solid white"
        }}>
            <Typography children = ""/>
        </Grid>
    </Container>
    
                
    </Box>
    </>
  )
}

export default LivequizStudentrankings