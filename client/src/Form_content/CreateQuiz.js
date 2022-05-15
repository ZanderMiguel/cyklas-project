import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Checkbox,
} from '@mui/material';
import { Save } from '@mui/icons-material';
import Datepicker from '../components/DatePicker';
import QuizIconButton from '../assets/ImageJaven/QuizIconButton.png';
import useStyle from './Styles/Post_exam_style';

const dataRoom = [
    {
       value: "Embedded Programming",
       label: "Embedded Programming" 
    },
    {
        value: "Software Engineering 2",
        label: "Software Engineering 2" 
     }
];

const dataCourseYearSec = [
    {
       value: "BSCS 3A",
       label: "BSCS 3A" 
    },
    {
        value: "BSCS 3B",
        label: "BSCS 3B" 
     }
];

const dataCategory = [
    {
       value: "Quiz",
       label: "Quiz" 
    }
];

function CreateQuiz({
  open,
  close,
  maxWidth
}) {
  const { designs } = useStyle();

  const [selectRoom, setSelectRoom] = useState('');
  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
  };

  const [selectCourseYearSec, setSelectCourseYearSec] = useState('');

  const handleChangeCourseYearSec = (event) => {
    setSelectCourseYearSec(event.target.value);
  };

  const [selectCategory, setSelectCategory] = useState('');

  const handleChangeCategory = (event) => {
    setSelectCategory(event.target.value);
  };

  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        fullWidth
        maxWidth={maxWidth}
        btn={
          <Box
            sx={{
              display: 'flex',
              gap: '1em',
              height: 'auto',
              width: 'relative',
            }}>
            <Button
              variant="contained"
              startIcon={
                <img
                  src={QuizIconButton}
                  alt="quizicon"
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
                boxShadow: 'none',
                '&: hover': {
                  backgroundColor: '#31B13E',
                },
              }}
            >
              Create Quiz
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
              Create quiz for this room/ class?
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
                  Select Category
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectCategory}
                  onChange={handleChangeCategory}
                  label="SelectCategory"
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
                  {dataCategory.map(({ value, label }) => (
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
                Untitled Quiz
              </Typography>

              <Box className="container" sx={designs.Container_Style}>

                <Box className="Exam-details" sx={designs.Exam_Details_Style}>
                  <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={6}>
                      <Typography sx={designs.Items_Typography_Style}>
                        2 items
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Box className="Points" sx={designs.Points_Style}>
                        <Typography sx={designs.OverallPoints_Typography_Style}>
                          Overall Points:
                        </Typography>

                        <Typography sx={designs.Points_Typography_Style}>
                          12 points
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
              After this quiz:
            </Typography>
          </Grid>

          <Box className="Required-button" sx={designs.Required_Button_Style}>
            <Checkbox sx={designs.Required_Checkbox_Style} />
            <Typography sx={{
                color: '#3F3D56',
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                width: "relative"
            }}>
              Show student rankings to students.
            </Typography>
          </Box>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default CreateQuiz;
