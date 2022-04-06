import React from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Box, Button } from '@mui/material';
import Input from '../components/Input';

function Create_activity({ open, close }) {
  return (
    <Dialogform title="Create Activity" divider open={open} close={close} maxWidth="md">
      <Grid container spacing={2} sx={{ p: '0em 2em' }}>
        <Input
          name="topic"
          inputLabel="Topic/Coverage"
          placeholder="Enter activity topic..."
          autoFocus
          half
        />
        <Input name="type" inputLabel="Type" placeholder="Homework" half />
        <Input
          name="title"
          inputLabel="TItle"
          placeholder="Enter activity title..."
          half
        />
        <Input
          name="points"
          inputLabel="Points"
          placeholder="Set activity points"
          half
        />
        <Input
          name="term"
          inputLabel="Term"
          placeholder="Choose term..."
          half
        />
        <Input
          name="duedate"
          inputLabel="Due Date"
          placeholder="Set due date and time for this activity"
          half
        />
        <Input
          name="duedate"
          multiline
          rows={6}
          variant="filled"
          inputLabel="Instruction"
          placeholder="Enter activity instruction..."
        />
        <Box className="action" display="flex" width="100%">
          <Box flexGrow={1} />
          <Button variant="contained" sx={{ mt: 2 }}>
            Post
          </Button>
        </Box>
      </Grid>
    </Dialogform>
  );
}

export default Create_activity;
