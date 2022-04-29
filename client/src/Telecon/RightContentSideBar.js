import React from 'react'
import { Grid, Box, Tooltip, IconButton } from "@mui/material";
import { InfoOutlined, PeopleAltOutlined, ChatOutlined, CoPresentOutlined } from "@mui/icons-material";

function RightContentSideBar({ setSideDrawer, setSideContent }) {
  const [toggleInfo, setToggleInfo] = React.useState(false);
  const [toggleMember, setToggleMember] = React.useState(false);
  const [toggleMessage, setToggleMessage] = React.useState(false);
  const [togglePresent, setTogglePresent] = React.useState(false);

  const handleToggleInfo = () => {
    setSideDrawer(true);
    setToggleInfo((prev) => !prev);

    if (toggleInfo === false) {
      setSideDrawer(true);
    } else {
      setSideDrawer(false);
    }
    setSideContent('MeetingInformation');
    setToggleMember(false);
    setToggleMessage(false);
    setTogglePresent(false);
  };
  const handleToggleMember = () => {
    setSideDrawer(true);
    setToggleMember((prev) => !prev);
    if (toggleMember === false) {
      setSideDrawer(true);
    } else {
      setSideDrawer(false);
    }
    setSideContent('Members');
    setToggleInfo(false);
    setToggleMessage(false);
    setTogglePresent(false);
  };
  const handleToggleMessage = () => {
    setSideDrawer(true);
    setToggleMessage((prev) => !prev);
    if (toggleMessage === false) {
      setSideDrawer(true);
    } else {
      setSideDrawer(false);
    }
    setSideContent('MessageArea');
    setToggleInfo(false);
    setToggleMember(false);
    setTogglePresent(false);
  };
  const handleTogglePresent = () => {
    setSideDrawer(true);
    setTogglePresent((prev) => !prev);
    setSideContent('PresentationCriteria');
    if (togglePresent === false) {
      setSideDrawer(true);
    } else {
      setSideDrawer(false);
    }
    setToggleInfo(false);
    setToggleMember(false);
    setToggleMessage(false);
  };

  return (
    <>
    <Box 
        sx = {{ 
            height: "98vh",
            position: "relative",
            right: 0,
            top: 6,
            backgroundColor: "#2B2E34"
        }}>
        <Box sx = {{
          height: "98vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em"
        }}>
        <Tooltip title = "Meeting Information" placement = "left">
        <IconButton onClick={handleToggleInfo} 
            sx = {
                toggleInfo === true ? 
                    { 
                    borderRadius: "0em",
                    width: "2.5em",
                    height: "2em",
                    borderRight: "4px solid #007FFF",
                    backgroundColor: "#34373D",
                    "&: hover": {
                        borderRight: "4px solid #007FFF",
                        backgroundColor: "#34373D",
                    }
                    }
                    :
                    { 
                    borderRadius: "0em",
                    width: "2.5em",
                    height: "2em",
                    borderRight: "4px solid transparent",
                    "&: hover": {
                        backgroundColor: "#34373D",
                    }
                    }}>
            <InfoOutlined sx = {{ fontSize: "1em", color: "#DEDEDE" }}/>
        </IconButton>
        </Tooltip>
                        
        <Tooltip title = "Members" placement = "left">
        <IconButton onClick={handleToggleMember} 
        sx = {
            toggleMember === true ? 
            { 
            borderRadius: "0em",
            width: "2.5em",
            height: "2em",
            borderRight: "4px solid #007FFF",
            backgroundColor: "#34373D",
            "&: hover": {
                borderRight: "4px solid #007FFF",
                backgroundColor: "#34373D",
            }
            }
            :
            { 
            borderRadius: "0em",
            width: "2.5em",
            height: "2em",
            borderRight: "4px solid transparent",
            "&: hover": {
                backgroundColor: "#34373D",
            }
            }}>
            <PeopleAltOutlined sx = {{ fontSize: "1em", color: "#DEDEDE" }}/>
        </IconButton>
        </Tooltip>

        <Tooltip title = "Message Area" placement = "left">
        <IconButton onClick={handleToggleMessage} 
        sx = {
            toggleMessage === true ? 
            { 
            borderRadius: "0em",
            width: "2.5em",
            height: "2em",
            borderRight: "4px solid #007FFF",
            backgroundColor: "#34373D",
            "&: hover": {
                borderRight: "4px solid #007FFF",
                backgroundColor: "#34373D",
            }
            }
            :
            { 
            borderRadius: "0em",
            width: "2.5em",
            height: "2em",
            borderRight: "4px solid transparent",
            "&: hover": {
                backgroundColor: "#34373D",
            }
            }}>
            <ChatOutlined sx = {{ fontSize: "1em", color: "#DEDEDE" }}/>
        </IconButton>
        </Tooltip>
                        
        <Tooltip title = "Presentation Criteria" placement = "left">
        <IconButton onClick={handleTogglePresent} 
        sx = {
            togglePresent === true ? 
            { 
            borderRadius: "0em",
            width: "2.5em",
            height: "2em",
            borderRight: "4px solid #007FFF",
            backgroundColor: "#34373D",
            "&: hover": {
                borderRight: "4px solid #007FFF",
                backgroundColor: "#34373D",
            }
            }
            :
            { 
            borderRadius: "0em",
            width: "2.5em",
            height: "2em",
            borderRight: "4px solid transparent",
            "&: hover": {
                backgroundColor: "#34373D",
            }
            }}>
            <CoPresentOutlined sx = {{ fontSize: "0.9em", color: "#DEDEDE" }}/>
        </IconButton>
        </Tooltip>
        </Box>
    </Box>
    </>
  )
}

export default RightContentSideBar