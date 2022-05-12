import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import MembersTableStud from './Layouts/MembersTableStud';
import Group_table_layout from './Layouts/Groups_table_layout';
import useStyle from './Styles/Members_main_style';
import LeaveRoom from '../../../components/Modals/LeaveRoom';
import { useParams } from 'react-router-dom';
function Members_main({ roomdata }) {
  const { roomID } = useParams();
  const { designs } = useStyle();
  const [refresher, setRefresher] = useState(false);
  const [opendialog, setOpenDialog] = useState(false);
  const [members, setMembers] = useState(null);
  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/get/members', {
        members: roomdata.room.members,
      })
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box sx={designs.Container_Style}>
        <Box sx={designs.ButtonContainer_Style}>
          <Box flexGrow={1} />
          <Button
            onClick={() => setOpenDialog(true)}
            startIcon={<DoorFrontOutlinedIcon />}
            variant="contained"
            sx={designs.AddMember_Button_Style}
          >
            Leave Room
          </Button>
          {opendialog && (
            <LeaveRoom
              roomID={roomID}
              setRefresher={setRefresher}
              open={opendialog}
              close={handleClose}
            />
          )}
        </Box>
        <MembersTableStud members={members} />
        <Group_table_layout />
        {refresher && refresher}
      </Box>
    </>
  );
}

export default Members_main;
