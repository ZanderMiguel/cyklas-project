import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Box, Button, Tooltip } from '@mui/material';
import { FileUploadOutlined } from '@mui/icons-material';
import Wordfile from '../../../../assets/ImageJaven/Wordfile.png';
import { fs } from 'fs';
function UploadFileTile() {
  const [uploadFile, setUploadFile] = React.useState([]);
  const reader = new FileReader();
  const fileBytes = [];
  return (
    <Box
      className="Student-container"
      sx={{
        height: 'auto',
        width: 'relative',
        marginBottom: '1em',
        borderRadius: '0.3em 0.3em 0em 0em',
        padding: '0.3em 1.5em 1em 1.5em',
        backgroundColor: 'white',
        '&: hover': {
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          borderBottom: '4px solid #007FFF',
          transition: 'all 250ms',
        },
      }}
    >
      <Typography
        sx={{
          height: 'max-content',
          fontSize: '15px',
          fontWeight: '600',
          textTransform: 'Uppercase',
          color: '#6D6B85',
          width: 'auto',
          flexGrow: 1,
          margin: '0.5em 0em 1em 0em',
        }}
      >
        Your Uploaded Files
      </Typography>
      {uploadFile &&
        uploadFile.map((item, key) => {
          return (
            <Tooltip
              key={key}
              title="Click to download file"
              placement="top-start"
            >
              <Box
                className="Attach-file"
                sx={{
                  backgroundColor: 'white',
                  margin: '0.5em 0em 0em 0em',
                  width: '50%',
                  padding: '0.5em 0.9em',
                  display: 'flex',
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
                    noWrap
                    sx={{
                      color: '#3F3D56',
                      fontSize: '0.8em',
                      fontWeight: '600',
                      width: 'relative',
                      height: 'max-content',
                    }}
                  >
                    {item}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#3F3D56',
                      fontSize: '0.7em',
                      width: 'max-content',
                      height: 'max-content',
                    }}
                  >
                    Document File
                  </Typography>
                </Box>
              </Box>
            </Tooltip>
          );
        })}

      <Box
        className="Footer"
        sx={{
          display: 'flex',
          height: 'auto',
          width: 'relative',
          margin: '0.9em 0em 0em 0em',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.8em',
            fontWeight: '700',
            width: 'auto',
            height: 'relative',
            padding: '0.2em 0em 0em 0em',
            textTransform: 'uppercase',
            color: '#007FFF',
          }}
        >
          Handed-out
        </Typography>

        <Box
          flexGrow={1}
          sx={{
            height: 'relative',
          }}
        />
        <label htmlFor="uploadFile">
          <Box
            sx={{
              padding: '0.2em 1em',
              marginRight: '0.5em',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              color: '#0069D3',
              backgroundColor: 'transparent',
            }}
          >
            <FileUploadOutlined
              sx={{
                color: '#0069D3',
              }}
            />
            Upload File
          </Box>
        </label>
        <input
          type="file"
          name="stdUpload"
          id="uploadFile"
          style={{ display: 'none' }}
          onChange={(event) => {
            const formData = new FormData();
            formData.append('media', event.target.files[0]);
            formData.append('filaName', event.target.files[0].name);
            formData.append('author', {
              name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
                JSON.parse(localStorage.userData).data.user.lastName
              }`,
              userID: JSON.parse(localStorage.userData).data.user._id,
              avatar: JSON.parse(localStorage.userData).data.user.image,
            });
            formData.append('activityTopic', 'OBOB');
            formData.append('activityTitle', 'Ka');
            formData.append('activityType', 'Talaga');
            formData.append('activityPoints', '23');
            formData.append('activityDueDate', '12/12/2929');
            formData.append('activityInstruction', 'Wala naman');
            formData.append('rooms', ['62783b190d840f1fb3bedb5e']);
            axios
              .post('http://localhost:5000/activity/create', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
            setUploadFile([...uploadFile, event.target.files[0].name]);
          }}
        />
        <Button
          sx={{
            padding: '0.2em 2.5em',
            fontSize: '0.8em',
            fontWeight: '600',
            textTransform: 'Capitalize',
            color: 'white',
            backgroundColor: '#0069D3',
            '&: hover': {
              backgroundColor: '#005DC3',
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default UploadFileTile;
