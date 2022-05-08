import React, { useState } from 'react';
import useStyle from '../../Styles/Examform_style';
import EXAM_MULTIPLECHOICE from './Exam_multiplechoice';
import EXAM_TRUEORFALSE from './Exam_trueorfalse';
import EXAM_CHECKBOXES from './Exam_checkboxes';
import EXAM_ENUMERATION from './Exam_enumeration';
import EXAM_SHORTANSWER from './Exam_shortanswer';
import Image_GIF from '../Image_GIF';
import ExamQuestionOptionspopover from '../../../components/PopoverContent/ExamQuestionOptionspopover';
import CusPopover from '../../../components/Popover';
import EXAM_OPTIONS from './Exam_Options';
import {
  AddCircle,
  MoreVert,
  PhotoSizeSelectActualOutlined,
  DeleteOutlined,
  ImageOutlined,
} from '@mui/icons-material';
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Button,
  Grid,
  Tooltip,
  FormControl,
  Select,
  MenuItem,
  Input,
} from '@mui/material';

function Exam_Questions({ counter, questionMemo, examQuestions, deleteQA }) {
  const { designs } = useStyle();
  const [opendialog, setOpenDialog] = useState(false);
  const [image, setImage] = useState('');
  React.useMemo(() => {
    questionMemo.current[counter - 1] = {
      answerType: 'Multiple Choice',
      points: '2 point',
    };
  }, [counter, questionMemo]);

  const [selectAnswerType, setAnswerType] = useState('Multiple Choice');

  const handleChange = (event) => {
    console.log(questionMemo.current, counter);

    questionMemo.current[counter - 1][event.target.name] = event.target.value;
  };
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
        <Grid item xs={12}>
          <Box
            className="Exam-question"
            sx={{
              width: '100%',
              height: 'auto',
              backgroundColor: 'White',
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: '0.8em',
                backgroundColor: 'white',
                borderRadius: '0.3em 0.3em 0em 0em',
                padding: '0.6em 0.8em 0.8em 1.1em',
                '&: hover': {
                  transition: 'all 250ms',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                  borderBottom: '4px solid #007FFF',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8em',
                  marginBottom: '0.2em',
                }}
              >
                <Typography
                  children={`Question ${counter}`}
                  sx={{
                    width: 'auto',
                    flexGrow: 1,
                    height: 'max-content',
                    fontSize: '1em',
                    fontWeight: '600',
                    color: '#007FFF',
                    '&: hover': {
                      cursor: 'default',
                    },
                  }}
                />
                <EXAM_OPTIONS
                  selectAnswerType={selectAnswerType}
                  setAnswerType={setAnswerType}
                  questionMemo={questionMemo}
                  counter={counter}
                  deleteQA={deleteQA}
                />
              </Box>

              <Box
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'flex',
                  gap: '0.5em',
                  alignItems: 'center',
                  marginBottom: '0.3em',
                }}
              >
                <Input
                  placeholder="Enter exam question here..."
                  fullWidth
                  disableUnderline
                  name={`questionsContent`}
                  onChange={(event) => handleChange(event)}
                  sx={{
                    width: 'auto',
                    flexGrow: 1,
                    height: 'auto',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    color: '#3F3D56',
                  }}
                ></Input>

                <Tooltip
                  title="Attach an image or GIF that associates to this question"
                  placement="right"
                >
                  <IconButton
                    sx={{
                      height: '1.4em',
                      width: '1.4em',
                    }}
                    onClick={() => setOpenDialog(true)}
                  >
                    <ImageOutlined sx={{ fontSize: '1em', color: '#707070' }} />
                  </IconButton>
                </Tooltip>
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
              </Box>

              <Box
                className="Exam-question-image"
                sx={designs.Exam_Question_Image_Style}
              >
                <Box
                  className="Exam-question-image-sub"
                  sx={{
                    width: 'relative',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5em',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {image !== '' && (
                    <>
                      <Box
                        width="relative"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <img
                          src={image}
                          alt=""
                          width="100%"
                          height="300px"
                          style={{
                            objectFit: 'contain',
                          }}
                        />
                      </Box>
                      <Button variant="contained" onClick={() => setImage('')}>
                        remove
                      </Button>
                    </>
                  )}
                </Box>
              </Box>

              {selectAnswerType === 'Multiple Choice' && (
                <EXAM_MULTIPLECHOICE
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
              {selectAnswerType === 'True or False' && (
                <EXAM_TRUEORFALSE
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
              {selectAnswerType === 'Checkboxes' && (
                <EXAM_CHECKBOXES
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
              {selectAnswerType === 'Enumeration' && (
                <EXAM_ENUMERATION
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
              {selectAnswerType === 'Short Answer' && (
                <EXAM_SHORTANSWER
                  questionMemo={questionMemo}
                  counter={counter}
                />
              )}
            </Grid>
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
        </Grid>
      </Grid>
    </form>
  );
}
export default Exam_Questions;
