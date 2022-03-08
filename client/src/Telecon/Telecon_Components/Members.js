import React from 'react'
import { Container, Grid, Typography, Box, Divider, TextField, InputAdornment, IconButton, Avatar, Tabs, Tab, Tooltip } from "@mui/material";
import { Search, Mic, MicOff, PushPin, InfoOutlined, Chat } from "@mui/icons-material";
import AvatarIcon from "../../assets/ImageJaven/Avatar.png";
import MembersIconButton from "../../assets/ImageJaven/MembersIconButton.png";
import PresentationIconButton from "../../assets/ImageJaven/PresentationIconButton.png";
import useStyle from "../Telecon_Components_Styles/Members_style";
import "../Telecon_Components_Styles/Members_stylesheet.css";
import { Link } from "react-router-dom";

const data = [
    {
        memberName: "Paul Rudd"
    },
    {
        memberName: "Tom Holland"
    },
    {
        memberName: "Tom Hiddleston"
    },
    {
        memberName: "Robert Downey Jr."
    },
    {
        memberName: "Sebastian Stan"
    },
];
function Members() {

    const {designs} = useStyle()

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Container maxWidth = "lg">
        <Grid container rowSpacing = {1}>
        <Grid item xs = {3} sx = {{ marginTop: "0.7em" }}>
                {/* <Tabs orientation="horizontal"
                value={value}
                onChange={handleChange}
                aria-label="Horizontal tabs example"
                sx = {{
                    borderRight: 1,
                    width: "relative"
                }}>
                <Tab disableRipple sx = {{
                    border: "1px solid black",
                    width: "max-content"
                }}
                    label={
                        <IconButton id = "meeting-information" aria-label="meeting-information" sx = {{
                            height: "1.6em",
                            width: "1.6em",
                            "&: hover": {
                                background: "transparent"
                            }
                            }}>
                              <InfoOutlined
                              sx = {{
                                  color: "#007FFF",
                                  fontSize: "1.8em",
                                  "&: hover": {
                                      color: "#0771DB"
                                  }
                                  
                              }}/>
                          </IconButton>
                    }
                    onClick={() => {
                    // setComp(<PresentationCriteria/>);
                    }}/>
                <Tab disableRipple sx = {{
                    border: "1px solid black",
                    width: "max-content"
                }}
                    label={
                        <IconButton id = "members" aria-label="members" sx = {{
                            height: "1.5em",
                            width: "1.5em",
                            backgroundColor: "#007FFF",
                            "&: hover": {
                                background: "#0771DB"
                            }
                            }}>
                              <img src = {MembersIconButton}
                              style = {{
                                  height: "0.8em"
                                  
                              }}/>
                        </IconButton>
                    }
                    onClick={() => {
                    // setComp(<PresentationMembers/>);
                    }}/>
                
                <Tab disableRipple sx = {{
                    border: "1px solid black",
                    width: "max-content"
                }}
                    label={
                        <IconButton id = "message-box" aria-label="message-box" sx = {{
                            height: "1.5em",
                            width: "1.5em",
                            backgroundColor: "#007FFF",
                            "&: hover": {
                                background: "#0771DB"
                            }
                            }}>
                              <Chat
                              sx = {{
                                  color: "white",
                                  fontSize: "0.9em"
                              }}/>
                          </IconButton>
                    }
                    onClick={() => {
                    // setComp(<PresentationMembers/>);
                    }}/>

                <Tab disableRipple sx = {{
                    border: "1px solid black",
                    width: "max-content"
                }}
                    label={
                        <IconButton id = "presentation" aria-label="presentation" sx = {{
                            height: "1.5em",
                            width: "1.5em",
                            backgroundColor: "#007FFF",
                            "&: hover": {
                                background: "#0771DB"
                            }
                            }}>
                              <img src = {PresentationIconButton}
                              style = {{
                                  height: "0.8em"
                              }}/>
                          </IconButton>
                    }
                    onClick={() => {
                    // setComp(<PresentationMembers/>);
                    }}/>
                </Tabs> */}
            <Box className = "Top-left-buttons" width = "100%" height = "relative" display = "flex" gap = "2em" justifyContent = "center" alignItems = "center">
              <IconButton id = "meeting-information" aria-label="meeting-information" 
              component = {Link}
              to = "/Conference_details" 
              sx = {{
                height: "1.6em",
                width: "1.6em",
                "&: hover": {
                    background: "transparent"
                }
                }}>
                  <InfoOutlined
                  sx = {{
                      color: "#007FFF",
                      fontSize: "1.8em",
                      "&: hover": {
                          color: "#0771DB"
                      }
                      
                  }}/>
              </IconButton>
              
              <IconButton id = "members" aria-label="members" 
              component = {Link}
              to = "/Members" 
              sx = {{
                height: "1.5em",
                width: "1.5em",
                backgroundColor: "#007FFF",
                "&: hover": {
                    background: "#0771DB"
                }
                }}>
                  <img src = {MembersIconButton}
                  style = {{
                      height: "0.8em"
                      
                  }}/>
              </IconButton>

              <IconButton id = "message-box" aria-label="message-box" 
              component = {Link}
              to = "/Message_area" 
              sx = {{
                height: "1.5em",
                width: "1.5em",
                backgroundColor: "#007FFF",
                "&: hover": {
                    background: "#0771DB"
                }
                }}>
                  <Chat
                  sx = {{
                      color: "white",
                      fontSize: "0.9em"
                  }}/>
              </IconButton>

              <IconButton id = "presentation" aria-label="presentation" 
              component = {Link}
              to = "/Presentation" 
              sx = {{
                height: "1.5em",
                width: "1.5em",
                backgroundColor: "#007FFF",
                "&: hover": {
                    background: "#0771DB"
                }
                }}>
                  <img src = {PresentationIconButton}
                  style = {{
                      height: "0.8em"
                  }}/>
              </IconButton>
            </Box>
            </Grid>

            <Grid item xs = {9}>
            </Grid>

            <Grid item xs = {3} sx = {{ marginBottom: "0.5em" }}>
                <Box className = "Left-container" sx = {designs.Left_Container_Style}>
                <Typography
                sx = {designs.Members_Typography_Style}>
                Members
                </Typography>

                <Divider sx = {designs.Divider_Style}/>
                
                <TextField id="filled-basic" placeholder="Search People" variant="filled" 
                    sx = {designs.Search_TextField_Style}
                    inputProps={{style: {height: "0em", fontSize: "0.8em", fontWeight: "500", paddingBottom: "1.8em", margin: "0em 1.5em 0em 0.5em", color: "#3F3D56"}}}
                    InputProps={{disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton aria-label="search" sx = {{
                                    height: "1.3em",
                                    width: "1.3em",
                                    margin: "0em 0em 0.6em 0em"
                                    }}>
                                <Search
                                sx= {{
                                    color: "#82818E",
                                    fontSize: "0.9em"

                                }}/>
                            </IconButton>
                        </InputAdornment>
                ),}}/>
                
                <Typography
                sx = {designs.InCall_Typography_Style}>
                In call
                </Typography>
            
                <Box className = "Members-list" sx = {designs.Members_List_Style}>
                        <Box className = "Professor" sx = {designs.Member_Style}>
                            <Avatar alt="Remy Sharp" src={AvatarIcon} 
                                sx = {designs.AvatarIcon_Avatar_Style}/>

                            <Box className = "Name" sx = {designs.Name_Style}>
                                <Typography noWrap
                                    sx = {designs.Name_Typography_Style}>
                                    Mark Andrei
                                </Typography>

                                <Typography noWrap
                                    sx = {designs.Role_Typography_Style}>
                                    Conference Host
                                </Typography>
                            </Box>
                            
                            <IconButton id = "profile-mic" aria-label="profile-mic" sx = {designs.Mic_IconButton_Style}>
                                <Mic
                                sx = {designs.MicIcon_Style}/>
                            </IconButton>

                            <Tooltip title="Pin this member to the mainscreen" placement="right">
                            <IconButton id = "profile-pushpin" aria-label="profile-pushpin" sx = {designs.PushPin_IconButton_Style}>
                                <PushPin
                                sx = {designs.PushPinIcon_Style}/>
                            </IconButton>
                            </Tooltip>
                            
                        </Box>

                        {data.map(function(items, index) {
                        return (
                            <Box className = "Students" sx = {designs.Member_Style}>
                            <Avatar alt="Remy Sharp" src={AvatarIcon} 
                                sx = {designs.AvatarIcon_Avatar_Style}/>

                            <Box className = "Name" sx = {designs.Name_Style}>
                                <Typography noWrap
                                    sx = {designs.Name_Typography_Style2}>
                                    {items.memberName}
                                </Typography>
                            </Box>
                            
                            <IconButton id = "profile-mic" aria-label="profile-mic" sx = {designs.MicOff_IconButton_Style}>
                                <MicOff
                                sx = {designs.MicOffIcon_Style}/>
                            </IconButton>

                            <Tooltip title="Pin this member to the mainscreen" placement="right">
                            <IconButton id = "profile-pushpin" aria-label="profile-pushpin" sx = {designs.PushPin_IconButton_Style}>
                                <PushPin
                                sx = {designs.PushPinIcon_Style}/>
                            </IconButton>
                            </Tooltip>
                            </Box>
                            )
                        })}
                    
                </Box>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Members