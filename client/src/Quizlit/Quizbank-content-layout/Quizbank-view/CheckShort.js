import React from 'react';
import { Box, Typography, TextField, Input } from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import axios from 'axios';

function CheckShort({ stdID, item, setScore, setOverAll, shrtAns }) {
  const { designs } = useStyle();
  const [exist, setExist] = React.useState(null);
  const [data, setData] = React.useState(null);
  const addScore = (cb) => {
    let doNotIncrement;
    return (...args) => {
      clearTimeout(doNotIncrement);
      doNotIncrement = setTimeout(() => {
        cb(...args);
      }, 1000);
    };
  };
  const updateScore = addScore((points) => {
    let prevAns = shrtAns.current?.[stdID]?.[item._id] || 0;
    setScore((prev) => prev - parseInt(prevAns));
    if (points === '') {
      shrtAns.current[stdID] = { [item._id]: 0 };
      document.querySelector('#shortAnswerScore').value = 0;
    }
    if (parseInt(points) > parseInt(item.points.replace(' points', ''))) {
      setScore((prev) => prev + parseInt(item.points.replace(' points', '')));
      document.querySelector('#shortAnswerScore').value = item.points.replace(
        ' points',
        ''
      );
      shrtAns.current[stdID] = {
        [item._id]: parseInt(item.points.replace(' points', '')),
      };
      console.log(parseInt(item.points.replace(' points', '')));
      //shrtAns.current[item._id] = parseInt(item.points.replace(' points', ''))
    }
    if (parseInt(points) <= parseInt(item.points.replace(' points', ''))) {
      setScore((prev) => prev + parseInt(points));
      shrtAns.current[stdID] = { [item._id]: parseInt(points) };
      //shrtAns.current[item._id] = points
    }
  });

  React.useMemo(() => {
    axios
      .post('http://localhost:5000/answers', {
        answeredBy: stdID,
        questionID: item._id,
      })
      .then((res) => {
        console.log(data);
        if (res.data.length > 0) {
          setExist(true);
          setData(res.data);
          setOverAll(
            (prev) => prev + parseInt(item.points.replace(' points', ''))
          );

          document.querySelector('#shortAnswerScore').value =
            shrtAns.current?.[stdID]?.[item._id] || 0;
          updateScore(document.querySelector('#shortAnswerScore').value);
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
            className="Item-2"
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
                children="Question 2"
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
                children="Short Answer"
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                }}
              />

              <TextField
                inputProps={{
                  style: {
                    height: '1em',
                    fontSize: '0.8em',
                    paddingTop: '0.3em',
                    fontWeight: '600',
                    color: '#007FFF',
                    textAlign: 'center',
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: '0.8em',
                    fontWeight: '600',
                    color: '#007FFF',
                  },
                }}
                variant="standard"
                sx={designs.Points_TextField_Style}
                id="shortAnswerScore"
                onInput={(e) => {
                  updateScore(e.target.value);
                }}
              />

              <Typography
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                }}
              >
                /{item.points.replace(' points', '')} points
              </Typography>
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
              className="Short-answer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.2em 0.7em',
              }}
            >
              <Input
                variant="standard"
                multiline
                fullWidth
                rows={6}
                value={data ? data[0].answers : ''}
                disableUnderline
                readOnly
                sx={{
                  backgroundColor: 'transparent',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  padding: '0.4em 0em',
                }}
              />
            </Box>
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

export default CheckShort;
