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
import { useHistory, useParams } from 'react-router-dom'
function Livequiz_multiplechoice({ socket }) {
  const { designs } = useStyle();
  const history = useHistory()
  const { counter } = useParams()
  const [questionArray, setQuestionArray] = React.useState(null)
  
  React.useMemo(() => {
    axios.post('http://192.168.1.13:5000/question', { quizID: '62435059ff2c2c59af2f2436' })
      .then((res) => {
        if(counter > res.data.length -1){
          history.push(`/not-found`)
        }
        setQuestionArray(res.data)
      })
      .catch(err => { console.log(err) })
  }, [counter])

  questionArray && socket.emit('timer-start', questionArray[counter].timeLimit.replace(' seconds', ''), questionArray[counter].points,questionArray.length)
  socket.on('times-up', (result) => {
    result === true ? history.push('/Livequiz_correctanswer') : history.push('/Livequiz_wronganswer')
  })

  return (
    <>
      <Box className="Container" sx={designs.Container_Style}>
        <Grid container columnSpacing={2} sx={designs.GridContainer1_Style}>
          {questionArray && <><Timer questionArray={questionArray} counter={counter} socket={socket} />
            <Answered questionArray={questionArray} counter={counter} />
            <Points questionArray={questionArray} counter={counter} />
            <Items questionArray={questionArray} counter={counter} /></>}
        </Grid>

        <Grid container rowSpacing={0} sx={designs.GridContainer2_Style}>
          <Grid item xs={12}>
            <Box className="Quiz-question" sx={designs.Quiz_Questions_Style}>
              <Box className="Quiz-item" sx={designs.Quiz_Item_Style}>
                <Typography sx={designs.Quiz_Item_Typography_Style}>
                  {counter + 1}
                </Typography>
              </Box>
              <Typography noWrap sx={designs.Quiz_Questions_Typography_Style}>
                {questionArray && questionArray[counter].questionsContent}
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
        <Multiple questionArray={questionArray} counter={counter} socket={socket} />
      </Box></>
  )
}

export default Livequiz_multiplechoice;
