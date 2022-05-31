import React, { useState } from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import useStyle from '../Styles/Exam_start_style';
import '../Styles/Exam_start_stylesheet.css';
function ExamTF({ item, index, qAnswers }) {
  React.useMemo(() => {
    qAnswers.current.push({});
  }, []);
  const { designs } = useStyle();
  const [answerButtonToggleTrue, setAnswerButtonToggleTrue] = useState(true);
  const [answerButtonToggleFalse, setAnswerButtonToggleFalse] = useState(true);
  qAnswers.current[index]['answeredBy'] = JSON.parse(
    localStorage.userData
  ).data.user._id;
  qAnswers.current[index]['questions'] = item._id;
  console.log(qAnswers.current);

  const handleClickTrue = () => {
    setAnswerButtonToggleTrue((prev) => !prev);
    setAnswerButtonToggleFalse(true);
    qAnswers.current[index]['answers'] = 'answer1';
  };
  const handleClickFalse = () => {
    setAnswerButtonToggleFalse((prev) => !prev);
    setAnswerButtonToggleTrue(true);
    qAnswers.current[index]['answers'] = 'answer2';
  };
  return (
    <>
      <Box
        className="Item-1"
        sx={{
          backgroundColor: 'white',
          borderRadius: '0.3em 0.3em 0em 0em',
          padding: '0.8em 1em',
          marginBottom: '0.8em',
          width: 'relative',
          height: 'auto',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
          '&: hover': {
            transition: 'all 250ms',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
            borderBottom: '4px solid #007FFF',
          },
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
            children={`Question ${index + 1}`}
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
            children={item.points}
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
          className="Image-container"
          sx={{
            width: 'relative',
            height: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1em',
          }}
        >
          <img
            src={item.media || Image}
            alt="uploadedImage"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'contain',
            }}
          />
        </Box>

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
            onClick={handleClickTrue}
            sx={{
              width: 'relative',
              height: 'auto',
              marginBottom: '0.5em',
            }}
          >
            {!answerButtonToggleTrue ? (
              <>
                <Box
                  className="Choice-c"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 'auto',
                    width: 'relative',
                    flexGrow: 1,
                    border: '1px solid #007FFF',
                    backgroundColor: '#DFF0FF',
                    borderRadius: '0.3em',
                    padding: '0.5em 0.7em',
                    '&: hover': {
                      transition: 'all 250ms',
                      cursor: 'pointer',
                      boxShadow:
                        'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                    },
                  }}
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
              </>
            ) : (
              <>
                <Box
                  className="Choice-c"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 'auto',
                    width: 'relative',
                    flexGrow: 1,
                    border: '1px solid #DBDBDB',
                    backgroundColor: '#FCFCFC',
                    borderRadius: '0.3em',
                    padding: '0.5em 0.7em',
                    '&: hover': {
                      transition: 'all 250ms',
                      cursor: 'pointer',
                      boxShadow:
                        'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                    },
                  }}
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
              </>
            )}
          </Box>

          <Box
            onClick={handleClickFalse}
            sx={{
              width: 'relative',
              height: 'auto',
              marginBottom: '0.5em',
            }}
          >
            {!answerButtonToggleFalse ? (
              <>
                <Box
                  className="Choice-c"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 'auto',
                    width: 'relative',
                    flexGrow: 1,
                    border: '1px solid #007FFF',
                    backgroundColor: '#DFF0FF',
                    borderRadius: '0.3em',
                    padding: '0.5em 0.7em',
                    '&: hover': {
                      transition: 'all 250ms',
                      cursor: 'pointer',
                      boxShadow:
                        'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                    },
                  }}
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
              </>
            ) : (
              <>
                <Box
                  className="Choice-c"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 'auto',
                    width: 'relative',
                    flexGrow: 1,
                    border: '1px solid #DBDBDB',
                    backgroundColor: '#FCFCFC',
                    borderRadius: '0.3em',
                    padding: '0.5em 0.7em',
                    '&: hover': {
                      transition: 'all 250ms',
                      cursor: 'pointer',
                      boxShadow:
                        'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                    },
                  }}
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
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ExamTF;
