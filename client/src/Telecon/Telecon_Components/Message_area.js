import React from 'react'
import { Container, Grid, Typography, Box, Divider, TextField, InputAdornment, IconButton, Avatar } from "@mui/material";
import { Send, InfoOutlined, Chat } from "@mui/icons-material";
import AvatarIcon from "../../assets/ImageJaven/Avatar.png";
import MembersIconButton from "../../assets/ImageJaven/MembersIconButton.png";
import PresentationIconButton from "../../assets/ImageJaven/PresentationIconButton.png";
import useStyle from "../Telecon_Components_Styles/Message_area_style";
import { Link } from "react-router-dom";

const data = [
    {
        memberName: "Paul Rudd",
        messageTime: "11:52 pm",
        Message: "Unang letra P"
    },
    {
        memberName: "Tom Holland",
        messageTime: "11:53 pm",
        Message: "Hahahaha"
    },
    {
        memberName: "Tom Hiddleston",
        messageTime: "11:55 pm",
        Message: "susunod A"
    },
    {
        memberName: "Robert Downey Jr.",
        messageTime: "11:55 pm",
        Message: "susunod N"
    },
    {
        memberName: "Sebastian Stan",
        messageTime: "11:57 pm",
        Message: "susunod D"
    },
    {
        memberName: "Paul Rudd",
        messageTime: "11:57 pm",
        Message: "Ano ang susunod? Five seconds Go!"
    },
    {
        memberName: "Tom Holland",
        messageTime: "11:58 pm",
        Message: "PanDhezsal"
    },
    {
        memberName: "Tom Hiddleston",
        messageTime: "11:59 pm",
        Message: "*nagtawanan sila kuya wil"
    },
    {
        memberName: "Robert Downey Jr.",
        messageTime: "11:59 pm",
        Message: "PanDhelemoun"
    },
    {
        memberName: "Sebastian Stan",
        messageTime: "11:59 pm",
        Message: "*nagtawanan ulit sila kuya wil"
    }
];
function Message_area() {

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
                sx = {designs.MessageArea_Typography_Style}>
                MessageArea
                </Typography>

                <Divider sx = {designs.Divider_Style}/>

                <Box className = "Message-box" sx = {designs.Message_Box_Style}>

                {data.map(function(items, index) {
                    return (
                        <>
                        <Box key = {index} className = "Members-comment" sx = {designs.Members_Comment_Style}>
                            <Avatar alt="Remy Sharp" src={AvatarIcon} 
                                sx = {designs.AvatarIcon_Avatar_Style}/>
                            <Box className = "Member-time" sx = {designs.Member_Time_Style}>
                            <Typography sx = {designs.MemberName_Typography_Style}>
                                {items.memberName}
                            </Typography>
        
                            <Typography sx = {designs.MessageTime_Typography_Style}>
                                {items.messageTime}
                            </Typography>
                            </Box>
                            
                        </Box>
        
                        <Typography sx = {designs.Message_Typography_Style}>
                            {items.Message}
                        </Typography>
                        </>
                    )
                })}
                
                </Box>
                

                <Box className = "Write-comment" sx = {designs.Write_Comment_Style}>
                    <Avatar alt="Remy Sharp" src={AvatarIcon} 
                    sx = {designs.AvatarIcon_Avatar_Style2}/>

                    <TextField id="filled-basic" placeholder="Send a message" variant="filled" 
                    sx = {designs.Message_TextField_Style}
                    inputProps={{style: {height: "0em", fontSize: "0.8em", fontWeight: "500", paddingBottom: "1.8em", color: "#3F3D56"}}}
                    InputProps={{disableUnderline: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="send" sx = {designs.Send_IconButton_Style}>
                                <Send
                                sx = {designs.SendIcon_Style}/>
                            </IconButton>
                        </InputAdornment>
                    ),}}/>
                </Box>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Message_area