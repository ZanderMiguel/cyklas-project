import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Quiz_layout from './Quizbank-content-layout/Quiz_layout';
import Exam_layout from './Quizbank-content-layout/Exam_layout';
import useStyle from './Quizlit_style';

function Quizlit() {

  const {designs} = useStyle()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const bank = [
    [
      {
        title: 'Variables',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
      },
      {
        title: 'Conditional Statements',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
      },
      {
        title: 'Arrays',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
      },
    ],
    [
      {
        title: 'Preliminary Exam',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
      },
      {
        title: 'Midtem Exam',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
      },
      {
        title: 'Final Exam',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
      },
    ],
  ];
  const [comp, setComp] = React.useState(<Quiz_layout bank={bank[0]} />);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container columnSpacing={3} sx={{ mt: 7 }}>
          
          <Grid item xs={2}>
          </Grid>

          <Grid item md={9} xs={12}>
            <Tabs
              orientation="horizontal"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={designs.Tabs_Main_Style}
            >
              <Tab
                disableRipple
                label={<Typography variant="h6" sx = {{ fontWeight: "600" }}> Quiz </Typography>}
                onClick={() => {
                  setComp(<Quiz_layout bank={bank[0]} />);
                }}
              />
              <Tab
                disableRipple
                label={<Typography variant="h6" sx = {{ fontWeight: "600" }}> Exam</Typography>}
                onClick={() => {
                  setComp(<Exam_layout bank={bank[1]} />);
                }}
              />
            </Tabs>
          </Grid>

          <Grid item xs={2}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={designs.Tabs_Main_Style2}
            >
              <Tab
                disableRipple
                label={<Typography variant="h6" sx = {{ fontWeight: "600" }}> Quiz </Typography>}
                onClick={() => {
                  setComp(<Quiz_layout bank={bank[0]} />);
                }}
              />
              <Tab
                disableRipple
                label={<Typography variant="h6" sx = {{ fontWeight: "600" }}> Exam</Typography>}
                onClick={() => {
                  setComp(<Exam_layout bank={bank[1]} />);
                }}
              />
            </Tabs>
          </Grid>
          <Grid item md={9} xs={12} sx = {{ marginTop: "0.8em" }}>
            {comp}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Quizlit;
