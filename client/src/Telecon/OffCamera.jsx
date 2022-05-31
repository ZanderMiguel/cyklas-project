import React from 'react';
import { KeyboardVoiceOutlined } from '@mui/icons-material';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import { Box, Typography, Avatar, IconButton, Tooltip } from '@mui/material';

function OffCamera({
  members,
  layout,
  toggleMic,
  tileWidth,
  handleToggleMic,
  myPeer,
  socketID,
  cam,
  ss,
}) {
  const tile = document.getElementById(`tile${socketID}`);
  const tile2 = document.getElementById(`tile2${socketID}`);
  const vid = document.getElementById(`vid${socketID}`);
  const peers = {};
  const [myVidStream, setMyVidStream] = React.useState(null);
  React.useEffect(() => {
    if (cam[socketID] === true && tile && tile2 && vid) {
      tile.style.setProperty('display', 'none');

      tile2.setAttribute(
        'style',
        `background-color: #25282E;
        height: ${document.getElementById(socketID).clientHeight}px;
        width: ${document.getElementById(socketID).clientWidth}px;
        border-radius: 0.5em;`
      );
      vid.setAttribute(
        'style',
        `
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 0.5em;
        position: relative;
      `
      );
      console.log(
        document.getElementById(socketID).clientWidth,
        document.getElementById(socketID).clientHeight
      );
      vid.srcObject = myVidStream;
      vid.muted = true;
      vid.addEventListener('loadedmetadata', () => {
        vid
          .play()
          .then(() => {
            console.log('stream loaded');
          })
          .catch((err) => console.log(err));
      });
    }
    if (vid && tile && tile2 && cam[socketID] === false) {
      tile.setAttribute(
        'style',
        `position: relative;
        background-color: #25282E;
        height: 100%;
        width: 100%;
        border-radius: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`
      );
      console.log(
        document.getElementById(socketID).width,
        document.getElementById(socketID).clientHeight
      );
      tile2.style.setProperty('display', 'none');
      vid.srcObject = null;
    }
  }, [cam[socketID]]);
  React.useMemo(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setMyVidStream(stream);
        /* myPeer.on('call', (call) => {
           call.answer(stream);
           const video = document.createElement('video');
           const vidRatio = document.createElement('div');
           video.muted = true;
           call.on('stream', (userVideoStream) => {
             addVideoStream(video, userVideoStream, vidRatio);
           });
         });
         socket.on('user-connected', (userId) => {
           // When user is connected,
           connectToNewUser(userId, stream); // we will automatically call them
           
         }); */
      });
  }, [Object.keys(peers).length]);
  return (
    <>
      {members.current.map(function (items) {
        return (
          <div
            id={items.id}
            key={items.id + items.stdID}
            style={{
              margin: `${ss[socketID] === true ? '0 auto' : 'unset'}`,
              minWidth: `calc(${
                ss[socketID] === true ? '100%' : '85%'
              } /${tileWidth})`,
              height: `calc(${
                layout.current && layout.current.clientHeight
              }/${tileWidth})`,
            }}
          >
            <Box
              id={`tile${items.id}`}
              sx={{
                position: 'relative',
                backgroundColor: '#25282E',
                height: '100%',
                width: '100%',
                borderRadius: '0.5em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Avatar
                alt={items.memberName[0].toUpperCase()}
                src={items.camera.replace('blob:', '')}
                sx={{ height: '5em', width: '5em' }}
              />

              <Box
                sx={{
                  // position: "relative",
                  // bottom: -50,
                  width: 'auto',
                  height: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  //gap: "0.3em",
                  alignItems: 'center',
                }}
              >
                <Typography
                  noWrap
                  children={items.memberName}
                  sx={{
                    color: 'white',
                    fontSize: '1em',
                    fontWeight: '500',
                    height: 'max-content',
                    width: '14em',
                    padding: '0.5em 0.8em',
                    borderRadius: '0.3em',
                    textAlign: 'center',
                    '&: hover': {
                      cursor: 'default',
                    },
                  }}
                />
              </Box>

              <Box sx={{ position: 'absolute', right: 10, bottom: 10 }}>
                <Tooltip title={toggleMic ? 'Mute' : 'Unmute'} placement="top">
                  <IconButton
                    onClick={handleToggleMic}
                    sx={
                      toggleMic === true
                        ? {
                            border: '1px solid #007FFF',
                            height: '1em',
                            width: '1em',
                            padding: '0.3em',
                            '&: hover': {
                              backgroundColor: '#282B31',
                            },
                          }
                        : {
                            border: '1px solid #3A3E46',
                            height: '1em',
                            width: '1em',
                            padding: '0.3em',
                            backgroundColor: '#3A3E46',
                            '&: hover': {
                              backgroundColor: '#3A3E46',
                            },
                          }
                    }
                  >
                    {toggleMic ? (
                      <KeyboardVoiceOutlined
                        sx={{ fontSize: '0.7em', color: '#007FFF' }}
                      />
                    ) : (
                      <MicOffOutlinedIcon
                        sx={{ fontSize: '0.7em', color: '#DEDEDE' }}
                      />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <div id={`tile2${items.id}`} style={{ display: 'none' }}>
              <video id={`vid${items.id}`}></video>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default OffCamera;
