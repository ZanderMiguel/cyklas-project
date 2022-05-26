import React from 'react'
import { Container, Grid, Box, Typography, Button, Divider } from "@mui/material";
import useStyle from "./Styles/Exam_take_style";
import { Link } from "react-router-dom";
import { CheckCircleOutlined } from "@mui/icons-material";

function ExamSubmitted() {
  const {designs} = useStyle();

  return (
    <Container maxWidth = "md" sx = {{ padding: "2em 0em" }}>
        <Grid item xs={12} sx={designs.ExamTake_GridItem_Style}>
          <Typography sx={designs.ExamName_Typography_Style}>
            Untitled Exam
          </Typography>

          <Box className="container" sx={designs.Container_Style}>
            <Typography sx={designs.Instructions_Typography_Style}>
              No description.
            </Typography>

            <Divider sx={designs.Divider_Style} />

            <Box className="Exam-details" sx={designs.Exam_Details_Style}>
              <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item md={2} sm={6} xs={12}>
                  <Typography sx={designs.Items_Typography_Style}>
                    4 items
                  </Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <Box className="Points" sx={designs.Points_Style}>
                    <Typography sx={designs.OverallPoints_Typography_Style}>
                      Overall Points:
                    </Typography>

                    <Typography sx={designs.Points_Typography_Style}>
                      10 points
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={4} sm={6} xs={12}>
                  <Box className="DueDate" sx={designs.DueDate_Style}>
                    <Typography sx={designs.DueDate_Typography_Style}>
                      Due Date:
                    </Typography>

                    <Typography sx={designs.Date_Typography_Style}>
                      July 19, 2020
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <Box className="TimeLimit" sx={designs.TimeLimit_Style}>
                    <Typography sx={designs.TimeLimit_Typography_Style}>
                      Time Limit:
                    </Typography>

                    <Typography sx={designs.Time_Typography_Style}>
                      1 hour
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid item xs = {12}
        sx = {{
            marginTop: "0.8em",
            backgroundColor: "white",
            borderRadius: "0.3em",
            height: "auto",
            padding: "1em 1.5em 3em 1.5em",
            // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
        }}> 
            <Box
            sx = {{
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
                marginBottom: "0.5em"
            }}>
                <CheckCircleOutlined sx = {{ color: "#39BA45", fontSize: "2em" }}/>

                <Typography children = "You've successfully completed the Exam."
                sx = {{
                    color: "#39BA45",
                    fontSize: "1.3em",
                    fontWeight: "600",
                    height: "max-content"
                }}/>
            </Box>
            
            <Typography
            sx = {{
                color: "#8E8E8E",
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                marginBottom: "2em"
            }}>
            You will see your exam results in (Rooms > Activities > Exams), <br/>
            once your professor check and return it.
            </Typography>

            <Typography children = "Go to Feed for now."
            component = {Link}
            to = ""
            sx = {{
                color: "#007FFF",
                fontSize: "0.8em",
                fontWeight: "500",
                textDecoration: "underline",
                "&: hover": {
                    cursor: "pointer",
                    transition: "all 250ms"
                }
            }}/>
        </Grid>
    </Container>
  )
}

export default ExamSubmitted