import React, { useState } from 'react';
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import '../../Styles/View_quiz_stylesheet.css';
import useStyle from '../../Styles/View_exam_style';

import axios from 'axios';

function SelectRoom({ setData, dataRoom, setDataRoom }) {
  const { designs } = useStyle();
  const [selectRoom, setRoom] = useState('');
  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  React.useMemo(() => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/rooms', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setDataRoom(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid item xs={8} sx={{ margin: '0.5em 0em' }}>
      <Box
        className="RoomName-CourseYearSec"
        sx={designs.RoomName_CourseYearSec_Style}
      >
        <FormControl variant="standard" sx={designs.FormControlRoom_Style}>
          <InputLabel
            id="demo-simple-select-standard-label"
            sx={designs.InputLabelRoom_Style}
          >
            Room
          </InputLabel>

          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selectRoom}
            onChange={handleChangeRoom}
            label="SelectRoom"
            disableUnderline
            sx={{
              width: '100%',
              fontSize: '0.9em',
              fontWeight: '400',
              color: '#3F3D56',
              border: '1px solid #DBDBDB',
              backgroundColor: 'white',
              textTransform: 'Uppercase',
              borderRadius: '0.2em',
              padding: '0.2em 0em 0.2em 0.6em',
              '&: hover': {
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                transition: 'all 300ms',
              },
            }}
          >
            {dataRoom &&
              dataRoom.map((value, index) => (
                <MenuItem
                  onClick={() => {
                    axios
                      .post(
                        'https://murmuring-basin-16459.herokuapp.com/get/members',
                        { members: value.members }
                      )
                      .then((res) => setData(res.data))
                      .catch((err) => console.log(err));
                  }}
                  key={index}
                  value={value.RoomName}
                >
                  {value.RoomName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default SelectRoom;
