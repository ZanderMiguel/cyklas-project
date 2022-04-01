import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import { Circle } from "@mui/icons-material";
import useStyle from "./Styles/Notificationpopover_style";

function Notificationpopover({ general, request }) {
  const {designs} = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography sx = {{
        margin: "0.8em 1em 0em 1em",
        fontSize: "1em",
        fontWeight: "500",
        color: "#3F3D56"
      }}>
        Notifications
      </Typography>
      <Tabs value={value} onChange={handleChange} sx = {{ margin: "0em 1em" }}>
        <Tab label="General" disableRipple />
        <Tab label="Requests" disableRipple />
      </Tabs>

      {value === 1 && (
        <Box sx = {designs.RequestContainer_Style}>
          {request.length > 0 ? (
            request.map((items, index) => (
              <div key={index}>
                <Box sx = {designs.RequestContainer_Sub_Style}>
                  <Box sx = {designs.RequestContainer_Sub2_Style}>
                    <Box sx = {designs.RequestContainer_Sub3_Style}>{items.avatar}</Box>
                    <Typography>{items.student}</Typography>
                  </Box>
                  <Button
                    variant="contained" sx = {designs.AcceptButton_Style} >
                    Accept
                  </Button>
                  <Button
                    variant="text" sx = {designs.DeclineButton_Style}>
                    Decline
                  </Button>
                </Box>
                <Divider sx = {designs.Divider_Style} />
              </div>
            ))
          ) : (
            <Box sx = {designs.RequestContainer_Sub4_Style}>
              <Typography children="have nothing to show" />
            </Box>
          )}
        </Box>
      )}

      {value === 0 && (
        <Box sx = {designs.GeneralContainer_Style}>
          {general.length > 0 ? (
            general.map((items, index) => (
              <div key={index}>
                <Box sx = {designs.GeneralContainer_Sub_Style}>

                  <Circle sx = {{  marginTop: "0.4em", color: "#007FFF", fontSize: "0.7em" }}/>
                  {/* <Box sx = {designs.GeneralContainer_Sub2_Style}> {items.avatar}</Box> */}
                  <Box>
                    <Typography sx = {{ 
                    fontSize: "0.8em", 
                    fontWeight: "600",
                    color: "#3F3D56",
                    width: "22.5em"
                    }}>
                      {items.action} 
                    </Typography>
                    
                    <Box sx = {{
                      marginTop: "0.2em",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5em",
                      width: "18em",
                      height: "auto"
                    }}>
                      <Typography sx = {{ 
                      fontSize: "0.5em", 
                      fontWeight: "500",
                      color: "#605E73",
                      width: "auto"
                      }}>
                        {items.user}
                      </Typography>
                      
                      <Divider orientation = "vertical" flexItem sx = {{ margin: "0.2em 0em" }}/>

                      <Typography sx = {{ 
                      fontSize: "0.5em", 
                      fontWeight: "500",
                      color: "#8E8E8E",
                      width: "auto"
                      }}>
                        {items.dateTime}
                      </Typography>
                    </Box>
                    
                  </Box>

                  <Box sx = {designs.GeneralContainer_Sub2_Style}> {items.avatar}</Box>
                </Box>
                <Divider sx = {designs.Divider_Style} />
              </div>
              
            ))
           
          ) : (
            <Box sx = {designs.GeneralContainer_Sub3y_Style}>
              <Typography children="have nothing to show" />
            </Box>
          )}
        </Box>

        
      )}
        <Typography sx = {{
          margin: "0em 1em 0.8em 2em",
          padding: "0em 1em",
          fontSize: "0.8em",
          fontWeight: "600",
          color: "#007FFF",
          width: "max-content",
          "&: hover": {
            cursor: "pointer",
            transition: "all 300ms"
          }
        }}>
          View all notifications
        </Typography>
    </>
  );
}

export default Notificationpopover;
