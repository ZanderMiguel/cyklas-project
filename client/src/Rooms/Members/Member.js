import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import People_table from './People_table';
import Group_table from './Group_table';
import useStyle from "./Styles/Member_style";
import Add_member from "../../Form_content/Add_member"

function Member() {
  const {designs} = useStyle();

  const [opendialog, setOpenDialog] = useState(false);

  const handleCreate = () => {
    setOpenDialog(true);
  };

  const handleCreateClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box sx = {designs.Container_Style}>
        <Box sx = {designs.ButtonContainer_Style}>
          <Box flexGrow={1} />
          <Button onClick = {handleCreate}
            startIcon={<AddCircleIcon />}
            variant="contained" sx = {designs.AddMember_Button_Style}>
            Add member
          </Button>
           {opendialog && (
              <Add_member
                open={opendialog}
                close={handleCreateClose}
                maxWidth="md"
                state={setOpenDialog}
              />)}
        </Box>
        <People_table />
        <Group_table />
      </Box>
    </>
  );
}

export default Member;
