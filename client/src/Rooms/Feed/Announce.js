import React, { useState } from 'react';
import { CssBaseline, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Post_layout from './Post_layout';
import Rich_text from './Rich_text';

function Announce({ socket }) {
  const { roomID } = useParams();
  const [postuuid, setPostUuid] = useState(null);
  const [data, setData] = useState(null);
  const [commentId, setCommentId] = useState(null);

  socket.on('post-created', (uuid) => {
    setPostUuid(uuid);
  });
  socket.on('post-comment', (uuid) => {
    setCommentId(uuid);
  });

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/announce', { rooms: roomID })
      .then((res) => {
        setData(res.data);
        socket.emit('create-comment');
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [postuuid]);

  return (
    <>
      <CssBaseline />
      <Grid container sx={{ margin: '1em 0em' }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Rich_text socket={socket} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {data && (
            <Post_layout
              data={data}
              socket={socket}
              roomID={roomID}
              commentId={commentId}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Announce;
