import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import PhotoQuiz from '../../assets/ImageJaven/Quiz.png';
import useStyle from "./Styles/QuizLit_style";

function QuizLit() {
  const {designs} = useStyle();

  return (
    <Container maxWidth = "lg" sx = {designs.Container_Style}>
      <Grid container >
        <Grid item md = {6} xs = {12} sx = {designs.Image_GridItem_Style}>
          <img src={PhotoQuiz} alt="Imagehere" height="auto" width="100%" />
        </Grid>

        <Grid item md = {6} xs = {12} sx = {designs.Content_GridItem_Style}>
          <Typography sx = {designs.QuizLit_Heading_Style}>
            QuizLit
          </Typography>

          {/* <Box sx = {{ display: "flex", width: "relative", height: "auto" }}>
            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Responsive_Style}/>

            <Typography sx = {designs.QuizLit_Heading_Style}>
              QuizLit
            </Typography>

            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Responsive_Style}/>
          </Box> */}
          
          <Typography sx = {designs.Quizlit_SubHeading_Style}>
            Live Quiz (Game-Based)
          </Typography>

          <Grid item xs = {12} sx = {designs.Features_GridItem_Style}>
                  <Typography sx = {designs.Feature_Heading_Style}>
                    Quiz Bank
                  </Typography>

                  <Typography sx = {designs.Feature_Body_Style}>
                    Making quizzes and using it multiple times can be done by storing
                    those in this bank. Reuse or editing of the quizzes created is the
                    sole purpose for this feature.
                  </Typography>
          </Grid>

          <Grid item xs = {12} sx = {designs.Features_GridItem2_Style}>
                  <Typography sx = {designs.Feature_Heading_Style}>
                    Quiz Creating
                  </Typography>

                  <Typography sx = {designs.Feature_Body_Style}>
                    Multiple choice, image multiple choice, true or false, and essay
                    are the options for types of quizzes to be created. Time limit and
                    points for the quiz can also be set base on professor's preference
                    as well as inserting image or gifs.
                  </Typography>
          </Grid>

          <Grid item xs = {12} sx = {designs.Features_GridItem2_Style}>
                  <Typography sx = {designs.Feature_Heading_Style}>
                    Quiz Checking
                  </Typography>

                  <Typography sx = {designs.Feature_Body_Style}>
                    Results of the quiz are automatically generated right after the
                    end of the live quiz. Scores of those students who participated
                    are listed.
                  </Typography>
          </Grid>
        </Grid>

        <Grid item md = {6} xs = {12} sx = {designs.Image_Responsive_GridItem_Style}>
          <img src={PhotoQuiz} alt="Imagehere" height="auto" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default QuizLit;
