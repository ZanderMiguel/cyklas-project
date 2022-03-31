import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { AssignmentTurnedIn } from '@mui/icons-material';
import Photo from '../../assets/ImageJaven/Classroom.png';
import useStyle from "./Styles/CyClassroom_style";

function CyClassroom() {
  const {designs} = useStyle();
  
  const [classes, setClasses] = useState('Class Record');
  const [Grading, setGrading] = useState('Grading System');
  const [color, setColor] = useState('#007FFF');
  const [fontWeight, setFontWeight] = useState('bold');
  const [color2, setColor2] = useState('#626170');
  const [fontWeight2, setFontWeight2] = useState('550');
  return (
    <>
      <Container maxWidth = "lg" sx = {designs.Container_Style}>
        <Grid container>
          <Grid item md = {5} xs = {12}>
            <Box sx = {designs.Heading_Style}>
            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

            <Typography sx = {designs.CyClassroom_Heading_Style}>
              CyClassroom
            </Typography>

            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>
            </Box>

            <Grid item xs = {12} sx = {designs.Button_Container_Style}>
              <Box sx = {designs.ButtonContainer_Style}>
                <Button onClick={() => {
                  setClasses('Class Record');
                  setGrading('Grading System');
                  setColor('#007FFF');
                  setFontWeight('bold');
                  setColor2('#626170');
                  setFontWeight2('550');
                }}
                disableRipple
                variant="text" sx = {{
                    color: `${color}`,
                    fontWeight: `${fontWeight}`,
                    fontSize: '1.3em',
                    '&:hover': { backgroundColor: 'white' }
                }}>
                Professor{' '}
                </Button>

                <Button onClick={() => {
                  setClasses('Class Cards');
                  setGrading('Teacher Evaluation');
                  setColor2('#007FFF');
                  setFontWeight2('bold');
                  setColor('#626170');
                  setFontWeight('550');
                }}
                variant="text"
                disableRipple sx = {{
                    color: `${color2}`,
                    fontWeight: `${fontWeight2}`,
                    fontSize: '1.3em',
                    '&:hover': {
                    backgroundColor: 'white'
                    }
                }}>
                Student
              </Button>
              </Box>

              <Box sx = {designs.List_Container_Style}>
                <Box className="List" sx = {designs.List_Style}>
                  <AssignmentTurnedIn sx = {designs.AssignmentTurnedIn_Icon_Style}/>

                  <Typography sx = {designs.List_Typography_Style}>
                    Dashboard
                  </Typography>
                </Box>

                <Box className="List" sx = {designs.List_Style}>
                  <AssignmentTurnedIn sx = {designs.AssignmentTurnedIn_Icon_Style}/>

                  <Typography sx = {designs.List_Typography_Style}>
                    Rooms
                  </Typography>
                </Box>

                <Box className="List" sx = {designs.List_Style}>
                  <AssignmentTurnedIn sx = {designs.AssignmentTurnedIn_Icon_Style}/>

                  <Typography sx = {designs.List_Typography_Style}>
                    Activities
                  </Typography>
                </Box>

                <Box className="List" sx = {designs.List_Style}>
                  <AssignmentTurnedIn sx = {designs.AssignmentTurnedIn_Icon_Style}/>

                  <Typography sx = {designs.List_Typography_Style}>
                    Exams
                  </Typography>
                </Box>

                <Box className="List" sx = {designs.List_Style}>
                  <AssignmentTurnedIn sx = {designs.AssignmentTurnedIn_Icon_Style}/>

                  <Typography sx = {designs.List_Typography_Style}>
                    {classes}
                  </Typography>
                </Box>

                <Box className="List" sx = {designs.List_Style}>
                  <AssignmentTurnedIn sx = {designs.AssignmentTurnedIn_Icon_Style}/>

                  <Typography sx = {designs.List_Typography_Style}>
                    {Grading}
                  </Typography>
                </Box>
                </Box>
            </Grid>
          </Grid>

          <Grid item md = {7} xs = {12} sx = {designs.Image_GridItem_Style}>
          <img src={Photo} alt="Imagehere" height="auto" width="100%" />
          </Grid>
        </Grid>
      </Container>
      
        
    </>
  );
}

export default CyClassroom;
