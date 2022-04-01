import React from 'react';
import { Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import People_table from './People_table';
import Group_table from './Group_table';
import useStyle from "./Styles/Member_style";

function Member() {
  const {designs} = useStyle();

  return (
    <>
      <Box sx = {designs.Container_Style}>
        <Box sx = {designs.ButtonContainer_Style}>
          <Box flexGrow={1} />
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained" sx = {designs.AddMember_Button_Style}>
            Add member
          </Button>
        </Box>
        <People_table />
        <Group_table />
      </Box>
    </>
  );
}

export default Member;
