import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Tele from '../../assets/ImageJaven/Tele.png';
import useStyle from "./Styles/TeleCon_style";

function TeleCon() {
  const {designs} = useStyle();

  return (
    <>
      <Container maxWidth = "lg" sx = {designs.Container_Style}>
        <Grid container rowSpacing = {2}>
            <Grid item xs = {12}>
              <Box sx = {designs.BoxContainer_Style}>
                {/* <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/> */}
                
                <Typography sx = {designs.Heading_Style}> 
                  TeleCon (Video Conference)
                </Typography>

                {/* <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/> */}
              </Box>
            </Grid>

            <Grid item sm = {6} xs = {12} sx = {designs.Content_GridItem_Style}>
              <Box sx = {designs.Content_Container_Style}>
                <Typography sx = {designs.Content_Heading_Style}> 
                    Student Groupings
                </Typography>

                <Typography sx = {designs.Content_Body_Style}> 
                    A special feature of a Telecon (Video Conferencing) wherein professors/host can create 
                  rooms to split the meeting attendees into sessions automatically or manually. This is 
                  one of the ways of Cyklas to let the students to meet and give their own ideas whenever
                  they have a groupings in class. Student groupings is a effective way to provide the best
                  experience for our users to have the same audio, video, and screen share capabilities as allowed in the main 
                  session. 
                </Typography>
              </Box>
            </Grid>

            <Grid item sm = {6} xs = {12} sx = {designs.Content_GridItem_Style}>
              <Box sx = {designs.Content_Container_Style}>
                <Typography sx = {designs.Content_Heading_Style}> 
                    Conducting Live Quiz
                </Typography>

                <Typography sx = {designs.Content_Body_Style}> 
                    When using video conferencing, professor can easily host and conduct a live quiz by 
                  simply clicking the quiz button and display the prepared quiz. In this live quiz, 
                  professor will see who is ready to take the quiz in queueing panel. Live quiz will start
                  as soon as the professor click the button for start quiz and display the questinnaire
                  to be answered by those students who joined in.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm = {6} xs = {12} sx = {designs.Content_GridItem_Style}>
              <Box sx = {designs.Content_Container_Style}>
                <Typography sx = {designs.Content_Heading_Style}> 
                     Presentation Grading with Criteria
                </Typography>

                <Typography sx = {designs.Content_Body_Style}> 
                    In Cyklas sharing screen is important, so another special feature of a Telecon is
                  to display the presentation grading and criteria in side panel of video conferencing
                  when students presenting their work. These criteria serves as a guide and a pointing 
                  system for students to know if they are doing what the professor expecting to see on 
                  their presentation. Presentation grading and criteria is a editable panel wherein professor
                  can decide what criteria he/she wants to display and how many points per criteria he/she
                  wants.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm = {6} xs = {12} sx = {designs.Content_GridItem_Style}>
              <Box sx = {designs.Content_Container_Style}>
                <img src = {Tele} style = {{ height: "100%", width: "100%"}}/>
              </Box>
            </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TeleCon;
