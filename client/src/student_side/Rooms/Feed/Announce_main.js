import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Post_layout from './Layouts/Post_layout';
import Announce_form from './Announce_form';
import Schoolworktiles_layout from './Layouts/Schoolworktiles_layout';

function Announce_main({ socket }) {
  const { roomID } = useParams();
  const [postuuid, setPostUuid] = React.useState(null);
  const [data, setData] = React.useState(null);
  // socket.on('post-created', (uuid) => {
  //   setPostUuid(uuid);
  // });

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
          <Announce_form socket={socket} />
        </Grid>
        <Grid item xs={12}>
          {data && <Post_layout data={data} socket={socket} />}
        </Grid>
        <Schoolworktiles_layout />
      </Grid>
    </>
  );
}

export default Announce_main;
