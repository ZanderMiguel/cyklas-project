import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import Scrolltobottom from 'react-scroll-to-bottom';
import './Chat.css';

function Chat({ socket, username, room }) {
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

  // React.useEffect(() => {
  //   socket.on('receive_message', (data) => {
  //     setMessageList((list) => [...list, data]);
  //   });
  // }, [socket]);

  return (
    <Paper sx={{ padding: '1em' }} elevation={5}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Live Chat
          </Typography>
        </Grid>
        <Grid container item sx={12} flexDirection="flex-start">
          <div style={{ width: '100%', height: '20em' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                overflowX: 'hidden',
              }}
            >
              <Scrolltobottom style={{ height: '200px' }}>
                {messagelist.map((message) => {
                  return (
                    <Box
                      display="flex"
                      justifyContent={
                        username === message.author ? 'flex-end' : 'flex-start'
                      }
                    >
                      <Paper
                        elevation={1}
                        sx={
                          username === message.author
                            ? {
                                backgroundColor: 'lightblue',
                                width: 'auto',
                                maxWidth: '15em',
                                marginBottom: 2,
                                padding: 1.5,
                                wordBreak: 'break-word',
                              }
                            : {
                                backgroundColor: 'lightgreen',
                                width: 'auto',
                                maxWidth: '15em',
                                marginBottom: 2,
                                padding: 1.5,
                                wordBreak: 'break-word',
                              }
                        }
                      >
                        <Typography variant="h6">{message.author}</Typography>
                        <Typography sx={{ flexWrap: 'wrap' }} variant="body1">
                          {message.message}
                        </Typography>
                        <Divider />
                        <Typography variant="body2" sx={{}}>
                          {message.time}
                        </Typography>
                      </Paper>
                    </Box>
                  );
                })}
              </Scrolltobottom>
            </div>
          </div>
        </Grid>
        <Grid item>
          <TextField
            size="small"
            type="text"
            placeholder="Enter message..."
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
          />
          <Button variant="contained" onClick={sendMessage} sx={{ ml: 2 }}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Chat;
