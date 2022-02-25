import React from 'react';
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



const Iconbtn = styled (IconButton)({

  color: 'white',
  backgroundColor: 'red',
  height: "28px",
  width: "28px",

    "&:hover": {
      backgroundColor:'red'
    },
    '&:active':{
      backgroundColor: 'red'
    },
  
})

function Radiobtn() {
  const [selectcategory, setselectedCategory] = React.useState('automate');

  const handleChange = (event) => {
    setselectedCategory(event.target.value);
  };

  
  
  

  return (

    
    <Container maxWidth="lg">

      <Box className='radiobtn' sx={{ display: 'flex', mt: '2%' }}>
        <Typography variant="h5" sx={{mt: '4%'}}> Make Groups!</Typography>
  
        <RadioGroup
          sx={{
            flexGrow: '1',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop:' 4%'
          }}
          value={selectcategory}
          onChange={handleChange}
        >

          <FormControlLabel
            value="automate"
            control={<Radio />}
            label="Automate"
          />
          <FormControlLabel
            value="manual"
            control={<Radio />}
            label="Manual"
          />
          <FormControlLabel
            value="savedgroups"
            control={<Radio />}
            label="Saved Groups"
          />
        </RadioGroup>
        <Iconbtn size="small" disableRipple> <CloseIcon fontSize='medium'/> </Iconbtn>
      </Box>
    


      <Box className='numberinpt'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontWeight: ' bold' }}> Allocate 5 students into </Typography>
        <TextField
          sx={{ width: '10%', fontWeight: 'bolder', m: '0% 2%' }}
          size="small"
          id="outlined-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Typography sx={{ fontWeight: ' bold' }}>Groups</Typography>
      </Box>

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
  );
}

export default Radiobtn;
