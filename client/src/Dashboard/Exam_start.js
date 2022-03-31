import React, { useState } from 'react'
import { Container, Grid, Box, Typography, Button, Divider, Input, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import ExamIconButton from "../assets/ImageJaven/ExamIconButton.png";
import Image from "../assets/ImageJaven/Image.png";
import ExamIcon from "../assets/ImageJaven/ExamIcon.png";
import { TimerOutlined } from '@mui/icons-material';
import useStyle from "./Styles/Exam_start_style";
import "./Styles/Exam_start_stylesheet.css";

function Exam_start() {
    const {designs} = useStyle();

    const [answerButtonToggleA, setAnswerButtonToggleA] = useState(true);
    const [answerButtonToggleB, setAnswerButtonToggleB] = useState(true);
    const [answerButtonToggleC, setAnswerButtonToggleC] = useState(true);
    const [answerButtonToggleD, setAnswerButtonToggleD] = useState(true);

    const [answerButtonToggleTrue, setAnswerButtonToggleTrue] = useState(true);
    const [answerButtonToggleFalse, setAnswerButtonToggleFalse] = useState(true);

    const handleClickA = () => {
        setAnswerButtonToggleA((prev) => !prev);
        setAnswerButtonToggleB(true);
        setAnswerButtonToggleC(true);
        setAnswerButtonToggleD(true);
    };
    const handleClickB = () => {
        setAnswerButtonToggleB((prev) => !prev);
        setAnswerButtonToggleA(true);
        setAnswerButtonToggleC(true);
        setAnswerButtonToggleD(true);
    };
    const handleClickC = () => {
        setAnswerButtonToggleC((prev) => !prev);
        setAnswerButtonToggleA(true);
        setAnswerButtonToggleB(true);
        setAnswerButtonToggleD(true);
    };
    const handleClickD = () => {
        setAnswerButtonToggleD((prev) => !prev);
        setAnswerButtonToggleA(true);
        setAnswerButtonToggleB(true);
        setAnswerButtonToggleC(true);
    };

    const handleClickTrue = () => {
        setAnswerButtonToggleTrue((prev) => !prev);
        setAnswerButtonToggleFalse(true);
    };
    const handleClickFalse = () => {
        setAnswerButtonToggleFalse((prev) => !prev);
        setAnswerButtonToggleTrue(true);
    };

  return (
    <Container maxWidth = "md">
        <Grid container rowSpacing = {1}>
            <Grid item xs = {12} sx = {designs.Timer_GridItem_Style}>
                <Box className = "Timer-main" sx = {designs.TimerMain_Style}>
                    <Box className = "Timer" sx = {designs.Timer_Style}>
                        <TimerOutlined sx = {designs.TimerOutlinedIcon_Style}/>
                        <Typography sx = {designs.Timer_Typography_Style}>
                            00h 59m 57s
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs = {12} sx = {designs.ExamName_GridItem_Style}>
                <Box className = "Header" sx = {designs.Header_Style}>
                    <Box className = "Icon-Quiz" sx = {designs.Exam_DueDateTerm_Style}>
                        <img
                            src={ExamIcon}
                            alt="ExamIcon"
                            style={{
                            height: '2em',
                            marginTop: "0.2em"
                            }}/>
                        <Typography sx = {designs.Exam_Typography_Style}>
                        Preliminary Exam
                        </Typography>
                    </Box>
                   

                    <Box flexGrow = {1} sx = {designs.BoxFlexGrowHeader_Style}/>

                    <Box className = "DueDate-Term" sx = {designs.DueDate_Term_Style}>
                            <Box className = "DueDate_Style" sx = {designs.DueDate_Style}>
                                <Typography sx = {designs.DueDate_Typography_Style}>
                                    Due Date:
                                </Typography>

                                <Typography sx = {designs.Date_Typography_Style}>
                                    December 12, 2021
                                </Typography>
                            </Box>

                            <Box className = "Term" sx = {designs.Term_Style}>
                                <Typography sx = {designs.TermText_Typography_Style}>
                                    Term:
                                </Typography>

                                <Typography sx = {designs.Term_Typography_Style}>
                                    No set term
                                </Typography>
                            </Box>
                    </Box>
                </Box>

                <Divider sx = {designs.DividerRight_Style}/>

                <Typography sx = {designs.Instructions_Typography_Style}>
                    No description.
                </Typography>
            </Grid>

            <Grid item xs = {12} sx = {designs.Question_GridItem_Style}>
                <Box className = "Type-points" sx = {designs.Type_Points_Style}>
                    <Typography sx = {designs.Type_Typography_Style}>
                        Multiple Choice
                    </Typography>

                    <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                    <Typography sx = {designs.Points_Typography_Style}>
                    2 points
                    </Typography>
                </Box>

                <Box className = "Question-body" sx = {designs.Question_Body_Style}>
                    <Box className = "Question-container" sx = {designs.Question_Container_Style}>
                        <Box className = "Question" sx = {designs.Question_Style}>
                            <Typography sx = {designs.Item_Typography_Style}>
                                1.
                            </Typography>

                            <Typography sx = {designs.Question_Typography_Style}>
                                1 + 1 is equal to?
                            </Typography>
                        </Box>

                        <Divider sx = {designs.Divider_Style}/>
                        
                        <Box className = "Image-container" sx = {designs.Image_Container_Responsive_Style}>
                            <img
                            src={Image}
                            alt="Image"
                            style={{
                            height: '5.5em'
                            }}/>
                        </Box>

                        <Box className = "Choices" sx = {designs.Choices_Style}>
                            <Box className = "Answer-a"
                            onClick={handleClickA}
                            // sx={designs.Answer_A_Style}
                            >

                            {!answerButtonToggleA ? (
                                <Box className = "Answer-a" sx={designs.Answer_AT_Style}>
                                <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerA_Typography_Style}>
                                        A.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                6
                                </Typography>
                                </Box>
                            ) : (
                                <Typography sx={designs.AnswerAF_Typography_Style}>
                                    A. &nbsp;&nbsp; &nbsp; 6
                                </Typography>

                                // <Box className = "Answer-a" sx={designs.Answer_AF_Style}>
                                // <Typography sx={designs.AnswerAF_Typography_Style}>
                                //     A.
                                // </Typography>

                                // <Typography noWrap sx={designs.AnswerAF_Typography_Style}>
                                // Blank Answer
                                // </Typography>
                                // </Box>
                            )} 

                                {/* <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerA_Typography_Style}>
                                        A.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                Blank Answer
                                </Typography> */}
                            </Box>

                            <Box className = "Answer-b"
                            onClick={handleClickB}
                            // sx={designs.Answer_B_Style}
                            >
                            {!answerButtonToggleB ? (
                                <Box className = "Answer-d" sx={designs.Answer_BT_Style}>
                                <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerB_Typography_Style}>
                                        B.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                1
                                </Typography>
                                </Box>
                            ) : (
                                <Typography sx={designs.AnswerBF_Typography_Style}>
                                    B. &nbsp;&nbsp; &nbsp; 1
                                </Typography>
                            )} 

                                {/* <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerB_Typography_Style}>
                                        B.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                Blank Answer
                                </Typography> */}
                            </Box>

                            <Box className = "Answer-c"
                            onClick={handleClickC}
                            // sx={designs.Answer_C_Style}
                            >
                            {!answerButtonToggleC ? (
                                <Box className = "Answer-c" sx={designs.Answer_CT_Style}>
                                <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerC_Typography_Style}>
                                        C.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                2
                                </Typography>
                                </Box>
                            ) : (
                                <Typography sx={designs.AnswerCF_Typography_Style}>
                                    C. &nbsp;&nbsp; &nbsp; 2
                                </Typography>
                            )} 

                                {/* <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerC_Typography_Style}>
                                        C.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                Blank Answer
                                </Typography> */}
                            </Box>

                            <Box className = "Answer-d"
                            onClick={handleClickD}
                            // sx={designs.Answer_D_Style}
                            >
                            {!answerButtonToggleD ? (
                                <Box className = "Answer-d" sx={designs.Answer_DT_Style}>
                                <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerD_Typography_Style}>
                                        D.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                3
                                </Typography>
                                </Box>
                            ) : (
                                <Typography sx={designs.AnswerDF_Typography_Style}>
                                    D. &nbsp;&nbsp; &nbsp; 3
                                </Typography>
                            )} 
                                {/* <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerD_Typography_Style}>
                                        D.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                Blank Answer
                                </Typography> */}
                            </Box>
                        </Box>
                    </Box>
                        
                    <Box className = "Image-container" sx = {designs.Image_Container_Style}>
                        <img
                        src={Image}
                        alt="Image"
                        style={{
                        height: '6.5em'
                        }}/>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs = {12} sx = {designs.Question_GridItem_Style}>
                <Box className = "Type-points" sx = {designs.Type_Points_Style}>
                    <Typography sx = {designs.Type_Typography_Style}>
                        Short Answer
                    </Typography>

                    <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                    <Typography sx = {designs.Points_Typography_Style}>
                    2 points
                    </Typography>
                </Box>

                <Box className = "Question-body" sx = {designs.Question_Body_Style}>
                    <Box className = "Question-container" sx = {designs.Question_Container_Style}>
                        <Box className = "Question" sx = {designs.Question_Style}>
                            <Typography sx = {designs.Item_Typography_Style}>
                                2.
                            </Typography>

                            <Typography sx = {designs.Question_Typography_Style}>
                                What is your wish for Christmas?
                            </Typography>
                        </Box>

                        <Divider sx = {designs.Divider_Style}/>

                        <Box className = "Image-container" sx = {designs.Image_Container_Responsive_Style}>
                            <img
                            src={Image}
                            alt="Image"
                            style={{
                            height: '5.5em'
                            }}/>
                        </Box>

                        <Box className = "Choices" sx = {designs.Choices_Style}>
                            <Input
                            variant="standard"
                            multiline
                            fullWidth
                            rows={6}
                            placeholder="Type your answer here..."
                            sx={designs.ShortAnswer_Input_Style}/>  
                        </Box>
                    </Box>
                        
                    <Box className = "Image-container" sx = {designs.Image_Container_Style}>
                        <img
                        src={Image}
                        alt="Image"
                        style={{
                        height: '6.5em'
                        }}/>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs = {12} sx = {designs.Question_GridItem_Style}>
                <Box className = "Type-points" sx = {designs.Type_Points_Style}>
                    <Typography sx = {designs.Type_Typography_Style}>
                        Checkboxes
                    </Typography>

                    <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                    <Typography sx = {designs.Points_Typography_Style}>
                        2 points
                    </Typography>
                </Box>

                <Box className = "Question-body" sx = {designs.Question_Body_Style}>
                    <Box className = "Question-container" sx = {designs.Question_Container_Style}>
                        <Box className = "Question" sx = {designs.Question_Style}>
                            <Typography sx = {designs.Item_Typography_Style}>
                                3.
                            </Typography>

                            <Typography sx = {designs.Question_Typography_Style}>
                                Which of these animals are reptiles?
                            </Typography>
                        </Box>

                        <Divider sx = {designs.Divider_Style}/>

                        <Box className = "Image-container" sx = {designs.Image_Container_Responsive_Style}>
                            <img
                            src={Image}
                            alt="Image"
                            style={{
                            height: '5.5em'
                            }}/>
                        </Box>

                        <Box className = "Choices" sx = {designs.Choices_Style}>
                            <Box className = "Option1"
                            sx={designs.Answer_A_Style}>
                                <Checkbox sx = {designs.Checkbox_Style}/>

                                <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                                Snake
                                </Typography>
                            </Box>

                            <Box className = "Option2"
                            sx={designs.Answer_B_Style}>
                                <Checkbox sx = {designs.Checkbox_Style}/>

                                <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                                Monkey
                                </Typography>
                            </Box>

                            <Box className = "Option3"
                            sx={designs.Answer_C_Style}>
                                <Checkbox sx = {designs.Checkbox_Style}/>

                                <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                                Turtle
                                </Typography>
                            </Box>

                            <Box className = "Option4"
                            sx={designs.Answer_D_Style}>
                                <Checkbox sx = {designs.Checkbox_Style}/>

                                <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                                Lizard
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                        
                    <Box className = "Image-container" sx = {designs.Image_Container_Style}>
                        <img
                        src={Image}
                        alt="Image"
                        style={{
                        height: '6.5em'
                        }}/>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs = {12} sx = {designs.Question_GridItem_Style}>
                <Box className = "Type-points" sx = {designs.Type_Points_Style}>
                    <Typography sx = {designs.Type_Typography_Style}>
                        True or False
                    </Typography>

                    <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                    <Typography sx = {designs.Points_Typography_Style}>
                    2 points
                    </Typography>
                </Box>

                <Box className = "Question-body" sx = {designs.Question_Body_Style}>
                    <Box className = "Question-container" sx = {designs.Question_Container_Style}>
                        <Box className = "Question" sx = {designs.Question_Style}>
                            <Typography sx = {designs.Item_Typography_Style}>
                                4.
                            </Typography>

                            <Typography sx = {designs.Question_Typography_Style}>
                                Pizza is better with Pineapple.
                            </Typography>
                        </Box>

                        <Divider sx = {designs.Divider_Style}/>

                        <Box className = "Image-container" sx = {designs.Image_Container_Responsive_Style}>
                            <img
                            src={Image}
                            alt="Image"
                            style={{
                            height: '5.5em'
                            }}/>
                        </Box>

                        <Box className = "Choices" sx = {designs.Choices_Style}>
                            <Box className = "Answer-a"
                            onClick={handleClickTrue}
                            // sx={designs.Answer_A_Style}
                            >
                            {!answerButtonToggleTrue ? (
                                <Box className = "Answer-a" sx={designs.Answer_AT_Style}>
                                    <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                        <Typography sx={designs.AnswerA_Typography_Style}>
                                            A.
                                        </Typography>
                                    </Box>

                                    <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                    True
                                    </Typography>
                                </Box>
                            ) : (
                                <Typography sx={designs.AnswerAF_Typography_Style}>
                                    A. &nbsp;&nbsp; &nbsp; True
                                </Typography>
                            )} 
                                {/* <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerA_Typography_Style}>
                                        A.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                True
                                </Typography> */}
                            </Box>

                            <Box className = "Answer-b"
                            onClick={handleClickFalse}
                            // sx={designs.Answer_B_Style}
                            >
                            {!answerButtonToggleFalse ? (
                                <Box className = "Answer-b" sx={designs.Answer_BT_Style}>
                                    <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                        <Typography sx={designs.AnswerB_Typography_Style}>
                                            B.
                                        </Typography>
                                    </Box>

                                    <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                    False
                                    </Typography>
                                </Box>
                            ) : (
                                <Typography sx={designs.AnswerBF_Typography_Style}>
                                    B. &nbsp;&nbsp; &nbsp; False
                                </Typography>
                            )} 
                                {/* <Box className = "Quiz-item" sx = {designs.Exam_Item_Style}>
                                    <Typography sx={designs.AnswerB_Typography_Style}>
                                        B.
                                    </Typography>
                                </Box>

                                <Typography noWrap sx={designs.Answer_Typography2_Style}>
                                False
                                </Typography> */}
                            </Box>
                        </Box>
                    </Box>
                        
                    <Box className = "Image-container" sx = {designs.Image_Container_Style}>
                        <img
                        src={Image}
                        alt="Image"
                        style={{
                        height: '6.5em'
                        }}/>
                    </Box>
                </Box>
            </Grid>

            {/* <Grid item xs = {12} sx = {designs.Question_GridItem_Style}>
                <Box className = "Type-points" sx = {designs.Type_Points_Style}>
                    <Typography sx = {designs.Type_Typography_Style}>
                        Enumeration
                    </Typography>

                    <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                    <Typography sx = {designs.Points_Typography_Style}>
                    2 points
                    </Typography>
                </Box>

                <Box className = "Question-body" sx = {designs.Question_Body_Style}>
                    <Box className = "Question-container" sx = {designs.Question_Container_Style}>
                        <Box className = "Question" sx = {designs.Question_Style}>
                            <Typography sx = {designs.Item_Typography_Style}>
                                5.
                            </Typography>

                            <Typography sx = {designs.Question_Typography_Style}>
                                What are the 4 cardinal directions?
                            </Typography>
                        </Box>

                        <Divider sx = {designs.Divider_Style}/>

                        <Box className = "Choices" sx = {designs.Choices_Style}>
                            <Input
                            variant="standard"
                            fullWidth
                            placeholder="Type your answer here..."
                            sx={designs.ShortAnswer_Input_Style}/>  

                            <Input
                            variant="standard"
                            fullWidth
                            placeholder="Type your answer here..."
                            sx={designs.ShortAnswer_Input_Style}/> 

                            <Input
                            variant="standard"
                            fullWidth
                            placeholder="Type your answer here..."
                            sx={designs.ShortAnswer_Input_Style}/> 

                            <Input
                            variant="standard"
                            fullWidth
                            placeholder="Type your answer here..."
                            sx={designs.ShortAnswer_Input_Style}/> 
                        </Box>
                    </Box>
                        
                    <Box className = "Image-container" sx = {designs.Image_Container_Style}>
                        <img
                        src={Image}
                        alt="Image"
                        style={{
                        height: '6.5em'
                        }}/>
                    </Box>
                </Box>
            </Grid> */}

            <Grid item xs = {12}>
                <Box className = "Button" sx = {designs.Button_Style}>
                
                <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

                <Button sx={designs.SubmitExam_Button_Style}>
                    Submit
                </Button>

                </Box>
                
            </Grid>
        </Grid>
    </Container>
  )
}

export default Exam_start;