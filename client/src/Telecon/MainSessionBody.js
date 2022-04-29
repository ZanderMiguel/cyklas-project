import React from 'react'
import { Box, 
    Typography, 
    Grid, 
    Avatar,
    IconButton
 } from "@mui/material";
 import { KeyboardVoiceOutlined } from "@mui/icons-material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';

const dataMemberTiles = [
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Paul Rudd (You)"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Tom Holland"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Tom Hiddleston"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Robert Downey Jr."
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Sebastian Stan"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Mark Ruffalo"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Elizabeth Olsen"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Josh Brolin"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Elizabeth Olsen"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Josh Brolin"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx = {{ height: "5em", width: "5em" }}/>,
        memberName: "Mark Ruffalo"
    }
];

function MainSessionBody() {
  const [toggleMic, setToggleMic] = React.useState(false);

  const handleToggleMic = () => {
    setToggleMic((prev) => !prev);
  };

  return (
    <>
        {/* Main Session Body */}
        <Grid container
        sx = {{ 
        width: "relative",
        height: "78vh",
        overflowY: "auto",
        padding: "0em 0.4em"
        }}>
        
        {dataMemberTiles.map(function(items, index) {
            return (
            <Grid item xs = {3} sx = {{ padding: "0.5em" }} key = {index}>
                <Box sx = {{
                backgroundColor: "#25282E",
                height: "9.5em",
                width: "relative",
                borderRadius: "0.5em",
                display: "flex",
                gap: "0.5em",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                }}>

                    {items.camera}
                    
                    <Box sx = {{
                        width: "relative",
                        height: "auto",
                        display: "flex",
                        gap: "0.3em",
                        alignItems: "center"
                    }}>
                        <Typography noWrap children = {items.memberName} 
                        sx = {{
                            backgroundColor: "#3A3E46",
                            color: "white",
                            fontSize: "0.6em",
                            fontWeight: "500",
                            height: "max-content",
                            width: "17em",
                            padding: "0.5em 0.8em",
                            borderRadius: "0.3em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "&: hover": {
                                cursor: "default"
                            }
                        }}/>

                        <IconButton onClick={handleToggleMic}
                        sx = {
                            toggleMic === true
                            ? {
                                border: "1px solid #007FFF",
                                height: "1em",
                                width: "1em",
                                padding: "0.3em",
                                "&: hover": {
                                    backgroundColor: "#282B31"
                                }
                            }
                            : 
                            {
                                border: "1px solid #3A3E46",
                                height: "1em",
                                width: "1em",
                                padding: "0.3em",
                                backgroundColor: "#3A3E46",
                                "&: hover": {
                                    backgroundColor: "#3A3E46"
                                }
                            }
                        }>
                            {toggleMic ? (
                            <KeyboardVoiceOutlined sx = {{ fontSize: "0.7em", color: "#007FFF" }}/>
                            ) : 
                            (
                            <MicOffOutlinedIcon sx = {{ fontSize: "0.7em", color: "#DEDEDE" }}/>
                            )}
                            
                        </IconButton>
                    </Box>
                    
                </Box>
            </Grid>
            )
        })}
        
        </Grid>
    </>
  )
}

export default MainSessionBody