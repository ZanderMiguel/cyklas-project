// import React from 'react';
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

import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  Grid,
  TextField,
  Container,
} from '@mui/material';

function Radiobtn() {
  const [selectcategory, setselectedCategory] = React.useState('automate');

  const handleChange = (event) => {
    setselectedCategory(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <div>
        <FormControl sx={{ display: 'flex' }}>
          <Typography variant="h5"> Make Groups!</Typography>
          <RadioGroup
            sx={{
              m: 'auto 0 auto auto',
              display: 'flex',
              flexDirection: 'row',
              justifySelf: 'flex-end',
              alignItems: 'center',
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
        </FormControl>
      </div>

      <div
        sx={{
          display: 'flex',
          justifyContent: ' center',
          alignItems: 'center',
        }}
      >
        <Typography> Allocate 5 students into</Typography>
        <TextField
          sx={{ width: ' 150px', fontWeight: 'bolder' }}
          size="small"
          id="outlined-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Typography>Groups</Typography>
      </div>
    </Container>
  );
}

export default Radiobtn;
