import React, { useEffect, useState, useRef } from 'react';
import { Grid, Button, Box } from '@mui/material';
import NewGradingSystem from './NewGradingSystem';
import DefaultGradingSystem from './DefaultGradingSystem';
import Create_gradingsystem from './Create_gradingsystem';
import axios from 'axios';
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { BeenhereOutlined } from "@mui/icons-material";

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
    <NewGradingSystem data={data} name={name} counter={counter} />,
  ]);
  return (
    <>
        <Box width="100%" display="flex" marginBottom={2}>
          <Button
            onClick={() => console.log(data.current)}
            startIcon = {<BeenhereOutlined/>}
            children = "Save Changes"
            variant="contained"
            sx={{
              backgroundColor: "#4CAF50",
              padding: '0.4em 1em',
              color: 'white',
              fontSize: '0.8em',
              fontWeight: '600',
              boxShadow: 'none',
              "&: hover": {
                backgroundColor: "#43A047"
              }
            }}/>

          <Box flexGrow={1} />
            
          <Button onClick={() => setOpenDialog(true)} 
          startIcon = {<AddCircleOutlineOutlinedIcon/>}
          variant="contained"
          children="Create New Grading System"
          sx = {{
            fontSize: "0.8em",
            fontWeight: "600",
            boxShadow: "none"
          }}/>

          
          
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

        <Grid item xs = {12} sx = {{ marginBottom: "0.6em" }}>
          <DefaultGradingSystem/>
        </Grid>

        {GS.map((item, index) => (
          <Grid item xs={12} key={index} sx = {{ marginBottom: "0.6em" }}>
            {item}
          </Grid>
        ))}
    </>
  );
}

export default Grading_system;
