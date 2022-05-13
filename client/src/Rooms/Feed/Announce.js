import React, { useState } from 'react';
import { CssBaseline, Grid, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TeleconPostedTile from '../../Telecon/components/TeleconPostedTile';
import Post_layout from './Post_layout';
import Rich_text from './Rich_text';
import ActivityFile from '../../components/ActivityFile';

function Announce({ socket }) {
  const { roomID } = useParams();
  const [data, setData] = useState(null);
  const [postRender, setPostRender] = useState(false);
  const [commentRender, setCommentRender] = useState(false);

  // socket.on('post-created', (uuid) => {
  //   setPostUuid(uuid);
  // });
  // socket.on('post-comment', (uuid) => {
  //   setCommentId(uuid);
  // });

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/announce', {
        rooms: roomID,
      })
      .then((res) => {
        setData(res.data);
        socket.emit('create-comment');
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [postRender]);

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
            <Rich_text socket={socket} setPostRender={setPostRender} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {data && (
            <Post_layout
              data={data}
              socket={socket}
              roomID={roomID}
              setCommentRender={setCommentRender}
              setPostRender={setPostRender}
              commentRender={commentRender}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Announce;
