import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Grid,
  Paper,
  Container,
  Button,
} from '@mui/material';
// import { io } from 'socket.io-client';
import Chat from './Chat';

// const socket = io.connect('http://localhost:3001');

function ChatApp() {
  const [username, setUserName] = useState('');
  const [roomid, setRoomID] = useState('');
  const [showchat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== '' && roomid !== '') {
      // socket.emit('joinroom', roomid);
      setShowChat(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: '5em' }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {!showchat ? (
            <>
              <Grid item>
                <Typography variant="h4">Join A Chat</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  type="text"
                  placeholder="Enter username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  autoComplete="off"
                  type="text"
                  placeholder="Enter RoomID"
                  onChange={(e) => {
                    setRoomID(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={joinRoom}>
                  Join Room
                </Button>
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              <Chat username={username} room={roomid} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default ChatApp;
