import React from 'react';
import { Grid, Box, Typography, Divider, Checkbox } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import useStyle from '../Styles/Exam_start_style';
import '../Styles/Exam_start_stylesheet.css';
function ExamCB({ item, index,qAnswers }) {
  const { designs } = useStyle();
  qAnswers.current[index]['answeredBy'] = JSON.parse(localStorage.userData).data.user._id
  qAnswers.current[index]['questions']= item._id

  return (
    <Grid item xs={12} sx={designs.Question_GridItem_Style}>
      <Box className="Type-points" sx={designs.Type_Points_Style}>
        <Typography sx={designs.Type_Typography_Style}>Checkboxes</Typography>

        <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

        <Typography sx={designs.Points_Typography_Style}>2 points</Typography>
      </Box>

      <Box className="Question-body" sx={designs.Question_Body_Style}>
        <Box
          className="Question-container"
          sx={designs.Question_Container_Style}
        >
          <Box className="Question" sx={designs.Question_Style}>
            <Typography sx={designs.Item_Typography_Style}>3.</Typography>

            <Typography sx={designs.Question_Typography_Style}>
              Which of these animals are reptiles?
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
            <Box className="Option1" sx={designs.Answer_A_Style}>
              <Checkbox sx={designs.Checkbox_Style} />

              <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                Snake
              </Typography>
            </Box>

            <Box className="Option2" sx={designs.Answer_B_Style}>
              <Checkbox sx={designs.Checkbox_Style} />

              <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                Monkey
              </Typography>
            </Box>

            <Box className="Option3" sx={designs.Answer_C_Style}>
              <Checkbox sx={designs.Checkbox_Style} />

              <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                Turtle
              </Typography>
            </Box>

            <Box className="Option4" sx={designs.Answer_D_Style}>
              <Checkbox sx={designs.Checkbox_Style} />

              <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                Lizard
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="Image-container" sx={designs.Image_Container_Style}>
          <img
            src={Image}
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

export default ExamCB;
