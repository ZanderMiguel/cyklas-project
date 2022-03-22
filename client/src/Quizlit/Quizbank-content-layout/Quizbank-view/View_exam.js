import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Checkbox,
  Container,
  Grid,
  Avatar,
  Autocomplete,
  TextField,
  FormControlLabel,
  IconButton,
  Button,
  InputAdornment,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input
} from '@mui/material';
import AvatarIcon from '../../../assets/ImageJaven/Avatar.png';
import ExamIcon from '../../../assets/ImageJaven/ExamIcon.png';
import Image from '../../../assets/ImageJaven/Image.png';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const sortOptions = [
  {
    label: 'First name',
  },
  {
    label: 'Last name',
  },
  {
    label: 'Submitted',
  },
  {
    label: 'Missing',
  },
];

const data = [
  {
    studentName: 'Paul Rudd',
    score: '100/100',
  },
  {
    studentName: 'Tom Hiddleston',
    score: '100/100',
  },
  {
    studentName: 'Tom Holland',
    score: '100/100',
  },
  {
    studentName: 'Sebastian Stan',
    score: '100/100',
  },
  {
    studentName: 'Robert Downey Jr.',
    score: '100/100',
  },
];

const dataSort = [
  {
    value: 'First Name',
    label: 'First Name',
  },
  {
    value: 'Last Name',
    label: 'Last Name',
  },
  {
    value: 'Submitted',
    label: 'Submitted',
  },
  {
    value: 'Graded',
    label: 'Graded',
  }
];

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
    }
  ];

const dataCourseYearSec = [
    {
      value: 'BSCS 2A',
      label: 'BSCS 2A',
    },
    {
      value: 'BSCS 3A',
      label: 'BSCS 3A',
    },
    {
      value: 'BSIT 3A',
      label: 'BSIT 3A',
    },
    {
      value: 'BSCS 4A',
      label: 'BSCS 4A',
    }
  ];

