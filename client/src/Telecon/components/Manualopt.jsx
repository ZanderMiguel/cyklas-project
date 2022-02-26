import React from 'react'
import { Container, TableCell, Table, TableContainer, TableRow, TableBody, IconButton, Select, Divider, Typography, Box } from '@mui/material'
import Edit from '../../assets/editicon.svg'
import Del from '../../assets/delicon.svg'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Manualopt() {





  function createData(grpname, drpdwnbtn, edit, del, add) {
    return { grpname, drpdwnbtn, edit, del, add };
  };


  const [setCategory, setSelectedCategory] = React.useState('');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };





  const rows = [
    createData('Group 1',
      <Select
        disableUnderline
        variant='standard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={setCategory}
        onChange={handleChange}
      />,
      <IconButton size='small'>
        <img src={Edit} width='23px' height='23px' />
      </IconButton>,

      <IconButton size='small'>
        <img src={Del} width='23px' height='23px' />
      </IconButton>,

      <IconButton size='small'>
        <AddCircleOutlineIcon />
      </IconButton>),

    createData('Group 2',
      <Select
        disableUnderline
        variant='standard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={setCategory}
        onChange={handleChange}
      />,
      <IconButton size='small'>
        <img src={Edit} width='23px' height='23px' />
      </IconButton>,

      <IconButton size='small'>
        <img src={Del} width='23px' height='23px' />
      </IconButton>,

      <IconButton size='small'>
        <AddCircleOutlineIcon />
      </IconButton>),

    createData('Group 3',
      <Select
        disableUnderline
        variant='standard'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={setCategory}
        onChange={handleChange}
      />,
      <IconButton size='small'>
        <img src={Edit} width='23px' height='23px' />
      </IconButton>,

      <IconButton size='small'>
        <img src={Del} width='23px' height='23px' />
      </IconButton>,

      <IconButton size='small'>
        <AddCircleOutlineIcon />
      </IconButton>),



  ];


  return (


    <Container maxWidth='lg' >

      <TableContainer>
        <Table sx={{ width: '100%' }} aria-label="caption table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.grpname} style={{ width: '100' }} sx={{ mt: '10px' }}>
                <TableCell padding='none' align="left">{row.grpname}</TableCell>
                <TableCell padding='none' align="right">{row.drpdwnbtn}</TableCell>
                <TableCell padding='none' align="right">{row.edit}</TableCell>
                <TableCell padding='none' align="left">{row.del}</TableCell>
                <TableCell padding='none' align="right">{row.add}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex' }}>
        <IconButton size='small'><AddCircleIcon /></IconButton>
        <Typography style={{fontWeight:'bold'}}sx={{mt:'5px'}}>Add Group</Typography>
      </Box>
      <Divider variant='fullWidth' />


    </Container>






  )
}

export default Manualopt;