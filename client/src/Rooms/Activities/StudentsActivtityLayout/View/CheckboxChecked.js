import React from 'react';
import { Grid, Container, Box, Typography, Checkbox } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const correctStyle = {
  display: 'flex',
  gap: '0.8em',
  alignItems: 'center',
  height: 'auto',
  width: 'relative',
  flexGrow: 1,
  border: '1px solid #007FFF',
  backgroundColor: '#DFF0FF',
  borderRadius: '0.3em',
  padding: '0.5em 0.7em',
  marginBottom: '0.5em',
};
const normal = {
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
};

function CheckedboxChecked({ data, answers, index }) {
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: 'white',
        padding: '0.8em 1.1em',
        borderRadius: '0.3em 0.3em 0em 0em',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.8em',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: 'auto',
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
            children={data.answerType}
            sx={{
              fontSize: '0.7em',
              fontWeight: '500',
              color: '#8E8E8E',
              textTransform: 'Uppercase',
              height: 'max-content',
            }}
          />
          <Typography
            children={data.points}
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
          children={data.questionsContent}
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

        {Object.values(data.qAnswers).map(function (items, index) {
          const correct = answers.answers.includes(index + 1) ? true : false;
          console.log(correct);
          return (
            <Box
              key={index}
              sx={{
                width: 'relative',
                height: 'auto',
              }}
            >
              <Box sx={correct ? correctStyle : normal}>
                <Checkbox
                  {...label}
                  disabled
                  checked={correct}
                  sx={{
                    color: '#8E8E8E',
                    borderRadius: '0em',
                    height: '0.8em',
                    width: '0.8em',
                    '&: hover': { backgroundColor: 'transparent' },
                  }}
                />

                <Typography
                  children={items}
                  sx={{
                    width: 'auto',
                    flexGrow: 1,
                    height: 'max-content',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    textTransform: 'none',
                  }}
                />
              </Box>
            </Box>
          );
        })}
        <Box
          sx={{
            width: 'relative',
            height: 'auto',
            display: 'flex',
            gap: '0.5em',
          }}
        >
          <Typography
            children="Correct Answer:"
            sx={{
              color: '#007FFF',
              fontSize: '0.8em',
              fontWeight: '600',
            }}
          />
          <Typography
            children={data.correctAnswer}
            sx={{
              color: '#007FFF',
              fontSize: '0.8em',
              fontWeight: '600',
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default CheckedboxChecked;
