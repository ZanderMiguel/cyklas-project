import React from 'react';
import { Grid, Box, Typography, Divider, Input } from '@mui/material';
import Image from '../../assets/ImageJaven/Image.png';
import '../Styles/Exam_start_stylesheet.css';
import useStyle from '../Styles/Exam_start_style';

function ExamShort({ item, index, qAnswers }) {
  const { designs } = useStyle();
  React.useMemo(() => {
    qAnswers.current.push({});
  }, []);
  qAnswers.current[index]['answeredBy'] = JSON.parse(
    localStorage.userData
  ).data.user._id;
  qAnswers.current[index]['questions'] = item._id;

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
            children="Short Answer"
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
            placeholder="Write your answer here..."
            multiline
            rows={6}
            disableUnderline
            onChange={(e) => {
              qAnswers.current[index]['answers'] = e.target.value;
            }}
            sx={{
              width: '100%',
              fontSize: '0.8em',
              fontWeight: '500',
              color: '#3F3D56',
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default ExamShort;
