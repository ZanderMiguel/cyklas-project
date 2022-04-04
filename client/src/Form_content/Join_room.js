import React from 'react';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import CusButton from '../components/Button';
import { Grid, Typography, Avatar, Box } from '@mui/material';
import Divider from '@mui/material/Divider';

function Join_room({ open, close, maxWidth }) {
  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth}>
        <Grid container sx = {{ padding: "0em 2em" }}>
          <Grid item xs={12}>
            <Typography sx={{ marginBottom: "0.8em", width: "100%", height: "max-content", color: "#2C2A46", fontSize: "1.2em", fontWeight: 600 }}>
              Join room as a Student
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" marginBottom = "1em">
              <Avatar sx={{ marginRight: "0.5em", width: '3rem', height: '3rem' }} />
              <Box>
                <Typography sx={{ width: "auto", color: "#3F3D56", fontSize: "1em", fontWeight: 600 }}>
                  Student Name
                </Typography>
                <Typography sx={{ width: "auto", color: "#3F3D56", fontSize: "0.8em", fontWeight: 500 }}>
                  
                  Email@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Input
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Enter room id..."
            />
            <Typography sx={{ width: "auto", height: "max-content", color: "#3F3D56", fontSize: "0.7em", fontWeight: "400", margin: "0.3em 0em 2em 0em" }}>
              Room IDs are provided by teachers to allow students to join a
              room.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" width="100%">
              <Box flexGrow={1} />
              <CusButton
                variant="contained"
                content="join room"
                sx={{
                  backgroundColor: '#007FFF',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#0072e6',
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sx = {{ margin: "1em 0em 0.3em 0em" }}>
            <Divider>
              <Typography children="or" sx = {{ color: "#3F3D56", fontSize: "0.8em", fontWeight: "600", textTransform: "uppercase" }} />
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ color: "#3F3D56", fontSize: "0.8em", fontWeight: 600 }}>
              Another way of joining a room is to ask your teacher to manually add you.
            </Typography>
            <Typography sx={{ width: "auto", height: "max-content", color: "#3F3D56", fontSize: "0.7em", fontWeight: "400", margin: "0.3em 0em 2em 0em" }}>
              You will be notified on your gmail that you are added to a room.
            </Typography>
          </Grid>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Join_room;
