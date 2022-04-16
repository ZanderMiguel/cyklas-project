import React from 'react';
import {
  Box,
  Paper,
  Button,
  Typography,
  Stack,
  IconButton,
} from '@mui/material';
import {
  PanoramaOutlined,
  AttachFileOutlined,
  InsertLinkOutlined,
  FormatBold,
  FormatItalic,
} from '@mui/icons-material';
import usePost from '../../customHooks/usePost';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Rich_text.css';

function Rich_text({ socket }) {
  const [upload, setUpload] = React.useState('true');
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const [convertedState, setConvertedState] = React.useState(null);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const state = convertToRaw(editorState.getCurrentContent());
    setConvertedState(state);
  };

  const postData = React.useRef(null);

  const { post, data } = usePost();
  const { roomID } = useParams();
  const handleAnnounce = () => {
    post('http://localhost:5000/announce/create', {
      author: {
        userID: JSON.parse(localStorage.userData).data.user._id,
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        } `,
      },
      rooms: [roomID],
      content: convertedState,
    });
    if (data) {
      setEditorState(EditorState.createEmpty());
    }
    socket.emit('create-post');
  };

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Announce Something..."
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
        {upload && <Box padding="10px">File uploaded/Image/Link</Box>}
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
      <Box display="flex" marginTop={1}>
        <Box flexGrow={1} />
        <Box>
          <Button variant="contained" onClick={handleAnnounce}>
            Post
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Rich_text;
