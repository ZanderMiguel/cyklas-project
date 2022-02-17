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
  const { data } = useGet('http://localhost:5000/register');
  const user =
    data &&
    data.map((items) => {
      const { _id: id, ...rest } = items;
      return { id, ...rest };
    });
  const columns = [
    {
      field: 'firstName',
      headerName: 'Name',
      width: 130,
      flex: 1,
      sortable: false,
      renderCell: (user) => {
        return (
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar alt="avatar" src="">
                {user.row.firstName[0]}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography noWrap>{user.row.firstName}</Typography>
            </Grid>
          </Grid>
        );
      },
    },
    {
      width: 150,
      sortable: false,
      renderCell: () => {
        return (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        );
      },
      align: 'center',
    },
  ];
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
        <div style={{ height: 'auto', width: '100%' }}>
          <DataGrid
            columns={columns}
            rows={user}
            hideFooter
            autoHeight
            disableColumnMenu
            disableVirtualization
            sx={{
              border: 'none',
              '& .MuiDataGrid-columnSeparator': {
                display: 'none',
              },
              '& .MuiDataGrid-columnHeadersInner': {
                backgroundColor: '#F3F3F3',
              },
              '& .MuiDataGrid-virtualScrollerContent': {
                backgroundColor: '#F3F3F3',
              },
            }}
          />
        </div>
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
