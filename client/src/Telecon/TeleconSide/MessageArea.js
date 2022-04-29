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
  Button,
} from '@mui/material';
import { Send, Chat } from '@mui/icons-material';
import ReactScrollableFeed from 'react-scrollable-feed';
import { FaBox } from 'react-icons/fa';
import moment from 'moment';

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
          // new Date(Date.now()).getHours() +
          // ':' +
          // new Date(Date.now()).getMinutes(),
          moment(Date.now()).format('LT'),
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
    <div
      style={{
        width: '23.9rem',
        height: '98vh',
        border: '1px solid #464646',
      }}
    >
      <Box
        sx={{
          width: 'relative',
          height: '2.5em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8em',
          padding: '0em 1em',
          margin: '0.5em 0.5em 1em 0.5em',
          backgroundColor: '#31353D',
          borderRadius: '0.4em',
          borderBottom: '1px solid #464646',
        }}
      >
        <Chat sx={{ fontSize: '1.3em', color: '#DEDEDE' }} />

        <Typography
          children="Message Area"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '600',
            textAlign: 'center',
            '&: hover': {
              cursor: 'default',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          height: '83vh',
          overflowY: 'auto',
        }}
      >
        <ReactScrollableFeed>
          {messagelist.map((messageContent, index) => {
            return (
              <Box
                key={index}
                sx={{
                  padding: '0em 0.5em',
                  marginBottom: '1em',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: '0.5em',
                    alignItems: 'center',
                    padding: '0em 0.5em',
                    marginBottom: '0.1em',
                  }}
                >
                  <Avatar
                    alt="userAvatar"
                    src={JSON.parse(localStorage.userData).data.user.image}
                    sx={{ height: '1.6em', width: '1.6em' }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.7em',
                      fontWeight: 500,
                      mr: '5px',
                      color: 'white',
                      maxWidth: '15em',
                    }}
                    noWrap
                  >
                    {JSON.parse(localStorage.userData).data.user.firstName}
                  </Typography>

                  <Box flexGrow={1} />

                  <Typography sx={{ fontSize: '0.6em', color: '#8E8E8E' }}>
                    {messageContent.time}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 'max-content',
                    border: '1px solid #464646',
                    borderRadius: '0em 0.3em 0.3em 0.3em',
                    backgroundColor: '#282B31',
                    padding: '0.3em 0.7em',
                    marginLeft: '3.2em',
                  }}
                >
                  <Typography
                    sx={{
                      maxWidth: '20em',
                      flexWrap: 'wrap',
                      fontSize: '0.7em',
                      color: 'white',
                      fontWeight: '500',
                      wordBreak: 'break-all',
                      '&: hover': {
                        cursor: 'text',
                      },
                    }}
                  >
                    {messageContent.message}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </ReactScrollableFeed>
      </Box>

      <Box
        sx={{
          position: 'sticky',
          width: '100%',
          display: 'flex',
          height: 'auto',
          gap: '0.8em',
          padding: '0.4em 1.3em',
          marginTop: '0.8em',
          borderTop: '1px solid #464646',
        }}
      >
        <TextField
          autoComplete="off"
          fullWidth
          variant="outlined"
          value={currentMessage}
          placeholder="Send a message..."
          InputProps={{
            style: {
              height: '3em',
              fontSize: '0.7em',
              fontWeight: '500',
              color: 'white',
              borderRadius: '0.3em',
              backgroundColor: '#282B31',
              outline: '1px solid transparent',
              '&: hover': {
                outline: '1px solid #007FFF',
              },
            },
          }}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage();
          }}
        />
        <Button
          children="Send"
          variant="contained"
          onClick={sendMessage}
          sx={{
            fontSize: '0.7em',
            fontWeight: '600',
            boxShadow: 'none',
            textTransform: 'Capitalize',
            backgroundColor: '#007FFF',
          }}
        />
      </Box>
    </div>
  );
}

export default MessageArea;
