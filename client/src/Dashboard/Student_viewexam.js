import React from 'react'
import { Container, Grid, Box, Typography, Divider, Input, Checkbox } from "@mui/material";
import ExamIcon from "../assets/ImageJaven/ExamIcon.png";
import useStyle from "./Styles/Student_viewexam_style";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Student_viewexam() {
    const {designs} = useStyle();

  return (
    <Container maxWidth = "md">
        <Grid container>
            <Grid item xs = {12} sx = {designs.Right_Container_GridItem_Style}>
                    <Box className = "Right-container" sx = {designs.Right_Container_Style}>
                        <Box className = "Header" sx = {designs.Header_Style}>
                            <Box className = "Icon-Exam" sx = {designs.Icon_Exam_Style}>
                                <img
                                    src={ExamIcon}
                                    alt="ExamIcon"
                                    style={{
                                    height: '2em',
                                    marginTop: "0.2em"
                                    }}/>
                                <Typography sx = {designs.Exam_Typography_Style}>
                                    Variables
                                </Typography>
                            </Box>
                           

                            <Box flexGrow = {1} sx = {designs.BoxFlexGrowHeader_Style}/>

                            <Box className = "Professor-Date" sx = {designs.Professor_Date_Style}>
                                <Typography sx = {designs.Professor_Typography_Style}>
                                    Mark Andrei
                                </Typography>

                                <Typography sx = {designs.Date_Typography_Style}>
                                    returned this exam on December 10, 2021 at 10:00 PM
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx = {designs.DividerRight_Style}/>

                        <Box className = "Responsive" sx = {designs.Responsive_Style}>

                        </Box>
                            
                        <Box className = "Instructions-Score" sx = {designs.Instructions_Score_Style}>
                            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Responsive_Style}/>

                            <Typography sx = {designs.ScoreText_Responsive_Typography_Style}>
                                Score:
                            </Typography>

                            <Typography sx = {designs.Score_Responsive_Typography_Style}>
                                6 / 6
                            </Typography>
                            
                            <Typography sx = {designs.Instructions_Typography_Style}>
                                No description.
                            </Typography>

                            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                            <Typography sx = {designs.ScoreText_Typography_Style}>
                                Score:
                            </Typography>

                            <Typography sx = {designs.Score_Typography_Style}>
                                6 / 6
                            </Typography>
                        </Box>
                        

                        <Box className = "Exam-sheet" sx = {designs.Exam_Sheet_Style}>
                        <Box className = "Item-1" sx = {designs.Item_Style}>

                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography  sx = {designs.Item_Typography_Style}>
                                1.
                                </Typography>

                                <Typography sx = {designs.Item_Question_Typography_Style}>
                                What is my favorite food?
                                </Typography>

                                <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                                <Typography
                                sx = {designs.Points_Typography_Style}>
                                2
                                </Typography>

                                <Typography
                                sx = {designs.PointsText_Typography_Style}>
                                points
                                </Typography>
                            </Box>
                            
                            <Box className = "Choices" sx = {designs.Choices_Style}>
                                <Box className = "Choice-a" sx = {designs.ChoiceA_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    A.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-b" sx = {designs.ChoiceB_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    B.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-c" sx = {designs.ChoiceC_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    C.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-d" sx = {designs.ChoiceD_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    D.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx = {designs.CorrectAnswer_Typography_Style}>
                                Correct Answer: C
                            </Typography>
                            
                        </Box>
                        
                        <Box className = "Item-2" sx = {designs.Item_Style}>

                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography sx = {designs.Item_Typography_Style}>
                                2.
                                </Typography>

                                <Typography sx = {designs.Item_Question_Typography_Style}>
                                What is your wish for Christmas?
                                </Typography>

                                <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                                <Typography
                                sx = {designs.Points_Typography_Style}>
                                2
                                </Typography>

                                <Typography
                                sx = {designs.PointsText_Typography_Style}>
                                points
                                </Typography>
                            </Box>
                            
                            <Box className = "Short-answer" sx = {designs.Choices_Style}> 
                                <Input
                                    variant="standard"
                                    multiline
                                    fullWidth
                                    rows={6}
                                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
                                    disableUnderline
                                    readOnly
                                    sx={designs.Essay_Input_Style}/>  
                            </Box> 
                        </Box>
                        
                        <Box className = "Item-3" sx = {designs.Item_Style}>

                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography sx = {designs.Item_Typography_Style}>
                                3.
                                </Typography>

                                <Typography sx = {designs.Item_Question_Typography_Style}>
                                What is my favorite food?
                                </Typography>

                                <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                                <Typography
                                sx = {designs.Points_Typography_Style}>
                                2
                                </Typography>

                                <Typography
                                sx = {designs.PointsText_Typography_Style}>
                                points
                                </Typography>
                            </Box>
                            
                            <Box className = "Choices" sx = {designs.Choices_Style}>
                                <Box className = "Choice-1" sx = {designs.Choice1_Style}>
                                    <Checkbox {...label} disabled checked 
                                    sx = {designs.Checkbox_Style}/>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-2" sx = {designs.Choice2_Style}>
                                <Checkbox {...label} disabled 
                                   sx = {designs.Checkbox_Style}/>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-3" sx = {designs.Choice3_Style}>
                                <Checkbox {...label} disabled checked 
                                    sx = {designs.Checkbox_Style}/>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>

                                <Box className = "Choice-4" sx = {designs.Choice4_Style}>
                                <Checkbox {...label} disabled checked 
                                    sx = {designs.Checkbox_Style}/>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    Blank Answer
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx = {designs.CorrectAnswer_Typography_Style}>
                                Correct Answer: Option1, Option3, Option4
                            </Typography>
                            
                        </Box>

                    </Box>

                    <Divider sx = {designs.DividerRight_Style}/>

                    <Typography sx = {designs.Graded_Typography_Style}>
                        Graded
                    </Typography>

                    </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Student_viewexam