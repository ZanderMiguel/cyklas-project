import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Box, Button, Stack, IconButton } from '@mui/material';
import {
  PanoramaOutlined,
  AttachFileOutlined,
  InsertLinkOutlined,
  HomeWork,
} from '@mui/icons-material';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import Datepicker from '../components/DatePicker';
import Dropdown from '../components/Drowpdown';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useParams } from 'react-router-dom';

const types = [
  { value: 'Homework', label: 'Homework' },
  { value: 'Seatwork', label: 'Seatwork' },
  { value: 'Material', label: 'Material' },
];

function Create_activity({ open, close, setOpenDialog }) {
  const { roomID } = useParams();
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState('');
  const [duedate, setDueDate] = useState(null);
  // const [instruction, setInstruction] = useState('');

  //errorState
  const [titleerror, setTitleError] = useState(false);
  const [pointserror, setPointsError] = useState(false);
  const [typeerror, setTypeError] = useState(false);

  //Rich text Editor
  // const [upload, setUpload] = React.useState('true');
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const [convertedState, setConvertedState] = React.useState(null);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const state = convertToRaw(editorState.getCurrentContent());
    setConvertedState(state);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleCreateActivity = () => {
    setTitleError(false);
    setPointsError(false);
    setTypeError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (points === '') {
      setPointsError(true);
    }
    if (type === '') {
      setTypeError(true);
    }

    const Activity = {
      activityTitle: title,
      activityType: type,
      activityPoints: points,
      activityDueDate: duedate,
      activityInstruction: convertedState,
      rooms: [roomID],
    };
    if (title && points && type) {
      axios
        .post('http://localhost:5000/activity/create', Activity)
        .then((res) => {
          setOpenDialog(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
          name="title"
          inputLabel="Title"
          autoComplete="off"
          value={title}
          autoFocus
          onChange={(event) => setTitle(event.target.value)}
          error={titleerror}
          helperText={titleerror ? 'Please enter a title' : false}
          placeholder="Enter activity title..."
        />
        {/* <Input
          name="type"
          inputLabel="Type"
          autoComplete="off"
          placeholder="Homework"
          value={type}
          error={typeerror}
          helperText={typeerror ? 'Please select type' : false}
          onChange={(event) => setType(event.target.value)}
          half
        /> */}
        <Dropdown
          inputLabel="Type"
          onChange={handleType}
          options={types}
          value={type}
          error={typeerror}
          typeerror="Please select type"
          half
        />
        <Input
          name="points"
          inputLabel="Points"
          autoComplete="off"
          value={points}
          error={pointserror}
          helperText={pointserror ? 'Please enter points' : false}
          onChange={(event) => setPoints(event.target.value)}
          placeholder="Set activity points"
          half
        />
        {/* <Input
          name="duedate"
          inputLabel="Due Date"
          autoComplete="off"
          value={duedate}
          onChange={(event) => setDueDate(event.target.value)}
          placeholder="Set due date and time for this activity"
          half
        /> */}
        <Datepicker
          inputLabel="Due Date"
          duedate={duedate}
          setDueDate={setDueDate}
        />

        {/* <Input
          name="instruction"
          autoComplete="off"
          multiline
          rows={6}
          variant="outlined"
          inputLabel="Instruction"
          value={instruction}
          onChange={(event) => setInstruction(event.target.value)}
          placeholder="Enter activity instruction..."
        /> */}
        <Grid item xs={12}>
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            placeholder="Write Instruction (Optional)"
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            toolbar={{
              options: ['inline', 'list', 'textAlign'],
              inline: {
                className: 'inline-class',
                options: ['bold', 'italic', 'underline'],
                bold: { className: 'BOLD-CLASS' },
              },
              list: {
                inDropdown: false,
                className: undefined,
                dropdownClassName: undefined,
                options: ['unordered', 'ordered'],
              },
              textAlign: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['left', 'center', 'right', 'justify'],
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.06)',
              borderRadius: '0px 0px 4px 4px',
            }}
          >
            <Box padding="10px">File uploaded/Image/Link</Box>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="image"
                size="medium"
                sx={{
                  marginLeft: '10px',
                }}
              >
                <PanoramaOutlined />
              </IconButton>
              <IconButton aria-label="file" size="medium">
                <AttachFileOutlined />
              </IconButton>
              <IconButton aria-label="link" size="medium">
                <InsertLinkOutlined />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
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
