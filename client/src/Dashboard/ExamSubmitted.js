import React from 'react'
import { Container, Grid, Box, Typography, Button, Divider } from "@mui/material";
import useStyle from "./Styles/Exam_take_style";
import { Link } from "react-router-dom";
import { CheckCircleOutlined } from "@mui/icons-material";

function ExamSubmitted() {
  const {designs} = useStyle();

  return (
    <Container maxWidth = "md" sx = {{ padding: "2em 0em" }}>
       <Grid item xs = {12}
        sx = {{
            marginTop: "0.8em",
            backgroundColor: "white",
            borderRadius: "0.3em",
            height: "auto",
            padding: "1em 1.5em 3em 1.5em",
            // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
        }}> 
            <Box
            sx = {{
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
                marginBottom: "0.5em"
            }}>
                <CheckCircleOutlined sx = {{ color: "#39BA45", fontSize: "2em" }}/>

                <Typography children = "You've successfully completed the Exam."
                sx = {{
                    color: "#39BA45",
                    fontSize: "1.3em",
                    fontWeight: "600",
                    height: "max-content"
                }}/>
            </Box>
            
            <Typography
            sx = {{
                color: "#8E8E8E",
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                marginBottom: "2em"
            }}>
            You will see your exam results in (Rooms {'>'} Activities {'>'} Exams), <br/>
            once your professor check and return it.
            </Typography>

            <Typography children = "Go to Rooms for now."
            component = {Link}
            to = "/rooms"
            sx = {{
                color: "#007FFF",
                fontSize: "0.8em",
                fontWeight: "500",
                textDecoration: "underline",
                "&: hover": {
                    cursor: "pointer",
                    transition: "all 250ms"
                }
            }}/>
        </Grid>
    </Container>
  )
}

export default ExamSubmitted