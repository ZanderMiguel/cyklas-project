import React from 'react';
import { Box } from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import CheckMultiple from './CheckMultiple';
import CheckShort from './CheckShort';
import CheckBoxes from './CheckBoxes';
import CheckTF from './CheckTF';
import axios from 'axios';
function CheckAnswers({
  quizID,
  stdID,
  setScore,
  setOverAll,
  stdScore,
  shrtAns,
  checkAnswer,
}) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/question', { quizID })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const { designs } = useStyle();
  return (
    <Box className="Quiz-sheet" sx={designs.Quiz_Sheet_Style}>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              {item.answerType === 'Multiple Choice' && (
                <CheckMultiple
                  item={item}
                  stdID={stdID}
                  setScore={setScore}
                  setOverAll={setOverAll}
                  stdScore={stdScore}
                  checkAnswer={checkAnswer}
                />
              )}
              {item.answerType === 'Short Answer' && (
                <CheckShort
                  shrtAns={shrtAns}
                  item={item}
                  stdID={stdID}
                  setScore={setScore}
                  setOverAll={setOverAll}
                  checkAnswer={checkAnswer}
                />
              )}
              {item.answerType === 'Checkboxes' && (
                <CheckBoxes
                  item={item}
                  stdID={stdID}
                  setScore={setScore}
                  setOverAll={setOverAll}
                  checkAnswer={checkAnswer}
                />
              )}
              {item.answerType === 'True or False' && (
                <CheckTF
                  item={item}
                  stdID={stdID}
                  setScore={setScore}
                  setOverAll={setOverAll}
                  checkAnswer={checkAnswer}
                />
              )}
            </div>
          );
        })}
    </Box>
  );
}

export default CheckAnswers;
