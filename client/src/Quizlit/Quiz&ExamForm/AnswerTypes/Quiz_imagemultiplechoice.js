import React, { useState } from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import Image from '../../../assets/ImageJaven/Image.png';
import { Check } from '@mui/icons-material';
import useStyle from './Styles/Quiz_imagemultiplechoice_style';

function Quiz_imagemultiplechoice({
  handleImage,
  questionMemo,
  counter,
  questionArray,
  socket,
}) {
  const { designs } = useStyle();
  const [imgSrc, setImgSrc] = useState(Image);
  const [imgSrc2, setImgSrc2] = useState(Image);
  const [imgSrc3, setImgSrc3] = useState(Image);
  const [imgSrc4, setImgSrc4] = useState(Image);
  const sendAnswer = (answer) => {
    console.log(answer);
    socket.emit(
      'send-answer',
      answer,
      questionArray[counter].correctAnswer,
      JSON.parse(localStorage.userData).data.user.firstName
    );
  };
  const [check, setCheck] = useState(false);
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box className="answer-a" sx={designs.Answer_A_Style}>
            <Box flexGrow={1} height="2.5em" />

            <IconButton
              onClick={() => {
                questionArray && sendAnswer('answer1');
              }}
              sx={designs.Answer_IconButton_Style}
            >
              {handleImage ? (
                <>
                  <label htmlFor="getFile1">
                    <img
                      src={imgSrc}
                      alt=""
                      style={{
                        height: '2.5em',
                      }}
                    />
                  </label>
                  <input
                    type="file"
                    name="answer1"
                    id="getFile1"
                    style={{ display: 'none' }}
                    onChange={(event) => {
                      const imgUrl = URL.createObjectURL(event.target.files[0]);
                      setImgSrc(imgUrl);
                      handleImage(event, imgUrl);
                    }}
                  />
                </>
              ) : (
                <img
                  src={questionArray[counter].qAnswers.answer1}
                  alt=""
                  style={{
                    height: '2.5em',
                  }}
                />
              )}
            </IconButton>

            <Box flexGrow={1} height="2.5em" />

            {questionMemo && (
              <IconButton
                aria-label="correct-answer"
                sx={
                  (designs.Correct_Answer_IconButton_Style,
                  check === 'answer1' && { backgroundColor: 'white' })
                }
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] =
                    'answer1';
                  setCheck('answer1');
                }}
              >
                <Check
                  sx={{
                    fontSize: '0.8em',
                  }}
                />
              </IconButton>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="answer-b" sx={designs.Answer_B_Style}>
            <Box flexGrow={1} height="2.5em" />

            <IconButton
              onClick={() => {
                questionArray && sendAnswer('answer2');
              }}
              sx={designs.Answer_IconButton_Style}
            >
              {handleImage ? (
                <>
                  <label htmlFor="getFile2">
                    <img
                      src={imgSrc2}
                      alt=""
                      style={{
                        height: '2.5em',
                      }}
                    />
                  </label>
                  <input
                    type="file"
                    name="answer2"
                    id="getFile2"
                    style={{ display: 'none' }}
                    onChange={(event) => {
                      const imgUrl = URL.createObjectURL(event.target.files[0]);
                      setImgSrc2(imgUrl);
                      handleImage(event, imgUrl);
                    }}
                  />
                </>
              ) : (
                <img
                  src={questionArray[counter].qAnswers.answer2}
                  alt=""
                  style={{
                    height: '2.5em',
                  }}
                />
              )}
            </IconButton>

            <Box flexGrow={1} height="2.5em" />

            {questionMemo && (
              <IconButton
                aria-label="correct-answer"
                sx={
                  (designs.Correct_Answer_IconButton_Style,
                  check === 'answer2' && { backgroundColor: 'white' })
                }
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] =
                    'answer2';
                  setCheck('answer2');
                }}
              >
                <Check
                  sx={{
                    fontSize: '0.8em',
                  }}
                />
              </IconButton>
            )}
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={2} rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box className="answer-c" sx={designs.Answer_C_Style}>
            <Box flexGrow={1} height="2.5em" />

            <IconButton
              onClick={() => {
                questionArray && sendAnswer('answer3');
              }}
              sx={designs.Answer_IconButton_Style}
            >
              {handleImage ? (
                <>
                  <label htmlFor="getFile3">
                    <img
                      src={imgSrc3}
                      alt=""
                      style={{
                        height: '2.5em',
                      }}
                    />
                  </label>
                  <input
                    type="file"
                    name="answer3"
                    id="getFile3"
                    style={{ display: 'none' }}
                    onChange={(event) => {
                      const imgUrl = URL.createObjectURL(event.target.files[0]);
                      setImgSrc3(imgUrl);
                      handleImage(event, imgUrl);
                    }}
                  />
                </>
              ) : (
                <img
                  src={questionArray[counter].qAnswers.answer3}
                  alt=""
                  style={{
                    height: '2.5em',
                  }}
                />
              )}
            </IconButton>

            <Box flexGrow={1} height="2.5em" />

            {questionMemo && (
              <IconButton
                aria-label="correct-answer"
                sx={
                  (designs.Correct_Answer_IconButton_Style,
                  check === 'answer3' && { backgroundColor: 'white' })
                }
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] =
                    'answer3';
                  setCheck('answer3');
                }}
              >
                <Check
                  sx={{
                    fontSize: '0.8em',
                  }}
                />
              </IconButton>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="answer-d" sx={designs.Answer_D_Style}>
            <Box flexGrow={1} height="2.5em" />

            <IconButton
              onClick={() => {
                questionArray && sendAnswer('answer4');
              }}
              sx={designs.Answer_IconButton_Style}
            >
              {handleImage ? (
                <>
                  <label htmlFor="getFile4">
                    <img
                      src={imgSrc4}
                      alt=""
                      style={{
                        height: '2.5em',
                      }}
                    />
                  </label>
                  <input
                    type="file"
                    name="answer4"
                    id="getFile4"
                    style={{ display: 'none' }}
                    onChange={(event) => {
                      const imgUrl = URL.createObjectURL(event.target.files[0]);
                      setImgSrc4(imgUrl);
                      handleImage(event, imgUrl);
                    }}
                  />
                </>
              ) : (
                <img
                  src={`${questionArray[counter].qAnswers.answer4}`}
                  alt=""
                  style={{
                    height: '2.5em',
                  }}
                />
              )}
            </IconButton>

            <Box flexGrow={1} height="2.5em" />

            {questionMemo && (
              <IconButton
                aria-label="correct-answer"
                sx={
                  (designs.Correct_Answer_IconButton_Style,
                  check === 'answer4' && { backgroundColor: 'white' })
                }
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] =
                    'answer4';
                  setCheck('answer4');
                }}
              >
                <Check
                  sx={{
                    fontSize: '0.8em',
                  }}
                />
              </IconButton>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Quiz_imagemultiplechoice;
