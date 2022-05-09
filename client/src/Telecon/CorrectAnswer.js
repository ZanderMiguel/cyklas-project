import React from 'react'
import { Typography, Box } from "@mui/material";
import { Check, CheckCircleOutlined } from "@mui/icons-material";

function CorrectAnswer() {
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
        background: "rgb(57,186,69)",
        borderRadius: "0.5em"
    }}>
        <Box
        sx = {{
            display: "flex",
            gap: "0.5em",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            width: "25em"
        }}>
            <CheckCircleOutlined sx = {{ color: "white", fontSize: "2em" }}/>

            <Typography children = "Your answer is correct"
            sx = {{
                color: "white",
                fontSize: "1.3em",
                fontWeight: "600"
            }}/>
        </Box>

        <Typography children = "+2 POINTS"
            sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "500",
                textTransform: "Uppercase"
            }}/>
    </Box>
    </>
  )
}

export default CorrectAnswer