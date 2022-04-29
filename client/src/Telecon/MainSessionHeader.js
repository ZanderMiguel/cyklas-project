import React from 'react'
import { Box, Typography, Avatar } from "@mui/material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import { PeopleAlt } from '@mui/icons-material';

function MainSessionHeader() {
  return (
    <>
    {/* Main Session Header */}
    <Box 
    sx = {{ 
        width: "relative",
        height: "auto",
        display: "flex",
        gap: "1em",
        padding: "0.5em 0em",
        margin: "0em 0.8em",
        borderBottom: "1px solid #464646"
        }}>
        <Box 
        sx = {{
            height: "2.5em",
            width: "auto",
            flexGrow: 1,
            display: "flex",
            gap: "0.8em",
            alignItems: "center",
            backgroundColor: "#2B2E34",
            padding: "0.3em 0.6em",
            borderRadius: "0.4em",
            // display: "none"
        }}>
            <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "1.7em", width: "1.7em" }}/>

            <Typography children = "Josh Brolin joined the meeting."
            sx = {{
                color: "white",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "none",
                height: "max-content",
                width: "auto",
                flexGrow: 1,
                wordSpacing: "0.1em",
                "&: hover": {
                    cursor: "default"
                }
            }}/>
        </Box>

        {/* <Box flexGrow = {1}/> */}

        <Box
        sx = {{
            height: "2.5em",
            borderRadius: "0.4em",
            display: "flex",
            gap: "0.5em",
            alignItems: "center",
            padding: "0.3em 0.6em",
            border: "1px solid #DEDEDE",
            // "&: hover": {
            //     cursor: "pointer",
            //     backgroundColor: "#282B31",
            //     transition: "all 300ms"
            // }
        }}>
            <PeopleAlt sx = {{ color: "#DEDEDE", fontSize: "1.2em" }}/>

            <Typography children = "8"
            sx = {{
                color: "#DEDEDE",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Uppercase",
                height: "max-content",
                width: "auto",
                flexGrow: 1,
                "&: hover": {
                    cursor: "default"
                }
            }}/>
        </Box>
    </Box>
    </>
  )
}

export default MainSessionHeader