import React from 'react';
import { List, ListItem, Divider, Box, Typography } from '@mui/material';
import useStyle from "./Styles/RoomsOptionpopover_style";

function RoomsOptionpopover() {
  const {designs} = useStyle();

  return (
    <Box sx = {designs.Container_Style}>
      <List component="nav" sx = {designs.Nav_Style}>
        <ListItem button>
          <Box sx = {designs.EditContainer_Style}>
            <Typography sx = {designs.Edit_Typography_Style}>Edit</Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box sx = {designs.LeaveRoomContainer_Style}>
            <Typography sx = {designs.LeaveRoom_Typography_Style}>Leave room</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default RoomsOptionpopover;
