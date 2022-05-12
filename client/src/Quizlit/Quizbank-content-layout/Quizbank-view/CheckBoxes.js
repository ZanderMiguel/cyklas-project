import React from 'react';
import { Box, Typography, Checkbox } from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import axios from 'axios';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CheckBoxes({ stdID, item, index, setScore, setOverAll }) {
  const [exist, setExist] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [checkState1, setCheckState1] = React.useState(false);
  const [checkState2, setCheckState2] = React.useState(false);
  const [checkState3, setCheckState3] = React.useState(false);
  const [checkState4, setCheckState4] = React.useState(false);
  React.useMemo(() => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/answers', {
        answeredBy: stdID,
        questionID: item._id,
      })
      .then((res) => {
        if (res.data.length > 0) {
          setExist(true);
          setData(res.data);
          setOverAll(
            (prev) => prev + parseInt(item.points.replace(' points', ''))
          );

          let rightAns = item.correctAnswer.split(',');
          let stdAns = res.data?.[0].answers.split(',');
          if (
            rightAns.every((item) => {
              return stdAns.includes(item);
            })
          ) {
            setScore(
              (prev) => prev + parseInt(item.points.replace(' points', ''))
            );
          }
          stdAns.includes('answer1')
            ? setCheckState1(true)
            : setCheckState1(false);
          stdAns.includes('answer2')
            ? setCheckState2(true)
            : setCheckState2(false);
          stdAns.includes('answer3')
            ? setCheckState3(true)
            : setCheckState3(false);
          stdAns.includes('answer4')
            ? setCheckState4(true)
            : setCheckState4(false);
        }
        if (res.data.length < 1) {
          setExist(false);
          setData(null);
        }
      })
      .catch((err) => console.log(err));
  }, [stdID]);
  return (
    <div>
      {data && exist ? (
        <>
          <Box
            className="Item-3"
            sx={{
              backgroundColor: 'white',
              borderRadius: '0.3em',
              padding: '0.8em 1em',
              marginBottom: '0.8em',
              width: 'relative',
              height: 'auto',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '1em',
                alignItems: 'center',
                marginBottom: '0.5em',
              }}
            >
              <Typography
                children="Question 1"
                sx={{
                  flexGrow: '1',
                  fontSize: '1em',
                  fontWeight: '600',
                  color: '#007FFF',
                  textTransform: 'Capitalize',
                  height: 'max-content',
                }}
              />

              <Typography
                children="Checkboxes"
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                }}
              />
              <Typography
                children={`${item.points.replace(' point', '')} points`}
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                }}
              />
            </Box>

            <Typography
              children={item.questionsContent}
              sx={{
                flexGrow: '1',
                fontSize: '0.8em',
                fontWeight: '600',
                color: '#3F3D56',
                textTransform: 'none',
                height: 'max-content',
                marginBottom: '0.8em',
              }}
            />

            <Box
              className="Choice-1"
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.5em 0.7em',
                marginBottom: '0.5em',
              }}
            >
              <form>
                <Checkbox
                  {...label}
                  disabled
                  checked={checkState1}
                  sx={{
                    height: '1.3em',
                    width: '1.3em',
                  }}
                />
              </form>
              <Typography
                sx={{
                  width: 'auto',
                  flexGrow: 1,
                  height: 'max-content',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'none',
                }}
              >
                {item.qAnswers.answer1}
              </Typography>
            </Box>

            <Box
              className="Choice-2"
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.5em 0.7em',
                marginBottom: '0.5em',
              }}
            >
              <form>
                <Checkbox
                  {...label}
                  disabled
                  checked={checkState2}
                  sx={{
                    height: '1.3em',
                    width: '1.3em',
                  }}
                />
              </form>

              <Typography
                sx={{
                  width: 'auto',
                  flexGrow: 1,
                  height: 'max-content',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'none',
                }}
              >
                {item.qAnswers.answer2}
              </Typography>
            </Box>

            <Box
              className="Choice-3"
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.5em 0.7em',
                marginBottom: '0.5em',
              }}
            >
              <form>
                <Checkbox
                  {...label}
                  disabled
                  checked={checkState3}
                  sx={{
                    height: '1.3em',
                    width: '1.3em',
                  }}
                />
              </form>

              <Typography
                sx={{
                  width: 'auto',
                  flexGrow: 1,
                  height: 'max-content',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'none',
                }}
              >
                {item.qAnswers.answer3}
              </Typography>
            </Box>

            <Box
              className="Choice-4"
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.5em 0.7em',
                marginBottom: '0.5em',
              }}
            >
              <form>
                <Checkbox
                  {...label}
                  disabled
                  checked={checkState4}
                  sx={{
                    height: '1.3em',
                    width: '1.3em',
                  }}
                />
              </form>
              <Typography
                sx={{
                  width: 'auto',
                  flexGrow: 1,
                  height: 'max-content',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'none',
                }}
              >
                {item.qAnswers.answer4}
              </Typography>
            </Box>

            <Typography
              sx={{
                height: 'max-content',
                width: 'relative',
                color: '#007FFF',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Correct Answer: {item.correctAnswer}
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <center>
            <h4>Nothing to display</h4>
          </center>
        </>
      )}
    </div>
  );
}

export default CheckBoxes;
