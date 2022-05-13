import React, { useEffect, useState, useRef } from 'react';
import { Grid, Button, Box } from '@mui/material';
import NewGradingSystem from './NewGradingSystem';
import DefaultGradingSystem from './DefaultGradingSystem';
import Create_gradingsystem from './Create_gradingsystem';
import axios from 'axios';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { BeenhereOutlined, CheckCircleOutlined } from '@mui/icons-material';

function Grading_system({ data, name, counter }) {
  const [opendialog, setOpenDialog] = useState(false);
  const [GS, setGS] = useState([]);
  const [renderer, setRenderer] = useState(false);
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/gradingSystem', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        const curGS = [];
        res.data.forEach((item, index) => {
          curGS.push(
            <Grid item xs={12} key={index} sx={{ marginBottom: '0.6em' }}>
              <NewGradingSystem
                disabled
                data={data}
                name={name}
                counter={counter}
                response={item}
                index={index}
                setRenderer={setRenderer}
                setGS={setGS}
              />
            </Grid>
          );
        });

        setGS([...GS, curGS]);
      })
      .catch((err) => console.log(err));
  }, [renderer]);

  return (
    <>
      <Box width="100%" display="flex" gap="0.8em" marginBottom={2}>
        <Box flexGrow={1} />

        <Button
          onClick={() => setOpenDialog(true)}
          startIcon={<AddCircleOutlineOutlinedIcon />}
          variant="contained"
          children="Create New Grading System"
          sx={{
            fontSize: '0.8em',
            fontWeight: '600',
            boxShadow: 'none',
          }}
        />
      </Box>
      {opendialog && (
        <Create_gradingsystem
          name={name}
          counter={counter.current}
          open={opendialog}
          setGS={setGS}
          GS={GS}
          data={data}
          setRenderer={setRenderer}
          close={() => setOpenDialog(false)}
        />
      )}

      {/* <Grid item xs={12} sx={{ marginBottom: '0.6em' }}>
        <DefaultGradingSystem />
      </Grid> */}

      {GS.map((item, index) => (
        <Box marginBottom="10px" key={index}>
          <Grid item xs={12} sx={{ marginBottom: '0.6em' }}>
            {item}
          </Grid>
        </Box>
      ))}
    </>
  );
}

export default Grading_system;
