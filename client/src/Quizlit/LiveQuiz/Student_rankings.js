import React from 'react';
import { Typography, Avatar, Box, Button, Divider, Container, Grid } from "@mui/material";
import AvatarIcon from "../../assets/ImageJaven/Avatar.png";
import Silver from "../../assets/ImageJaven/Silver.png";
import Gold from "../../assets/ImageJaven/Gold.png";
import Bronze from "../../assets/ImageJaven/Bronze.png";
import Dismiss from "../../assets/ImageJaven/Dismiss.png";
import Back from "../../assets/ImageJaven/Back.png";
import useStyle from './Student_rankings_style';

const data = [
    {
        studentName: "Paul Rudd",
        score: "3 / 3"
    },
    {
        studentName: "Tom Holland",
        score: "2 / 3"
    },
    {
        studentName: "Robert Downey Jr.",
        score: "2 / 3"
    },
    {
        studentName: "Tom Hiddleston",
        score: "1 / 3"
    },
    {
        studentName: "Sebastian Stan",
        score: "1 / 3"
    },
    {
        studentName: "Tom Holland",
        score: "2 / 3"
    },
    {
        studentName: "Robert Downey Jr.",
        score: "2 / 3"
    },
    {
        studentName: "Tom Hiddleston",
        score: "1 / 3"
    },
    {
        studentName: "Sebastian Stan",
        score: "1 / 3"
    },
    {
        studentName: "Tom Holland",
        score: "2 / 3"
    },
    {
        studentName: "Robert Downey Jr.",
        score: "2 / 3"
    },
    {
        studentName: "Tom Hiddleston",
        score: "1 / 3"
    },
    {
        studentName: "Sebastian Stan",
        score: "1 / 3"
    }
];
function Student_rankings() {
    
    const {designs} = useStyle()

  return (
        <Container maxWidth = "xl">
            <Grid container sx = {designs.GridContainer_Style}>
                <Grid item sm = {5} xs = {12}>
                    <Typography 
                    sx = {designs.StudentRakings_Typography_Style}>
                    Student Rankings   
                    </Typography>
                </Grid>

                <Grid item sm = {7} xs = {12} sx = {designs.BacktoConference_GridItem_Style}>
                    <Button variant="contained" startIcon={<img src = {Back}
                            style = {{
                                marginRight: "0.3em"
                            }}/>}
                            sx = {designs.Responsive_BacktoConference_Button_Style}>
                        Back to Conference
                    </Button>
                </Grid>

                <Grid item md = {8} xs = {12}>
                <Box className = "Top-students" sx = {designs.Top_Students_Style}>
                         <Typography 
                         sx = {designs.Congratulations_Typography_Style}>
                         Congratulations! 
                         </Typography>
                     

                    <Box className = "Top3-students" sx = {designs.Top3_Students_Style}>
                        <Box className = "Top2" sx = {designs.Top2_Style}>
                             <Avatar alt="Remy Sharp" src={AvatarIcon}
                            sx = {designs.AvatarIcon_Avatar_Style}/>

                            <Typography 
                                sx = {designs.TopStudentName_Typography_Style}>
                                Tom Holland
                            </Typography>

                            <Box className = "Place" sx = {designs.Place_Style}>
                                <img src = {Silver}
                                style = {{
                                    height: "2.5em"
                                }}/>

                                <Typography 
                                    sx = {designs.SecondPlace_Typography_Style}>
                                    2nd Place
                                </Typography>
                            </Box>
                        </Box>

                        <Box flexGrow = {1} sx = {designs.TopStudent_BoxFlexGrow_Style}/>

                        <Box className = "Top1" sx = {designs.Top1_Style}>
                            <Avatar alt="Remy Sharp" src={AvatarIcon}
                            sx = {{
                                height: "8em",
                                width: "8em"
                            }}/>

                            <Typography 
                                sx = {designs.TopStudentName_Typography_Style}>
                                Paul Rudd
                            </Typography>

                            <Box className = "Place" sx = {designs.Place_Style}>
                                <img src = {Gold}
                                style = {{
                                    height: "2.5em"
                                }}/>

                                <Typography 
                                    sx = {designs.FirstPlace_Typography_Style}>
                                    1st Place
                                </Typography>
                            </Box>
                        </Box>

                        <Box flexGrow = {1} sx = {designs.TopStudent_BoxFlexGrow_Style}/>

                        <Box className = "Top3" sx = {designs.Top3_Style}>
                            <Avatar alt="Remy Sharp" src={AvatarIcon}
                            sx = {{
                                height: "8em",
                                width: "8em"
                            }}/>

                            <Typography 
                                sx = {designs.TopStudentName_Typography_Style}>
                                Robert Downey Jr.
                            </Typography>

                            <Box className = "Place" sx = {designs.Place_Style}>
                                <img src = {Bronze}
                                style = {{
                                    height: "2.5em"
                                }}/>

                                <Typography 
                                    sx = {designs.ThirdPlace_Typography_Style}>
                                    3rd Place
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box className = "Top3-students" sx = {designs.Responsive_Top3_Students_Style}>
                        <Box className = "Top1" sx = {designs.ResponsiveTop_Style}>
                            <Avatar alt="Remy Sharp" src={AvatarIcon}
                            sx = {designs.AvatarIcon_Avatar_Style}/>

                            <Typography 
                                sx = {designs.TopStudentName_Typography_Style}>
                                Paul Rudd
                            </Typography>

                            <Box className = "Place" sx = {designs.Place_Style}>
                                <img src = {Gold}
                                style = {{
                                    height: "2.5em"
                                }}/>

                                <Typography 
                                    sx = {designs.FirstPlace_Typography_Style}>
                                    1st Place
                                </Typography>
                            </Box>
                        </Box>

                        <Box className = "Top2" sx = {designs.ResponsiveTop_Style}>
                             <Avatar alt="Remy Sharp" src={AvatarIcon}
                            sx = {designs.AvatarIcon_Avatar_Style}/>

                            <Typography 
                                sx = {designs.TopStudentName_Typography_Style}>
                                Tom Holland
                            </Typography>

                            <Box className = "Place" sx = {designs.Place_Style}>
                                <img src = {Silver}
                                style = {{
                                    height: "2.5em"
                                }}/>

                                <Typography 
                                    sx = {designs.SecondPlace_Typography_Style}>
                                    2nd Place
                                </Typography>
                            </Box>
                        </Box>

                        <Box className = "Top3" sx = {designs.ResponsiveTop_Style}>
                            <Avatar alt="Remy Sharp" src={AvatarIcon}
                            sx = {designs.AvatarIcon_Avatar_Style}/>

                            <Typography 
                                sx = {designs.TopStudentName_Typography_Style}>
                                Robert Downey Jr.
                            </Typography>

                            <Box className = "Place" sx = {designs.Place_Style}>
                                <img src = {Bronze}
                                style = {{
                                    height: "2.5em"
                                }}/>

                                <Typography 
                                    sx = {designs.ThirdPlace_Typography_Style}>
                                    3rd Place
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                </Grid>

                <Grid item md = {4} xs = {12} sx = {designs.StudentList_GridItem_Style}>
                <Box className = "Result" sx = {designs.Result_Style}>
                    <Box className = "Heading" sx = {designs.Heading_Style}>
                        <Typography 
                            sx = {designs.StudentName_Typography_Style}>
                            Student Name
                        </Typography>

                        <Box flexGrow = {1} sx = {designs.StudenList_BoxFlexGrow_Style}/>

                        <Typography 
                            sx = {designs.Score_Typography_Style}>
                            Score
                        </Typography>
                    </Box>

                    <Box className = "Student-container" sx = {designs.Student_Container_Style}>
                        {data.map(function(items, index) {
                            return (
                                <>
                                <Box key = {index} className = "Student" 
                                sx = {designs.Student_Style}>
                                <Avatar alt="Remy Sharp" src={AvatarIcon} 
                                    sx = {designs.StudentList_AvatarIcon_Avatar_Style}/>
                                <Typography noWrap
                                    sx = {designs.StudentList_StudentName_Typography_Style}>
                                    {items.studentName}
                                </Typography>  
                                
                                <Box flexGrow = {1} sx = {designs.StudentList_BoxFlexGrow_Style2} />

                                {/* <Typography
                                    sx={{
                                        width: "25%",
                                        height: "relative",
                                        textTransform: "Capitalize",
                                        textAlign: "Center",
                                        fontSize: "0.8em",
                                        fontWeight: "500",
                                        color: "#F9A826",
                                        margin: "0em 0.2em 0em 0em",
                                        padding: "1.2em 0em 0em 0em",
                                        border: "1px solid black"
                                    }}>
                                    {items.status}
                                </Typography>   */}

                                <Typography noWrap
                                    sx = {designs.StudentList_Score_Typography_Style}>
                                    {items.score}
                                </Typography>         
                                </Box>
                                <Divider sx = {designs.StudentList_Divider_Style}/>
                                </>
                            )
                        })}
                            
                    </Box>
                </Box>
                </Grid>

                <Grid item md = {8} xs = {12} sx = {designs.Buttons_GridItem_Style}>
                <Box className = "Buttons" sx = {designs.Buttons_Style}>
                <Button variant="contained" startIcon={<img src = {Back}
                        style = {{
                            marginRight: "0.3em"
                        }}/>}
                        sx = {designs.BacktoConference_Button_Style}>
                    Back to Conference
                </Button>

                <Box flexGrow = {1} sx = {designs.Buttons_BoxFlexGrow_Style}/>

                <Button variant="contained" startIcon={<img src = {Dismiss}
                        style = {{
                            height: "1.1em",
                            marginRight: "0.3em"
                        }}/>}
                        sx = {designs.DismissClass_Button_Style}>
                    Dismiss Class
                </Button>

                <Box flexGrow = {1} sx = {designs.Buttons_BoxFlexGrow_Style2}/>

                </Box>
                </Grid>
            </Grid>
        </Container>
       
  )
}

export default Student_rankings;
