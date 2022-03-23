import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, IconButton } from '@mui/material';
import Quiz_layout from './Quizbank-content-layout/Quiz_layout';
import Exam_layout from './Quizbank-content-layout/Exam_layout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyle from './Styles/Quizlit_style';
import CusPopover from '../components/Popover';
import QuizlitAddpopover from '../components/PopoverContent/QuizlitAddpopover';

function Quizlit() {
  const { designs } = useStyle();

  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickAddQuiz = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickClose = (event) => {
    setAnchorEl(null);
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
  const open = Boolean(anchorEl);

  return (
    <>
      <Container maxWidth="md">
        <CusPopover open={open} anchorEl={anchorEl} onClose={handleClickClose}>
          <QuizlitAddpopover />
        </CusPopover>
      </Container>
      <Container maxWidth="lg">
        <Grid container columnSpacing={3}>
          <Grid item xs={2}></Grid>

          <Grid item md={8} xs={11}>
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
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.2em", fontWeight: '600' }}>
                    Quiz
                  </Typography>
                }
                onClick={() => {
                  setComp(<Quiz_layout bank={bank[0]} />);
                }}
              />
              <Tab
                disableRipple
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.2em", fontWeight: '600' }}>
                    Exam
                  </Typography>
                }
                onClick={() => {
                  setComp(<Exam_layout bank={bank[1]} />);
                }}
              />
            </Tabs>
          </Grid>

          <Grid item xs={1}>
            <IconButton
              size="small"
              onClick={handleClickAddQuiz}
              sx={designs.Add_IconButton_Style}
            >
              <AddCircleIcon sx={{ color: 'green', fontSize: '2rem' }} />
            </IconButton>
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
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.2em", fontWeight: '600' }}>
                    Quiz
                  </Typography>
                }
                onClick={() => {
                  setComp(<Quiz_layout bank={bank[0]} />);
                }}
              />
              <Tab
                disableRipple
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.2em", fontWeight: '600' }}>
                    Exam
                  </Typography>
                }
                onClick={() => {
                  setComp(<Exam_layout bank={bank[1]} />);
                }}
              />
            </Tabs>
          </Grid>
          <Grid item md={9} xs={12} sx={{ marginTop: '0.8em' }}>
            {comp}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Quizlit;
