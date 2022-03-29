import React from 'react';
import {
  Typography,
  Box,
  Grid,
} from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import useStyle from '../Styles/Livequiz_multiplechoice_style';
import Answered from './components/Answered';
import Items from './components/Items';
import Points from './components/Points';
import Timer from './components/Timer';
import axios from 'axios'
import Multiple from './components/Multiple';
function Livequiz_multiplechoice({ socket }) {
  const { designs } = useStyle();
  const questionArray = React.useRef(null)

  const fetchData = async () => {
    const response = await axios.post('http://localhost:5000/question', { quizID: '62435059ff2c2c59af2f2436' })
    questionArray.current = response.data
    return (
      <Box className="Container" sx={designs.Container_Style}>
        <Grid container columnSpacing={2} sx={designs.GridContainer1_Style}>
          <Timer questionArray={questionArray} counter={counter} />
          <Answered questionArray={questionArray} counter={counter} />
          <Points questionArray={questionArray} counter={counter} />
          <Items questionArray={questionArray} counter={counter} />
        </Grid>
  
        <Grid container rowSpacing={0} sx={designs.GridContainer2_Style}>
          <Grid item xs={12}>
            <Box className="Quiz-question" sx={designs.Quiz_Questions_Style}>
              <Box className="Quiz-item" sx={designs.Quiz_Item_Style}>
                <Typography sx={designs.Quiz_Item_Typography_Style}>
                  {counter.current + 1}
                </Typography>
              </Box>
              <Typography noWrap sx={designs.Quiz_Questions_Typography_Style}>
                {questionArray.current[counter.current].questionsContent}
              </Typography>
            </Box>
          </Grid>
  
          <Grid item xs={12}>
            <Box className="Image" sx={designs.QuizImage_Style}>
              <img
                src={Image}
                style={{
                  height: '9em',
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Multiple questionArray={questionArray} counter={counter} />
      </Box>
    );
  }
  console.log(fetchData())
  const counter = React.useRef(0)
  return (
    <>{fetchData()}</>
    )
}

export default Livequiz_multiplechoice;
