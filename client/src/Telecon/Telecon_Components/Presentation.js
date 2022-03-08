import React from 'react'
import { Container, Grid, Typography, Box, Divider, Tabs, Tab, IconButton } from "@mui/material";
import { InfoOutlined, Chat } from "@mui/icons-material";
import MembersIconButton from "../../assets/ImageJaven/MembersIconButton.png";
import PresentationIconButton from "../../assets/ImageJaven/PresentationIconButton.png";
import useStyle from "../Telecon_Components_Styles/Presentation_style";
import PresentationCriteria from "./Presentation_criteria";
import PresentationMembers from "./Presentation_members";
import { Link } from "react-router-dom";


function Presentation() {

    const {designs} = useStyle()

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [comp, setComp] = React.useState(<PresentationCriteria/>);

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
                <Tabs orientation="horizontal"
                value={value}
                onChange={handleChange}
                aria-label="Horizontal tabs example"
                sx = {designs.Tabs_Style}>
                <Tab disableRipple sx = {designs.Tab1_Style}
                    label={
                    <Typography  sx = {designs.PresentationCriteria_Typography_Style}>
                        Presentation Criteria
                    </Typography>
                    }
                    onClick={() => {
                    setComp(<PresentationCriteria/>);
                    }}/>
                <Tab disableRipple sx = {designs.Tab2_Style}
                    label={
                    <Typography sx = {designs.Members_Typography_Style}>
                        Members
                    </Typography>
                    }
                    onClick={() => {
                    setComp(<PresentationMembers/>);
                    }}/>
                </Tabs>

                <Divider sx = {designs.Divider_Style}/>

                <Box className = "Presentation-criteria" sx = {designs.PresentationCriteria_Box_Style}>
                    {comp}
                </Box>

                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Presentation