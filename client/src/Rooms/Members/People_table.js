import React from 'react';
import {
  Box,
  Typography,
  Button,
  Divider,
  Avatar,
  Grid,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { DataGrid } from '@mui/x-data-grid';
import useGet from '../../customHooks/useGet';

function People_table() {
  return (
    <>
      <Box backgroundColor="#F3F3F3">
        <Box className="container" display="flex" padding="10px">
          <Typography sx={{ ml: 3, fontWeight: 600, fontSize: '1.4em' }}>
            PROFESSOR
          </Typography>
          <Box flexGrow={1} />
          <Button variant="contained">Add profesor</Button>
        </Box>
        <Divider variant="middle" />
        <div style={{ height: 'auto', width: '100%' }}></div>
      </Box>
      <Box backgroundColor="#F3F3F3" mt={3}>
        <Box className="container" display="flex" padding="10px">
          <Typography sx={{ ml: 3, fontWeight: 600, fontSize: '1.4em' }}>
            STUDENT
          </Typography>
          <Box flexGrow={1} />
          <Button variant="contained">Add profesor</Button>
        </Box>
        <Divider variant="middle" />
        <div style={{ height: 'auto', width: '100%' }}></div>
      </Box>
    </>
  );
}

export default People_table;
