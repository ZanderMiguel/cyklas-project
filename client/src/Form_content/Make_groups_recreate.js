import React, { useState } from 'react';
import Dialogform from "../components/Dialogform";
import { Grid, Typography, Button, Box, FormControl, Radio, RadioGroup, FormControlLabel, Input } from '@mui/material';
import GroupsIconButton from '../assets/ImageJaven/GroupsIconButton.png';
import { blue, grey } from "@mui/material/colors";
import Automate from "./Makegroups_model/Automate";
import Manual from "./Makegroups_model/Manual";
import SavedGroups from "./Makegroups_model/SavedGroups";
import Make_groups_recreated from "./Make_groups_recreated";
import { WarningAmber } from '@mui/icons-material';

function Make_groups_recreate({ open, close, maxWidth }) {
    const [radioGroup, setRadioGroup] = useState("Automate");

    const [opendialogGroupsRecreated, setOpenDialogGroupsRecreated] = useState(false);

    const handleCreateGroupsRecreated = () => {
      setOpenDialogGroupsRecreated(true);
    };

    const handleCreateCloseGroupsRecreated = () => {
      setOpenDialogGroupsRecreated(false);
    };

  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth}
      btn={
        <Button
          onClick = {handleCreateGroupsRecreated}
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
          Recreate Groups
        </Button>
        
      }>
      {opendialogGroupsRecreated && (
        <Make_groups_recreated
          open={opendialogGroupsRecreated}
          close={handleCreateCloseGroupsRecreated}
          maxWidth="md"
          state={setOpenDialogGroupsRecreated}
        />
      )}

        <Grid container sx = {{ padding: "0em 2em" }}>

            <Box sx = {{
                display: "flex",
                gap: "0.5em",
                width: "relative",
                height: "auto",
                margin: "0.8em 0em",
                alignItems: "center"
            }}>
                <WarningAmber sx = {{ color: "#FF9100", fontSize: "1.3em" }}/>

                <Typography sx = {{
                            width: "100%",
                            height: "auto",
                            color: "#FF9100",
                            fontSize: "0.8em",
                            fontWeight: "500"
                        }}>
                            All existing groups will be replaced.
                </Typography>
            </Box>
            
            
            <Grid item xs = {12}>
            <Box sx = {{ width: "relative", height: "auto", display: "flex" }}>
                <Box sx = {{
                    width: "relative",
                    flexGrow: 1,
                    height: "auto"
                }}>
                    <Typography sx = {{
                        color: "#3F3D56",
                        fontSize: "1.3em",
                        fontWeight: "600",
                        textTransform: "Uppercase",
                        width: "relative",
                        height: "max-content",
                        paddingRight: "8em"
                    }}>
                        make groups!
                    </Typography>

                    <Typography sx = {{
                        color: "#007FFF",
                        fontSize: "0.8em",
                        fontWeight: "600",
                        textTransform: "Capitalize",
                        width: "relative",
                        height: "max-content",
                        paddingRight: "8em"
                    }}>
                        Not started
                    </Typography>
                </Box>

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

export default Make_groups_recreate;
