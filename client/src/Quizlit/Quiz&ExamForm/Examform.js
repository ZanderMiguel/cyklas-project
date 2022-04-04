import React, { useState } from 'react';

import {
  Typography,
  Autocomplete,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  InputLabel,
  Checkbox,
  Input
} from '@mui/material';
import CusButton from '../../components/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyle from '../Styles/Examform_style';
import "../Styles/Examform_stylesheet.css";
import Image from '../../assets/ImageJaven/Image.png';
import { AddCircle, Check, MoreVert, Delete, PhotoSizeSelectActualOutlined, ContentCopyOutlined } from '@mui/icons-material';
import Exam_multiplechoice from '././AnswerTypes/Exam_multiplechoice';
import Exam_trueorfalse from '././AnswerTypes/Exam_trueorfalse';
import Exam_checkboxes from '././AnswerTypes/Exam_checkboxes';
import Exam_enumeration from '././AnswerTypes/Exam_enumeration';
import Exam_shortanswer from '././AnswerTypes/Exam_shortanswer';
import Image_GIF from './Image_GIF';
import ExamQuestionOptionspopover from '../../components/PopoverContent/ExamQuestionOptionspopover';
import CusPopover from '../../components/Popover';
import { Link } from "react-router-dom";
import Post_exam from "../../Form_content/Post_exam";

const dataAnswerType = [
  {
    value: 'Multiple Choice',
    label: 'Multiple Choice',
  },
  {
    value: 'True or False',
    label: 'True or False',
  },
  {
    value: 'Checkboxes',
    label: 'Checkboxes',
  },
  // {
  //   value: 'Enumeration',
  //   label: 'Enumeration',
  // },
  {
    value: 'Short Answer',
    label: 'Short Answer',
  }
];

const dataPoints = [
  {
    value: '0 point',
    label: '0 point',
  },
  {
    value: '1 point',
    label: '1 point',
  },
  {
    value: '2 points',
    label: '2 points',
  },
  {
    value: '3 points',
    label: '3 points',
  },
  {
    value: '4 points',
    label: '4 points',
  },
  {
    value: '5 points',
    label: '5 points',
  },
  {
    value: '6 points',
    label: '6 points',
  },
  {
    value: '7 points',
    label: '7 points',
  },
  {
    value: '8 points',
    label: '8 points',
  },
  {
    value: '9 points',
    label: '9 points',
  },
];

