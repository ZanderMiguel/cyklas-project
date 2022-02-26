import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  TextField,
  Container,
  Box,
  Divider,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccAva from '../assets/Images/avatar_male.png';
// import Actions from './components/Actions';
// import ActionPanel from './components/ActionPanel';
// import VideoPanel from './components/VideoPanel';

// function Telecon() {

//     return (<div>
//         <Actions />
//         <div style={{ display: 'flex' }}><ActionPanel />
//             <VideoPanel /></div>

//     </div>);
// }

// export default Telecon;

/* import React from 'react';
import Actions from './components/Actions';
import ActionPanel from './components/ActionPanel';
import VideoPanel from './components/VideoPanel';
import { io } from 'socket.io-client'
function Telecon() {
    const socket = io.connect('http://localhost:3001/')
    
    return (<div style={{backgroundColor: '#202124', width: '100%'}}>
        <Actions />
        <div style={{ display: 'flex', }}>{null && <ActionPanel socket={socket}/>}
            <VideoPanel socket={socket}/></div>

    </div>); */

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


