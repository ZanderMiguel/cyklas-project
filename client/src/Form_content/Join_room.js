import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import CusButton from '../components/Button';
import { Grid, Typography, Avatar, Box } from '@mui/material';
import Divider from '@mui/material/Divider';

function Join_room({ open, close, maxWidth }) {
  const location = useLocation();
  const [joinId, setJoinId] = React.useState('');
  const [joinIdError, setJoinIdError] = React.useState(false);
  const [redirect, setRedirect] = React.useState(null);

  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        divider
        title="Join room as a student"
      >
        <Grid container sx={{ padding: '1em 1.5em 1.5em 1.5em' }}>
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              marginBottom="1em"
              gap="1em"
            >
              <Avatar
                src={JSON.parse(localStorage.userData).data.imageUrl}
                sx={{ width: '3rem', height: '3rem' }}
              />
              <Box>
                <Typography
                  sx={{
                    width: 'auto',
                    color: '#3F3D56',
                    fontSize: '1em',
                    fontWeight: 600,
                  }}
                >
                  {`${JSON.parse(localStorage.userData).data.user.firstName} ${
                    JSON.parse(localStorage.userData).data.user.lastName
                  }`}
                </Typography>
                <Typography
                  sx={{
                    width: 'auto',
                    color: '#3F3D56',
                    fontSize: '0.8em',
                    fontWeight: 500,
                  }}
                >
                  {JSON.parse(localStorage.userData).data.user.emailAddress}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Input
              fullWidth
              value={joinId}
              onChange={(event) => setJoinId(event.target.value)}
              autoComplete="off"
              variant="outlined"
              size="small"
              placeholder="Enter room id..."
              error={joinIdError}
              helperText={joinIdError ? 'Please insert an ID ...' : false}
            />
            <Typography
              sx={{
                width: 'auto',
                height: 'max-content',
                color: '#3F3D56',
                fontSize: '0.8em',
                fontWeight: '400',
                margin: '0.3em 0em 2em 0em',
              }}
            >
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
                onClick={() => {
                  setJoinIdError(false);
                  if (joinId === '') {
                    setJoinIdError(true);
                  }
                  if (joinId) {
                    setRedirect(
                      <Redirect to={`${location.pathname}/${joinId}`} />
                    );
                  }
                }}
                sx={{
                  backgroundColor: '#007FFF',
                  color: 'white',
                  fontWeight: '600',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#0072e6',
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Dialogform>
      {redirect && redirect}
    </div>
  );
}

export default Join_room;
