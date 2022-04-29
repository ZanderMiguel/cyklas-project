import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Paper,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import ReactScrollableFeed from 'react-scrollable-feed';

function MessageArea({
  socket,
  room,
  username,
  setMessageList,
  setCurrentMessage,
  currentMessage,
  messagelist,
}) {
  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit('sendMessage', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  React.useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              component="div"
              sx={{ display: 'flex', justifyContent: 'center' }}
              variant="h6"
              noWrap
            >
              Message Area
            </Typography>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12}>
            <Box
              height="77vh"
              marginTop="0.6em"
              marginBottom="0.6em"
              overflowY="auto"
            >
              <ReactScrollableFeed>
                {messagelist.map((messageContent, index) => {
                  return (
                    <Box key={index} display="flex" justifyContent="flex-start">
                      <Paper
                        elevation={0}
                        sx={{
                          width: 'auto',
                          maxWidth: '15em',
                          marginBottom: '0.8em',
                          marginLeft: '0.8em',
                          wordBreak: 'break-word',
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Avatar
                            alt="userAvatar"
                            src={
                              JSON.parse(localStorage.userData).data.user.image
                            }
                            sx={{ width: '24px', height: '24px' }}
                          />
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: 500,
                              mr: '5px',
                            }}
                            noWrap
                          >
                            {
                              JSON.parse(localStorage.userData).data.user
                                .firstName
                            }
                          </Typography>
                          <Typography sx={{ fontSize: '0.8em', color: 'gray' }}>
                            {messageContent.time}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ flexWrap: 'wrap', fontSize: '0.8em' }}
                        >
                          {messageContent.message}
                        </Typography>
                      </Paper>
                    </Box>
                  );
                })}
              </ReactScrollableFeed>
            </Box>
          </Grid>
        </Grid>

        <Box
          position="sticky"
          bottom="20px"
          width="100%"
          padding="1em"
          display="flex"
        >
          <TextField
            autoComplete="off"
            fullWidth
            variant="filled"
            value={currentMessage}
            placeholder="Send a message..."
            InputProps={{
              style: {
                height: '3em',
                fontSize: '0.8em',
                fontWeight: '500',
                paddingBottom: '1.5em',
                color: '#3F3D56',
                borderRadius: '50px',
              },
              disableUnderline: true,
            }}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(event) => {
              event.key === 'Enter' && sendMessage();
            }}
          />
          <IconButton
            sx={{ height: '1.5em', width: '1.5em' }}
            onClick={sendMessage}
          >
            <Send sx={{ height: '1em', width: '1em' }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default MessageArea;
