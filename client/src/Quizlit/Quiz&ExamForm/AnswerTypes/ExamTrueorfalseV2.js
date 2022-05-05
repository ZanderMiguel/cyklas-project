import React from 'react'
import { Grid, Box, Typography, IconButton, Button, Tooltip } from "@mui/material";
import { CheckOutlined, Add } from "@mui/icons-material";

function ExamTrueorfalseV2() {
const [selectCorrectAnswerTrue, setSelectCorrectAnswerTrue] = React.useState(false);
  const [selectCorrectAnswerFalse, setSelectCorrectAnswerFalse] = React.useState(false);

  const handleClickCorrectAnswerTrue = () => {
    setSelectCorrectAnswerTrue((prev) => !prev);
    setSelectCorrectAnswerFalse(false);
  };
  const handleClickCorrectAnswerFalse = () => {
    setSelectCorrectAnswerFalse((prev) => !prev);
    setSelectCorrectAnswerTrue(false);
  };

  const dataAnswers = [
    {
        choice: "A.",
        choiceAnswer: "True",
        correctAnswer: <Box onClick={handleClickCorrectAnswerTrue}
                        sx = {{ borderRadius: "0.2em", height: "auto", width: "auto" }}>
                            {!selectCorrectAnswerTrue ? (
                                <Tooltip title = "Select this to be the correct answer" placement = "right">
                                <IconButton
                                sx = {{
                                borderRadius: "0.2em",
                                border: "1px solid #DBDBDB",
                                backgroundColor: "#FCFCFC",
                                }}>
                                    <CheckOutlined sx = {{ fontSize: "0.7em" }}/>
                                </IconButton>
                                </Tooltip>
                            )
                            :
                            (
                                <Tooltip title = "Remove selection" placement = "right">
                                <IconButton
                                sx = {{
                                borderRadius: "0.2em",
                                border: "1px solid transparent",
                                backgroundColor: "#007FFF",
                                color: "white",
                                "&: hover": {
                                    backgroundColor: "#007FFF",
                                    color: "white",
                                }
                                }}>
                                    <CheckOutlined sx = {{ fontSize: "0.7em" }}/>
                                </IconButton>
                                </Tooltip>
                            )
                            }
                        </Box>
    },
    {
        choice: "B.",
        choiceAnswer: "False",
        correctAnswer: <Box onClick={handleClickCorrectAnswerFalse}
                        sx = {{ borderRadius: "0.2em", height: "auto", width: "auto" }}>
                            {!selectCorrectAnswerFalse ? (
                                <Tooltip title = "Select this to be the correct answer" placement = "right">
                                <IconButton
                                sx = {{
                                borderRadius: "0.2em",
                                border: "1px solid #DBDBDB",
                                backgroundColor: "#FCFCFC",
                                }}>
                                    <CheckOutlined sx = {{ fontSize: "0.7em" }}/>
                                </IconButton>
                                </Tooltip>
                            )
                            :
                            (
                                <Tooltip title = "Remove selection" placement = "right">
                                <IconButton
                                sx = {{
                                borderRadius: "0.2em",
                                border: "1px solid transparent",
                                backgroundColor: "#007FFF",
                                color: "white",
                                "&: hover": {
                                    backgroundColor: "#007FFF",
                                    color: "white",
                                }
                                }}>
                                    <CheckOutlined sx = {{ fontSize: "0.7em" }}/>
                                </IconButton>
                                </Tooltip>
                            )
                            }
                        </Box>
    }
    ];

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
                                        
                            <Typography children = {items.choiceAnswer}
                                sx = {{
                                width: "100%",
                                height: "auto",
                                fontSize: "0.8em",
                                fontWeight: "500",
                                color: "#3F3D56"
                                }}/>
                    </Box>
                                
                    {items.correctAnswer}
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

export default ExamTrueorfalseV2