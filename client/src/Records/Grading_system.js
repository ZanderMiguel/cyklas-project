import React, { useEffect, useState, useRef } from 'react';
import { Grid, Button, Box } from '@mui/material';
import Grading_layout from './Grading_layout';
import Create_gradingsystem from './Create_gradingsystem';
import axios from 'axios';

function Grading_system({ data, name, counter }) {
  const [opendialog, setOpenDialog] = useState(false);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .post('http://localhost:5000/gradingSystem', {
  //       userID: JSON.parse(localStorage.userData).data.user._id,
  //     })
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const [GS, setGS] = useState([
    <Grading_layout data={data} name={name} counter={counter} />,
  ]);
  return (
    <>
      <Grid container spacing={2}>
        <Box width="100%" display="flex" marginBottom={2}>
          <Box flexGrow={1} />
          <Box>
            <Button onClick={() => setOpenDialog(true)} variant="contained">
              Add Grading
            </Button>
          </Box>
        </Box>
        {opendialog && (
          <Create_gradingsystem
            name={name}
            counter={counter.current}
            open={opendialog}
            setGS={setGS}
            GS={GS}
            data={data}
            close={() => setOpenDialog(false)}
          />
        )}

        {GS.map((item, index) => (
          <Grid item xs={12} key={index}>
            {item}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Grading_system;
