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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Join room as a Student
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ width: '3.5rem', height: '3.5rem' }} />
              <Box marginLeft="0.5em">
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Student Name
                </Typography>
                <Typography variant="body2">Email@gmail.com</Typography>
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
            <Typography variant="body2" sx={{ mt: 1 }}>
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
          <Grid item xs={12}>
            <Divider>
              <Typography children="or" variant="body2" />
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Another way of joining a room is to ask your teacher to manually
              add you.
            </Typography>
            <Typography variant="body2">
              You will be notified on your gmail that you are added to a room.
            </Typography>
          </Grid>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Join_room;
