import React, { useState } from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import useStyle from '../Styles/Exam_start_style';
import '../Styles/Exam_start_stylesheet.css';
function ExamMulti({ item, index,qAnswers }) {
  const { designs } = useStyle();

  const [answerButtonToggleA, setAnswerButtonToggleA] = useState(true);
  const [answerButtonToggleB, setAnswerButtonToggleB] = useState(true);
  const [answerButtonToggleC, setAnswerButtonToggleC] = useState(true);
  const [answerButtonToggleD, setAnswerButtonToggleD] = useState(true);
  qAnswers.current[index]['questions']= item._id
  const handleClickA = () => {
    setAnswerButtonToggleA((prev) => !prev);
    setAnswerButtonToggleB(true);
    setAnswerButtonToggleC(true);
    setAnswerButtonToggleD(true);
    qAnswers.current[index]['answers'] = 'answer1'
  };
  const handleClickB = () => {
    setAnswerButtonToggleB((prev) => !prev);
    setAnswerButtonToggleA(true);
    setAnswerButtonToggleC(true);
    setAnswerButtonToggleD(true);
    qAnswers.current[index]['answers'] = 'answer2'

  };
  const handleClickC = () => {
    setAnswerButtonToggleC((prev) => !prev);
    setAnswerButtonToggleA(true);
    setAnswerButtonToggleB(true);
    setAnswerButtonToggleD(true);
    qAnswers.current[index]['answers'] = 'answer3'
  };
  const handleClickD = () => {
    setAnswerButtonToggleD((prev) => !prev);
    setAnswerButtonToggleA(true);
    setAnswerButtonToggleB(true);
    setAnswerButtonToggleC(true);
    qAnswers.current[index]['answers'] = 'answer4'
  };
  return (
    <Grid item xs={12} sx={designs.Question_GridItem_Style}>
      <Box className="Type-points" sx={designs.Type_Points_Style}>
        <Typography sx={designs.Type_Typography_Style}>
          Multiple Choice
        </Typography>

        <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

        <Typography sx={designs.Points_Typography_Style}>
          {item.points}
        </Typography>
      </Box>

      <Box className="Question-body" sx={designs.Question_Body_Style}>
        <Box
          className="Question-container"
          sx={designs.Question_Container_Style}
        >
          <Box className="Question" sx={designs.Question_Style}>
            <Typography sx={designs.Item_Typography_Style}>
              {index + 1}.
            </Typography>

            <Typography sx={designs.Question_Typography_Style}>
              {item.questionsContent}
            </Typography>
          </Box>

          <Divider sx={designs.Divider_Style} />

          <Box
            className="Image-container"
            sx={designs.Image_Container_Responsive_Style}
          >
            <img
              src={Image}
              alt="uploadedImage"
              style={{
                height: '5.5em',
              }}
            />
          </Box>

          <Box className="Choices" sx={designs.Choices_Style}>
            <Box className="Answer-a" onClick={handleClickA}>
              {!answerButtonToggleA ? (
                <Box className="Answer-a" sx={designs.Answer_AT_Style}>
                  <Box className="Quiz-item" sx={designs.Exam_Item_Style}>
                    <Typography sx={designs.AnswerA_Typography_Style}>
                      A.
                    </Typography>
                  </Box>

                  <Typography noWrap sx={designs.Answer_Typography2_Style}>
                    {item.qAnswers.answer1}
                  </Typography>
                </Box>
              ) : (
                <Typography sx={designs.AnswerAF_Typography_Style}>
                  A. &nbsp;&nbsp; &nbsp; {item.qAnswers.answer1}
                </Typography>
              )}
            </Box>

            <Box className="Answer-b" onClick={handleClickB}>
              {!answerButtonToggleB ? (
                <Box className="Answer-d" sx={designs.Answer_BT_Style}>
                  <Box className="Quiz-item" sx={designs.Exam_Item_Style}>
                    <Typography sx={designs.AnswerB_Typography_Style}>
                      B.
                    </Typography>
                  </Box>

                  <Typography noWrap sx={designs.Answer_Typography2_Style}>
                    {item.qAnswers.answer2}
                  </Typography>
                </Box>
              ) : (
                <Typography sx={designs.AnswerBF_Typography_Style}>
                  B. &nbsp;&nbsp; &nbsp; {item.qAnswers.answer2}
                </Typography>
              )}
            </Box>

            <Box className="Answer-c" onClick={handleClickC}>
              {!answerButtonToggleC ? (
                <Box className="Answer-c" sx={designs.Answer_CT_Style}>
                  <Box className="Quiz-item" sx={designs.Exam_Item_Style}>
                    <Typography sx={designs.AnswerC_Typography_Style}>
                      C.
                    </Typography>
                  </Box>

                  <Typography noWrap sx={designs.Answer_Typography2_Style}>
                    {item.qAnswers.answer3}
                  </Typography>
                </Box>
              ) : (
                <Typography sx={designs.AnswerCF_Typography_Style}>
                  C. &nbsp;&nbsp; &nbsp; {item.qAnswers.answer3}
                </Typography>
              )}
            </Box>

            <Box className="Answer-d" onClick={handleClickD}>
              {!answerButtonToggleD ? (
                <Box className="Answer-d" sx={designs.Answer_DT_Style}>
                  <Box className="Quiz-item" sx={designs.Exam_Item_Style}>
                    <Typography sx={designs.AnswerD_Typography_Style}>
                      D.
                    </Typography>
                  </Box>

                  <Typography noWrap sx={designs.Answer_Typography2_Style}>
                    {item.qAnswers.answer4}
                  </Typography>
                </Box>
              ) : (
                <Typography sx={designs.AnswerDF_Typography_Style}>
                  D. &nbsp;&nbsp; &nbsp; {item.qAnswers.answer4}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>

        <Box className="Image-container" sx={designs.Image_Container_Style}>
          <img
            src={item.media || Image}
            alt="uploadedImage"
            style={{
              height: '6.5em',
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default ExamMulti;
