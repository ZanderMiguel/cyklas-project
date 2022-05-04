import React from 'react';
import {
  Box,
  Paper,
  Button,
  Typography,
  Stack,
  IconButton,
  Divider,
  Tooltip,
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

  const { post, data, isPending } = usePost();
  const { roomID } = useParams();
  const handleAnnounce = () => {
    post('http://localhost:5000/announce/create', {
      author: {
        userID: JSON.parse(localStorage.userData).data.user._id,
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        } `,
        avatar: JSON.parse(localStorage.userData).data.user.image,
      },
      rooms: [roomID],
      content: convertedState,
    });

    if (!data || data) {
      setEditorState('');
    }

    socket.emit('create-post');
    socket.emit('create-comment');
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
          borderRadius: '0px 0px 4px 4px',
        }}
      >
        {/* {upload && <Box padding="0.3em 0.5em" margin="0.4em 0em">File uploaded/Image/Link</Box>} */}

        <Divider sx={{ margin: '0em 0em 0.4em 0em' }} />
        <Stack direction="row" spacing={1}>
          <Tooltip title="Attach Image(s)" placement="top">
            <IconButton aria-label="image" size="medium" sx={{}}>
              <PanoramaOutlined sx={{ fontSize: '0.8em' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Attach File(s)" placement="top">
            <IconButton aria-label="file" size="medium" sx={{}}>
              <AttachFileOutlined sx={{ fontSize: '0.8em' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Attach Link(s)" placement="top">
            <IconButton aria-label="link" size="medium" sx={{}}>
              <InsertLinkOutlined sx={{ fontSize: '0.8em' }} />
            </IconButton>
          </Tooltip>

          <Box flexGrow={1} />

          <Button
            variant="contained"
            onClick={handleAnnounce}
            sx={{
              fontWeight: '600',
              boxShadow: 'none',
            }}
          >
            Post
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Rich_text;
