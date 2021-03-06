import React from 'react';
import { List, ListItem, Divider, Box, Typography } from '@mui/material';
import { BorderColorOutlined, DoorFrontOutlined } from "@mui/icons-material";
import useStyle from "./Styles/RoomOptionspopover_student_style";

function RoomOptionspopover_student() {
  const {designs} = useStyle();

  return (
    <Box sx = {designs.Container_Style}>
      <List component="nav" sx = {designs.Nav_Style}>
        {/* <ListItem button>
          <Box sx = {designs.EditRoomContainer_Style}>
            <BorderColorOutlined sx = {designs.BorderColorOutlined_Style}/>

            <Typography sx = {designs.EditRoom_Typography_Style}>Edit Room</Typography>
          </Box>
        </ListItem>
        <Divider/> */}
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

export default RoomOptionspopover_student;
