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

  React.useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .post(
        'http://localhost:5000/announce',
        { rooms: roomID },
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        if (!unmounted) {
          setData(res.data);
        }
      })
      .catch((e) => {
        if (!unmounted) {
          if (axios.isCancel(e)) {
            console.log(`request cancelled:${e.message}`);
          } else {
            console.log('another error happened:' + e.message);
          }
        }
      });
    return () => {
      unmounted = true;
      source.cancel('Cancelling in cleanup');
    };
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
