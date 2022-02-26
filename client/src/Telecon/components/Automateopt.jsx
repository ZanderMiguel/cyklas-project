import React from 'react';
import {
  Typography,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
} from '@mui/material';
import AccAva from '../../assets/avatarmale.svg'

function createData(ava,name, cls, sect) {
  return {ava, name, cls, sect };
}

const rows = [
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Paul Rudd', 'Student', 'BSCS3A'),
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Tom Holland', 'Student', 'BSCS3A'),
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Mang Boy', 'Student', 'BSCS3A'),
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Rey Paner', 'Student', 'BSCS3A'),
  createData(<img src={AccAva}width='45px' height='45px'></img>,'Narrion Putik', 'Student', 'BSCS3A'),
];


function Automateopt () {

return (
  <Container>
<Typography variant='h6' sx={{ mt: '2%', textAlign:'right' }}>All Students</Typography>
      <Divider variant='fullWidth' sx={{ mt: '3%' }} />

      <TableContainer>
        <Table sx={{ width: '100%',  [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }}} aria-label="caption table">
          <caption>Kala mo gagraduate ka?</caption>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} style={{width:'100'}}>
                <TableCell style={{width: '50px'}} align="center">{row.ava}</TableCell>
                <TableCell style={{width: '50px'}} align="center">{row.name}</TableCell>
                <TableCell style={{width: '50px'}} align="center">{row.cls}</TableCell>
                <TableCell style={{width: '50px'}} align="center">{row.sect}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
)

}

export default Automateopt 

