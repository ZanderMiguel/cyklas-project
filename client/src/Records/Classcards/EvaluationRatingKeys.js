import React from 'react'
import { Grid, Box, Typography } from "@mui/material";

const dataRatingKeys = [
    {
        value: "1",
        label: "Unsatisfactory"
    },
    {
        value: "4",
        label: "Very Good"
    },
    {
        value: "2",
        label: "Fair"
    },
    {
        value: "5",
        label: "Excellent"
    },
    {
        value: "3",
        label: "Satisfactory"
    },
];

function EvaluationRatingKeys() {
  return (
    <>
    <Grid item xs = {5}
        sx = {{
            padding: "0.3em"
        }}>
            <Box
            sx = {{
                backgroundColor: "white",
                padding: "0.8em 1em",
                height:"8em",
                borderRadius:"0.3em"
            }}>
                <Typography children = "Rating Keys"
                sx = {{
                    fontSize: "1em",
                    fontWeight: "600",
                    color: "#3F3D56",
                    marginBottom: "0.9em"
                }}/>

                <Box
                sx = {{
                    width: "relative",
                    height: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.3em"
                }}>
                        {dataRatingKeys.map(function(items, index) {
                            return (
                                <Box
                                sx = {{
                                    width: "48%",
                                    height: "auto",
                                    display: "flex",
                                    gap: "0.8em",
                                    alignItems: "center"
                                }}> 
                                <Box key = {index}
                                sx = {{
                                    borderRadius: "5em",
                                    width: "1.5em",
                                    height: "1.5em",
                                    backgroundColor: "#007FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Typography children = {items.value}
                                    sx = {{
                                        color: "White",
                                        fontSize: "0.8em",
                                        fontWeight: "500"
                                    }}/>
                                </Box>

                                <Typography children = "="
                                    sx = {{
                                        color: "#3F3D56",
                                        fontSize: "0.8em",
                                        fontWeight: "500"
                                    }}/>

                                <Typography children = {items.label}
                                    sx = {{
                                        color: "#3F3D56",
                                        fontSize: "0.8em",
                                        fontWeight: "500"
                                    }}/>
                            </Box>
                            )
                        })}
                        
                </Box>
            </Box>
        </Grid>
    </>
  )
}

export default EvaluationRatingKeys