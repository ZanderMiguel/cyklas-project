import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

import { DataGrid, useGridApiMethod } from '@mui/x-data-grid';
import useGet from '../../customHooks/useGet';

const columns = [
  { field: 'id', headerName: 'ID', width: 90, sortable: false },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
];

function People_table() {
  const { data } = useGet('http://localhost:5000/rooms');
  console.log(data);

  return (
    <Box backgroundColor="#F3F3F3">
      <Box className="container" display="flex" padding="10px">
        <Typography sx={{ ml: 3, fontWeight: 600, fontSize: '1.4em' }}>
          PROFESSOR
        </Typography>
        <Box flexGrow={1} />
        <Button variant="contained">Add profesor</Button>
      </Box>
      <Divider variant="middle" />
      <div style={{ height: 'auto', width: '100%' }}>
        <DataGrid
          columns={columns}
          data={data}
          hideFooter
          autoHeight
          disableColumnMenu
          sx={{ border: 'none' }}
        />
      </div>
    </Box>
  );
}

export default People_table;
