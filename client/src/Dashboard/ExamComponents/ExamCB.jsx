import React from 'react';
import { Grid, Box, Typography, Divider, Checkbox } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import useStyle from '../Styles/Exam_start_style';
import '../Styles/Exam_start_stylesheet.css';
function ExamCB({ item, index, qAnswers }) {
  const { designs } = useStyle();
  React.useMemo(() => {
    qAnswers.current.push({});
  }, []);
  qAnswers.current[index]['answeredBy'] = JSON.parse(
    localStorage.userData
  ).data.user._id;
  qAnswers.current[index]['questions'] = item._id;
  const handleCheck = (event) => {
    if (event.target.checked) {
      qAnswers.current[index]['answers'] += `${event.target.name},`;
      qAnswers.current[index]['answers'] = qAnswers.current[index][
        'answers'
      ].replace('undefined', '');
      console.log(qAnswers.current[index]['answers']);
    }
    if (event.target.checked === false) {
      qAnswers.current[index]['answers'] = qAnswers.current[index][
        'answers'
      ].replace(`${event.target.name},`, '');
      console.log(qAnswers.current[index]['answers']);
    }
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
            className="Option1"
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
              gap: '0.8em',
              marginBottom: '0.5em',
            }}
          >
            <Checkbox
              sx={{
                color: '#8E8E8E',
                borderRadius: '0em',
                height: '0.8em',
                width: '0.8em',
                '&: hover': { backgroundColor: 'transparent' },
              }}
              onChange={(e) => handleCheck(e)}
              name="answer1"
            />

            <Typography
              noWrap
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
            className="Option2"
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
              gap: '0.8em',
              marginBottom: '0.5em',
            }}
          >
            <Checkbox
              sx={{
                color: '#8E8E8E',
                borderRadius: '0em',
                height: '0.8em',
                width: '0.8em',
                '&: hover': { backgroundColor: 'transparent' },
              }}
              onChange={(e) => handleCheck(e)}
              name="answer2"
            />

            <Typography
              noWrap
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
            className="Option3"
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
              gap: '0.8em',
              marginBottom: '0.5em',
            }}
          >
            <Checkbox
              sx={{
                color: '#8E8E8E',
                borderRadius: '0em',
                height: '0.8em',
                width: '0.8em',
                '&: hover': { backgroundColor: 'transparent' },
              }}
              onChange={(e) => handleCheck(e)}
              name="answer3"
            />

            <Typography
              noWrap
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
            className="Option4"
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
              gap: '0.8em',
              marginBottom: '0.5em',
            }}
          >
            <Checkbox
              sx={{
                color: '#8E8E8E',
                borderRadius: '0em',
                height: '0.8em',
                width: '0.8em',
                '&: hover': { backgroundColor: 'transparent' },
              }}
              onChange={(e) => handleCheck(e)}
              name="answer4"
            />

            <Typography
              noWrap
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
        </Box>
      </Box>
    </>
  );
}

export default ExamCB;
