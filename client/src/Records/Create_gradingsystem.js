import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import { Box, Button, TextField, Typography } from '@mui/material';
import Input from '../components/Input';
import NewGradingSystem from './NewGradingSystem';

function Create_gradingsystem({
  open,
  close,
  name,
  counter,
  setGS,
  GS,
  data,
  setRenderer,
}) {
  const [gradingname, setGradingName] = useState('');
  // const handleAddGrading = () => {
  //   axios
  //     .post('http://localhost:5000/gradingSystem/create', {
  //       GradingName: gradingname,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const handleGradingName = (event) => {
    name.current[counter]['GradingName'] = event.target.value;
  };
  return (
    <Dialogform
      open={open}
      close={close}
      maxWidth="xs"
      fullWidth
      btn={
        <Button
          variant="contained"
          onClick={() => {
            setGS([
              ...GS,
              <NewGradingSystem
                data={data}
                name={name}
                counter={counter}
                setGS={setGS}
                setRenderer={setRenderer}
              />,
            ]);
            close();
          }}
          sx={{
            color: 'white',
            fontSize: '0.8em',
            fontWeight: '600',
            textTransform: 'Capitalize',
            padding: '0.3em 1.5em',
            boxShadow: 'none',
          }}
        >
          Add
        </Button>
      }
    >
      <Box
        sx={{
          padding: '0em 1.5em',
          marginBottom: '0.5em',
        }}
      >
        <Typography
          children="Grading System Name"
          sx={{
            fontWeight: '500',
            color: '#3F3D56',
            fontSize: '0.9em',
            margin: '0em 0em 0.3em 0em',
          }}
        />

        <TextField
          onChange={handleGradingName}
          fullWidth
          autoComplete="off"
          inputProps={{
            style: {
              height: '0.5em',
              fontSize: '0.9em',
              color: '#3F3D56',
              fontWeight: 500,
              margin: '0em',
            },
          }}
        />
      </Box>
    </Dialogform>
  );
}

export default Create_gradingsystem;
