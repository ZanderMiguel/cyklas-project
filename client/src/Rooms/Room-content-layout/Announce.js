import React from 'react';
import useStyle from '../Styles/Announce_style';
import { CssBaseline, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Post_layout from './Post_layout';
import Announce_form from './Announce_form';
import Schoolworktiles_layout from './Schoolworktiles_layout';

function Announce() {
  const { roomID } = useParams();

  const { designs } = useStyle();
  const myPost = React.useRef('');

  const boldText = React.useRef(new Map());

  const [postData, setPostData] = React.useState(new Map());

  const [data, setData] = React.useState(null);
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/announce', { rooms: roomID })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CssBaseline />
      <Grid container sx={{ margin: '1em 0em' }}>
        <Grid item xs={12}>
          <Announce_form />
        </Grid>
        <Grid item xs={12}>
          {data && <Post_layout data={data} />}
        </Grid>
        <Schoolworktiles_layout />
      </Grid>
    </>
  );
}

export default Announce;
