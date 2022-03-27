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
  InputLabel,
  Input
} from '@mui/material';
import CusButton from '../../components/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyle from '../Styles/Quiz_multiplechoice_style';
import Image from '../../assets/ImageJaven/Image.png';
import { AddCircle, Check, MoreVert, Delete } from '@mui/icons-material';
import Quiz_imagemultiplechoice from "./AnswerTypes/Quiz_imagemultiplechoice";
import Quiz_trueorfalse from "./AnswerTypes/Quiz_trueorfalse";
import Quiz_shortanswer from "./AnswerTypes/Quiz_shortanswer";
import Image_GIF from './Image_GIF';
import { GridToolbarColumnsButton } from '@mui/x-data-grid';

const dataAnswerType = [
  {
    value: 'Multiple Choice',
    label: 'Multiple Choice',
  },
  {
    value: 'Image Multiple Choice',
    label: 'Image Multiple Choice',
  },
  {
    value: 'True or False',
    label: 'True or False',
  },
  {
    value: 'Short Answer',
    label: 'Short Answer',
  },
];

const dataTimeLimit = [
  {
    value: '5 seconds',
    label: '5 seconds',
  },
  {
    value: '10 seconds',
    label: '10 seconds',
  },
  {
    value: '15 seconds',
    label: '15 seconds',
  },
  {
    value: '20 seconds',
    label: '20 seconds',
  },
  {
    value: '25 seconds',
    label: '25 seconds',
  },
  {
    value: '30 seconds',
    label: '30 seconds',
  },
  {
    value: '40 seconds',
    label: '40 seconds',
  },
  {
    value: '1 minute',
    label: '1 minute',
  },
  {
    value: '2 minutes',
    label: '2 minutes',
  },
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

function Quizform() {
  const [questions, setQuestions] = useState(new Map());
  const [opendialog, setOpenDialog] = useState(false);
  const [image, setImage] = useState('');
  const { designs } = useStyle();

  const [selectAnswerType, setAnswerType] = useState('Multiple Choice');
  const [selectTimeLimit, setTimeLimit] = useState('');
  const [selectPoints, setPoints] = useState('');

  const handleChange1 = (event) => {
    setAnswerType(event.target.value);
  };
  const handleChange2 = (event) => {
    setTimeLimit(event.target.value);
  };
  const handleChange3 = (event) => {
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

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" rowSpacing={1} sx = {{ margin: "0.5em 0em 2em 0em" }}>
      <Grid item container justifyContent="flex-end">
          <Grid item>
            <CusButton
              variant="contained"
              content="Create Quiz"
              type="submit"
              id="quizform"
              onClick={handleSubmit}
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
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="Quiz-title"
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
                placeholder="Untitled Quiz"
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
              placeholder="Write quiz instructions here..."
              sx={designs.Instruction_Input_Style}/>

              {/* <TextField
                multiline
                rows={1}
                placeholder="Write quiz instructions here..."
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
                    className="Quiz-options-responsive"
                    sx={designs.Quiz_Options_Responsive_Style}
                  >
                    <IconButton
                      aria-label="options"
                      sx={designs.Quiz_Options_IconButton_Style}
                    >
                      <MoreVert sx={designs.MoreVertIcon_Style} />
                    </IconButton>
                  </Box>
                  <Grid item xs={12}>
                    <Box
                      className="Quiz-container"
                      sx={designs.Quiz_Container_Style}
                    >
                      <Box
                        className="Quiz-container-sub"
                        sx={designs.Quiz_Container_Sub_Style}
                      >
                        <Box
                          className="Quiz-question"
                          sx={designs.Quiz_Question_Style}
                        >
                          <Box
                            className="Quiz-question-sub"
                            sx={designs.Quiz_Question_Sub_Style}
                          >
                            <TextField
                              id="filled-basic"
                              placeholder="Enter quiz question here..."
                              variant="filled"
                              autoComplete="off"
                              sx={designs.Quiz_Question_TextField_Style}
                              inputProps={{
                                style: {
                                  height: '0em',
                                  fontSize: '0.8em',
                                  paddingLeft: '0.2em',
                                  paddingRight: '0em',
                                  marginBottom: '1.2em',
                                  marginRight: '3.5em',
                                  color: 'white',
                                },
                              }}
                              InputProps={{
                                disableUnderline: true,
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Box
                                      className="Quiz-item"
                                      sx={designs.Quiz_Item_Style}
                                    >
                                      <Typography
                                        sx={designs.Quiz_Item_Typography_Style}
                                      >
                                        1.
                                      </Typography>
                                    </Box>
                                  </InputAdornment>
                                ),
                              }}
                              name={`questions${index}`}
                              tag="question"
                              onChange={(event) => handleChange(index, event)}
                            />
                          </Box>
                          <Box
                            className="Quiz-question-image"
                            sx={designs.Quiz_Question_Image_Style}
                          >
                            <Box
                              className="Quiz-question-image-sub"
                              sx={designs.Quiz_Question_Image_Sub_Style}
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
                                  display="flex"
                                  justifyContent="center"
                                  alignItems="center"
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
                          className="Quiz-options"
                          sx={designs.Quiz_Options_Style}
                        >
                          <Box
                            className="Other-buttons"
                            sx={designs.Other_Buttons_Style}
                          >
                            <Box
                              className="Delete-question"
                              sx={designs.Delete_Question_Style}
                            >
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
                                Time Limit
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={selectTimeLimit}
                                onChange={handleChange2}
                                label="SelectTimeLimit"
                                disableUnderline
                                sx={designs.Select_Style}
                              >
                                {dataTimeLimit.map(({ value, label }) => (
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
                                onChange={handleChange3}
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

                      <Box
                        className="Quiz-answers"
                        sx={designs.Quiz_Answers_Style}
                      >
                        {selectAnswerType === 'Multiple Choice' && (
                          <>
                            <Grid container columnSpacing={2} rowSpacing={1}>
                              <Grid item xs={12} sm={6}>
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
                                          className="Quiz-item"
                                          sx={designs.Quiz_Item_Style2}
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
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="correct-answer"
                                          sx={
                                            designs.Correct_Answer_IconButton_Style
                                          }
                                        >
                                          <Check sx={designs.CheckIcon_Style} />
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>

                              <Grid item xs={12} sm={6}>
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
                                          className="Quiz-item"
                                          sx={designs.Quiz_Item_Style2}
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
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="correct-answer"
                                          sx={
                                            designs.Correct_Answer_IconButton_Style
                                          }
                                        >
                                          <Check sx={designs.CheckIcon_Style} />
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                            </Grid>

                            <Grid container columnSpacing={2} rowSpacing={1}>
                              <Grid item xs={12} sm={6}>
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
                                          className="Quiz-item"
                                          sx={designs.Quiz_Item_Style2}
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
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="correct-answer"
                                          sx={
                                            designs.Correct_Answer_IconButton_Style
                                          }
                                        >
                                          <Check sx={designs.CheckIcon_Style} />
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>

                              <Grid item xs={12} sm={6}>
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
                                          className="Quiz-item"
                                          sx={designs.Quiz_Item_Style2}
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
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="correct-answer"
                                          sx={
                                            designs.Correct_Answer_IconButton_Style
                                          }
                                        >
                                          <Check sx={designs.CheckIcon_Style} />
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                            </Grid>
                          </>
                        )}

                        {selectAnswerType === 'Image Multiple Choice' && (
                          <Quiz_imagemultiplechoice />
                        )}
                        {selectAnswerType === 'True or False' && (
                          <Quiz_trueorfalse />
                        )}
                        {selectAnswerType === 'Short Answer' && <Quiz_shortanswer />}
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

export default Quizform;