function View_exam() {
  const [view, setView] = React.useState(false);
  console.log(view);
  const { designs } = useStyle();

  const { roomID, activityID } = useParams();

  const [selectSort, setSort] = useState('');

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  const [selectRoom, setRoom] = useState('');

  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const [selectCourseYearSec, setCourseYearSec] = useState('');

  const handleChangeCourseYearSec = (event) => {
    setCourseYearSec(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Grid container columnSpacing={1}>
        <Grid item xs = {4} sx = {{ margin: "0.5em 0em" }}>
            <Button sx={designs.Return_Button_Style}>
                Return
            </Button>
        </Grid>

        <Grid item xs = {8} sx = {{ margin: "0.5em 0em" }}>
            <Box className = "RoomName-CourseYearSec" sx = {designs.RoomName_CourseYearSec_Style}>
                <Box sx={designs.FlexGrow_Box_Style} />
                
                <FormControl variant="standard" sx={designs.FormControlRoom_Style}>
                    <InputLabel id="demo-simple-select-standard-label"
                     sx={designs.InputLabelRoom_Style}>
                     Room
                    </InputLabel>
                              
                    <Select labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={selectRoom}
                      onChange={handleChangeRoom}
                      label="SelectRoom"
                      disableUnderline
                      sx={designs.SelectRoom_Style}>

                    {dataRoom.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {' '}
                        {label}{' '}
                      </MenuItem>
                    ))}
                    </Select>
                </FormControl>

                <FormControl variant="standard" sx={designs.FormControlCourseYearSec_Style}>
                    <InputLabel id="demo-simple-select-standard-label"
                     sx={designs.InputLabelCourseYearSec_Style}>
                     Course / Year and Section
                    </InputLabel>
                              
                    <Select labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={selectCourseYearSec}
                      onChange={handleChangeCourseYearSec}
                      label="SelectCourseYearSec"
                      disableUnderline
                      sx={designs.SelectCourseYearSec_Style}>

                    {dataCourseYearSec.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {' '}
                        {label}{' '}
                      </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Box>
        </Grid>

        <Grid item xs={4} sx = {{ paddingRight: "0.8em" }}>
          <Box className="Student-list" sx={designs.Student_List_Style}>
            <Box className="Sort-container" sx={designs.Sort_Container_Style}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={designs.AllStudent_Checkbox_Style}
                  />
                }
                label="All Students"
                sx={designs.AllStudentLabel_Checkbox_Style}
              />

              <Box sx={designs.FlexGrow_Box_Style} />

                <FormControl variant="standard" sx={designs.FormControl_Style}>
                    <InputLabel id="demo-simple-select-standard-label"
                     sx={designs.InputLabel_Style}>
                     Sort by
                    </InputLabel>
                              
                    <Select labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={selectSort}
                      onChange={handleChangeSort}
                      label="SelectSort"
                      disableUnderline
                      sx={designs.Select_Style}>

                    {dataSort.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {' '}
                        {label}{' '}
                      </MenuItem>
                    ))}
                    </Select>
                </FormControl>
              {/* <Autocomplete
                disableClearable
                id="disable-clearable"
                options={sortOptions}
                sx={designs.SortBy_Autocomplete_Style}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                      style: { color: '#3F3D56' },
                    }}
                    label="Sort by"
                    variant="standard"
                    InputLabelProps={{
                      style: { fontSize: '15px', color: '#3F3D56' },
                    }}
                  />
                )}
              /> */}
            </Box>

            <Divider sx={designs.Divider_Style} />

            <Box
              className="Student-container"
              sx={designs.Student_Container_Style}
            >
              {data.map(function (items, index) {
                return (
                  <Box key={index} sx={designs.Student_Box_Style}>
                    <Checkbox sx={designs.Student_Checkbox_Style} />
                    <Avatar
                      alt="Remy Sharp"
                      src={AvatarIcon}
                      sx={designs.Student_Avatar_Style}
                    />
                    <Typography
                      noWrap
                      sx={{
                        height: 'max-content',
                        width: '47%',
                        textTransform: 'Capitalize',
                        textAlign: 'Left',
                        fontSize: '13px',
                        fontWeight: '500',
                        color: '#3F3D56',
                        margin: '10px 0px 10px 0px',
                      }}
                    >
                      {items.studentName}
                    </Typography>
                    <Box flexGrow={1} height="relative" width="relative" />
                    <Typography sx={designs.StudentScore_Typography_Style}>
                      {items.score}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>

        <Grid item md={8} sm={12} sx = {designs.Right_Container_GridItem_Style}>
                    <Box className = "Right-container" sx = {designs.Right_Container_Style}>
                        <Box className = "Header" sx = {designs.Header_Style}>
                            <Box className = "Icon-Quiz" sx = {designs.Icon_Quiz_Style}>
                                <img
                                    src={ExamIcon}
                                    alt="ExamIcon"
                                    style={{
                                    height: '2em',
                                    marginTop: "0.2em"
                                    }}/>
                                <Typography sx = {designs.Quiz_Typography_Style}>
                                    Preliminary Exam
                                </Typography>
                            </Box>
                           

                            <Box flexGrow = {1} sx = {designs.BoxFlexGrowHeader_Style}/>

                            <Box className = "Professor-Date" sx = {designs.Professor_Date_Style}>
                                <Typography sx = {designs.Professor_Typography_Style}>
                                    Mark Andrei (You)
                                </Typography>

                                <Typography sx = {designs.Date_Typography_Style}>
                                    created this exam on December 10, 2021 at 10:00 PM
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx = {designs.DividerRight_Style}/>

                        <Box className = "Responsive" sx = {designs.Responsive_Style}>

                        </Box>
                            
                        <Box className = "Instructions-Score" sx = {designs.Instructions_Score_Style}>
                            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Responsive_Style}/>

                            <Typography sx = {designs.ScoreText_Responsive_Typography_Style}>
                                Score:
                            </Typography>

                            <Typography sx = {designs.Score_Responsive_Typography_Style}>
                                3 / 3
                            </Typography>
                            
                            <Typography sx = {designs.Instructions_Typography_Style}>
                                Please read the questions carefully.
                            </Typography>

                            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                            <Typography sx = {designs.ScoreText_Typography_Style}>
                                Score:
                            </Typography>

                            <Typography sx = {designs.Score_Typography_Style}>
                                3 / 3
                            </Typography>
                        </Box>
                        

                        <Box className = "Quiz-sheet" sx = {designs.Quiz_Sheet_Style}>
                        
                        <Typography sx = {designs.Type_Typography_Style}>
                            Multiple Choice
                        </Typography>

                        <Box className = "Item-1" sx = {designs.Item_Style}>

                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography  sx = {designs.Item_Typography_Style}>
                                1.
                                </Typography>

                                <Typography sx = {designs.Item_Question_Typography_Style}>
                                What is my favorite food?
                                </Typography>

                                <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                                <Typography
                                sx = {designs.Points_Typography_Style}>
                                2
                                </Typography>

                                <Typography
                                sx = {designs.PointsText_Typography_Style}>
                                points
                                </Typography>
                            </Box>
                            
                            <Box className = "Choices" sx = {designs.Choices_Style}>
                                <Box className = "Choice-a" sx = {designs.ChoiceA_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    A.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-b" sx = {designs.ChoiceB_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    B.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-c" sx = {designs.ChoiceC_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    C.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-d" sx = {designs.ChoiceD_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    D.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx = {designs.CorrectAnswer_Typography_Style}>
                                Correct Answer: C
                            </Typography>
                            
                        </Box>

                        <Typography sx = {designs.Type_Typography_Style}>
                            Short Answer
                        </Typography>

                        <Box className = "Item-2" sx = {designs.Item_Style}>
                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography sx = {designs.Item_Typography_Style}>
                                2.
                                </Typography>

                                <Typography sx = {designs.Item_Question_Typography_Style}>
                                What is your wish for Christmas?
                                </Typography>

                                <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                                <TextField
                                id="standard-read-only-input"
                                InputProps={{style: {height: "1.5em", fontSize: "0.8em", paddingTop: "0.3em", fontWeight: "600", color: "#007FFF"}}}
                                InputLabelProps = {{style: {fontSize: "0.8em", fontWeight: "600",  color: "#007FFF"}}}
                                variant="standard"
                                sx = {designs.Points_TextField_Style}/>

                                <Typography
                                sx = {designs.PointsText_Typography_Style}>
                                points
                                </Typography>
                            </Box>
                            
                            <Box className = "Short-answer" sx = {designs.Choices_Style}> 
                                <Input
                                    variant="standard"
                                    multiline
                                    fullWidth
                                    rows={6}
                                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
                                    disableUnderline
                                    readOnly
                                    sx={designs.Essay_Input_Style}/>  
                            </Box> 
                        </Box>
                        
                        <Typography sx = {designs.Type_Typography_Style}>
                            Checkboxes
                        </Typography>

                        <Box className = "Item-3" sx = {designs.Item_Style}>
                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography sx = {designs.Item_Typography_Style}>
                                3.
                                </Typography>

                                <Typography sx = {designs.Item_Question_Typography_Style}>
                                What is my favorite food?
                                </Typography>

                                <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                                <Typography
                                sx = {designs.Points_Typography_Style}>
                                2
                                </Typography>

                                <Typography
                                sx = {designs.PointsText_Typography_Style}>
                                points
                                </Typography>
                            </Box>
                            
                            <Box className = "Choices" sx = {designs.Choices_Style}>
                                <Box className = "Choice-1" sx = {designs.Choice1_Style}>
                                    <Checkbox {...label} disabled checked 
                                    sx = {designs.Checkbox_Style}/>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-2" sx = {designs.Choice2_Style}>
                                <Checkbox {...label} disabled 
                                   sx = {designs.Checkbox_Style}/>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-3" sx = {designs.Choice3_Style}>
                                <Checkbox {...label} disabled checked 
                                    sx = {designs.Checkbox_Style}/>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-4" sx = {designs.Choice4_Style}>
                                <Checkbox {...label} disabled checked 
                                    sx = {designs.Checkbox_Style}/>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx = {designs.CorrectAnswer_Typography_Style}>
                                Correct Answer: Option1, Option3, Option4
                            </Typography>
                            
                        </Box>

                    </Box>
                    </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default View_exam;
