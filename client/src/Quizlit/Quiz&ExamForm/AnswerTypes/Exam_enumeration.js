import React from 'react'
import { Button, Grid, Input } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import useStyle from "./Styles/Exam_enumeration_style";

const data = [
    {
        holder: "Students will write their answers in here."
    },
    {
        holder: "Students will write their answers in here."
    },
    {
        holder: "Students will write their answers in here."
    },
    {
        holder: "Students will write their answers in here."
    }
];
function Exam_enumeration() {
const {designs} = useStyle();

  return (
    <>
    <Grid container xs = {12} sx = {{ padding: "0em 2em 1.5em 2em" }}>
        {data.map(function(items, index) {
            return (
            <Input
            key = {index}
            variant="standard"
            fullWidth
            readOnly
            disableUnderline
            placeholder={items.holder}
            sx={designs.ShortAnswer_Input_Style}/>
            )
        })}

        <Grid item xs = {12}>
            <Button variant = "contained" startIcon = {<AddCircle/>}
            sx = {{ 
                  height: "relative", 
                  width: "100%", 
                  padding: "0.3em 0em",
                  fontSize: "0.8em",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  color: "white",
                  boxShadow: "none",
                  borderRadius: "0.5em",
                  "&: hover": {
                      boxShadow: "none"
                  }
                  }}>
                  Add another choice
            </Button>
        </Grid>
    </Grid>
    </>
  )
}

export default Exam_enumeration;