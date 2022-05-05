import React from 'react'
import { Grid, Box, Typography, Button, Input, Checkbox } from "@mui/material";
import { Add } from "@mui/icons-material";

const dataAnswers = [
    {
        choice: <Checkbox sx = {{ color: "#8E8E8E", borderRadius: "0em", height: "0.8em", width: "0.8em", "&: hover": { backgroundColor: "transparent" } }}/>,
        choiceAnswer: "Blank Answer"
    },
    {
        choice: <Checkbox sx = {{ color: "#8E8E8E", borderRadius: "0em", height: "0.8em", width: "0.8em", "&: hover": { backgroundColor: "transparent" } }}/>,
        choiceAnswer: "Blank Answer"
    },
    {
        choice: <Checkbox sx = {{ color: "#8E8E8E", borderRadius: "0em", height: "0.8em", width: "0.8em", "&: hover": { backgroundColor: "transparent" } }}/>,
        choiceAnswer: "Blank Answer"
    },
    {
        choice: <Checkbox sx = {{ color: "#8E8E8E", borderRadius: "0em", height: "0.8em", width: "0.8em", "&: hover": { backgroundColor: "transparent" } }}/>,
        choiceAnswer: "Blank Answer"
    }
];

function ExamCheckboxesV2() {
  return (
    <>
    {dataAnswers.map(function(items, index) {
        return (
            <>
            <Grid item xs = {12} key = {index}>
                <Box
                    sx = {{
                    width: "relative",
                    height: "auto",
                    display: "flex",
                    gap: "0.5em",
                    marginBottom: "0.5em"
                    }}>
                    <Box
                        sx = {{
                        display: "flex",
                        gap: "0.5em",
                        alignItems: "center",
                        height: "auto",
                        width: "relative",
                        flexGrow: 1,
                        border: "1px solid #DBDBDB",
                        backgroundColor: "#FCFCFC",
                        borderRadius: "0.3em",
                        padding: "0.2em 0.7em"
                        }}>
                        <Typography children = {items.choice}
                            sx = {{
                            width: "2em",
                            height: "max-content",
                            fontSize: "0.8em",
                            fontWeight: "500",
                            color: "#3F3D56",
                            textTransform: "Uppercase"
                            }}/>
                                        
                            <Input placeholder = {items.choiceAnswer}
                                disableUnderline
                                sx = {{
                                width: "100%",
                                height: "auto",
                                fontSize: "0.8em",
                                fontWeight: "500",
                                color: "#3F3D56"
                                }}>
                            </Input>
                    </Box>
                                
                    {/* <Tooltip title = "Set this to be the correct answer" placement = "right">
                        <IconButton
                            sx = {{
                            borderRadius: "0.2em",
                            border: "1px solid #DBDBDB",
                            backgroundColor: "#FCFCFC",
                            }}>
                                <CheckOutlined sx = {{ fontSize: "0.7em" }}/>
                        </IconButton>
                    </Tooltip> */}
                </Box>
            </Grid>
            </>
        )
    })}

    <Grid item xs = {12}>
        <Button children = "Add another choice"
            variant = "contained"
            startIcon = {<Add/>}
            sx = {{
            fontSize: "0.7em",
            fontWeight: "600",
            color: "#007FFF",
            textTransform: "Capitalize",
            backgroundColor: "transparent",
            // backgroundColor: "#F3F3F3",
            // border: "1px solid #C4C4C4",
            boxShadow: "none",
            padding: "0.3em 0.8em",
            "&: hover": {
                backgroundColor: "transparent",
                // backgroundColor: "#EDEDED",
                boxShadow: "none"
            }
            }}/>
    </Grid>
    </>
  )
}

export default ExamCheckboxesV2