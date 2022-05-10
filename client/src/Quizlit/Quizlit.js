import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Quiz_layout from './Quizbank-content-layout/Quiz_layout';
import Exam_layout from './Quizbank-content-layout/Exam_layout';
import useStyle from './Styles/Quizlit_style';
import CusPopover from '../components/Popover';
import QuizlitAddpopover from '../components/PopoverContent/QuizlitAddpopover';
import axios from 'axios';
import Box from "@mui/material/Box";
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import Button from '../components/Button';
import NoQuizzes from "../assets/ImageJaven/NoQuizzes.png";
import NoExams from "../assets/ImageJaven/NoExams.png";

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
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/myQuizlit', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [comp, setComp] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Container maxWidth="md" sx={{ padding: '1.5em 0em 0em 0em' }}>
        <Grid container columnSpacing={3} sx={{ margin: '0em' }}>
          <Grid item xs={2}></Grid>

          <Grid item md={8} xs={12}>
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
                value={value}
                label={
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '1.2em', fontWeight: '600' }}
                  >
                    Quiz
                  </Typography>
                }
              />
              <Tab
                disableRipple
                label={
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '1.2em', fontWeight: '600' }}
                  >
                    Exam
                  </Typography>
                }
                onClick={() => {
                  setComp(
                    data && (
                      <Exam_layout
                        bank={data.filter((item) => {
                          console.log(item.quizType);
                          return item.quizType === 'Exam';
                        })}
                      />
                    )
                  );
                }}
              />
            </Tabs>
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              variant="contained"
              content="Create"
              startIcon={<AddCircleOutlineOutlined />}
              onClick={handleClickAddQuiz}
              sx={{
                backgroundColor: '#007FFF',
                color: 'white',
                fontWeight: "600",
                boxShadow: "none",
                '&:hover': {
                  backgroundColor: '#0072e6',
                },
              }}
            />
            <CusPopover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClickClose}
            >
              <QuizlitAddpopover />
            </CusPopover>
            {/* <IconButton
              onClick={handleClickAddQuiz}
              sx={designs.Add_IconButton_Style}
            >
              

              <AddCircleIcon
                sx={{
                  color: '#56B73E',
                  fontSize: '2rem',
                  '&: hover': { color: '#39B41B' },
                }}
              />
            </IconButton> */}
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
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '1.2em', fontWeight: '600' }}
                  >
                    Quiz
                  </Typography>
                }
              />
              <Tab
                disableRipple
                label={
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '1.2em', fontWeight: '600' }}
                  >
                    Exam
                  </Typography>
                }
              />
            </Tabs>
          </Grid>
          <Grid item md={10} xs={12} sx={{ marginTop: '0.8em' }}>
            {value === 0
              ? data && data.length > 0 ? (
                  <Quiz_layout
                    bank={data.filter((item) => {
                      return item.quizType === 'Quiz';
                    })}
                  />
                ) : (
                  <Box
          sx={{
            width: '100%',
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <img
            src={NoQuizzes}
            alt="No Quizzes"
            style={{
              height: '13em',
              margin: '0em 0em 1.5em 0em',
            }}
          />
          <Typography
            children="You did not create any Quizzes."
            sx={{
              fontSize: '1em',
              fontWeight: '600',
              color: '#3F3D56',
              marginBottom: '0.3em',
            }}
          />

          <Typography
            children="Start creating quizzes now for your class."
            sx={{
              fontSize: '0.8em',
              fontWeight: '500',
              color: '#8E8E8E',
              marginLeft: '0.8em',
            }}
          />
        </Box>
                ) :
              value === 1 &&
                data && data.length > 0 ? (
                  <Exam_layout
                    bank={data.filter((item) => {
                      return item.quizType === 'Exam';
                    })}
                  />
                ) : (
                  <Box
          sx={{
            width: '100%',
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <img
            src={NoExams}
            alt="No Exams"
            style={{
              height: '13em',
              margin: '0em 0em 1.5em 0em',
            }}
          />
          <Typography
            children="You did not create any Exams."
            sx={{
              fontSize: '1em',
              fontWeight: '600',
              color: '#3F3D56',
              marginBottom: '0.3em',
            }}
          />

          <Typography
            children="Start creating exams now for your students to take."
            sx={{
              fontSize: '0.8em',
              fontWeight: '500',
              color: '#8E8E8E',
              marginLeft: '0.8em',
            }}
          />
        </Box>
                )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Quizlit;
