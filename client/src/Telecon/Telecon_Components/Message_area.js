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
import ScrollToBottom from 'react-scroll-to-bottom';

function Message_area({ socket, room, username }) {
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [messagelist, setMessageList] = React.useState([]);

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
    }
  };

  React.useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <Box width="100%" display="flex" justifyContent="center" padding={2}>
        <Typography variant="h6">Message Area</Typography>
      </Box>
      <Divider variant="middle" />
      <Box height="29em" overflow="auto">
        <ScrollToBottom
          style={{
            with: '100%',
            height: '100%',
            overflowY: 'scroll',
            overflowX: 'hidden',
          }}
        >
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
                    <Typography
                      sx={{ fontSize: '1em', fontWeight: 600, mr: '5px' }}
                    >
                      {messageContent.author}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8em', color: 'gray' }}>
                      {messageContent.time}
                    </Typography>
                  </Box>
                  <Typography sx={{ flexWrap: 'wrap', fontSize: '0.8em' }}>
                    {messageContent.message}
                  </Typography>
                </Paper>
              </Box>
            );
          })}
        </ScrollToBottom>
      </Box>
      <Divider variant="middle" sx={{ mb: 1 }} />
      <Box display="flex" justifycontent="center" alignItems="center">
        <TextField
          fullWidth
          autoComplete="off"
          variant="filled"
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
    </>
  );
}

export default Message_area;
