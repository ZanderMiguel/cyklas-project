import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import MembersTableStud from './Layouts/MembersTableStud';
import Group_table_layout from './Layouts/Groups_table_layout';
import useStyle from './Styles/Members_main_style';
import LeaveRoom from '../../../components/Modals/LeaveRoom';

function Members_main({ roomData }) {
  const { designs } = useStyle();

  const [opendialog, setOpenDialog] = useState(false);
  const [members, setMembers] = useState(null);
  const handleClose = () => {
    setOpenDialog(false);
  };
  members && console.log(members);
  useEffect(() => {
    axios
      .post('http://localhost:5000/get/members', {
        members: roomData.room.members,
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
          {opendialog && <LeaveRoom open={opendialog} close={handleClose} />}
        </Box>
        <MembersTableStud members={members} />
        <Group_table_layout />
      </Box>
    </>
  );
}

export default Members_main;
