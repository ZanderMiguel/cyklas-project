import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Memberstable from './Memberstable';
import Group_table from './Group_table';
import useStyle from './Styles/Member_style';
import Add_member from '../../../Form_content/Add_member';
import axios from 'axios';

function Member({ roomdata }) {
  const { designs } = useStyle();

  const [opendialog, setOpenDialog] = useState(false);
  const [members, setMembers] = useState(null);
  const [refresher, setRefresher] = useState(false);
  const handleCreate = () => {
    setOpenDialog(true);
  };

  const handleCreateClose = () => {
    setOpenDialog(false);
  };

  React.useEffect(() => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/get/members', {
        members: roomdata.room.members,
      })
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }, [refresher]);

  return (
    <>
      <Box sx={designs.Container_Style}>
        <Box sx={designs.ButtonContainer_Style}>
          <Box flexGrow={1} />
          <Button
            onClick={handleCreate}
            startIcon={<AddCircleIcon />}
            variant="contained"
            sx={designs.AddMember_Button_Style}
          >
            Add member
          </Button>
          {opendialog && (
            <Add_member
              open={opendialog}
              close={handleCreateClose}
              maxWidth="md"
              state={setOpenDialog}
            />
          )}
        </Box>
        <Memberstable members={members} setRefresher={setRefresher} />
        {/* <Group_table /> */}
        {refresher && refresher}
      </Box>
    </>
  );
}

export default Member;
