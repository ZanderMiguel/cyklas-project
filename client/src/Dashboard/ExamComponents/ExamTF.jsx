import React, { useState } from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import useStyle from '../Styles/Exam_start_style';
import '../Styles/Exam_start_stylesheet.css';
function ExamTF({ item, index }) {
  const { designs } = useStyle();
  const [answerButtonToggleTrue, setAnswerButtonToggleTrue] = useState(true);
  const [answerButtonToggleFalse, setAnswerButtonToggleFalse] = useState(true);

  const handleClickTrue = () => {
    setAnswerButtonToggleTrue((prev) => !prev);
    setAnswerButtonToggleFalse(true);
  };
  const handleClickFalse = () => {
    setAnswerButtonToggleFalse((prev) => !prev);
    setAnswerButtonToggleTrue(true);
  };
  return (
    <Grid item xs={12} sx={designs.Question_GridItem_Style}>
      <Box className="Type-points" sx={designs.Type_Points_Style}>
        <Typography sx={designs.Type_Typography_Style}>
          True or False
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
            <Box className="Answer-a" onClick={handleClickTrue}>
              {!answerButtonToggleTrue ? (
                <Box className="Answer-a" sx={designs.Answer_AT_Style}>
                  <Box className="Quiz-item" sx={designs.Exam_Item_Style}>
                    <Typography sx={designs.AnswerA_Typography_Style}>
                      A.
                    </Typography>
                  </Box>

                  <Typography noWrap sx={designs.Answer_Typography2_Style}>
                    True
                  </Typography>
                </Box>
              ) : (
                <Typography sx={designs.AnswerAF_Typography_Style}>
                  A. &nbsp;&nbsp; &nbsp; True
                </Typography>
              )}
            </Box>

            <Box className="Answer-b" onClick={handleClickFalse}>
              {!answerButtonToggleFalse ? (
                <Box className="Answer-b" sx={designs.Answer_BT_Style}>
                  <Box className="Quiz-item" sx={designs.Exam_Item_Style}>
                    <Typography sx={designs.AnswerB_Typography_Style}>
                      B.
                    </Typography>
                  </Box>

                  <Typography noWrap sx={designs.Answer_Typography2_Style}>
                    False
                  </Typography>
                </Box>
              ) : (
                <Typography sx={designs.AnswerBF_Typography_Style}>
                  B. &nbsp;&nbsp; &nbsp; False
                </Typography>
              )}
            </Box>
          </Box>
        </Box>

        <Box className="Image-container" sx={designs.Image_Container_Style}>
          <img
            src={`${item.media}` || Image}
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

export default ExamTF;
