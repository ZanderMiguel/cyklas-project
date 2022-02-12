import React from 'react';
import { Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function People() {
  return (
    <>
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 3 }}
      >
        <Box flexGrow={1} />
        <Button
          startIcon={<AddCircleIcon />}
          variant="contained"
          sx={{
            backgroundColor: '#007FFF',
            color: 'white',
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: '#0072e6',
            },
          }}
        >
          Add member
        </Button>
      </Box>
    </>
  );
}

export default People;
