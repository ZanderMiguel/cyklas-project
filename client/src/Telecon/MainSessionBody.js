import React from 'react'
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Tooltip
} from "@mui/material";
import { KeyboardVoiceOutlined } from "@mui/icons-material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
// import download from "../assets/ImageJaven/download.jpg";

const dataMemberTiles = [
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Paul Rudd (You)"
    },/* {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Tom Holland"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Tom Hiddleston"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Robert Downey Jr."
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Sebastian Stan"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Mark Ruffalo"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Elizabeth Olsen"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Josh Brolin"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Elizabeth Olsen"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Josh Brolin"
    },
    {
        camera: <Avatar alt="Remy Sharp" src={AvatarIcon} sx={{ height: "5em", width: "5em" }} />,
        memberName: "Mark Ruffalo"
    } */
    
];

function MainSessionBody() {
    const [toggleMic, setToggleMic] = React.useState(false);
    const layout = React.useRef(null)
    const [tileWidth, setTileWidth] = React.useState(null)
    React.useEffect(()=>{layout.current && setTileWidth(layout.current.childNodes.length >= 36 ? 7 : layout.current.childNodes.length >= 25 ? 6 : layout.current.childNodes.length >= 16 ? 5 : layout.current.childNodes.length >= 9 ? 4 : layout.current.childNodes.length >= 4 ? 3 : 2)

    layout.current && layout.current.childNodes.forEach((item, idx) => {

        /* console.log(layout.current.childNodes.length)
        item.style.setProperty('width', `calc(100%/${tileWidth})`)
        item.style.setProperty('height', `calc(100%/${tileWidth})`)
        item.style.setProperty('border', `solid 2px white`) */

    })},[])

    const handleToggleMic = () => {
        setToggleMic((prev) => !prev);
    };
    return (
        <div style={{width: '100%', height: '100%'}}>
            {/* Main Session Body */}
            <div 
                style={{
                    width: "100%",
                    height: "100%",
                    //overflowY: "auto",
                    //padding: "0em 0.4em",
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //flexGrow: 1
                }}
                ref={layout}
            >

                {dataMemberTiles.map(function (items, index) {
                    return (
                        <div key={index}>
                            <Box sx={{
                                position: "relative",
                                backgroundColor: "#25282E",
                                // backgroundImage: `url(${download})`,
                                // backgroundSize: 'cover',
                                height: "100%",
                                width: "100%",
                                borderRadius: "0.5em",
                                display: "flex",
                                
                                justifyContent: "center",
                                alignItems: "center",
                            }}>

                                {items.camera}

                                <Box sx={{
                                    // position: "relative",
                                    // bottom: -50,
                                    width: "auto",
                                    height: "auto",
                                    display: "flex",
                                    justifyContent: "center",
                                    //gap: "0.3em",
                                    alignItems: "center"
                                }}>
                                    <Typography noWrap children={items.memberName}
                                        sx={{
                                            color: "white",
                                            fontSize: "0.6em",
                                            fontWeight: "500",
                                            height: "max-content",
                                            width: "14em",
                                            padding: "0.5em 0.8em",
                                            borderRadius: "0.3em",
                                            textAlign: "center",
                                            "&: hover": {
                                                cursor: "default"
                                            }
                                        }} />
                                </Box>

                                <Box sx={{ position: "absolute", right: 10, bottom: 10 }}>
                                    <Tooltip title={toggleMic ? "Mute" : "Unmute"} placement="top">
                                        <IconButton onClick={handleToggleMic}
                                            sx={
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
                                                <KeyboardVoiceOutlined sx={{ fontSize: "0.7em", color: "#007FFF" }} />
                                            ) :
                                                (
                                                    <MicOffOutlinedIcon sx={{ fontSize: "0.7em", color: "#DEDEDE" }} />
                                                )}

                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default MainSessionBody