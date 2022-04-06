import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Typography, Button, Box, FormControl, Radio, RadioGroup, FormControlLabel, Input } from '@mui/material';
import GroupsIconButton from '../assets/ImageJaven/GroupsIconButton.png';
import { blue, grey } from "@mui/material/colors";
import Automate from "./Makegroups_model/Automate";
import Manual from "./Makegroups_model/Manual";
import SavedGroups from "./Makegroups_model/SavedGroups";

function Make_groups({ open, close, maxWidth }) {
    const [radioGroup, setRadioGroup] = useState("Automate");

  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth}
      btn={
        <Button
          variant="contained"
          startIcon={<img src = {GroupsIconButton} style = {{ height: "0.7em", width: "0.7em" }}/>}
          sx={{
            backgroundColor: '#49B854',
            color: 'white',
            fontSize: '0.8em',
            fontWeight: '600',
            textTransform: 'Capitalize',
            padding: '0.3em 3em',
            '&: hover': {
              backgroundColor: '#31B13E',
            },
          }}
        >
          Create Groups
        </Button>
      }>
        <Grid container sx = {{ padding: "0em 2em" }}>
            <Grid item xs = {12}>
                <Box sx = {{
                    display: "flex",
                    width: "relative",
                    height: "auto"
                }}>
                    <Typography sx = {{
                        color: "#3F3D56",
                        fontSize: "1.3em",
                        fontWeight: "600",
                        textTransform: "Uppercase",
                        width: "auto",
                        height: "max-content",
                        paddingRight: "8em"
                    }}>
                        make groups!
                    </Typography>

                    <Box flexGrow = {1}/>

                    <Box sx = {{ width: "relative", height: "auto", display: "flex", alignItems: "center" }}>
                        <FormControl sx = {{ width: "100%" }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group">
                            <FormControlLabel checked={radioGroup === "Automate"} value="Automate" 
                                onChange = {(e)=> {setRadioGroup(e.target.value)}}
                                control={<Radio sx = {{ 
                                color: grey[400],
                                '&.Mui-checked': {
                                    color: blue[700],
                                },
                                margin: "0em 0.5em 0em 2em", height: "0.8em", width: "0.8em" }}/>} label="Automate"/>

                            <FormControlLabel checked={radioGroup === "Manual"} value="Manual" 
                                onChange = {(e)=> {setRadioGroup(e.target.value)}}
                                control={<Radio sx = {{ 
                                color: grey[400],
                                '&.Mui-checked': {
                                    color: blue[700],
                                },
                                margin: "0em 0.5em 0em 2em", height: "0.8em", width: "0.8em" }}/>} label="Manual" />
                            <FormControlLabel checked={radioGroup === "Saved Groups"} value="Saved Groups" 
                                onChange = {(e)=> {setRadioGroup(e.target.value)}}
                                control={<Radio sx = {{ 
                                color: grey[400],
                                '&.Mui-checked': {
                                    color: blue[700],
                                },
                                margin: "0em 0.5em 0em 2em", height: "0.8em", width: "0.8em" }}/>} label="Saved Groups"/>
                        </RadioGroup>
                        </FormControl>
                    </Box>
                    
                    

                    {/* <Box sx = {{ 
                        display: "flex",
                        gap: "0.8em",
                        width: "auto",
                        height: "auto"
                    }}>

                    </Box> */}
                </Box>
            </Grid>

            <Grid item xs = {12} sx = {{ marginTop: "2em" }}>
            {radioGroup === "Automate" && (
                <Automate/>
            )}

            {radioGroup === "Manual" && (
                <Manual/>
            )}

             {radioGroup === "Saved Groups" && (
                <SavedGroups/>
            )}
            </Grid>
            
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Make_groups;
