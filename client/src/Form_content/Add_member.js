import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import CusButton from '../components/Button';
import { Grid, Box, Typography, Avatar, Button, IconButton, FormControl, InputLabel, Select, MenuItem, Divider, Checkbox, TextField, Stack, InputAdornment  } from '@mui/material';
import { CallEnd, ContentCopy } from "@mui/icons-material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import ExamIconButton from "../assets/ImageJaven/ExamIconButton.png";
import useStyle from "./Styles/Add_member_style";

function Add_member({ open, close, maxWidth }) {
    const {designs} = useStyle();

  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth} 
        // btn={
        // <Box sx = {{ display: "flex", gap: "1em", height: "auto", width: "relative"}}>
        //   <Button onClick={close} variant="contained" sx = {{ 
        //       backgroundColor: "transparent",
        //       boxShadow: "none",
        //       color: "#3F3D56",
        //       fontSize: "0.8em",
        //       fontWeight: "600",
        //       textTransform: "Capitalize",
        //       padding: "0.3em 3em",
        //       "&: hover": {
        //         backgroundColor: "transparent",
        //         boxShadow: "none",
        //       }
        //       }}>
        //     Cancel
        //   </Button>

        //   <Button variant="contained" startIcon = {<CallEnd/>} sx = {{ 
        //       backgroundColor: "#F74747",
        //       color: "white",
        //       fontSize: "0.8em",
        //       fontWeight: "600",
        //       textTransform: "Capitalize",
        //       padding: "0.3em 3em",
        //       "&: hover": {
        //           backgroundColor: "#F02D2D"
        //       }
        //       }}>
        //     Leave
        //   </Button>
        // </Box>
        // }
        >
        <Grid item xs = {12} >
            <Stack sx={designs.Stack_Style}>
              <Typography
                sx={designs.TextFieldLabel_Style}
                children="Add Teacher(s)"
              />
              <TextField
                variant="outlined"
                sx={designs.TextField_Style}
                placeholder="Enter teacher(s)'s email address..."
              />
            </Stack>

            <Stack sx={designs.Stack_Style}>
              <Typography
                sx={designs.TextFieldLabel_Style}
                children="Add Student(s)"
              />
              <TextField
                variant="outlined"
                sx={designs.TextField_Style}
                placeholder="Enter student(s)'s email address..."
              />
            </Stack>
        </Grid>

        <Box sx = {{ margin: "0em 2em", width: "relative", height: "auto", display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" sx = {{ 
              backgroundColor: "#0069D3",
              color: "white",
              fontSize: "0.8em",
              fontWeight: "600",
              textTransform: "Capitalize",
              padding: "0.3em 3em",
              "&: hover": {
                  backgroundColor: "#005DC3"
              }
              }}>
                Add
            </Button>
        </Box>

        <Divider sx = {{ margin: "3em 2em 2em 2em" }}/>

        <Typography sx = {{
            color: "#3F3D56",
            fontSize: "1em",
            backgroundColor: "white",
            fontWeight: "600",
            textTransform: "uppercase",
            textAlign: "center",
            width: "5em",
            height: "max-content",
            position: "absolute",
            top: "58%",
            left: "47%",
            zIndex: 1
        }}>
            or
        </Typography>

        <Stack sx={designs.Stack_Style}>
        <Box sx = {{ height: "auto", width: "relative", display: "flex", gap: "0.8em" }}>
                <Box sx = {{ height: "auto", width: "relative" }}>
                <Typography
                    sx={designs.TextFieldLabel_Style}
                    children="Classroom Link (For Professor(s))"
                />
                <TextField
                    variant="standard"
                    sx={designs.TextField2_Style}
                    defaultValue="https://www.cyklas.com/EmbeddedProgramming/Professor"
                    InputProps={{ readOnly: true }}
                />
                </Box>
                
                <Box sx = {{ height: "auto", width: "relative", display: "flex", alignItems: "flex-end" }}>
                    <Button variant="contained" startIcon = {<ContentCopy/>} sx = {{ 
                                border: "1px solid #0069D3",
                                backgroundColor: "transparent",
                                height: "max-content",
                                boxShadow: "none",
                                color: "#0069D3",
                                fontSize: "0.8em",
                                fontWeight: "600",
                                textTransform: "Capitalize",
                                padding: "0.3em 3em",
                                "&: hover": {
                                    border: "1px solid #005DC3",
                                    backgroundColor: "transparent",
                                    boxShadow: "none",
                                }
                                }}>
                                Copy Link
                    </Button>
                </Box>
                
            </Box>
        </Stack>

        <Stack sx={designs.Stack_Style}>
            <Box sx = {{ height: "auto", width: "relative", display: "flex", gap: "0.8em" }}>
                <Box sx = {{ height: "auto", width: "relative" }}>
                <Typography
                    sx={designs.TextFieldLabel_Style}
                    children="Classroom Link (For Student(s))"
                />
                <TextField
                    variant="standard"
                    sx={designs.TextField2_Style}
                    defaultValue="https://www.cyklas.com/EmbeddedProgramming/Student"
                    InputProps={{ readOnly: true }}
                />
                </Box>
                
                <Box sx = {{ height: "auto", width: "relative", display: "flex", alignItems: "flex-end" }}>
                    <Button variant="contained" startIcon = {<ContentCopy/>} sx = {{ 
                                border: "1px solid #0069D3",
                                backgroundColor: "transparent",
                                height: "max-content",
                                boxShadow: "none",
                                color: "#0069D3",
                                fontSize: "0.8em",
                                fontWeight: "600",
                                textTransform: "Capitalize",
                                padding: "0.3em 3em",
                                "&: hover": {
                                    border: "1px solid #005DC3",
                                    backgroundColor: "transparent",
                                    boxShadow: "none",
                                }
                                }}>
                                Copy Link
                    </Button>
                </Box>
                
            </Box>
              
        </Stack>

      </Dialogform>
    </div>
  );
}

export default Add_member;
