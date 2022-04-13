import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import CusButton from '../components/Button';
import {
  Grid,
  Box,
  Typography,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Checkbox,
} from '@mui/material';
import { Save } from '@mui/icons-material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import ExamIconButton from '../assets/ImageJaven/ExamIconButton.png';
import useStyle from './Styles/Post_exam_style';
import axios from 'axios';

const dataRoom = [
  {
    value: 'Embedded Programming',
    label: 'Embedded Programming',
  },
  {
    value: 'Art Appreciation',
    label: 'Art Appreciation',
  },
  {
    value: 'Science, Technology and Society',
    label: 'Science, Technology and Society',
  },
  {
    value: 'Software Engineering',
    label: 'Software Engineering',
  },
];

const dataCourseYearSec = [
  {
    value: 'BSCS 3A',
    label: 'BSCS 3A',
  },
  {
    value: 'BSCS 3B',
    label: 'BSCS 3B',
  },
  {
    value: 'BSCS 3C',
    label: 'BSCS 3C',
  },
  {
    value: 'BSCS 4A',
    label: 'BSCS 4A',
  },
];

const dataStudent = [
  {
    value: 'All Student',
    label: 'All Student',
  },
  {
    value: 'Paul Rudd',
    label: 'Paul Rudd',
  },
  {
    value: 'Tom Hiddleston',
    label: 'Tom Hiddleston',
  },
  {
    value: 'Tom Holland',
    label: 'Tom Holland',
  },
  {
    value: 'Sebastian Stan',
    label: 'Sebastian Stan',
  },
  {
    value: 'Robert Downey Jr.',
    label: 'Robert Downey Jr.',
  },
];
const dataTerm = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
];

const dataDueDate = [];

