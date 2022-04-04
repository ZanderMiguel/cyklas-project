import React from 'react';
import { Grid, Typography, Box, TextField } from '@mui/material';

function Info() {
  return (
    <>
      <Box height="80%">
        <Grid container>
          <Grid item xs={12}>
            <Typography
              component="div"
              sx={{ display: 'flex', justifyContent: 'center' }}
              variant="h5"
            >
              Message Area
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box border="1px solid red" maxHeight="95%" overflow="auto">
              <Typography variant="h6">Content</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ position: 'absolute', bottom: '80px' }}>
          <TextField variant="outlined" size="small" />
        </Box>
      </Box>
    </>
    // <Box sx={{ width: '100%', height: 'calc(100vh - 80px)', padding: '1rem' }}>
    //   <Box className="wrapper" height="100vh">
    //     <Box>
    //       <Typography variant="h6">Message Area</Typography>
    //     </Box>
    //     <Box position="absolute" bottom="0px">
    //       asdsad
    //     </Box>
    //   </Box>
    // </Box>
  );
}

export default Info;
