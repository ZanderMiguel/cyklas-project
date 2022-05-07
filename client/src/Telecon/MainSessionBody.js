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


function MainSessionBody({ socket }) {
    const [toggleMic, setToggleMic] = React.useState(false);
    const layout = React.useRef(null)
    const [tileWidth, setTileWidth] = React.useState(null)


    const [members, setMembers] = React.useState([{
        camera: JSON.parse(localStorage.userData).data.user.image,
        memberName: `${JSON.parse(localStorage.userData).data.user.firstName} ${JSON.parse(localStorage.userData).data.user.lastName
        }`
    }])
    React.useEffect(() => {
        layout.current && setTileWidth(layout.current.childNodes.length >= 36 ? 7 : layout.current.childNodes.length >= 25 ? 6 : layout.current.childNodes.length >= 16 ? 5 : layout.current.childNodes.length >= 9 ? 4 : layout.current.childNodes.length >= 4 ? 3 : 2)


        socket.on('join-others', (username, avatar) => {
            setMembers([...members, { camera: avatar, memberName: username }])
            console.log('someone joined')
        })
    }, [])

    const handleToggleMic = () => {
        setToggleMic((prev) => !prev);
    };
    return (
        <>
            {/* Main Session Body */}
            <div
                style={{
                    width: `100%`,
                    height: "78vh"
                    //overflowY: "auto",
                    //padding: "0em 0.4em",
                    , display: 'flex', gap: '0.8em',
                    flexWrap: 'wrap',
                    justifyContent: 'center',

                    whiteSpace: 'break-spaces',

                }}
                ref={layout}
            >

                {members.map(function (items, index) {
                    return (
                        <div key={index} style={{ minWidth: `calc(85%/${tileWidth})`, height: `calc(${layout.current && layout.current}/${tileWidth})` }}>
                            <Box sx={{
                                position: "relative",
                                backgroundColor: "#25282E",
                                // backgroundImage: `url(${download})`,
                                // backgroundSize: 'cover',
                                height: "100%",
                                width: "relative",
                                borderRadius: "0.5em",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: 'column'
                            }}>
                                <Avatar alt="Remy Sharp" src={items.camera} sx={{ height: "5em", width: "5em" }} />
                                    

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
                                            fontSize: "1em",
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
        </>
    )
}

export default MainSessionBody