import React from 'react'
import { Container, Grid, Box, Typography, Divider, Input, Checkbox } from "@mui/material";
import QuizIcon from "../../../../assets/ImageJaven/QuizIcon.png";
import Image from "../../../../assets/ImageJaven/Image.png";
import useStyle from "./Styles/Quiz_viewed_style";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Quiz_viewed() {
    const {designs} = useStyle();

  return (
    <Container maxWidth = "md">
        <Grid container>
            <Grid item xs = {12}>
                <Typography sx = {designs.Graded_Typography_Style}>
                    Graded
                </Typography>
            </Grid>
            
            <Grid item xs = {12} sx = {designs.Right_Container_GridItem_Style}>
                    <Box className = "Right-container" sx = {designs.Right_Container_Style}>
                        <Box className = "Header" sx = {designs.Header_Style}>
                            <Box className = "Icon-Quiz" sx = {designs.Icon_Quiz_Style}>
                                <img
                                    src={QuizIcon}
                                    alt="QuizIcon"
                                    style={{
                                    height: '2em',
                                    marginTop: "0.2em"
                                    }}/>
                                <Typography sx = {designs.Quiz_Typography_Style}>
                                    Variables
                                </Typography>
                            </Box>
                           

                            <Box flexGrow = {1} sx = {designs.BoxFlexGrowHeader_Style}/>

                            <Box className = "Professor-Date" sx = {designs.Professor_Date_Style}>
                                <Typography sx = {designs.Professor_Typography_Style}>
                                    Mark Andrei
                                </Typography>

                                <Typography sx = {designs.Date_Typography_Style}>
                                    returned this quiz on December 10, 2021 at 10:00 PM
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
                                8 / 8
                            </Typography>
                            
                            <Typography sx = {designs.Instructions_Typography_Style}>
                                Please read the questions carefully.
                            </Typography>

                            <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                            <Typography sx = {designs.ScoreText_Typography_Style}>
                                Score:
                            </Typography>

                            <Typography sx = {designs.Score_Typography_Style}>
                                8 / 8
                            </Typography>
                        </Box>
                        

                        <Box className = "Quiz-sheet" sx = {designs.Quiz_Sheet_Style}>
                        <Box className = "Item-1" sx = {designs.Item_Style}>

                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography  sx = {designs.Item_Typography_Style}>
                                1.
                                </Typography>

                                <Typography sx = {designs.Item_Question_Typography_Style}>
                                1 + 1 is equal to?
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
                                    6
                                    </Typography>
                                </Box>

                                <Box className = "Choice-b" sx = {designs.ChoiceB_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    B.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    1
                                    </Typography>
                                </Box>

                                <Box className = "Choice-c" sx = {designs.ChoiceC_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    C.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    2
                                    </Typography>
                                </Box>

                                <Box className = "Choice-d" sx = {designs.ChoiceD_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    D.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    3
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
                                Which of the following animals is Amphibian?
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
                            
                            <Box className = "Choices" sx = {designs.ChoicesImageA_Style}>
                                <Box className = "Choice-a" sx = {designs.ChoiceImage1_Style}>
                                    <img
                                    src={Image}
                                    alt="Image"
                                    style={{
                                    height: '3em'
                                    }}/>
                                </Box>

                                <Box className = "Choice-b" sx = {designs.ChoiceImage2_Style}>
                                    <img
                                    src={Image}
                                    alt="Image"
                                    style={{
                                    height: '3em'
                                    }}/>
                                </Box>
                            </Box>

                            <Box className = "Choices" sx = {designs.ChoicesImageB_Style}>
                                <Box className = "Choice-c" sx = {designs.ChoiceImage3_Style}>
                                    <img
                                    src={Image}
                                    alt="Image"
                                    style={{
                                    height: '3em'
                                    }}/>
                                </Box>

                                <Box className = "Choice-d" sx = {designs.ChoiceImage4_Style}>
                                    <img
                                    src={Image}
                                    alt="Image"
                                    style={{
                                    height: '3em'
                                    }}/>
                                </Box>
                            </Box> 

                            <Typography sx = {designs.CorrectAnswer_Typography_Style}>
                                Correct Answer: Image #4
                            </Typography>
                        </Box>
                        
                        <Box className = "Item-2" sx = {designs.Item_Style}>

                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography sx = {designs.Item_Typography_Style}>
                                3.
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
                                    sx={designs.ShortAnswer_Input_Style}/>  
                            </Box> 
                        </Box>
                        
                        <Box className = "Item-3" sx = {designs.Item_Style}>

                            <Box className = "Question" sx = {designs.Question_Style}>
                                <Typography sx = {designs.Item_Typography_Style}>
                                4.
                                </Typography>

                                <Typography sx = {designs.Item_Question_Typography_Style}>
                                Pizza is better with Pineapple.
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
                                <Box className = "Choice-a" sx = {designs.ChoiceTrue_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    A.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    True
                                    </Typography>
                                </Box>

                                <Box className = "Choice-b" sx = {designs.ChoiceFalse_Style}>
                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    B.
                                    </Typography>

                                    <Typography sx = {designs.Choice_Typography_Style}>
                                    False
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx = {designs.CorrectAnswer_Typography_Style}>
                                Correct Answer: True
                            </Typography>
                            
                        </Box>

                    </Box>
                    </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Quiz_viewed