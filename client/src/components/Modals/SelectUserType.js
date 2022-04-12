import React from 'react';
import Dialogform from '../Dialogform';
import { Grid, Button, Typography } from '@mui/material';
function SelectUserType({ open, signIn, googleData, close }) {
  const toggleProf = React.useRef('outlined');
  const toggleStud = React.useRef('outlined');
  return (
    <Dialogform open={open} close={close} maxWidth="lg">
      <div style={{ width: 400, height: 'auto' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5"> Select user type </Typography>
            </div>
          </Grid>
          <Grid item>
            <Button
              sx={{ borderRadius: '20px' }}
              variant={toggleProf.current}
              disableRipple
              onClick={() => {
                toggleStud.current = 'outlined';
                toggleProf.current = 'contained';
                signIn({ userType: 'Professor', ...googleData.current });
                close();
              }}
              name="userType"
            >
              Professor
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ borderRadius: '50px' }}
              variant={toggleStud.current}
              disableRipple
              onClick={() => {
                toggleStud.current = 'contained';
                toggleProf.current = 'outlined';
                signIn({ userType: 'Student', ...googleData.current });
                close();
              }}
              name="userType"
            >
              Student
            </Button>
          </Grid>
        </Grid>
      </div>
    </Dialogform>
  );
}

export default SelectUserType;
