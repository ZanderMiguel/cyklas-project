import React from 'react'
import { Box, 
    Typography, 
    Grid, 
    Button, 
    IconButton, 
    CssBaseline,
    Avatar,
    Tooltip,
    Collapse,
    Slide
 } from "@mui/material";
import MainSessionHeader from "./MainSessionHeader";
import MainSessionBody from "./MainSessionBody";
import MainSessionFooter from "./MainSessionFooter";
import RightContentSideBar from './RightContentSideBar';
import MeetingInformation from './MeetingInformation';
import Members from './Members';
import MessageArea from './MessageArea';
import PresentationCriteria from './PresentationCriteria';
import RightContent from './RightContent';
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import { ChatOutlined, Info, InfoOutlined, PeopleAltOutlined, CoPresentOutlined } from '@mui/icons-material';

function TeleconRoomV2() {
  const [sidedrawer, setSideDrawer] = React.useState(false);
  const [sidecontent, setSideContent] = React.useState('');
  
  return (
    <>
    <CssBaseline/>
    <Box sx = {{
        width: "100%",
        height: "100vh",
        backgroundColor: "#21242B",
        overflowY: "hidden",
        overflowX: "hidden"
    }}>
        <Box sx = {{ display: "flex" }}>
            <Box 
                sx = {{ 
                backgroundColor: "#171A20",
                height: "98vh",
                borderRadius: "0.4em",
                margin: "0.4em 0.5em 0em 0.5em"
                }}>
                <MainSessionHeader/>

                <MainSessionBody/>

                <MainSessionFooter/>
            </Box>

            <Box 
                sx = {{ 
                backgroundColor: "#171A20",
                height: "98vh",
                borderRadius: "0.4em 0em 0em 0.4em",
                display: "flex",
                margin: "0.4em 0em 0em 0em"
                }}>
                    
                    {/* LeftContent */}
                    {/* <Collapse
                    orientation="horizontal"
                    in={sidedrawer}
                    sx={{
                    '& .MuiCollapse-wrapperInner': {
                        width: '25rem',
                    },
                    }}> */}
                    <Slide direction="left" in={sidedrawer} mountOnEnter unmountOnExit>
                        
                    <Grid item xs = {10} sx = {{ height: "98vh" }}>
                    
                    {sidecontent === 'MeetingInformation' ? (
                        <MeetingInformation/>
                    )
                    : 
                    sidecontent === 'Members' ? (
                        <Members />
                    )
                    : 
                    sidecontent === 'MessageArea' ? (
                        <MessageArea />
                    )
                    : 
                    (
                    sidecontent === 'PresentationCriteria' && <PresentationCriteria/>
                    )
                    }
                    </Grid>
                    {/* </Collapse> */}
                    </Slide>
            </Box>
                
            <RightContentSideBar setSideDrawer={setSideDrawer} setSideContent={setSideContent}/>
        </Box>
    </Box>
    </>
    
  )
}

export default TeleconRoomV2