import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import People_table_layout from './Layouts/People_table_layout';
import Group_table_layout from './Layouts/Groups_table_layout';
import useStyle from "./Styles/Members_main_style";
import Add_member from "../../../Form_content/Add_member"

function Members_main() {
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
            startIcon={<DoorFrontOutlinedIcon />}
            variant="contained" sx = {designs.AddMember_Button_Style}>
            Leave Room
          </Button>
           {opendialog && (
              <Add_member
                open={opendialog}
                close={handleCreateClose}
                maxWidth="md"
                state={setOpenDialog}
              />)}
        </Box>
        <People_table_layout />
        <Group_table_layout />
      </Box>
    </>
  );
}

export default Members_main;
