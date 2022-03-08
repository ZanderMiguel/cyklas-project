import React from 'react'
import { Container, Grid, Typography, Box, Divider, IconButton, Tabs, Tab } from "@mui/material";
import { InfoOutlined, Chat } from "@mui/icons-material";
import MembersIconButton from "../../assets/ImageJaven/MembersIconButton.png";
import PresentationIconButton from "../../assets/ImageJaven/PresentationIconButton.png";
import useStyle from "../Telecon_Components_Styles/Conference_details_style";
import "../Telecon_Components_Styles/Conference_details_stylesheet.css";
import { Link } from "react-router-dom";

function Conference_details() {

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
                sx = {designs.ConferenceDetails_Typography_Style}>
                Conference Details
                </Typography>

                <Divider sx = {designs.Divider_Style}/>
                
                <Box className = "Conference-id" sx = {designs.Conference_Id_Style}>
                    <Typography
                    sx = {designs.ConferenceId_Typography_Style}>
                    Conference ID:
                    </Typography>

                    <Typography
                    sx = {designs.Id_Typography_Style}>
                    vm22krt
                    </Typography>
                </Box>

                <Box className = "ConferenceLink" sx = {designs.ConferenceLink_Style}>
                    <Typography
                        sx = {designs.ConferenceLink_Typography_Style}>
                        Conference Link:
                    </Typography>

                    <Typography
                        sx = {designs.Link_Typography_Style}>
                        https://telecon.cyklas.com/VM22KRT
                    </Typography>
                </Box>
                
                <Divider sx = {designs.Divider_Style}/>
                
                <Box className = "Date-time" sx = {designs.Date_Time_Style}>
                    <Typography
                    sx = {designs.Date_Typography_Style}>
                    December 12, 2021
                    </Typography>

                    <Divider orientation = "vertical" flexItem sx = {designs.DividerV_Style}/>

                    <Typography
                    sx = {designs.Time_Typography_Style}>
                    3:23 pm
                    </Typography>
                </Box>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Conference_details