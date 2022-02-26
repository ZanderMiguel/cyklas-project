import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  TextField,
  Container,
  Box,
  styled,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Automateopt from './components/Automateopt'
import Manualopt from './components/Manualopt';


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

  const [setRadio,setSelectedRadio] = React.useState(<Automateopt/>)
  
  
  

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

      


    </Container>
  );
}

export default Radiobtn;
