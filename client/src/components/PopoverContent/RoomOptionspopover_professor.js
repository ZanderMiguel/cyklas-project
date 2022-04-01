import React from 'react';
import { List, ListItem, Divider, Box, Typography } from '@mui/material';
import { BorderColorOutlined, DoorFrontOutlined } from "@mui/icons-material";
import useStyle from "./Styles/RoomOptionspopover_professor_style";

function RoomOptionspopover_professor() {
  const {designs} = useStyle();

  return (
    <Box sx = {designs.Container_Style}>
      <List component="nav" sx = {designs.Nav_Style}>
        <ListItem button>
          <Box sx = {designs.EditRoomContainer_Style}>
            <BorderColorOutlined sx = {designs.BorderColorOutlined_Style}/>

            <Typography sx = {designs.EditRoom_Typography_Style}>Edit Room</Typography>
          </Box>
        </ListItem>
        {/* <Divider sx = {{ margin: "0em 1em"}}/> */}
        <ListItem button>
          <Box sx = {designs.LeaveRoomContainer_Style}>
            <DoorFrontOutlined sx = {designs.DoorFrontOutlined_Style}/>

            <Typography sx = {designs.LeaveRoom_Typography_Style}>Leave room</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default RoomOptionspopover_professor;
