import React, { useState, useEffect } from 'react';
import { Typography, Grid, Tabs, Tab, Box } from '@mui/material';
import useStyle from './Styles/Activities_main_style';
import Activities_layout from './Layout/Activities_layout';
import Quizzes_layout from './Layout/Quizzes_layout';
import Exams_layout from './Layout/Exams_layout';
import axios from 'axios';

function Activities_main({ roomID, socket }) {
  const { designs } = useStyle();
  const [value, setValue] = useState(0);
  const [activity, setActivity] = useState(null);

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .post('http://localhost:5000/activity', { roomID })
      .then((res) => setActivity(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sx={designs.TabsH_GridItem_Style}>
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={value}
            onChange={handleChange2}
            aria-label="Vertical tabs example"
            sx={designs.Tabs_Main_Style2}
          >
            <Tab
              disableRipple
              label={
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1.2em', fontWeight: '600' }}
                >
                  Activities
                </Typography>
              }
              sx={{ padding: '0em', margin: '0em' }}
            />
            <Tab
              disableRipple
              label={
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1.2em', fontWeight: '600' }}
                >
                  Quizzes
                </Typography>
              }
              sx={{ padding: '0em', margin: '0em' }}
            />
            <Tab
              disableRipple
              label={
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1.2em', fontWeight: '600' }}
                >
                  Exams
                </Typography>
              }
              sx={{ padding: '0em', margin: '0em' }}
            />
          </Tabs>
        </Grid>

        <Grid item xs={2} sx={designs.TabsV_GridItem_Style}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange2}
            aria-label="Vertical tabs example"
            sx={designs.Tabs_Main_Style3}
          >
            <Tab
              disableRipple
              label={
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1.1em', fontWeight: '600' }}
                >
                  Activities
                </Typography>
              }
              sx={{ padding: '0em', margin: '0em' }}
            />
            <Tab
              disableRipple
              label={
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1.1em', fontWeight: '600' }}
                >
                  Quizzes
                </Typography>
              }
              sx={{ padding: '0em', margin: '0em' }}
            />
            <Tab
              disableRipple
              label={
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1.1em', fontWeight: '600' }}
                >
                  Exams
                </Typography>
              }
              sx={{ padding: '0em', margin: '0em' }}
            />
          </Tabs>
        </Grid>

        <Grid item md={10} xs={12} sx={designs.Tiles_GridItem_Style}>
          <Box
            sx={{
              height: 'auto',
              width: 'relative',
              paddingLeft: '2em',
            }}
          >
            {value === 0 ? (
              <Activities_layout
                activity={activity}
                roomID={roomID}
                socket={socket}
              />
            ) : value === 1 ? (
              <Quizzes_layout />
            ) : (
              value === 2 && <Exams_layout />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Activities_main;
