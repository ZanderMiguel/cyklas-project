import React from 'react'
import { 
    Container, 
    Grid, 
    Box, 
    Typography, 
    Button, 
    IconButton, 
    Input, 
    Tooltip,
    FormControl,
    Select,
    MenuItem,
    Divider
} from "@mui/material";
import { DeleteOutlined, Add, ImageOutlined } from "@mui/icons-material";
import ExamIconButton from "../../assets/ImageJaven/ExamIconButton.png";
import ExamMultiplechoiceV2 from './AnswerTypes/ExamMultiplechoiceV2';
import ExamCheckboxesV2 from './AnswerTypes/ExamCheckboxesV2';
import ExamTrueorfalseV2 from './AnswerTypes/ExamTrueorfalseV2';
import ExamShortanswerV2 from './AnswerTypes/ExamShortanswerV2';

const dataAnswerType = [
  {
    value: 'Multiple Choice',
    label: 'Multiple Choice',
  },
  {
    value: 'Checkboxes',
    label: 'Checkboxes',
  },
  {
    value: 'True or False',
    label: 'True or False',
  },
  {
    value: 'Short Answer',
    label: 'Short Answer',
  }
];

const dataPoints = [
    {
      value: '1 point',
      label: '1 point',
    },
    {
      value: '2 points',
      label: '2 points',
    },
    {
      value: '3 points',
      label: '3 points',
    },
    {
      value: '4 points',
      label: '4 points',
    },
    {
      value: '5 points',
      label: '5 points',
    },
    {
      value: '6 points',
      label: '6 points',
    },
    {
      value: '7 points',
      label: '7 points',
    },
    {
      value: '8 points',
      label: '8 points',
    },
    {
      value: '9 points',
      label: '9 points',
    },
    {
      value: '10 points',
      label: '10 points',
    }
  ];

