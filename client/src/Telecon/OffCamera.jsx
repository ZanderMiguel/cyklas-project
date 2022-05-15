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
  socket,
}) {
  return (
    <>
      {members.current.map(function (items) {
        return (
          <div
            id={items.id}
            key={items.id + items.stdID}
            style={{
              minWidth: `calc(85%/${tileWidth})`,
              height: `calc(${
                layout.current && layout.current.clientHeight
              }/${tileWidth})`,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                backgroundColor: '#25282E',
                height: '100%',
                width: 'relative',
                borderRadius: '0.5em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Avatar
                alt={items.memberName[0].toUpperCase()}
                src={items.camera}
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
          </div>
        );
      })}
    </>
  );
}

export default OffCamera;
