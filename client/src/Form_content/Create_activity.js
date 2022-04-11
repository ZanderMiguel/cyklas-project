import React, { useState } from 'react';
import axios from 'axios';
import Dialogform from '../components/Dialogform';
import { Grid, Box, Button } from '@mui/material';
import Input from '../components/Input';

function Create_activity({ open, close }) {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState('');
  const [duedate, setDueDate] = useState('');
  const [instruction, setInstruction] = useState('');

  const handleCreateActivity = () => {
    const Activity = {
      activityTopic: topic,
      activityTitle: title,
      activityType: type,
      activityPoints: points,
      activityDueDate: duedate,
      activityInstruction: instruction,
    };
    axios
      .post('http://localhost:5000/activity/create', Activity)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialogform
      title="Create Activity"
      divider
      open={open}
      close={close}
      maxWidth="md"
    >
      <Grid container spacing={2} sx={{ p: '0em 2em' }}>
        <Input
          name="topic"
          inputLabel="Topic/Coverage"
          autoComplete="off"
          placeholder="Enter activity topic..."
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          autoFocus
          half
        />
        <Input
          name="type"
          inputLabel="Type"
          autoComplete="off"
          placeholder="Homework"
          value={type}
          onChange={(event) => setType(event.target.value)}
          half
        />
        <Input
          name="title"
          inputLabel="TItle"
          autoComplete="off"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter activity title..."
          half
        />
        <Input
          name="points"
          inputLabel="Points"
          autoComplete="off"
          value={points}
          onChange={(event) => setPoints(event.target.value)}
          placeholder="Set activity points"
          half
        />
        {/* <Input
          name="term"
          inputLabel="Term"
          placeholder="Choose term..."
          half
        /> */}
        <Input
          name="duedate"
          inputLabel="Due Date"
          autoComplete="off"
          value={duedate}
          onChange={(event) => setDueDate(event.target.value)}
          placeholder="Set due date and time for this activity"
          half
        />
        <Input
          name="instruction"
          autoComplete="off"
          multiline
          rows={6}
          variant="outlined"
          inputLabel="Instruction"
          value={instruction}
          onChange={(event) => setInstruction(event.target.value)}
          placeholder="Enter activity instruction..."
        />
        <Box className="action" display="flex" width="100%">
          <Box flexGrow={1} />
          <Button
            onClick={handleCreateActivity}
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Post
          </Button>
        </Box>
      </Grid>
    </Dialogform>
  );
}

export default Create_activity;