const answertypeoptions = [
  {
    value: 'Multiple Choice',
    label: 'Multiple Choice',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

function Examform() {
  const [questions, setQuestions] = useState(new Map());
  const [opendialog, setOpenDialog] = useState(false);
  const [image, setImage] = useState('');
  const { designs } = useStyle();

  const [selectAnswerType, setAnswerType] = useState('Multiple Choice');
  const [selectPoints, setPoints] = useState('');

  const handleChange1 = (event) => {
    setAnswerType(event.target.value);
  };
  const handleChange2 = (event) => {
    setPoints(event.target.value);
  };

  const questionKey = React.useRef();

  questions.set('kahitano', {
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
  });
  const handleChange = (index, event) => {
    const value = [...questions];
    if (event.target.tag === 'question') {
      questionKey.current = event.target.name;
      setQuestions(
        questions.set([questionKey], {
          question: event.target.value,
          ...questions[questionKey.current],
        })
      );
    } else {
      setQuestions(
        questions.set([questionKey], {
          ...questions[questionKey.current],
          [event.target.name]: [event.target.value],
        })
      );
    }
    console.log(questions);
    console.log(event.target.tag);
  };
  const handleQuestionAdd = () => {
    setQuestions([
      ...questions,
      {
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
      },
    ]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

    const [selectCorrectAnswerA, setSelectCorrectAnswerA] = useState(true);
    const [selectCorrectAnswerB, setSelectCorrectAnswerB] = useState(true);
    const [selectCorrectAnswerC, setSelectCorrectAnswerC] = useState(true);
    const [selectCorrectAnswerD, setSelectCorrectAnswerD] = useState(true);

    const handleClickCorrectAnswerA = () => {
        setSelectCorrectAnswerA((prev) => !prev);
        setSelectCorrectAnswerB(true);
        setSelectCorrectAnswerC(true);
        setSelectCorrectAnswerD(true);
    };
    const handleClickCorrectAnswerB = () => {
        setSelectCorrectAnswerB((prev) => !prev);
        setSelectCorrectAnswerA(true);
        setSelectCorrectAnswerC(true);
        setSelectCorrectAnswerD(true);
    };
    const handleClickCorrectAnswerC = () => {
        setSelectCorrectAnswerC((prev) => !prev);
        setSelectCorrectAnswerA(true);
        setSelectCorrectAnswerB(true);
        setSelectCorrectAnswerD(true);
    };
    const handleClickCorrectAnswerD = () => {
        setSelectCorrectAnswerD((prev) => !prev);
        setSelectCorrectAnswerA(true);
        setSelectCorrectAnswerB(true);
        setSelectCorrectAnswerC(true);
    };

    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickNotif = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseNotif = () => {
      setAnchorEl(null);
    };
    const notif = Boolean(anchorEl); 
     
    const [opendialog2, setOpenDialog2] = useState(false);

    const handleCreate = () => {
      setOpenDialog2(true);
    };

    const handleCreateClose = () => {
      setOpenDialog2(false);
    };

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" rowSpacing = {1} sx = {{ margin: "0.5em 0em 2em 0em" }}>
        <Grid item container justifyContent="flex-end">
          <Grid item>
            <CusButton
              onClick = {handleCreate}
            // component = {Link}
            // to = "/Exam_take"
              variant="contained"
              content="Create Exam"
              type="submit"
              id="examform"
              // onClick={handleSubmit}
              sx={{
                textDecoration: 'none',
                backgroundColor: '#4caf50',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#43a047',
                }
              }}
              startIcon={
                <AddCircleIcon sx={{ color: 'white', fontSize: '2rem' }} />
              }
            />
             {opendialog2 && (
              <Post_exam
                open={opendialog2}
                close={handleCreateClose}
                maxWidth="md"
                state={setOpenDialog2}
              />)}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="Exam-title"
            height="auto"
            width="100%"
            borderRadius="0.7em 0.7em 0em 0em"
          >
            <Box
              className="Title"
              width="100%"
              height="auto"
              backgroundColor="#007FFF"
              borderRadius="0.7em 0.7em 0em 0em"
              marginBottom="0.3em"
            >
              <TextField
                id="filled-basic"
                placeholder="Untitled Exam"
                variant="filled"
                sx={{
                  borderRadius: '0.7em 0.7em 0em 0em',
                  width: '100%',
                  height: 'auto',
                  backgroundColor: 'transparent',
                }}
                inputProps={{
                  style: {
                    height: '0px',
                    fontSize: '1em',
                    margin: '0px 1.25rem 0.938rem 1.25rem',
                    color: 'white',
                    fontWeight: 500,
                  },
                }}
                InputProps={{ disableUnderline: true }}
                autoComplete="off"
              />
            </Box>

            <Box
              className="Instructions"
              width="relative"
              height="auto"
              padding = "0.5em 2em"
              backgroundColor="#FDFDFD"
            >
            <Input variant="standard"
            multiline
            fullWidth
            rows={6}
            disableUnderline
            placeholder="Write exam instructions here..."
            sx={designs.Instruction_Input_Style}/>

              {/* <TextField
                multiline
                rows={1}
                placeholder="Write exam instructions here..."
                variant="filled"
                sx={{
                  width: '100%',
                  height: 'auto',
                  backgroundColor: 'White',
                }}
                inputProps={{
                  style: {
                    height: '0px',
                    marginBottom: '1.2rem',
                    padding: '0rem 1.25rem 4.375rem 1.25rem',
                    fontSize: '0.9rem',
                    color: '#3F3D56',
                    fontWeight: 500,
                  },
                }}
                InputProps={{ disableUnderline: true }}
                autoComplete="off"
              /> */}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {Array.from(questions).map((items, index) => {
            return (
              <form key={index} onSubmit={handleSubmit} id="quizform">
                <Grid container rowSpacing={1}>
                  <Box
                    className="Exam-options-responsive"
                    sx={designs.Exam_Options_Responsive_Style}
                  >
                    <IconButton
                      aria-label="options"
                      onClick={handleClickNotif}
                      sx={designs.Exam_Options_IconButton_Style}
                    >
                      <MoreVert sx={designs.MoreVertIcon_Style} />
                    </IconButton>

                      <CusPopover
                        open={notif}
                        anchorEl={anchorEl}
                        onClose={handleCloseNotif}
                      >
                        <ExamQuestionOptionspopover />
                      </CusPopover>

                  </Box>
                  <Grid item xs={12}>
                    <Box
                      className="Exam-container"
                      sx={designs.Exam_Container_Style}
                    >
                      <Box
                        className="Exam-container-sub"
                        sx={designs.Exam_Container_Sub_Style}
                      >
                        <Box
                          className="Exam-question"
                          sx={designs.Exam_Question_Style}
                        >
                          <Box
                            className="Exam-question-sub"
                            sx={designs.Exam_Question_Sub_Style}
                          >
                            <TextField
                              id="filled-basic"
                              placeholder="Enter exam question here..."
                              variant="filled"
                              autoComplete="off"
                              sx={designs.Exam_Question_TextField_Style}
                              inputProps={{
                                style: {
                                  height: '0em',
                                  fontSize: '0.8em',
                                  paddingLeft: '0.2em',
                                  paddingRight: '0.4em',
                                  marginBottom: '1.2em',
                                  color: 'white',
                                },
                              }}
                              InputProps={{
                                disableUnderline: true,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Box
                                      className="Exam-item"
                                      sx={designs.Exam_Item_Style}
                                    >
                                      <Typography
                                        sx={designs.Exam_Item_Typography_Style}
                                      >
                                        1.
                                      </Typography>
                                    </Box>
                                  </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                       <IconButton aria-label="attach-image" 
                                       onClick={() => setOpenDialog(true)}
                                            sx = {{
                                            height: "2em",
                                            width: "2em",
                                            marginRight: "0.5em",
                                            borderRadius: "0em",
                                            }}>
                                            <PhotoSizeSelectActualOutlined
                                            sx= {{
                                            color: "White",
                                            fontSize: "30px"
                                        
                                            }}/>
                                         </IconButton>
                                    </InputAdornment>
                                ),
                              }}
                              name={`questions${index}`}
                              tag="question"
                              onChange={(event) => handleChange(index, event)}
                            />
                          </Box>
                          <Box
                            className="Exam-question-image"
                            sx={designs.Exam_Question_Image_Style}
                          >
                            <Box
                              className="Exam-question-image-sub"
                              sx={designs.Exam_Question_Image_Sub_Style}
                            >
                              {image != '' ? (
                                <>
                                  <Box
                                    width="80%"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                  >
                                    <img
                                      src={image}
                                      width="100%"
                                      height="300px"
                                      style={{
                                        padding: '0.7em 0em 0em 1em',
                                        objectFit: 'contain',
                                      }}
                                    />
                                  </Box>
                                  <Button
                                    variant="contained"
                                    onClick={() => setImage('')}
                                  >
                                    remove
                                  </Button>
                                </>
                              ) : (
                                <Box
                                  width="80%"
                                  height="300px"
                                  justifyContent="center"
                                  alignItems="center"
                                  display = "none"
                                >
                                  <Button
                                    variant="contained"
                                    startIcon={
                                      <AddCircle
                                        style={{
                                          marginRight: '0.2em',
                                          fontSize: '2em',
                                          color: '#716F87',
                                        }}
                                      />
                                    }
                                    sx={designs.Insert_Image_Button_Style}
                                    onClick={() => setOpenDialog(true)}
                                  >
                                    Insert an image or GIF associated to this
                                    question.
                                  </Button>
                                </Box>
                              )}
                            </Box>
                          </Box>

                          {selectAnswerType === 'Multiple Choice' && (
                            <>
                            <Grid container rowSpacing={1} sx = {{ padding: "0em 2em 1.5em 2em" }}>
                              <Grid item xs={12} >
                                <TextField
                                  id="filled-basic"
                                  placeholder="Enter Answer A..."
                                  variant="filled"
                                  autoComplete="off"
                                  name="answer1"
                                  onChange={(event) =>
                                    handleChange(index, event)
                                  }
                                  sx={designs.Answer_A_TextField_Style}
                                  inputProps={{
                                    style: {
                                      height: '0em',
                                      fontSize: '0.8em',
                                      paddingLeft: '0.1em',
                                      paddingRight: '0em',
                                      marginBottom: '1em',
                                      marginRight: '0.5em',
                                      color: 'white',
                                    },
                                  }}
                                  InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <Box
                                          className="Exam-item"
                                          sx={designs.Exam_Item_Style2}
                                        >
                                          <Typography
                                            sx={
                                              designs.Answer_A_Typography_Style
                                            }
                                          >
                                            A.
                                          </Typography>
                                        </Box>
                                      </InputAdornment>
                                    ),
                                    endAdornment: (
                                      <InputAdornment position="end"
                                      onClick={handleClickCorrectAnswerA}>
                                        {!selectCorrectAnswerA ? (
                                       <IconButton aria-label="correct-answer" sx={designs.Correct_AnswerT_IconButton_Style}>
                                          <Check sx={designs.CheckIconT_Style} />
                                        </IconButton>
                                        ) 
                                        : 
                                        (
                                            <IconButton aria-label="correct-answer" sx={designs.Correct_AnswerF_IconButton_Style}>
                                              <Check sx={designs.CheckIconF_Style} />
                                            </IconButton>
                                        )}
                                        {/* <IconButton
                                          aria-label="correct-answer"
                                          sx={
                                            designs.Correct_Answer_IconButton_Style
                                          }
                                        >
                                          <Check sx={designs.CheckIcon_Style} />
                                        </IconButton> */}
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <TextField
                                  id="filled-basic"
                                  placeholder="Enter Answer B..."
                                  variant="filled"
                                  autoComplete="off"
                                  name="answer2"
                                  onChange={(event) =>
                                    handleChange(index, event)
                                  }
                                  sx={designs.Answer_B_TextField_Style}
                                  inputProps={{
                                    style: {
                                      height: '0em',
                                      fontSize: '0.8em',
                                      paddingLeft: '0.1em',
                                      paddingRight: '0em',
                                      marginBottom: '1em',
                                      marginRight: '0.5em',
                                      color: 'white',
                                    },
                                  }}
                                  InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <Box
                                          className="Exam-item"
                                          sx={designs.Exam_Item_Style2}
                                        >
                                          <Typography
                                            sx={
                                              designs.Answer_B_Typography_Style
                                            }
                                          >
                                            B.
                                          </Typography>
                                        </Box>
                                      </InputAdornment>
                                    ),
                                    endAdornment: (
                                      <InputAdornment position="end"
                                        onClick={handleClickCorrectAnswerB}>
                                          {!selectCorrectAnswerB ? (
                                              <IconButton aria-label="correct-answer" sx={designs.Correct_AnswerT_IconButton_Style}>
                                                <Check sx={designs.CheckIconT2_Style} />
                                              </IconButton>
                                          ) 
                                          : 
                                          (
                                              <IconButton aria-label="correct-answer" sx={designs.Correct_AnswerF_IconButton_Style}>
                                                <Check sx={designs.CheckIconF_Style} />
                                              </IconButton>
                                          )}
                                        {/* <IconButton
                                          aria-label="correct-answer"
                                          sx={
                                            designs.Correct_Answer_IconButton_Style
                                          }
                                        >
                                          <Check sx={designs.CheckIcon_Style} />
                                        </IconButton> */}
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <TextField
                                  id="filled-basic"
                                  placeholder="Enter Answer C..."
                                  variant="filled"
                                  autoComplete="off"
                                  name="answer3"
                                  onChange={(event) =>
                                    handleChange(index, event)
                                  }
                                  sx={designs.Answer_C_TextField_Style}
                                  inputProps={{
                                    style: {
                                      height: '0em',
                                      fontSize: '0.8em',
                                      paddingLeft: '0.1em',
                                      paddingRight: '0em',
                                      marginBottom: '1em',
                                      marginRight: '0.5em',
                                      color: 'white',
                                    },
                                  }}
                                  InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <Box
                                          className="Exam-item"
                                          sx={designs.Exam_Item_Style2}
                                        >
                                          <Typography
                                            sx={
                                              designs.Answer_C_Typography_Style
                                            }
                                          >
                                            C.
                                          </Typography>
                                        </Box>
                                      </InputAdornment>
                                    ),
                                    endAdornment: (
                                      <InputAdornment position="end"
                                        onClick={handleClickCorrectAnswerC}>
                                          {!selectCorrectAnswerC ? (
                                              <IconButton aria-label="correct-answer" sx={designs.Correct_AnswerT_IconButton_Style}>
                                                <Check sx={designs.CheckIconT3_Style} />
                                              </IconButton>
                                          ) 
                                          : 
                                          (
                                              <IconButton aria-label="correct-answer" sx={designs.Correct_AnswerF_IconButton_Style}>
                                                <Check sx={designs.CheckIconF_Style} />
                                              </IconButton>
                                          )}
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <TextField
                                  id="filled-basic"
                                  placeholder="Enter Answer D..."
                                  variant="filled"
                                  autoComplete="off"
                                  name="answer4"
                                  onChange={(event) =>
                                    handleChange(index, event)
                                  }
                                  sx={designs.Answer_D_TextField_Style}
                                  inputProps={{
                                    style: {
                                      height: '0em',
                                      fontSize: '0.8em',
                                      paddingLeft: '0.1em',
                                      paddingRight: '0em',
                                      marginBottom: '1em',
                                      marginRight: '0.5em',
                                      color: 'white',
                                    },
                                  }}
                                  InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <Box
                                          className="Exam-item"
                                          sx={designs.Exam_Item_Style2}
                                        >
                                          <Typography
                                            sx={
                                              designs.Answer_D_Typography_Style
                                            }
                                          >
                                            D.
                                          </Typography>
                                        </Box>
                                      </InputAdornment>
                                    ),
                                    endAdornment: (
                                      <InputAdornment position="end"
                                        onClick={handleClickCorrectAnswerD}>
                                          {!selectCorrectAnswerD ? (
                                              <IconButton aria-label="correct-answer" sx={designs.Correct_AnswerT_IconButton_Style}>
                                                <Check sx={designs.CheckIconT4_Style} />
                                              </IconButton>
                                          ) 
                                          : 
                                          (
                                              <IconButton aria-label="correct-answer" sx={designs.Correct_AnswerF_IconButton_Style}>
                                                <Check sx={designs.CheckIconF_Style} />
                                              </IconButton>
                                          )}
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>

                              <Grid item xs = {12}>
                                  <Button variant = "contained" startIcon = {<AddCircle/>}
                                  sx = {{ 
                                        height: "relative", 
                                        width: "100%", 
                                        padding: "0.3em 0em",
                                        fontSize: "0.8em",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        color: "white",
                                        boxShadow: "none",
                                        borderRadius: "0.5em",
                                        "&: hover": {
                                            boxShadow: "none"
                                        }
                                        }}>
                                        Add another choice
                                  </Button>
                              </Grid>
                            </Grid>
                            </>
                        )}
                        {selectAnswerType === 'True or False' && (
                          <Exam_trueorfalse />
                        )}
                        {selectAnswerType === 'Checkboxes' && (
                          <Exam_checkboxes />
                        )}
                        {selectAnswerType === 'Enumeration' && (
                          <Exam_enumeration />
                        )}
                        {selectAnswerType === 'Short Answer' && (
                          <Exam_shortanswer />
                        )}

                        </Box>
                        {opendialog && (
                          <Image_GIF
                            open={opendialog}
                            close={() => setOpenDialog(false)}
                            maxWidth="lg"
                            setImage={setImage}
                          />
                        )}
                        <Box
                          className="Exam-options"
                          sx={designs.Exam_Options_Style}
                        >
                          <Box
                            className="Other-buttons"
                            sx={designs.Other_Buttons_Style}
                          >
                            <Box
                              className="Button-container"
                              sx={designs.Button_Container_Style}
                            >  
                                <Box className = "Required-button" sx = {designs.Required_Button_Style}>
                                    <Checkbox sx={designs.Required_Checkbox_Style}/>
                                    <Typography sx = {designs.Required_Typography_Style}>
                                        Required
                                    </Typography>
                                </Box>

                                <Box flexGrow = {1} sx = {{ height: "relative" }}/>

                                <IconButton aria-label="duplicate" sx={designs.Duplicate_IconButton_Style}>
                                    <ContentCopyOutlined sx={designs.DuplicateIcon_Style}/>
                                </IconButton>

                              <IconButton
                                aria-label="delete"
                                sx={designs.Delete_IconButton_Style}
                              >
                                <Delete sx={designs.DeleteIcon_Style} />
                              </IconButton>
                            </Box>

                            <FormControl
                              variant="standard"
                              sx={designs.FormControl_Style}
                            >
                              <InputLabel
                                id="demo-simple-select-standard-label"
                                sx={designs.InputLabel_Style}
                              >
                                Answer Type
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={selectAnswerType}
                                onChange={handleChange1}
                                label="SelectAnswerType"
                                disableUnderline
                                sx={designs.Select_Style}
                              >
                                {dataAnswerType.map(({ value, label }) => (
                                  <MenuItem key={value} value={value}>
                                    {' '}
                                    {label}{' '}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>

                            <FormControl
                              variant="standard"
                              sx={designs.FormControl_Style}
                            >
                              <InputLabel
                                id="demo-simple-select-standard-label"
                                sx={designs.InputLabel_Style}
                              >
                                Points
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={selectPoints}
                                onChange={handleChange2}
                                label="SelectPoints"
                                disableUnderline
                                sx={designs.Select_Style}
                              >
                                {dataPoints.map(({ value, label }) => (
                                  <MenuItem key={value} value={value}>
                                    {' '}
                                    {label}{' '}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>

                            {/* <Autocomplete
                              clearOnEscape
                              id="clear-on-escape"
                              options={sortOptions}
                              sx={designs.Answer_Type_Autocomplete_Style}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                  }}
                                  InputLabelProps={{
                                    style: {
                                      fontSize: '0.9em',
                                      fontWeight: '600',
                                      color: '#737373',
                                    },
                                  }}
                                  label="Answer type"
                                  variant="standard"
                                />
                              )}
                            />

                            <Autocomplete
                              clearOnEscape
                              id="clear-on-escape"
                              options={sortOptions2}
                              sx={designs.Time_Limit_Autocomplete_Style}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                  }}
                                  InputLabelProps={{
                                    style: {
                                      fontSize: '0.9em',
                                      fontWeight: '600',
                                      color: '#737373',
                                    },
                                  }}
                                  label="Time Limit"
                                  variant="standard"
                                />
                              )}
                            />

                            <Autocomplete
                              clearOnEscape
                              id="clear-on-escape"
                              options={sortOptions3}
                              sx={designs.Points_Autocomplete_Style}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                  }}
                                  InputLabelProps={{
                                    style: {
                                      fontSize: '0.9em',
                                      fontWeight: '600',
                                      color: '#737373',
                                    },
                                  }}
                                  label="Points"
                                  variant="standard"
                                />
                              )}
                            /> */}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  {questions.length - 1 === index && (
                    <Grid item xs={12} sx={{ marginBottom: '2em' }}>
                      <Button
                        variant="contained"
                        startIcon={
                          <AddCircle
                            style={{
                              marginRight: '5px',
                            }}
                          />
                        }
                        sx={designs.Add_Question_Button_Style}
                        type="submit"
                        onClick={handleQuestionAdd}
                      >
                        Add Question
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </form>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Examform;
