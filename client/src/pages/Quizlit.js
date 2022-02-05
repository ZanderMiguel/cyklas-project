import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import Quiz_layout from '../Quizbank-content-layout/Quiz_layout';
import Exam_layout from '../Quizbank-content-layout/Exam_layout';
import axios from 'axios';
function Quizlit() {
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
        <Grid container columnSpacing={1} sx={{ mt: 10 }}>
          <Grid item xs={2}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: 'divider',
              }}
            >
              <Tab
                disableRipple
                label={<Typography variant="h6"> Quiz </Typography>}
                component={Link}
                to="/Quizlit"
                onClick={() => {
                  setComp(<Quiz_layout bank={bank[0]} />);
                }}
              />
              <Tab
                disableRipple
                label={<Typography variant="h6"> Exam</Typography>}
                component={Link}
                to="/Quizlit"
                onClick={() => {
                  setComp(<Exam_layout bank={bank[1]} />);
                }}
              />
            </Tabs>
          </Grid>
          <Grid item xs={5}>
            {comp}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Quizlit;
