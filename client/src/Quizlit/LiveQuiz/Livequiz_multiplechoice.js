import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import useStyle from '../Styles/Livequiz_multiplechoice_style';
import Answered from './components/Answered';
import Items from './components/Items';
import Points from './components/Points';
import Timer from './components/Timer';

import Multiple from './components/Multiple';
import { useHistory, useParams } from 'react-router-dom';
import QUIZ_IMAGEMULTIPLECHOICE from '../Quiz&ExamForm/AnswerTypes/Quiz_imagemultiplechoice';
import QUIZ_TRUEORFALSE from '../Quiz&ExamForm/AnswerTypes/Quiz_trueorfalse';
import QUIZ_SHORTANSWER from '../Quiz&ExamForm/AnswerTypes/Quiz_shortanswer';

function Livequiz_multiplechoice({ socket, questionArray }) {
  const { designs } = useStyle();
  const history = useHistory();
  const { counter } = useParams();
  const answerMemo = React.useRef('');
  console.log(questionArray);
  questionArray &&
    socket.emit(
      'timer-start',
      questionArray[counter].timeLimit.replace(' seconds', ''),
      questionArray[counter].points,
      questionArray.length,
      '123',
      JSON.parse(localStorage.userData).data.user.firstName
    );
  socket.on('times-up', (result, lobby) => {
    result === true
      ? history.push('/Livequiz_correctanswer')
      : history.push('/Livequiz_wronganswer');
  });

  return (
    <>
      <Box className="Container" sx={designs.Container_Style}>
        <Grid container columnSpacing={2} sx={designs.GridContainer1_Style}>
          {questionArray && (
            <>
              <Timer
                questionArray={questionArray}
                counter={counter}
                socket={socket}
              />
              <Answered questionArray={questionArray} counter={counter} />
              <Points questionArray={questionArray} counter={counter} />
              <Items questionArray={questionArray} counter={counter} />
            </>
          )}
        </Grid>

        <Grid container rowSpacing={0} sx={designs.GridContainer2_Style}>
          <Grid item xs={12}>
            <Box className="Quiz-question" sx={designs.Quiz_Questions_Style}>
              <Box className="Quiz-item" sx={designs.Quiz_Item_Style}>
                <Typography sx={designs.Quiz_Item_Typography_Style}>
                  {parseInt(counter) + 1}
                </Typography>
              </Box>
              <Typography noWrap sx={designs.Quiz_Questions_Typography_Style}>
                {questionArray && questionArray[counter].questionsContent}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="Image" sx={designs.QuizImage_Style}>
              {questionArray && (
                <img
                  src={
                    questionArray[counter].media
                      ? questionArray[counter].media
                      : Image
                  }
                  alt=""
                  style={{
                    height: '9em',
                  }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
        {questionArray &&
          questionArray[counter].answerType === 'Multiple Choice' && (
            <Multiple
              questionArray={questionArray}
              counter={counter}
              socket={socket}
            />
          )}
        {questionArray &&
          questionArray[counter].answerType === 'Image Multiple Choice' && (
            <QUIZ_IMAGEMULTIPLECHOICE
              handleImage={null}
              questionMemo={null}
              counter={counter}
              questionArray={questionArray}
              socket={socket}
            />
          )}
        {questionArray &&
          questionArray[counter].answerType === 'True or False' && (
            <QUIZ_TRUEORFALSE
              questionMemo={null}
              counter={counter}
              questionArray={questionArray}
              socket={socket}
            />
          )}
        {questionArray &&
          questionArray[counter].answerType === 'Short Answer' && (
            <QUIZ_SHORTANSWER
              questionMemo={answerMemo}
              counter={counter}
              questionArray={null}
              socket={socket}
            />
          )}
      </Box>
    </>
  );
}

export default Livequiz_multiplechoice;
