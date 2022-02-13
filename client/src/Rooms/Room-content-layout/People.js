import React from 'react';
import { Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import People_table from '../People_table';

function People() {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mt: 3,
          }}
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
        <People_table />
      </Box>
    </>
  );
}

export default People;
