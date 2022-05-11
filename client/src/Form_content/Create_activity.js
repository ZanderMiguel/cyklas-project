import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  Box,
  Button,
  Stack,
  IconButton,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  Tooltip,
} from '@mui/material';
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
import useStyle from '../Quizlit/Styles/Quiz_style';
import Wordfile from '../assets/ImageJaven/Wordfile.png';

function Create_activity({ item, open, close, setOpenDialog }) {
  const [uploadFile, setUploadFile] = React.useState([
    { fileName: 'File uploaded/image/link' },
  ]);
  const { roomID } = useParams();
  const [category, setCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
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
    setCategory(event.target.value);
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
    if (selectedCategory === '') {
      setTypeError(true);
    }

    const formData = new FormData();
    uploadFile.forEach((item) => {
      if (item.fileName !== 'File uploaded/image/link') {
        formData.append('file', item.file);
        formData.append('filaName', item.fileName);
        formData.append('media', item.fileName);
      }
    });
    formData.append(
      'author',
      JSON.stringify({
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        }`,
        userID: JSON.parse(localStorage.userData).data.user._id,
        avatar: JSON.parse(localStorage.userData).data.user.image,
      })
    );
    formData.append('activityTitle', title);
    formData.append('activityType', selectedCategory);
    formData.append('activityPoints', points);
    formData.append('activityDueDate', duedate);
    formData.append('activityInstruction', JSON.stringify(convertedState));
    formData.append('rooms', [roomID]);
    axios
      .post('http://localhost:5000/activity/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        setUploadFile([
          ...uploadFile,
          { fileName: 'File uploaded/image/link' },
        ]);
        close();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .post('http://localhost:5000/gradingSystem/record', {
        roomID: roomID,
      })
      .then((res) => setCategory(res.data[0].Category))
      .catch((err) => console.log(err.message));
  }, []);
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
        <Grid item xs={12} sm={6}>
          <FormControl error={typeerror} fullWidth>
            <Typography variant="body1" sx={{ ml: 1, mb: 1, fontWeight: 500 }}>
              Category
            </Typography>

            <Select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {category &&
                category.map((item, index) => (
                  <MenuItem key={index} value={Object.entries(item)[0][0]}>
                    {Object.entries(item)[0][0]}
                  </MenuItem>
                ))}
            </Select>
            {typeerror ? (
              <FormHelperText> Please select Category</FormHelperText>
            ) : null}
          </FormControl>
        </Grid>
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
        <Datepicker
          inputLabel="Due Date"
          duedate={duedate}
          setDueDate={setDueDate}
        />
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
            {uploadFile &&
              uploadFile.map((item, index) => {
                if (index !== 0) {
                  return (
                    <Box
                      className="Attach-file"
                      sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 'auto',
                        padding: '0.5em 0.9em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.9em',
                        border: '1px solid #D4D4D4',
                        borderRadius: '0.3em',
                        '&: hover': {
                          cursor: 'pointer',
                          boxShadow:
                            'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                        },
                      }}
                    >
                      <img
                        src={Wordfile}
                        style={{
                          height: '40px',
                        }}
                      />

                      <Box
                        className="Activity-filename"
                        sx={{
                          width: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            color: '#3F3D56',
                            fontSize: '0.8em',
                            fontWeight: '600',
                            width: 'relative',
                            height: 'auto',
                            flexGrow: 1,
                          }}
                        >
                          {item?.fileName.replace(
                            'File uploaded/image/link',
                            ''
                          )}
                        </Typography>

                        <Typography
                          sx={{
                            color: '#3F3D56',
                            fontSize: '0.7em',
                            width: 'max-content',
                            height: 'max-content',
                          }}
                        >
                          {item?.fileName?.includes('.docx')
                            ? 'WORD FILE'
                            : item?.fileName?.includes('.xls')
                            ? 'EXCEL FILE'
                            : item?.fileName?.includes('.ppt') ||
                              item?.fileName?.includes('.pptx')
                            ? 'POWER POINT'
                            : item.fileName.includes('.pdf')
                            ? 'PDF FILE'
                            : 'FILE'}
                        </Typography>
                      </Box>
                    </Box>
                  );
                }
              })}

            {/* <Box padding="10px">{uploadFile.map(item => 
              item.fileName.replace('File uploaded/image/link', ''))}</Box> */}
            <Stack direction="row" spacing={1} sx={{ padding: '0.5em' }}>
              {/* <IconButton
                aria-label="image"
                size="medium"
                sx={{
                  marginLeft: '10px',
                }}
              >
                <PanoramaOutlined />
              </IconButton> */}
              <label htmlFor="uploadFile">
                <Tooltip title="Attach a file" placement="top">
                  <Box
                    sx={{
                      padding: '0.5em',
                      borderRadius: '5em',
                      display: 'flex',
                      alignItems: 'center',
                      '&: hover': {
                        cursor: 'pointer',
                        transition: 'all 250ms',
                        backgroundColor: '#E7E7E7',
                      },
                    }}
                  >
                    <AttachFileOutlined
                      sx={{ color: '#707070', fontSize: '1.5em' }}
                    />
                  </Box>
                </Tooltip>
              </label>
              <input
                type="file"
                name="stdUpload"
                id="uploadFile"
                style={{ display: 'none' }}
                onChange={(event) => {
                  setUploadFile([
                    ...uploadFile,
                    {
                      fileName: event.target.files[0].name,
                      file: event.target.files[0],
                    },
                  ]);
                }}
              />
              {/* <label htmlFor="uploadFile"  > */}
              <Tooltip title="Attach a link" placement="top">
                <Box
                  sx={{
                    padding: '0.5em',
                    borderRadius: '5em',
                    display: 'flex',
                    alignItems: 'center',
                    '&: hover': {
                      cursor: 'pointer',
                      transition: 'all 250ms',
                      backgroundColor: '#E7E7E7',
                    },
                  }}
                >
                  <InsertLinkOutlined
                    sx={{ color: '#707070', fontSize: '1.5em' }}
                  />
                </Box>
              </Tooltip>

              {/* </label> */}
            </Stack>
          </Box>
        </Grid>
        <Box className="action" display="flex" width="100%">
          <Box flexGrow={1} />
          <Button
            onClick={handleCreateActivity}
            variant="contained"
            sx={{
              fontWeight: '600',
              boxShadow: 'none',
              mt: 2,
              mb: 2,
            }}
          >
            Post
          </Button>
        </Box>
      </Grid>
    </Dialogform>
  );
}

export default Create_activity;
