import React, { useState } from 'react';
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Button,
  Grid,
} from '@mui/material';
import useStyle from '../Styles/Quiz_multiplechoice_style';
import { AddCircle, MoreVert } from '@mui/icons-material';
import Quiz_imagemultiplechoice from './AnswerTypes/Quiz_imagemultiplechoice';
import Quiz_trueorfalse from './AnswerTypes/Quiz_trueorfalse';
import Quiz_shortanswer from './AnswerTypes/Quiz_shortanswer';
import Image_GIF from './Image_GIF';
import QuestionConfig from './QuestionConfig';
import Quiz_multiplechoice from './AnswerTypes/Quiz_multiplechoice';
function Questions({ counter, questionMemo }) {
  React.useMemo(() => {
    questionMemo.current[counter - 1] = {
      answerType: 'Multiple Choice',
      points: '1 point',
      timeLimit: '10 seconds',
    };
  }, []);

  const [opendialog, setOpenDialog] = useState(false);
  const [image, setImage] = useState('');
  const { designs } = useStyle();

  const [selectAnswerType, setAnswerType] = useState('Multiple Choice');
  const handleChange = (event) => {
    questionMemo.current[counter - 1][event.target.name] = event.target.value;
  };

  const handleImage = (event, imgUrl) => {
    questionMemo.current[counter - 1][event.target.name] = imgUrl;
    console.log(questionMemo.current);
  };
  return (
    <form id="quizform" name={counter}>
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
          <Box className="Quiz-container" sx={designs.Quiz_Container_Style}>
            <Box
              className="Quiz-container-sub"
              sx={designs.Quiz_Container_Sub_Style}
            >
              <Box className="Quiz-question" sx={designs.Quiz_Question_Style}>
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
                            <Typography sx={designs.Quiz_Item_Typography_Style}>
                              {counter}
                            </Typography>
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    name={`questionsContent`}
                    tag="question"
                    onChange={handleChange}
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
                    {image !== '' ? (
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
                          Insert an image or GIF associated to this question.
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
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
              <Box className="Quiz-options" sx={designs.Quiz_Options_Style}>
                <QuestionConfig
                  setAnswerType={setAnswerType}
                  selectAnswerType={selectAnswerType}
                  counter={counter}
                  questionMemo={questionMemo}
                />
              </Box>
            </Box>

            <Box className="Quiz-answers" sx={designs.Quiz_Answers_Style}>
              {selectAnswerType === 'Multiple Choice' && (
                <Quiz_multiplechoice
                  handleChange={handleChange}
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}

              {selectAnswerType === 'Image Multiple Choice' && (
                <Quiz_imagemultiplechoice
                  handleImage={handleImage}
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
              {selectAnswerType === 'True or False' && (
                <Quiz_trueorfalse
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
              {selectAnswerType === 'Short Answer' && (
                <Quiz_shortanswer
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default Questions;
