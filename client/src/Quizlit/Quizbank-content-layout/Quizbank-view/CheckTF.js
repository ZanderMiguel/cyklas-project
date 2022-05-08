import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import axios from 'axios';
function CheckTF({ stdID, item, index, setScore, setOverAll }) {
  const { designs } = useStyle();
  const [exist, setExist] = React.useState(null);
  const [data, setData] = React.useState(null);
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/answers', {
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

          if (item.correctAnswer === res.data?.[0].answers) {
            setScore(
              (prev) => prev + parseInt(item.points.replace(' points', ''))
            );
          }
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
            className="Item-4"
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
                children="True or False"
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                }}
              />
              <Typography
                children={`${item.points.replace(' points', '')} points`}
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
              className="Choices"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 'relative',
                height: 'auto',
              }}
            >
              <Box
                className="Choice-a"
                sx={
                  data[0]?.answers === 'answer1'
                    ? {
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
                        width: 'relative',
                        flexGrow: 1,
                        border: '1px solid #007FFF',
                        backgroundColor: '#DFF0FF',
                        borderRadius: '0.3em',
                        padding: '0.5em 0.7em',
                        marginBottom: '0.5em',
                      }
                    : {
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
                        width: 'relative',
                        flexGrow: 1,
                        border: '1px solid #DBDBDB',
                        backgroundColor: '#FCFCFC',
                        borderRadius: '0.3em',
                        padding: '0.5em 0.7em',
                        marginBottom: '0.5em',
                      }
                }
              >
                <Typography
                  sx={{
                    width: '2em',
                    height: 'max-content',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    textTransform: 'Uppercase',
                  }}
                >
                  A.
                </Typography>

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
                  True
                </Typography>
              </Box>

              <Box
                className="Choice-b"
                sx={
                  data[0]?.answers === 'answer2'
                    ? {
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
                        width: 'relative',
                        flexGrow: 1,
                        border: '1px solid #007FFF',
                        backgroundColor: '#DFF0FF',
                        borderRadius: '0.3em',
                        padding: '0.5em 0.7em',
                        marginBottom: '0.5em',
                      }
                    : {
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
                        width: 'relative',
                        flexGrow: 1,
                        border: '1px solid #DBDBDB',
                        backgroundColor: '#FCFCFC',
                        borderRadius: '0.3em',
                        padding: '0.5em 0.7em',
                        marginBottom: '0.5em',
                      }
                }
              >
                <Typography
                  sx={{
                    width: '2em',
                    height: 'max-content',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    textTransform: 'Uppercase',
                  }}
                >
                  B.
                </Typography>

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
                  False
                </Typography>
              </Box>
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
              Correct Answer:{' '}
              {item.correctAnswer === 'answer1' ? 'True' : 'False'}
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

export default CheckTF;