const dataTimeLimit = [
  {
    value: '30 minutes',
    label: '30 minutes',
  },
  {
    value: '45 minutes',
    label: '45 minutes',
  },
  {
    value: '1 hour',
    label: '1 hour',
  },
  {
    value: '2 hours',
    label: '2 hours',
  },
];
function Post_exam({ open, close, maxWidth, questionMemo, exam, counter }) {
  const { designs } = useStyle();

  const [selectRoom, setSelectRoom] = useState('');

  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
  };

  const [selectCourseYearSec, setSelectCourseYearSec] = useState('');

  const handleChangeCourseYearSec = (event) => {
    setSelectCourseYearSec(event.target.value);
  };

  const [selectStudent, setSelectStudent] = useState('');

  const handleChangeStudent = (event) => {
    setSelectStudent(event.target.value);
  };

  const [selectTerm, setSelectTerm] = useState('');

  const handleChangeTerm = (event) => {
    setSelectTerm(event.target.value);
  };

  const [selectDueDate, setSelectDueDate] = useState('');

  const handleChangeDueDate = (event) => {
    setSelectDueDate(event.target.value);
  };

  const [selectTimeLimit, setSelectTimeLimit] = useState('');

  const handleChangeTimeLimit = (event) => {
    setSelectTimeLimit(event.target.value);
  };
  const handleClickSave = () => {
    const questionPayload = [];
    axios
      .post('http://localhost:5000/quizlit/create', {
        author: {
          userID: JSON.parse(localStorage.userData).data.user._id,
          name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
            JSON.parse(localStorage.userData).data.user.lastName
          } `,
        },

        title: exam.current.title,
        instruction: exam.current.instruction,
        quizType: 'Exam',
        graded: false,
      })
      .then((res) => {
        questionMemo.current.forEach((item) => {
          const {
            answerType,
            correctAnswer,
            points,
            questionsContent,
            ...others
          } = item;
          questionPayload.push({
            qAnswers: { ...others },
            quizID: res.data.data,
            answerType,
            correctAnswer,
            points,
            questionsContent,
          });
        });
        axios
          .post('http://localhost:5000/question/create', { questionPayload })
          .then((res) => {
            console.log(res);
            questionMemo.current = [{}];
            counter.current = 0;
            close();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Box
            sx={{
              display: 'flex',
              gap: '1em',
              height: 'auto',
              width: 'relative',
            }}
          >
            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={handleClickSave}
              sx={{
                border: '1px solid #007FFF',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                color: '#007FFF',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                '&: hover': {
                  border: '1px solid #0072ED',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
              }}
            >
              Save Exam
            </Button>

            <Button
              variant="contained"
              startIcon={
                <img
                  src={ExamIconButton}
                  style={{ height: '0.7em', width: '0.7em' }}
                />
              }
              sx={{
                backgroundColor: '#49B854',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                '&: hover': {
                  backgroundColor: '#31B13E',
                },
              }}
            >
              Post Exam
            </Button>
          </Box>
        }
      >
        <Grid container sx={{ padding: '0em 2em' }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '1.2em',
                fontWeight: '600',
                height: 'max-content',
                width: '40em',
              }}
            >
              Post exam to this room/ class?
            </Typography>
          </Grid>

          <Grid item xs={6} sx={{ marginTop: '1em' }}>
            <FormControl
              variant="standard"
              sx={{
                width: '100%',
                paddingTop: '0em',
                marginBottom: '0.8em',
              }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'Capitalize',
                }}
              >
                Select Room
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectRoom}
                onChange={handleChangeRoom}
                label="SelectRoom"
                disableUnderline
                sx={{
                  width: '100%',
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  borderBottom: '1px solid #DBDBDB',
                  '&: hover': {
                    borderBottom: '1px solid #007FFF',
                    transition: 'all 300ms',
                  },
                }}
              >
                {dataRoom.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {' '}
                    {label}{' '}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{
                width: '100%',
                paddingTop: '0em',
                marginBottom: '0.8em',
              }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'Capitalize',
                }}
              >
                Select Course Year and Section
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectCourseYearSec}
                onChange={handleChangeCourseYearSec}
                label="SelectCourseYearSec"
                disableUnderline
                sx={{
                  width: '100%',
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  borderBottom: '1px solid #DBDBDB',
                  '&: hover': {
                    borderBottom: '1px solid #007FFF',
                    transition: 'all 300ms',
                  },
                }}
              >
                {dataCourseYearSec.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {' '}
                    {label}{' '}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{
                width: '100%',
                paddingTop: '0em',
                marginBottom: '0.8em',
              }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'Capitalize',
                }}
              >
                Select Students
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectStudent}
                onChange={handleChangeStudent}
                label="SelectStudent"
                disableUnderline
                sx={{
                  width: '100%',
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  borderBottom: '1px solid #DBDBDB',
                  '&: hover': {
                    borderBottom: '1px solid #007FFF',
                    transition: 'all 300ms',
                  },
                }}
              >
                {dataStudent.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {' '}
                    {label}{' '}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={{ marginTop: '1em' }}>
            <Box sx={{ width: 'relative', height: 'auto', paddingLeft: '2em' }}>
              <FormControl
                variant="standard"
                sx={{
                  width: '100%',
                  paddingTop: '0em',
                  marginBottom: '0.8em',
                }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{
                    fontSize: '0.9em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    textTransform: 'Capitalize',
                  }}
                >
                  Select Term
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectTerm}
                  onChange={handleChangeTerm}
                  label="SelectRoom"
                  disableUnderline
                  sx={{
                    width: '100%',
                    fontSize: '0.9em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    borderBottom: '1px solid #DBDBDB',
                    '&: hover': {
                      borderBottom: '1px solid #007FFF',
                      transition: 'all 300ms',
                    },
                  }}
                >
                  {dataTerm.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {' '}
                      {label}{' '}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="standard"
                sx={{
                  width: '100%',
                  paddingTop: '0em',
                  marginBottom: '0.8em',
                }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{
                    fontSize: '0.9em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    textTransform: 'Capitalize',
                  }}
                >
                  Set Due Date
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectDueDate}
                  onChange={handleChangeDueDate}
                  label="SelectDueDate"
                  disableUnderline
                  sx={{
                    width: '100%',
                    fontSize: '0.9em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    borderBottom: '1px solid #DBDBDB',
                    '&: hover': {
                      borderBottom: '1px solid #007FFF',
                      transition: 'all 300ms',
                    },
                  }}
                >
                  {dataDueDate.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {' '}
                      {label}{' '}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                variant="standard"
                sx={{
                  width: '100%',
                  paddingTop: '0em',
                  marginBottom: '0.8em',
                }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{
                    fontSize: '0.9em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    textTransform: 'Capitalize',
                  }}
                >
                  Set Time Limit
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectTimeLimit}
                  onChange={handleChangeTimeLimit}
                  label="SelectTimeLimit"
                  disableUnderline
                  sx={{
                    width: '100%',
                    fontSize: '0.9em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    borderBottom: '1px solid #DBDBDB',
                    '&: hover': {
                      borderBottom: '1px solid #007FFF',
                      transition: 'all 300ms',
                    },
                  }}
                >
                  {dataTimeLimit.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {' '}
                      {label}{' '}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid container rowSpacing={1}>
            <Grid item xs={12} sx={designs.ExamTake_GridItem_Style}>
              <Typography sx={designs.ExamName_Typography_Style}>
                Preliminary Exam
              </Typography>

              <Box className="container" sx={designs.Container_Style}>
                <Typography sx={designs.Instructions_Typography_Style}>
                  No description.
                </Typography>

                <Divider sx={designs.Divider_Style} />

                <Box className="Exam-details" sx={designs.Exam_Details_Style}>
                  <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item md={2} sm={6} xs={12}>
                      <Typography sx={designs.Items_Typography_Style}>
                        5 items
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <Box className="Points" sx={designs.Points_Style}>
                        <Typography sx={designs.OverallPoints_Typography_Style}>
                          Overall Points:
                        </Typography>

                        <Typography sx={designs.Points_Typography_Style}>
                          10 points
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item md={4} sm={6} xs={12}>
                      <Box className="DueDate" sx={designs.DueDate_Style}>
                        <Typography sx={designs.DueDate_Typography_Style}>
                          Due Date:
                        </Typography>

                        <Typography sx={designs.Date_Typography_Style}>
                          December 12, 2021
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <Box className="TimeLimit" sx={designs.TimeLimit_Style}>
                        <Typography sx={designs.TimeLimit_Typography_Style}>
                          Time Limit:
                        </Typography>

                        <Typography sx={designs.Time_Typography_Style}>
                          01h 00m 00s
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '0.8em',
                fontWeight: '600',
                height: 'max-content',
                width: '40em',
              }}
            >
              This exam will:
            </Typography>
          </Grid>

          <Box className="Required-button" sx={designs.Required_Button_Style}>
            <Checkbox sx={designs.Required_Checkbox_Style} />
            <Typography sx={designs.Required_Typography_Style}>
              Restrict students in submitting the exam many times.
            </Typography>
          </Box>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Post_exam;
