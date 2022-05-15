import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import DashboardSearchbar from './DashboardSearchbar';
import DashboardStatistics from './DashboardStatistics';
import DashboardStatisticsStudent from './DashboardStatisticsStudent';
import DashboardStudentrankings from './DashboardStudentrankings';
import DashboardProfessorratings from './DashboardProfessorratings';
import DashboardRoomsclasses from './DashboardRoomsclasses';
import Dashboard_main from '../student_side/Dashboard/Dashboard_main';
import DashboardStatisticsV2 from './DashboardStatisticsV2';

function Dashboard() {
  const [roomdata, setRoom] = useState( null );
  const [allActivity, setAllActivity] = useState(null)

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/rooms', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));

    axios.post( 'http://localhost:5000/activity/get-handedout', { userID: JSON.parse( localStorage.userData ).data.user._id } ).then( ( res ) => { setAllActivity(res.data)} ).catch(err => 
    console.log(err))
  }, [] );


  return (
    <>
      <Container maxWidth="md" sx={{ padding: '1.5em 0em' }}>
        {/* <Grid item xs={12} sx={{ marginBottom: '0.8em' }}>
          <DashboardSearchbar />
        </Grid> */}

        <Grid
          container
          item
          xs={12}
          columnSpacing={1}
          sx={{ marginBottom: '1em' }}
        >
          {JSON.parse(localStorage.userData).data.user.userType === 'Professor' ? (
            <DashboardStatisticsV2 roomdata={ roomdata} />
          )
          :
          (
              <DashboardStatisticsStudent allActivity={allActivity} roomdata={ roomdata}/>
          )}
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '1em' }}>
          <DashboardRoomsclasses roomdata={roomdata} />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: '1em' }}>
          <DashboardStudentrankings />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: '1em' }}>
          <DashboardProfessorratings />
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
