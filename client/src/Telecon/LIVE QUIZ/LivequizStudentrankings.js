import React from 'react'
import Background89 from "../../assets/ImageJaven/Background89.png";
import { CssBaseline, Box, Typography, Container, Grid, Avatar, Tooltip, Divider, Button } from "@mui/material";
import AvatarIcon from "../../assets/ImageJaven/Avatar.png";
import { WorkspacePremium, ArrowCircleLeftOutlined, CallEndOutlined, CheckCircleOutlined } from "@mui/icons-material";
import LivequizStudentRankingsTable from "./LivequizStudentrankingsTable";

const dataTop = [
    {
        avatar: <Avatar src = {AvatarIcon} alt = "Avatar"
        sx = {{ height: "2.5em" }}/>,
        memberName: "Paul Rudd",
        points: "100 points",
        label: "1st place",
        ribbon: <Tooltip title = "Gold" placement = "top">
                    <WorkspacePremium sx = {{ color: "#FBC112", fontSize: "3em"}}/>           
                </Tooltip>
    },
    {
        avatar: <Avatar src = {AvatarIcon} alt = "Avatar"
        sx = {{ height: "2.5em" }}/>,
        memberName: "Tom Holland",
        points: "98 points",
        label: "2nd place",
        ribbon: <Tooltip title = "Silver" placement = "top">
                    <WorkspacePremium sx = {{ color: "#9B9ABD", fontSize: "3em"}}/>           
                </Tooltip>
    },
    {
        avatar: <Avatar src = {AvatarIcon} alt = "Avatar"
        sx = {{ height: "2.5em" }}/>,
        memberName: "Tom Hiddleston",
        points: "97 points",
        label: "3rd place",
        ribbon: <Tooltip title = "Bronze" placement = "top">
                    <WorkspacePremium sx = {{ color: "#E1910D", fontSize: "3em"}}/>           
                </Tooltip>
    }
];

function LivequizStudentrankings() {
  return (
    <>
    <CssBaseline/>
    <Box
    sx = {{
        width: "100%",
        height: "100vh auto",
        backgroundImage: `url(${Background89})`,
        backgroundSize: 'cover',
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
    }}>
            <Grid item xs = {12}
            sx = {{
                background: "rgba(23, 26, 32, 0.9)",
                padding: "0.8em 6.5em",
                display: "flex",
                alignItems: "center"
            }}> 

            <Box
            sx = {{
                display: "flex",
                gap: "0.8em",
                width: "auto",
                height: "auto",
                flexGrow: 1,
                alignItems: "center"
            }}> 
                <Tooltip title = "Quiz ended" placement = "bottom">
                    <CheckCircleOutlined sx = {{ color: "#39BA45", fontSize: "4.5em" }}/>
                </Tooltip>

                <Box
                sx = {{
                    width: "auto",
                    flexGrow: 1,
                    height: "auto"
                }}>
                    <Typography children = "Untitled Quiz"
                    sx = {{
                        color: "white",
                        fontSize: "1.5em",
                        fontWeight: "700",
                        textTransform: "Uppercase",
                        marginBottom: "0.3em"
                    }}/>

                    <Box
                    sx = {{
                        width: "relative",
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "3em"
                    }}>
                        <Typography children = "4 items"
                    sx = {{
                        color: "white",
                        fontSize: "1em",
                        fontWeight: "500",
                        textTransform: "Capitalize"
                    }}/>

                    <Typography children = "Overall Points: 100 points"
                    sx = {{
                        color: "white",
                        fontSize: "1em",
                        fontWeight: "500",
                        textTransform: "Capitalize"
                    }}/>
                    </Box>
                </Box>
            </Box>
            

                <Button 
                variant = "contained"
                startIcon = {<ArrowCircleLeftOutlined/>}
                children = "Back to Conference"
                sx = {{
                    textTransform: "Capitalize",
                    fontSize: "0.9em",
                    fontWeight: "600",
                    boxShadow: "none",
                    marginRight: "0.8em",
                    "&: hover": {
                        boxShadow: "none"
                    }
                }}/>

                <Button 
                variant = "contained"
                startIcon = {<CallEndOutlined/>}
                children = "Dismiss Class"
                sx = {{
                    backgroundColor: "#3F3F64",
                    textTransform: "Capitalize",
                    fontSize: "0.9em",
                    fontWeight: "600",
                    boxShadow: "none",
                    "&: hover": {
                        boxShadow: "none",
                        backgroundColor: "#303055"
                    }
                }}/>
            </Grid>

            
            <Container maxWidth = "md" sx  = {{ padding: "1.5em 0em" }}>
                <Grid container item xs = {12}>
                
                <Grid item xs = {12} sx = {{ marginBottom: "0.8em" }}>
                <Typography children = "Student Rankings"
                sx = {{
                    color: "white",
                    fontSize: "1em",
                    fontWeight: "600",
                    width: "relative",
                    textAlign: "center",
                    textTransform: "Uppercase"
                }}/>
                </Grid>
                {dataTop.map(function(items, index) {
                    return (
                        <Grid item xs = {4} key = {index}
                        sx = {{
                            padding: "0em 0.3em"
                        }}>
                            <Box
                            sx = {{
                                background: "rgba(37, 40, 46, 0.8)",
                                boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                                height: "auto"
                            }}>
                                <Box
                                sx = {{
                                    width: "relative",
                                    height: "auto",
                                    display: "flex",
                                    gap: "0.8em",
                                    alignItems: "center",
                                    padding: "0.5em 1em 0.5em 1em"
                                }}>
                                    {items.avatar}

                                    <Typography children = {items.memberName}
                                    sx = {{
                                        color: "white",
                                        fontSize: "0.8em",
                                        fontWeight: "600"
                                    }}/>
                                </Box>

                                <Box
                                sx = {{
                                    width: "relative",
                                    height: "auto",
                                    display: "flex",
                                    gap: "0.8em",
                                    alignItems: "center",
                                    padding: "0.5em 0.3em 0.5em 1em",
                                    background: 'rgba(69, 69, 106, 0.8)',
                                }}>
                                    <Box
                                    sx = {{
                                        width: "auto",
                                        height: "auto",
                                        flexGrow: 1
                                    }}>
                                        <Typography children = {items.points}
                                        sx = {{
                                            color: "white",
                                            fontSize: "1.1em",
                                            fontWeight: "700"
                                        }}/>

                                        <Typography children = {items.label}
                                        sx = {{
                                            color: "#DEDEDE",
                                            fontSize: "0.8em",
                                            fontWeight: "500"
                                        }}/>
                                    </Box>
                                    
                                    {items.ribbon}
                                    
                                </Box>
                            </Box>
                        </Grid>
                    )
                })}

                <Grid item xs = {12} sx = {{ padding: "0em 0.3em", margin: "1em 0em" }}>
                    <LivequizStudentRankingsTable/>
                </Grid>

                <Grid item xs = {12}>
                    <Divider sx = {{ color: "#DEDEDE" }}>
                        <Typography children = "End of Result"
                        sx = {{
                            color: "#DEDEDE",
                            fontSize: "0.9em",
                            fontWeight: "500",
                            width: "relative",
                            textAlign: "center",
                            textTransform: "Uppercase"
                        }}/>
                    </Divider>
                </Grid>

                </Grid>
            </Container>
    </Box>
    </>
  )
}

export default LivequizStudentrankings