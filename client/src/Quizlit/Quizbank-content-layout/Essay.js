import React from 'react';
import {Box, Container, Grid, Input} from "@mui/material";
import useStyle from '../Essay_style';
import { Link } from 'react-router-dom';

function Essay() {
    
    const {designs} = useStyle()

    return (
    <Container maxWidth = "lg">
        <Grid container rowSpacing = {1}>
            <Grid item xs = {12}>
            <Box className = "Quiz-container" sx = {designs.Quiz_Container_Style}>

                <Box className = "Quiz-answers" 
                // component = { Link }
                // to = "/Quiz_multiplechoice"
                sx = {designs.Quiz_Answer_Style}>

                        <Input variant="standard"
                            multiline
                            fullWidth
                            rows={6}
                            label="Type your answer here..."
                            disableUnderline sx = {designs.Essay_Input_Style}
                        />
                </Box>

            </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Essay;
