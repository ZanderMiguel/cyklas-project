import React from 'react'
import { CssBaseline, Box, Typography, Button, Grid, Container } from "@mui/material";
import Background89 from "../assets/ImageJaven/Background89.png";
import hqdefault from "../assets/ImageJaven/hqdefault.jpg";
import { TimerOutlined } from "@mui/icons-material";

const dataChoices = [
    {
        choice: <Grid item xs = {12}
        sx = {{
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#7223F3",
            borderRadius: "0.5em",
            width: "100%",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                backgroundColor: "#6719E7"
            }
        }}>
            <Typography children = "A."
                sx = {{ 
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600",
                width: "2em",
                height: "max-content"
                }}/>

            <Typography children = "Blank Answer"
                sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600", 
                width: "auto",
                flexGrow: 1,
                height: "max-content"
                }}/>
        </Grid>
    },
    {
        choice: <Grid item xs = {12}
        sx = {{
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#EA4848",
            borderRadius: "0.5em",
            width: "100%",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                backgroundColor: "#DE3E3E",
                boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
            }
        }}>
            <Typography children = "B."
                sx = {{ 
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600",
                width: "2em",
                height: "max-content"
                }}/>

            <Typography children = "Blank Answer"
                sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600", 
                width: "auto",
                flexGrow: 1,
                height: "max-content"
                }}/>
        </Grid>
    },
    {
        choice: <Grid item xs = {12}
        sx = {{
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#66C34E",
            borderRadius: "0.5em",
            width: "100%",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                backgroundColor: "#62BC4C"
            }
        }}>
            <Typography children = "C."
                sx = {{ 
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600",
                width: "2em",
                height: "max-content"
                }}/>

            <Typography children = "Blank Answer"
                sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600", 
                width: "auto",
                flexGrow: 1,
                height: "max-content"
                }}/>
        </Grid>
    },
    {
        choice: <Grid item xs = {12}
        sx = {{
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#E3A649",
            borderRadius: "0.5em",
            width: "100%",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                backgroundColor: "#DBA047"
            }
        }}>
            <Typography children = "D."
                sx = {{ 
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600",
                width: "2em",
                height: "max-content"
                }}/>

            <Typography children = "Blank Answer"
                sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600", 
                width: "auto",
                flexGrow: 1,
                height: "max-content"
                }}/>
        </Grid>
    }
];

function LivequizQuestion() {
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
        
            

        <Container maxWidth = "md"
        sx = {{
            background: "rgba(37, 40, 46, 0.8)",
            borderRadius: "0.5em",
            height: "85vh",
            padding: "0em 1.5em 2em 1.5em",
            boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Box
            sx = {{
          position: 'relative',
          top: -30,
          borderRadius: "0.8em",
          zIndex: 1,
          background: "rgba(23, 26, 32)",
                padding: "0.8em",
                width: "25%",
                height: "auto",
                display: "flex",
                gap: "0.8em",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Box
        className="Timer"
        sx={{
          display: 'flex',
          gap: '0.5em',
          width: 'auto',
          height: 'max-content',
        }}
      >
        <TimerOutlined
          sx={{
            color: 'white',
            fontSize: '2em',
          }}
        />
        <Typography
          sx={{
            color: 'white',
            fontSize: '1.2em',
            fontWeight: '600',
            marginTop: '0.1em',
            height: 'max-content',
            width: 'auto',
          }}
        >
            00:00:00
        </Typography>
      </Box>
            </Box>

            <Typography children = "Question 1 / 4"
            sx = {{
                color: "#DEDEDE",
                fontSize: "0.8em",
                fontWeight: "500",
                textTransform: "Uppercase",
                width: "relative",
                height: "max-content",
                textAlign: "center",
                marginBottom: "0.5em"
            }}/>

            <Typography children = "Sino ang unang taong nakatapak tapak?"
            sx = {{
                color: "white",
                fontSize: "1.5em",
                fontWeight: "600",
                textTransform: "sino",
                width: "relative",
                height: "max-content",
                textAlign: "center",
                marginBottom: "1em",
            }}/>

            {/* <Box
            sx = {{
                width: "relative",
                border: "1px solid black",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.5em"
            }}>
                <img src = {hqdefault} alt = "Sample Image" style = {{ height: "150px", width: "100%", objectFit: "contain" }}/>
            </Box> */}
            <Container maxWidth = "sm"
            sx = {{
                width: "relative",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
                justifyContent: "center",
                alignItems: "center"
            }}> 
                {dataChoices.map(function(items, index) {
                    return (
                        <Box key = {index}
                        sx = {{
                            width: "100%",
                            height: "auto"
                        }}>
                        {items.choice}
                        </Box>
                    )
                })}
                
            </Container>
        </Container>
    </Box>
    </>
  )
}

export default LivequizQuestion