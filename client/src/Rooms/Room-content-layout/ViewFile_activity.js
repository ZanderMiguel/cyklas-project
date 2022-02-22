import React from 'react';
import {Box, Typography, Checkbox, Container, Grid, Avatar, Autocomplete, TextField, FormControlLabel, IconButton, Button, InputAdornment, Divider} from '@mui/material';
import AvatarIcon from "../../assets/ImageJaven/Avatar.png";
import Wordfile from "../../assets/ImageJaven/Wordfile.png";
import {KeyboardArrowDown, Send} from '@mui/icons-material';
import useStyle from '../View_activity_style';
import "../View_activity_style.css";

const sortOptions = [
  { 
      label: 'First name'
  },
  { 
      label: 'Last name'
  },
  { 
      label: 'Submitted'
  },
  { 
      label: 'Missing'
  }
]

const data = [
  {
    studentName: "Paul Rudd",
    score: "100/100"  
  },
  {
      studentName: "Tom Hiddleston",
      score: "100/100"  
  },
  {
      studentName: "Tom Holland",
      score: "100/100"  
  },
  {
      studentName: "Sebastian Stan",
      score: "100/100"  
  },
  {
      studentName: "Robert Downey Jr.",
      score: "100/100"  
  }
]

function ViewFile_activity() {
  const {designs} = useStyle()

  return (
        <Container maxWidth = "lg">
            <Grid container columnSpacing = {1}>
                <Grid item xs = {4}>
                    <Box className = "Student-list" sx = {designs.Student_List_Style}>

                            <Box className = "Sort-container" sx = {designs.Sort_Container_Style}>
                                <FormControlLabel control = { 
                                    <Checkbox defaultChecked 
                                    sx = {designs.AllStudent_Checkbox_Style}/>} 
                                    label = "All Students" 
                                    sx = {designs.AllStudentLabel_Checkbox_Style}/>

                                <Box sx = {designs.FlexGrow_Box_Style}/>

                                <Autocomplete
                                        disableClearable
                                        id="disable-clearable"
                                        options = {sortOptions}
                                        sx = {designs.SortBy_Autocomplete_Style}
                                        renderInput = {(params) => 
                                            <TextField {...params} 
                                            InputProps={{...params.InputProps, 
                                                        disableUnderline: true, 
                                                        style: {color: "#3F3D56"}}} 
                                                        label="Sort by" 
                                                        variant="standard"
                                            InputLabelProps = {{style:{fontSize: "15px", color: "#3F3D56"}}} />
                                            }/>
                            </Box>

                            <Divider sx = {designs.Divider_Style}/>
                            
                            <Box className = "Student-container" sx = {designs.Student_Container_Style}>
                                
                                {data.map(function(items, index) {
                                    return (
                                        <Box onClick = {() => {
                                            alert('clicked');
                                          }}
                                          key = {index} 
                                            sx = {designs.Student_Box_Style}>
                                            <Checkbox sx = {designs.Student_Checkbox_Style}/>
                                            <Avatar alt="Remy Sharp" src={AvatarIcon} 
                                            sx = {designs.Student_Avatar_Style}/>
                                            <Typography noWrap
                                                sx = {designs.StudentName_Typography_Style}>
                                                {items.studentName}
                                            </Typography>
                                            <Box flexGrow = {1} height = "relative" width = "relative"/>
                                            <Typography 
                                                sx = {designs.StudentScore_Typography_Style}>
                                                {items.score}
                                            </Typography>
                                        </Box>
                                    )
                                })}
                                
                            </Box>
                            
                    </Box>
                </Grid>

                
                <Grid item md = {8} sm = {12}>
                    <Box className = "Activity" sx = {designs.Activity_Style}>
                                <Box className = "Activity-info" sx = {designs.ActivityInfo_Style}>
                                    <Box className = "Activity-title"
                                        sx = {designs.ActivityTitle_Style}>
                                        <Typography
                                        sx = {designs.Lesson_Typography_Style}>
                                        Lesson 2 -
                                        </Typography>
                                        <Typography noWrap
                                        sx = {designs.Activity_Typography_Style}>
                                        Activity 4
                                        </Typography>
                                    </Box>
                                    <Box className = "Activity-instructions"
                                        sx= {designs.ActivityInstructions_Style}>
                                        <Typography
                                            sx = {designs.ActivityInstructionsHead_Typography_Style}>
                                            First, read all directions carefully!
                                        </Typography>
                                        <Typography
                                            sx = {designs.ActivityInstructions_Typography_Style}>
                                            Read all questions carefully and don't forget to answer all parts of the question.
                                        </Typography>

                                        <Box className = "Attach-file" 
                                            sx = {designs.Attach_File_Style}>
                                                <img src = {Wordfile}
                                                style = {{
                                                    height: "40px"
                                                }}/>
                                            
                                        
                                            <Box className = "Activity-filename"
                                            sx = {designs.ActivityFileName_Style}>
                                                <Typography noWrap
                                                sx={designs.ActivityFileName_Typography_Style}>
                                                ACTIVITY 4.docx
                                                </Typography>

                                                <Typography
                                                sx={designs.DocumentFile_Typography_Style}>
                                                Document File
                                                </Typography>
                                            </Box>
                                        </Box>           
                                    </Box>
                                    
                                    <Divider sx = {designs.Divider2_Style}/>

                                    <Box className = "View-comments"
                                        sx = {designs.ViewComments_Style}>
                                        <Typography noWrap
                                            sx={designs.ViewComments_Typography_Style}>
                                            View comments
                                        </Typography>
                                        <IconButton aria-label="dropdown" sx = {designs.IconButtonDropdown_Style}>
                                        <KeyboardArrowDown
                                        sx= {designs.DropdownIcon_Style}/>
                                        </IconButton>
                                    </Box>
                                    <Box className = "Write-comment"
                                        sx = {designs.WriteComment_Style}>
                                        <Avatar alt="Remy Sharp" src={AvatarIcon} 
                                        sx = {designs.UserAvatar_Style}/>
                                        
                                        <TextField id="filled-basic" label="Write a comment..." variant="filled" 
                                        sx = {designs.Comment_TextField_Style}
                                        inputProps={{style: {height: "0px", fontSize: "13px", paddingBottom: "20px"}}} // font size of input text
                                        InputLabelProps={{style: {fontSize: "13px", color: "#8E8E8E"}}} // font size of input label
                                        InputProps={{
                                            disableUnderline: true, // pantanggal ng bottom outline
                                            endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton aria-label="send" sx = {designs.IconButtonSend_Style}>
                                                    <Send
                                                    sx= {designs.SendIcon_Style}/>
                                                </IconButton>
                                            </InputAdornment>
                                            ),
                                        }}/>
                                        
                                    </Box>
                                </Box>

                                <Box className = "Student-works"
                                    sx = {designs.StudentWorks_Style}>
                                    <Typography
                                    sx = {designs.StudentWorks_Typography_Style}>
                                    Students' Uploaded Files
                                    </Typography>

                                    <Divider sx = {designs.Divider2_Style}/>

                                    <Box className = "Uploaded-files-container"
                                    sx = {designs.UploadedFilesContainer_Style}>

                                        <Grid container columnSpacing = {2} rowSpacing = {1}>

                                        {data.map(function(items, index) {
                                            return (
                                                <Grid item lg = {4} md = {6} sm = {6} xs = {12} key = {index}>
                                                    <Box className = "Student-uploaded-file-container"
                                                        sx = {designs.StudentUploadedFileContainer_Style}>

                                                            <Typography noWrap
                                                                sx = {designs.StudentName_Typography_Style2}>
                                                                {items.studentName}
                                                            </Typography>

                                                            <Box className = "Attach-file" 
                                                                sx = {designs.Attach_File_Style2}>
                                                                    <img src = {Wordfile}
                                                                    style = {{
                                                                        height: "40px"
                                                                    }}/>
                                                                        
                                                                    <Box className = "Activity-filename"
                                                                        sx = {designs.ActivityFileName_Style}>
                                                                            <Typography noWrap
                                                                            sx = {designs.ActivityFileName_Typography_Style}>
                                                                            ACTIVITY 4.docx
                                                                            </Typography>

                                                                            <Typography
                                                                            sx = {designs.DocumentFile_Typography_Style}>
                                                                            Document File
                                                                            </Typography>
                                                                    </Box>
                                                            </Box> 
                                                        </Box>
                                                </Grid>
                                            )
                                        })}
                                        </Grid>
                                        
                                        
                                    </Box>
                                    
                                </Box>

                                </Box>
                </Grid>
            </Grid>
        </Container>
  )
}

export default ViewFile_activity;
