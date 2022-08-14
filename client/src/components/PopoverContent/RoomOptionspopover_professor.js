import React, { useState } from 'react';
import { List, ListItem, Divider, Box, Typography } from '@mui/material';
import { BorderColorOutlined, DoorFrontOutlined } from '@mui/icons-material';
import useStyle from './Styles/RoomOptionspopover_professor_style';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import LeaveRoom from '../Modals/LeaveRoom';

function RoomOptionspopover_professor({ id, setNewRoom }) {
  const [opendialog, setOpenDialog] = React.useState(false);
  const [refresher, setRefresher] = useState(false);
  const { designs } = useStyle();

  return (
    <Box sx={designs.Container_Style}>
      <List component="nav" sx={designs.Nav_Style}>
        <ListItem
          button
          onClick={() => {
            axios
              .put('http://localhost:5000/room/leave', {
                id,
                userID: JSON.parse(localStorage.userData).data.user._id,
              })
              .then((res) => {
                setRefresher(<Redirect to="/rooms" />);
                setNewRoom((prev) => !prev);
              })
              .catch((err) => console.log(err));
          }}
        >
          <Box sx={designs.EditRoomContainer_Style}>
            <BorderColorOutlined sx={designs.BorderColorOutlined_Style} />

            <Typography sx={designs.EditRoom_Typography_Style}>
              Edit Room
            </Typography>
          </Box>
        </ListItem>
        {/* <Divider sx = {{ margin: "0em 1em"}}/> */}
        <ListItem
          button
          sx={
            {
              // "&: hover": {
              //   backgroundColor: "#828282"
              // }
            }
          }
        >
          <Box sx={designs.LeaveRoomContainer_Style}>
            <DoorFrontOutlined sx={designs.DoorFrontOutlined_Style} />

            <Typography
              sx={designs.LeaveRoom_Typography_Style}
              onClick={() => setOpenDialog(true)}
            >
              Leave room
            </Typography>
          </Box>
        </ListItem>
      </List>
      {refresher && refresher}
    </Box>
  );
}

export default RoomOptionspopover_professor;
