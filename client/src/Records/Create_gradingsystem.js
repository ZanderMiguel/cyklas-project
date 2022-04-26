import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import { Box, Button } from '@mui/material';
import Input from '../components/Input';
import Grading_layout from './Grading_layout';

function Create_gradingsystem({ open, close, name, counter, setGS, GS, data }) {
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
              <Grading_layout data={data} name={name} counter={counter} />,
            ]);
            close();
          }}
        >
          Add
        </Button>
      }
    >
      <Box padding={2}>
        <Input
          inputLabel="Grading Name"
          size="small"
          autoFocus
          onChange={handleGradingName}
          fullWidth
          autoComplete="off"
        />
      </Box>
    </Dialogform>
  );
}

export default Create_gradingsystem;
