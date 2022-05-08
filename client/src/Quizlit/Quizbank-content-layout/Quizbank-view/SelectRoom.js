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

import axios from 'axios'

function SelectRoom({setData,dataRoom,setDataRoom}) {
    const { designs } = useStyle()
    const [selectRoom, setRoom] = useState('');
    const handleChangeRoom = (event) => {
        setRoom(event.target.value);
        
    };
    
    React.useMemo(() => {
        axios.post('http://localhost:5000/rooms', {
            userID: JSON.parse(localStorage.userData).data.user._id,
        }).then(res => {
            setDataRoom(res.data)
            
        }).catch(err => console.log(err));
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
                        sx={designs.SelectRoom_Style}
                    >
                        {dataRoom && dataRoom.map((value,index) => (
                            <MenuItem 
                            onClick={()=>{
                                axios.post('http://localhost:5000/get/members',{members:value.members})
                                .then(res=>setData(res.data))
                                .catch(err=>console.log(err))
                            }}
                            key={index} value={value.RoomName}>
                                {value.RoomName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Grid>
    )
}

export default SelectRoom