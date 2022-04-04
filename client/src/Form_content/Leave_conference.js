import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import CusButton from '../components/Button';
import { Grid, Box, Typography, Avatar, Button, FormControl, InputLabel, Select, MenuItem, Divider, Checkbox  } from '@mui/material';
import { CallEnd } from "@mui/icons-material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import ExamIconButton from "../assets/ImageJaven/ExamIconButton.png";
import useStyle from "./Styles/Post_exam_style";

function Post_exam({ open, close, maxWidth }) {
    const {designs} = useStyle();

  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth} 
        btn={
        <Box sx = {{ display: "flex", gap: "1em", height: "auto", width: "relative"}}>
          <Button onClick={close} variant="contained" sx = {{ 
              backgroundColor: "transparent",
              boxShadow: "none",
              color: "#3F3D56",
              fontSize: "0.8em",
              fontWeight: "600",
              textTransform: "Capitalize",
              padding: "0.3em 3em",
              "&: hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
              }
              }}>
            Cancel
          </Button>

          <Button variant="contained" startIcon = {<CallEnd/>} sx = {{ 
              backgroundColor: "#F74747",
              color: "white",
              fontSize: "0.8em",
              fontWeight: "600",
              textTransform: "Capitalize",
              padding: "0.3em 3em",
              "&: hover": {
                  backgroundColor: "#F02D2D"
              }
              }}>
            Leave
          </Button>
        </Box>
        }
        >
        <Grid item xs = {12} >
            <Typography sx = {{
                margin: "0em 2em",
                color: "3F3D56",
                fontSize: "1.3em",
                fontWeight: "600",
                width: "relative",
                height: "max-content"
            }}>
                Do you want to leave this conference?
            </Typography>

            <Typography sx = {{
                margin: "0.5em 3.3em 5em 3.3em",
                color: "3F3D56",
                fontSize: "0.8em",
                fontWeight: "500",
                width: "relative",
                height: "max-content"
            }}>
                You can rejoin to this conference if the Host is still inside and did not end the meeting or dismiss the class.
            </Typography>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Post_exam;
