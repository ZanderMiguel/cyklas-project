import React from 'react';
import { Redirect } from 'react-router-dom';
import { Box, CssBaseline, Typography, Button, Grid, Container, Avatar, Divider, Tooltip } from "@mui/material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import Background89 from "../assets/ImageJaven/Background89.png";
import { Check, VideocamOffOutlined, PeopleAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

const dataMembers = [
    {
        avatar: <Avatar src = {AvatarIcon} sx = {{ width: "3em", height: "3em" }}/>,
        memberName: "Johan Liebert"
    },
    {
        avatar: <Avatar src = {AvatarIcon} sx = {{ width: "3em", height: "3em" }}/>,
        memberName: "Johan Liebert"
    },
    {
        avatar: <Avatar src = {AvatarIcon} sx = {{ width: "3em", height: "3em" }}/>,
        memberName: "Johan Liebert"
    }
];

function LiveQuiz() {
  return (
      <>
        <CssBaseline/>
        <Box
        sx = {{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${Background89})`,
        backgroundSize: 'cover',
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

            

            
                <Button 
                variant = "contained"
                children = "Start Quiz"
                component = {Link}
                to = "/LivequizQuestion"
                sx = {{
                    textTransform: "Capitalize",
                    fontSize: "0.9em",
                    fontWeight: "600",
                    boxShadow: "none",
                    "&: hover": {
                        boxShadow: "none"
                    }
                }}/>
            </Grid>

            <Container maxWidth = "lg"
            sx = {{
                marginTop: "1.5em",
                height: "80vh",
                overflowY: "auto"
            }}> 
            <Box
            sx = {{
                width: "relative",
                display: "flex",
                alignItems: "center",
                marginBottom: "0.8em",
            }}>
            <Typography children = "Members who are joining this quiz"
            sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "500",
                width: "auto",
                flexGrow: 1
            }}/>

            <Box
            sx = {{
                display: "flex",
                gap: "0.5em",
                alignItems: "center"
            }}>
                <PeopleAlt sx = {{ color: "white", fontSize: "1.2em" }}/>

                <Typography children = "3"
                sx = {{
                    color: "white",
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
            {dataMembers.map(function(items, index) {
                return (
                <>
                <Grid item xs = {12} key = {index}
                sx = {{
                    background: "rgba(37, 40, 46, 0.8)",
                    borderRadius: "0.3em"
                }}>
                    <Box
                    sx = {{
                        width: "relative",
                        height: "auto",
                        display: "flex",
                        gap: "0.8em",
                        alignItems: "center",
                        padding: "0.5em 1.2em 0.5em 0.8em",
                    }}>
                        {items.avatar}

                        <Typography children = {items.memberName}
                        sx = {{
                            color: "white",
                            fontSize: "0.9em",
                            fontWeight: "600",
                            width: "auto",
                            flexGrow: 1
                        }}/>

                        <Box
                            sx={{
                            width: 'auto',
                            height: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3em',
                            }}
                        >
                            <Check sx={{ color: '#4FE14C', fontSize: '1.5em' }} />

                            <Typography
                            sx={{
                                color: '#4FE14C',
                                fontSize: '0.9em',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                width: 'auto',
                                height: 'max-content',
                            }}
                            >
                            Ready
                            </Typography>
                        </Box>
                        
                        {/* <Tooltip title = "This member's turn off his/ her camera" placement = "top">
                        <Box
                        sx={{
                            border: '1px solid #3A3E46',
                            height: '2.5em',
                            width: '2.5em',
                            padding: '0.3em',
                            backgroundColor: '#3A3E46',
                            borderRadius: '5em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: "2em"
                        }}
                        >
                        <VideocamOffOutlined
                            sx={{ fontSize: '1.5em', color: '#DEDEDE' }}
                        />
                        </Box>
                        </Tooltip> */}
                    </Box>
                </Grid>
                <Divider/>
                </>
                )
            })}
            </Container>
        </Box>
      </>
  )
}

export default LiveQuiz;
