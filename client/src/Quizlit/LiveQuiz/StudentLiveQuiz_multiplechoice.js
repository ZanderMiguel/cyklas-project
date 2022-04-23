import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Timer, SportsScore, Star, Layers } from '@mui/icons-material';
import useStyle from '../Styles/StudentLiveQuiz_multiplechoice_style';

function StudentLiveQuiz_multiplechoice() {
  const { designs } = useStyle();

  return (
    <Box className="Container" sx={designs.Container_Style}>
      {/* <Container maxWidth = "lg" sx = {{backgroundColor: "#C4B4E5"}}> */}
      <Grid container columnSpacing={2} sx={designs.GridContainer1_Style}>
        <Grid item xs={12} sm={6} lg={3}>
          <Box className="Timer" sx={designs.QuizStatus_Style}>
            <Box className="Timer-sub" sx={designs.QuizStatus_Sub_Style}>
              <Timer sx={designs.TimerIcon_Style} />

              <Typography noWrap sx={designs.QuizStatus_Typography_Style}>
                Timer
              </Typography>
            </Box>
            <Box className="Time" sx={designs.QuizStatus_Sub2_Style}>
              <Typography noWrap sx={designs.QuizStatus_Typography2_Style}>
                39 seconds
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} sx={designs.Score_Grid_Style}>
          <Box className="Score" sx={designs.QuizStatus_Style}>
            <Box className="Score-sub" sx={designs.QuizStatus_Sub_Style}>
              <SportsScore sx={designs.PeopleAltIcon_Style} />

              <Typography noWrap sx={designs.QuizStatus_Typography_Style}>
                Score
              </Typography>
            </Box>
            <Box className="Score" sx={designs.QuizStatus_Sub2_Style}>
              <Typography noWrap sx={designs.QuizStatus_Typography2_Style}>
                0 points
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} sx={designs.Points_Items_Grid_Style}>
          <Box className="Points" sx={designs.QuizStatus_Style}>
            <Box className="Points-sub" sx={designs.QuizStatus_Sub_Style}>
              <Star sx={designs.StarIcon_Style} />

              <Typography noWrap sx={designs.QuizStatus_Typography_Style}>
                Points
              </Typography>
            </Box>
            <Box className="Points" sx={designs.QuizStatus_Sub2_Style}>
              <Typography noWrap sx={designs.QuizStatus_Typography2_Style}>
                2
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} sx={designs.Points_Items_Grid_Style}>
          <Box className="Items" sx={designs.QuizStatus_Style}>
            <Box className="Items-sub" sx={designs.QuizStatus_Sub_Style}>
              <Layers sx={designs.LayersIcon_Style} />

              <Typography noWrap sx={designs.QuizStatus_Typography_Style}>
                Items
              </Typography>
            </Box>
            <Box className="Items" sx={designs.QuizStatus_Sub2_Style}>
              <Typography noWrap sx={designs.QuizStatus_Typography2_Style}>
                1 / 3
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={2}
        rowSpacing={1}
        sx={designs.GridContainer3_Style}
      >
        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-a"
            onClick={() => {}}
            sx={designs.Answer_A_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_A_Typography_Style}>A.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_A_Typography2_Style}>
              Blank Answer
            </Typography>
          </Box>
          {/* <TextField id="filled-read-only-input" placeholder="Blank Answer" variant="filled" 
                        sx = {designs.Answer_A_TextField_Style}
                        inputProps={{style: {height: "0em", fontSize: "0.8em", paddingLeft: "0.1em", paddingRight: "0em", marginBottom: "1em", marginRight: "0.5em", color: "white"}}}
                        
                        InputProps={{readOnly: true, disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                <Box className = "Quiz-item" sx = {designs.Quiz_Item_Style2}>
                                        <Typography sx = {designs.Answer_A_Typography_Style}>
                                            A.
                                        </Typography>
                                    </Box>
                                </InputAdornment>
                            )
                    }}/> */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-b"
            onClick={() => {}}
            sx={designs.Answer_B_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_B_Typography_Style}>B.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_B_Typography2_Style}>
              Blank Answer
            </Typography>
          </Box>
          {/* <TextField id="filled-read-only-input" placeholder="Blank Answer" variant="filled" 
                        sx = {designs.Answer_B_TextField_Style}
                        inputProps={{style: {height: "0em", fontSize: "0.8em", paddingLeft: "0.1em", paddingRight: "0em", marginBottom: "1em", marginRight: "0.5em", color: "white"}}}
                        
                        InputProps={{readOnly: true, disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                <Box className = "Quiz-item" sx = {designs.Quiz_Item_Style2}>
                                        <Typography sx = {designs.Answer_B_Typography_Style}>
                                            B.
                                        </Typography>
                                    </Box>
                                </InputAdornment>
                            )
                    }}/> */}
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={2}
        rowSpacing={1}
        sx={designs.GridContainer4_Style}
      >
        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-c"
            onClick={() => {}}
            sx={designs.Answer_C_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_C_Typography_Style}>C.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_C_Typography2_Style}>
              Blank Answer
            </Typography>
          </Box>
          {/* <TextField id="filled-read-only-input" placeholder="Blank Answer" variant="filled" 
                        sx = {designs.Answer_C_TextField_Style}
                        inputProps={{style: {height: "0em", fontSize: "0.8em", paddingLeft: "0.1em", paddingRight: "0em", marginBottom: "1em", marginRight: "0.5em", color: "white"}}}
                        
                        InputProps={{readOnly: true, disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                <Box className = "Quiz-item" sx = {designs.Quiz_Item_Style2}>
                                        <Typography sx = {designs.Answer_C_Typography_Style}>
                                            C.
                                        </Typography>
                                    </Box>
                                </InputAdornment>
                            )
                    }}/> */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-d"
            onClick={() => {}}
            sx={designs.Answer_D_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_D_Typography_Style}>D.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_D_Typography2_Style}>
              Blank Answer
            </Typography>
          </Box>
          {/* <TextField id="filled-read-only-input" placeholder="Blank Answer" variant="filled" 
                        sx = {designs.Answer_D_TextField_Style}
                        inputProps={{style: {height: "0em", fontSize: "0.8em", paddingLeft: "0.1em", paddingRight: "0em", marginBottom: "1em", marginRight: "0.5em", color: "white"}}}
                        
                        InputProps={{readOnly: true, disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                <Box className = "Quiz-item" sx = {designs.Quiz_Item_Style2}>
                                        <Typography sx = {designs.Answer_D_Typography_Style}>
                                            D.
                                        </Typography>
                                    </Box>
                                </InputAdornment>
                            )
                    }}/> */}
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  );
}

export default StudentLiveQuiz_multiplechoice;
