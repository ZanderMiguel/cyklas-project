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
} from '@mui/icons-material';
import Wordfile from '../../assets/ImageJaven/Wordfile.png';
import Pdffile from '../../assets/ImageJaven/Pdffile.png';
import Excelfile from '../../assets/ImageJaven/Excelfile.png';
import Powerpointfile from '../../assets/ImageJaven/Powerpointfile.png';
import Imagee from '../../assets/ImageJaven/Imagee.png';
import Videoo from '../../assets/ImageJaven/Videoo.png';
import Filee from '../../assets/ImageJaven/Filee.png';

import usePost from '../../customHooks/usePost';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Rich_text.css';
import axios from 'axios';
function Rich_text({ setPostRender, setCommentRender }) {
  const [upload, setUpload] = React.useState('true');
  const [uploadFile, setUploadFile] = React.useState([
    { fileName: 'File uploaded/image/link' },
  ]);
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
    setCommentRender((prev) => !prev);
    setPostRender((prev) => !prev);

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
    formData.append('content', JSON.stringify(convertedState));
    formData.append('rooms', [roomID]);

    if (editorState) {
      axios
        .post('http://localhost:5000/announce/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res.data);
          setUploadFile([{ fileName: 'File uploaded/image/link' }]);
        })
        .catch((err) => {
          console.log(err);
        });

      // socket.emit('create-post');
      // socket.emit('create-comment');
    }
    if (!data || data) {
      setEditorState('');
    }
  };

  const handledelete = (event, index, filename) => {
    const filtered = uploadFile.filter((item) => item.fileName !== filename);
    console.log(filtered);
    setUploadFile(filtered);
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
        <Box
          sx={{
            padding: '0.5em 0.7em',
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
                    key={index}
                    sx={{
                      marginBottom: '0.5em',
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
                      src={
                        item?.fileName.includes('.docx')
                          ? Wordfile
                          : item?.fileName.includes('.xls')
                          ? Excelfile
                          : item?.fileName.includes('.jpg') ||
                            item?.fileName.includes('.png')
                          ? Imagee
                          : item?.fileName.includes('.mp4')
                          ? Videoo
                          : item?.fileName.includes('.ppt') ||
                            item?.fileName.includes('.pptx')
                          ? Powerpointfile
                          : item?.fileName.includes('.pdf')
                          ? Pdffile
                          : item?.fileName.includes('.txt') && Filee
                      }
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
                        onClick={(event) =>
                          handledelete(
                            event,
                            index,
                            item?.fileName.replace(
                              'File uploaded/image/link',
                              ''
                            )
                          )
                        }
                        sx={{
                          color: '#3F3D56',
                          fontSize: '0.8em',
                          fontWeight: '600',
                          width: 'relative',
                          height: 'auto',
                          flexGrow: 1,
                        }}
                      >
                        {item?.fileName.replace('File uploaded/image/link', '')}
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
                          : item?.fileName?.includes('.mp4')
                          ? 'VIDEO FILE'
                          : item?.fileName.includes('.jpg') ||
                            item?.fileName.includes('.png')
                          ? 'IMAGE FILE'
                          : item?.fileName.includes('.ppt') ||
                            item?.fileName.includes('.pptx')
                          ? 'POWER POINT FILE'
                          : item?.fileName.includes('.pdf')
                          ? 'PDF FILE'
                          : item?.fileName.includes('.txt') && 'FILE'}
                      </Typography>
                    </Box>
                  </Box>
                );
              }
            })}
          <Stack direction="row" spacing={1} sx={{ padding: '0.5em' }}>
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
          </Stack>
        </Box>

        <Divider sx={{ margin: '0em 0em 0.4em 0em' }} />
        <Stack direction="row" spacing={1} sx={{ padding: '0.5em 0em' }}>
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
