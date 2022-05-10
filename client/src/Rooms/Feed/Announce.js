import React, { useState } from 'react';
import { CssBaseline, Grid, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TeleconPostedTile from "../../Telecon/components/TeleconPostedTile";
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
          <Box
            sx={{
              borderRadius: '0.3em 0.3em 0em 0em',
              backgroundColor: 'white',
              p: 2,
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              '&: hover': {
                borderBottom: '4px solid #007FFF',
                transition: 'all 250ms',
              },
            }}
          >
            <Rich_text socket={socket} />
          </Box>
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
          <TeleconPostedTile/>
        </Grid>
      </Grid>
    </>
  );
}

export default Announce;
