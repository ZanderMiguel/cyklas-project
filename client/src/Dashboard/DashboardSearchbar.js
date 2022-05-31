import React from 'react'
import { Grid, Box, Typography, IconButton, Input, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Search } from "@mui/icons-material";

const dataRoom = [
  {
    value: 'Embedded Programming',
    label: 'Embedded Programming',
  },
  {
    value: 'Software Engineering 2',
    label: 'Software Engineering 2',
  }
];

function DashboardSearchbar() {
  const [selectRoom, setRoom] = React.useState('');
    const handleChangeRoom = (event) => {
        setRoom(event.target.value);
        
    };

  return (
    <>
    <Grid item xs = {12}>
                <Typography children = "Select Room"
                sx={{
                color: '#8E8E8E',
                fontSize: '0.8em',
                fontWeight: '500',
                width: 'auto',
                flexGrow: 1,
                height: 'relative',
                display: 'flex',
                alignItems: 'center',
                textTransform: 'Uppercase',
                marginBottom: "0.5em"
                }}/>

                <FormControl variant="standard" sx={{
                    width: '100%',
                    paddingTop: "0em",
                    borderBottom: "1px solid #DBDBDB"
                }}>
                  
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
                            {dataRoom.map(({ value, label }) => (
                                <MenuItem key={value} value={value}>
                                {' '}
                                {label}{' '}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>
    </Grid>      
    </>
    
  )
}

export default DashboardSearchbar