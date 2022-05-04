import React, { useState } from 'react';
import {
  Avatar,
  Container,
  Grid,
} from '@mui/material';
import {
  Star,
  WorkspacePremium,
} from '@mui/icons-material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import useStyle from './Styles/Dashboard_style';
import axios from 'axios';
import DashboardSearchbar from './DashboardSearchbar';
import DashboardStatistics from "./DashboardStatistics";
import DashboardStudentrankings from './DashboardStudentrankings';
import DashboardProfessorratings from './DashboardProfessorratings';
import DashboardRoomsclasses from './DashboardRoomsclasses';

function Dashboard() {
  const [roomdata, setRoom] = useState(null);

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/rooms', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="md" sx = {{ padding: "1.5em 0em" }}>
      <Grid item xs = {12} sx = {{ marginBottom: "0.8em" }}>
        <DashboardSearchbar/>
      </Grid>

      <Grid container item xs = {12} columnSpacing ={1} sx = {{ marginBottom: "1em" }}>
        <DashboardStatistics/>
      </Grid>
      
      <Grid item xs = {12} sx = {{ marginBottom: "1em" }}>
        <DashboardStudentrankings/>
      </Grid>

      <Grid item xs = {12} sx = {{ marginBottom: "1em" }}>
        <DashboardProfessorratings/>
      </Grid>

      <Grid item xs = {12} sx = {{ marginBottom: "1em" }}>
        <DashboardRoomsclasses/>
      </Grid>
    </Container>
  );
}

export default Dashboard;
