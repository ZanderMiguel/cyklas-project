import React from 'react';
import { Typography, Box } from '@mui/material';
import { Check, CheckCircleOutlined } from '@mui/icons-material';

function CorrectAnswer({ point, socket }) {
  const [count, setCount] = React.useState(3);
  React.useEffect(() => {
    socket.on('tick-next', (count) => {
      setCount(count);
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          width: 'relative',
          height: 'auto',
          padding: '2.5em 3em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgb(57,186,69)',
          borderRadius: '0.5em',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '0.5em',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto',
            width: '25em',
          }}
        >
          <CheckCircleOutlined sx={{ color: 'white', fontSize: '2em' }} />

          <Typography
            children="Your answer is correct"
            sx={{
              color: 'white',
              fontSize: '1.3em',
              fontWeight: '600',
            }}
          />
        </Box>

        <Typography
          children={`+${point.current} POINTS`}
          sx={{
            color: 'white',
            fontSize: '0.9em',
            fontWeight: '500',
            textTransform: 'Uppercase',
          }}
        />
        <Typography
          children={`The next question will be ready in ${count}...`}
          sx={{
            color: 'white',
            fontSize: '0.9em',
            fontWeight: '500',
            textTransform: 'Uppercase',
          }}
        />
      </Box>
    </>
  );
}

export default CorrectAnswer;
