import React from 'react';
import { CssBaseline, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Post_layout from './Post_layout';
import Rich_text from './Rich_text';

function Announce({ socket }) {
  const { roomID } = useParams();
  const [postuuid, setPostUuid] = React.useState(null);
  const [data, setData] = React.useState(null);
  socket.on('post-created', (uuid) => {
    setPostUuid(uuid);
  });

  React.useMemo(() => {
    axios
      .post('http://localhost:5000/announce', { rooms: roomID })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
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
          {data && <Post_layout data={data} socket={socket} roomID={roomID} />}
        </Grid>
      </Grid>
    </>
  );
}

export default Announce;
