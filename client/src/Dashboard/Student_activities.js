import React from 'react';
import { Typography, Container, Grid, Tabs, Tab } from '@mui/material';
import useStyle from './Styles/Student_activities_style';
import STUDENTACTIVTIES_LAYOUT from './Studentactivities_layout';
import STUDENTQUIZZES_LAYOUT from './Studentquizzes_layout';
import STUDENTEXAMS_LAYOUT from './Studentexams_layout';

function Student_activities({ roomID }) {
  const { designs } = useStyle();

  const [value, setValue] = React.useState(0);
  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };

  const [comp, setComp] = React.useState(<STUDENTACTIVTIES_LAYOUT />);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={3}>
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
                onClick={() => {
                  setComp(<STUDENTACTIVTIES_LAYOUT />);
                }}
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
                onClick={() => {
                  setComp(<STUDENTQUIZZES_LAYOUT />);
                }}
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
                onClick={() => {
                  setComp(<STUDENTEXAMS_LAYOUT />);
                }}
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
                onClick={() => {
                  setComp(<STUDENTACTIVTIES_LAYOUT />);
                }}
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
                onClick={() => {
                  setComp(<STUDENTQUIZZES_LAYOUT />);
                }}
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
                onClick={() => {
                  setComp(<STUDENTEXAMS_LAYOUT />);
                }}
              />
            </Tabs>
          </Grid>

          <Grid item md={10} xs={12} sx={designs.Tiles_GridItem_Style}>
            {comp}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Student_activities;
