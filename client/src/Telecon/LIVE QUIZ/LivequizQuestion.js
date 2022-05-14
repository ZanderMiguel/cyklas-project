import React from 'react'
import { CssBaseline, Box, Typography, Button, Grid, Container, Backdrop } from "@mui/material";
import Background89 from "../../assets/ImageJaven/Background89.png";
import hqdefault from "../../assets/ImageJaven/hqdefault.jpg";
import { TimerOutlined } from "@mui/icons-material";
import QuestionResult from "./QuestionResult";
import LivequizMulti from "./LivequizMulti";
import LivequizImagemulti from "./LivequizImagemulti";
import LivequizTF from "./LivequizTF";
import LivequizSA from "./LivequizSA";
import LivequizTimer from "./LivequizTimer";

function LivequizQuestion() {

const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

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
    
    
                <LivequizTimer/>
        <Box
        sx = {{
            width: "65%",
            background: "rgba(37, 40, 46, 0.8)",
            borderRadius: "0.5em",
            height: "85vh",
            padding: "2em 1.5em",
            boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        }}>
        
        <Box
        sx = {{
            width: 'relative',
            height: "100%",
            overflowY: "auto",
        }}>
            

            <Box
            sx = {{
                width: "relative",
                height: "100%",
            }}>
                <Typography children = "Question 1 / 4"
            sx = {{
                color: "#DEDEDE",
                fontSize: "0.8em",
                fontWeight: "500",
                textTransform: "Uppercase",
                width: "relative",
                height: "max-content",
                textAlign: "center",
                marginBottom: "0.1em"
            }}/>

            <Typography children = "Multiple Choice"
            sx = {{
                color: "#1389FF",
                fontSize: "1em",
                fontWeight: "700",
                textTransform: "Uppercase",
                width: "relative",
                height: "max-content",
                textAlign: "center",
                paddingBottom: "0.3em",
                marginBottom: "0.5em"
            }}/>

            <Typography children = "Sino ang unang taong nakatapak tapak?"
            sx = {{
                color: "white",
                fontSize: "1.2em",
                fontWeight: "600",
                textTransform: "sino",
                width: "relative",
                height: "max-content",
                textAlign: "center",
                padding: "0em 1em",
                marginBottom: "1em",
            }}/>

            {/* <Box
            sx = {{
                width: "relative",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.5em"
            }}>
                <img src = {hqdefault} alt = "Sample Image" style = {{ height: "150px", width: "100%", objectFit: "contain" }}/>
            </Box> */}

            <Box
            sx = {{
                width: "relative",
                height: "auto",
                padding: "0em 2em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap"
            }}> 
                <Grid item xs = {12} sx = {{ width: "100%" }}>
                    <LivequizMulti/>
                    {/* <LivequizImagemulti/> */}
                    {/* <LivequizTF/> */}
                    {/* <LivequizSA/> */}
                </Grid>
            </Box>
            </Box>
            
        </Box>
        </Box>
    </Box>
    </>
  )
}

export default LivequizQuestion