function ExamFormV2() {
  const [selectAnswerType, setSelectAnswerType] = React.useState('Multiple Choice');
  const handleAnswerType = (event) => {
    setSelectAnswerType(event.target.value);
  };

  const [selectPoints, setSelectPoints] = React.useState('2 points');
  const handlePoints = (event) => {
    setSelectPoints(event.target.value);
  };

  return (
      <Container maxWidth = "md" sx = {{ padding: "1.5em 0em" }}>
            <Grid item xs = {12} 
            sx = {{
            marginBottom: "0.8em",
            backgroundColor: "white",
            borderRadius: "0.3em 0.3em 0em 0em",
            padding: "0.5em 1.1em",
            "&: hover": {
                transition: "all 250ms",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderBottom: "4px solid #007FFF"
            }  
            }}>
              <Input defaultValue = "Untitled Exam" 
              disableUnderline
              sx = {{
                  width: "100%",
                  height: "auto",
                  fontSize: "1.3em",
                  fontWeight: "600",
                  color: "#3F3D56"
              }}>
              </Input>

              <Input placeholder = "Enter exam instructions here..." 
              disableUnderline
              multiline
              rows = {4}
              sx = {{
                  width: "100%",
                  height: "auto",
                  fontSize: "0.8em",
                  fontWeight: "400",
                  color: "#8E8E8E"
              }}>
              </Input>
            </Grid>

            <Grid container item xs = {12} 
            sx = {{ 
            marginBottom: "0.8em",
            backgroundColor: "white",
            borderRadius: "0.3em 0.3em 0em 0em",
            padding: "0.6em 0.8em 0.8em 1.1em",
            "&: hover": {
                transition: "all 250ms",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderBottom: "4px solid #007FFF",
            }  
            }}>
                <Box
                sx = {{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8em",
                    marginBottom: "0.2em"
                }}> 
                    <Typography children = "Question 1"
                    sx = {{
                        width: "auto",
                        flexGrow: 1,
                        height: "max-content",
                        fontSize: "1em",
                        fontWeight: "600",
                        color: "#007FFF",
                        "&: hover": {
                          cursor: "default"
                        }
                    }}/>

                    <Tooltip title = "Select the answer type for this question" placement = "top">
                    <FormControl
                    variant="standard"
                    sx={{
                    width: 'auto',
                    padding: '0em',
                    }}>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={selectAnswerType}
                        onChange={handleAnswerType}
                        label="SelectAnswerType"
                        disableUnderline
                        sx={{
                            width: '100%',
                            fontSize: '0.7em',
                            fontWeight: '500',
                            color: '#8E8E8E',
                            paddingRight: "0.3em",
                            textTransform: "Uppercase"
                        }}>
                        {dataAnswerType.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>
                            {' '}
                            {label}{' '}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Tooltip>
                    
                    <Tooltip title = "Set points for this question" placement = "top">
                    <FormControl
                    variant="standard"
                    sx={{
                    width: 'auto',
                    padding: '0em',
                    }}>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={selectPoints}
                        onChange={handlePoints}
                        label="SelectPoints"
                        disableUnderline
                        sx={{
                            width: '100%',
                            fontSize: '0.7em',
                            fontWeight: '500',
                            color: '#8E8E8E',
                            paddingRight: "0.3em",
                            textTransform: "Uppercase"
                        }}>
                        {dataPoints.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>
                            {' '}
                            {label}{' '}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </Tooltip>

                    <Tooltip title = "Delete Question" placement = "right">
                    <IconButton 
                        sx = {{ 
                        height: "1.4em",
                        width: "1.4em"
                        }}>
                        <DeleteOutlined sx = {{ fontSize: "1em", color: "#707070" }}/>
                    </IconButton>
                    </Tooltip>
                </Box>
                
                <Box
                sx = {{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    gap: "0.5em",
                    alignItems: "center",
                    marginBottom: "0.3em"
                }}>
                    <Input placeholder = "Enter exam question here..."
                    fullWidth 
                    disableUnderline
                    sx = {{
                        width: "auto",
                        flexGrow: 1,
                        height: "auto",
                        fontSize: "0.8em",
                        fontWeight: "600",
                        color: "#3F3D56"
                    }}>
                    </Input>

                    <Tooltip title = "Attach an image or GIF that associates to this question" placement = "right">
                        <IconButton 
                            sx = {{ 
                            height: "1.4em",
                            width: "1.4em",
                            }}>
                            <ImageOutlined sx = {{ fontSize: "1em", color: "#707070" }}/>
                        </IconButton>
                    </Tooltip>
                </Box>
                

                {selectAnswerType === 'Multiple Choice' && (
                <ExamMultiplechoiceV2/>
                )}
                {selectAnswerType === 'Checkboxes' && (
                <ExamCheckboxesV2/>
                )}
                {selectAnswerType === 'True or False' && (
                <ExamTrueorfalseV2/>
                )}
                {selectAnswerType === 'Short Answer' && (
                <ExamShortanswerV2/>
                )}

                {/* <ExamMultiplechoiceV2/> */}
                {/* <ExamCheckboxesV2/> */}
                {/* <ExamTrueorfalseV2/> */}
                {/* <ExamShortanswerV2/> */}
                
            </Grid>

            <Grid item xs = {12}>
                <Button children = "Add question"
                    variant = "contained"
                    startIcon = {<Add/>}
                    sx = {{
                        fontSize: "0.8em",
                        fontWeight: "600",
                        color: "#white",
                        textTransform: "Capitalize",
                        boxShadow: "none",
                        padding: "0.4em 1.3em",
                        "&: hover": {
                            boxShadow: "none"
                        }
                    }}/>
            </Grid>

            <Divider sx = {{ margin: "2.5em 0em" }}/>

            <Grid item xs = {12} sx = {{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button children = "Create Exam"
                    variant = "contained"
                    startIcon = {
                        <img src={ExamIconButton} alt="Exam Icon"
                        style={{ height: '0.7em', width: '0.7em' }}/>
                    }
                    sx = {{
                        fontSize: "0.8em",
                        fontWeight: "600",
                        color: "white",
                        textTransform: "Capitalize",
                        boxShadow: "none",
                        padding: "0.4em 1.3em",
                        backgroundColor: "#4CAF50",
                        "&: hover": {
                            backgroundColor: "#3E9442",
                            boxShadow: "none"
                        }
                    }}/>
            </Grid>
      </Container>
  )
}

export default ExamFormV2