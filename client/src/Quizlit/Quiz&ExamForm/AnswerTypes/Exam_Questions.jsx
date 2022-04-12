import React, { useState } from 'react';
import useStyle from '../../Styles/Examform_style';
import Exam_multiplechoice from './Exam_multiplechoice';
import Exam_trueorfalse from './Exam_trueorfalse';
import Exam_checkboxes from './Exam_checkboxes';
import Exam_enumeration from './Exam_enumeration';
import Exam_shortanswer from './Exam_shortanswer';
import Image_GIF from '../Image_GIF';
import ExamQuestionOptionspopover from '../../../components/PopoverContent/ExamQuestionOptionspopover';
import CusPopover from '../../../components/Popover';
import Exam_Options from './Exam_Options';
import {
  AddCircle,
  MoreVert,
  PhotoSizeSelectActualOutlined,
} from '@mui/icons-material';
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Button,
  Grid,
} from '@mui/material';
function Exam_Questions({ counter, questionMemo }) {
  const { designs } = useStyle();
  const [opendialog, setOpenDialog] = useState(false);
  const [image, setImage] = useState('');
  React.useMemo(() => {
    questionMemo.current[counter - 1] = {
      answerType: 'Multiple Choice',
      points: '2 point',
    };
  }, []);
  const [selectAnswerType, setAnswerType] = useState('Multiple Choice');

  const handleChange = (event) => {
    console.log(questionMemo.current, counter);

    questionMemo.current[counter - 1][event.target.name] = event.target.value;
  };
  console.log(questionMemo.current);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickNotif = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNotif = () => {
    setAnchorEl(null);
  };
  const notif = Boolean(anchorEl);

  return (
    <form key={counter} onSubmit={handleSubmit} id="quizform">
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
          <Box className="Exam-container" sx={designs.Exam_Container_Style}>
            <Box
              className="Exam-container-sub"
              sx={designs.Exam_Container_Sub_Style}
            >
              <Box className="Exam-question" sx={designs.Exam_Question_Style}>
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
                            <Typography sx={designs.Exam_Item_Typography_Style}>
                              {counter}
                            </Typography>
                          </Box>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="attach-image"
                            onClick={() => setOpenDialog(true)}
                            sx={{
                              height: '2em',
                              width: '2em',
                              marginRight: '0.5em',
                              borderRadius: '0em',
                            }}
                          >
                            <PhotoSizeSelectActualOutlined
                              sx={{
                                color: 'White',
                                fontSize: '30px',
                              }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    name={`questionsContent`}
                    onChange={(event) => handleChange(event)}
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

                {selectAnswerType === 'Multiple Choice' && (
                  <Exam_multiplechoice
                    questionMemo={questionMemo}
                    counter={counter}
                  />
                )}
                {selectAnswerType === 'True or False' && (
                  <Exam_trueorfalse
                    questionMemo={questionMemo}
                    counter={counter}
                  />
                )}
                {selectAnswerType === 'Checkboxes' && (
                  <Exam_checkboxes
                    questionMemo={questionMemo}
                    counter={counter}
                  />
                )}
                {selectAnswerType === 'Enumeration' && (
                  <Exam_enumeration
                    questionMemo={questionMemo}
                    counter={counter}
                  />
                )}
                {selectAnswerType === 'Short Answer' && (
                  <Exam_shortanswer
                    questionMemo={questionMemo}
                    counter={counter}
                  />
                )}
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
              {
                <Exam_Options
                  selectAnswerType={selectAnswerType}
                  setAnswerType={setAnswerType}
                  questionMemo={questionMemo}
                  counter={counter}
                />
              }
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
export default Exam_Questions;
