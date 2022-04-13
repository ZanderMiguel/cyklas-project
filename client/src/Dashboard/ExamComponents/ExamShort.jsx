import React from 'react';
import { Grid, Box, Typography, Divider, Input } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import '../Styles/Exam_start_stylesheet.css';
import useStyle from '../Styles/Exam_start_style';

function ExamShort({ item }) {
  const { designs } = useStyle();

  return (
    <Grid item xs={12} sx={designs.Question_GridItem_Style}>
      <Box className="Type-points" sx={designs.Type_Points_Style}>
        <Typography sx={designs.Type_Typography_Style}>Short Answer</Typography>

        <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

        <Typography sx={designs.Points_Typography_Style}>2 points</Typography>
      </Box>

      <Box className="Question-body" sx={designs.Question_Body_Style}>
        <Box
          className="Question-container"
          sx={designs.Question_Container_Style}
        >
          <Box className="Question" sx={designs.Question_Style}>
            <Typography sx={designs.Item_Typography_Style}>2.</Typography>

            <Typography sx={designs.Question_Typography_Style}>
              What is your wish for Christmas?
            </Typography>
          </Box>

          <Divider sx={designs.Divider_Style} />

          <Box
            className="Image-container"
            sx={designs.Image_Container_Responsive_Style}
          >
            <img
              src={Image}
              alt="Image"
              style={{
                height: '5.5em',
              }}
            />
          </Box>

          <Box className="Choices" sx={designs.Choices_Style}>
            <Input
              variant="standard"
              multiline
              fullWidth
              rows={6}
              placeholder="Type your answer here..."
              sx={designs.ShortAnswer_Input_Style}
            />
          </Box>
        </Box>

        <Box className="Image-container" sx={designs.Image_Container_Style}>
          <img
            src={Image}
            alt="Image"
            style={{
              height: '6.5em',
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default ExamShort;
