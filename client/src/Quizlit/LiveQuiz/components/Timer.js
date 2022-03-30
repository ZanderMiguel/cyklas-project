import React from 'react'
import {
    Typography,
    Box,
    Grid,
  } from '@mui/material';
  import { Timer as Oras } from '@mui/icons-material';
  import useStyle from '../../Styles/Livequiz_multiplechoice_style';
function Timer({questionArray,counter,socket}) {
    
  const { designs } = useStyle();
  const [myTimer,setMyTimer] = React.useState(questionArray[counter].timeLimit.replace(' seconds',''))
  socket.on('play',(time)=>{
    setMyTimer(time)
  })
  return (
    
        <Grid item xs={12} sm={6} lg={3}>
          {questionArray && <Box className="Timer" sx={designs.QuizStatus_Style}>
            <Box className="Timer-sub" sx={designs.QuizStatus_Sub_Style}>
              <Oras sx={designs.TimerIcon_Style} />

              <Typography noWrap sx={designs.QuizStatus_Typography_Style}>
                Timer
              </Typography>
            </Box>
            <Box className="Time" sx={designs.QuizStatus_Sub2_Style}>
              <Typography noWrap sx={designs.QuizStatus_Typography2_Style}>
                {`${myTimer} second(s)`}
              </Typography>
            </Box>
          </Box>}
        </Grid>

      
  )
}

export default Timer