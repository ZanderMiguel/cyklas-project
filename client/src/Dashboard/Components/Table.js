import { Typography, Select } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Names from '../Components/Names'
function Table(props) {

    const [state, setState] = React.useState("")


    function handleChange(e) {
        setState(e.target.value)
        console.log(e.target.value)
    }
    const i = ["Room 101", "Room 102", "Room 103"]
    
    return <div style={{ border: "3px solid gray", height: props.height1, width: '80%', paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px", gridRow: props.gridRow, borderRadius: "20px", marginTop: "10px", marginLeft: "10px",}}>

        <div style={{ border: "1px solid green", display: "grid", width: '100%', gridTemplateColumns: '3fr 1fr', alignItems: 'center' }}>
            <div >

                <Typography sx={{ fontWeight: "bold", fontSize: "15px", border: "2px solid blue", fontSize: "20px", marginBottom: "10px" }}>
                    {props.index === 0 ? "Student Rankings": props.index === 1? "Class Schedules": "Professor's Rating"}
                </Typography>


            </div>
            {props.index === 0 && <Box style={{ float: 'right' }}>
                <FormControl sx={{ m: 1, minWidth: 130, backgroundColor: "#F8F8F8", textAlign: 'center' }}>
                    <InputLabel id="demo-simple-select-label">Room Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="Room Name"
                        onChange={handleChange}
                        style={{ height: '40px' }}
                    >
                        {i.map(function (item, index) {
                            return (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            )

                        })}

                    </Select>
                </FormControl>
            </Box>}
        </div>


        
            {props.heading.map((item, idx) => {
                const { avt, plc, sn, yc,
                    yc2, rm, day, time,
                    plc2, pn, av } = item
                    console.log(props.index)
                return (<div style={{ width: "100%", display: "grid", alignContent: "center", backgroundColor: "#EBEBEB", border: "1px solid orange", gridTemplateColumns:  `${props.index === 2 ? 'repeat(3,1fr)':'repeat(4,1fr)'}`}}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "15px", margin: 'auto' }}>
                        {avt || yc2 || plc2}
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", fontSize: "15px", margin: 'auto' }}>
                        {plc || rm || pn}
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", fontSize: "15px", margin: 'auto' }}>
                        {sn || day || av}
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", fontSize: "15px", margin: 'auto' }}>
                        {yc || time}
                    </Typography>
                </div>)
            })}




        <Names item={props.item} index={props.index} height={props.height}/>


    </div>;
}

export default Table;
