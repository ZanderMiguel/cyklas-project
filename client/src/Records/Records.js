import React, { useState } from 'react';
import { Container, Grid, Divider, Typography, Button, IconButton, Box, FormControl, Input, InputLabel, Select, MenuItem } from "@mui/material";
import { FolderSharedOutlined, Search } from "@mui/icons-material";
import Records_tableClassRecords from "./Records_tableClassRecords";
import useStyle from "./Styles/Records_style";
import Grading from "./Grading";

const dataRoom = [
  {
    value: 'Embedded Programming',
    label: 'Embedded Programming',
  },
  {
    value: 'Art Appreciation',
    label: 'Art Appreciation',
  },
  {
    value: 'Science, Technology and Society',
    label: 'Science, Technology and Society',
  },
  {
    value: 'Software Engineering',
    label: 'Software Engineering',
  },
];

const dataCourseYearSection = [
  {
    value: 'BSCS 3A',
    label: 'BSCS 3A',
  },
  {
    value: 'BSIT 3A',
    label: 'BSIT 3A',
  },
  {
    value: 'BSIT 3A',
    label: 'BSIT 3A',
  },
  {
    value: 'BSCS 3A',
    label: 'BSCS 3A',
  },
];

const dataTerm = [
  {
    value: 'MID TERM',
    label: 'MID TERM',
  },
  {
    value: 'FINAL TERM',
    label: 'FINAL TERM',
  }
];

function Records() {
  const {designs} = useStyle();

  const [toggleClassRecords, setToggleClassRecords] = useState(true);
  const [toggleGradingSystem, setToggleGradingSystem] = useState(true);

  const handleClassRecords = () => {
    setToggleClassRecords(true);
    setToggleGradingSystem(true);
  };

  const handleGradingSystem = () => {
    setToggleGradingSystem(false);
    setToggleClassRecords(false);
  };

  const [selectRoom, setSelectRoom] = useState('Embedded Programming');

  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
  };

  const [selectCourseYearSection, setSelectCourseYearSection] = useState('BSCS 3A');

  const handleChangeCourseYearSection = (event) => {
    setSelectCourseYearSection(event.target.value);
  };

  const [selectTerm, setSelectTerm] = useState('MID TERM');

  const handleChangeTerm = (event) => {
    setSelectTerm(event.target.value);
  };
  
  return (
    <Container maxWidth = "lg">
      <Grid container>
        <Grid item xs = {12}>
          <Box className = "content-container" sx = {{
            margin: "2em 0em",
            padding: "1em 1.5em"
          }}>
            <Grid container>
            <Grid item lg = {2} md = {3} sm = {4} xs = {12}>
              <Box
                onClick={handleClassRecords}
                sx = {{
                  height: "auto",
                  width: "100%"
              }}>
                {toggleClassRecords ? (
                  <Button variant = "contained" 
                  startIcon = {<FolderSharedOutlined/>}
                  value="Automate" 
                  sx = {{
                  width: "100%",
                  color: "white",
                  backgroundColor: "#0069D3",
                  borderRadius: "0.3em 0em 0em 0.3em",
                  fontSize: "0.7em",
                  fontWeight: "600",
                  textTransform: "Capitalize",
                  padding: "0.3em 2em",
                  boxShadow: "none",
                  "&: hover": {
                    boxShadow: "none",
                    backgroundColor: "#005DC3"
                  }
                  }}>
                  Class Records
                  </Button>
                ) : (
                  <Button variant = "contained" 
                  startIcon = {<FolderSharedOutlined/>}
                  sx = {{
                  width: "100%",
                  color: "#3F3D56",
                  backgroundColor: "transparent",
                  borderRadius: "0.3em 0em 0em 0.3em",
                  fontSize: "0.7em",
                  fontWeight: "600",
                  textTransform: "Capitalize",
                  padding: "0.3em 2em",
                  boxShadow: "none",
                  "&: hover": {
                    boxShadow: "none",
                    backgroundColor: "#FCFCFC"
                  }
                  }}>
                  Class Records
                  </Button>
                )}
              </Box>
            </Grid>
              
            <Grid item lg = {2} md = {3} sm = {4} xs = {12}>
              <Box
                onClick={handleGradingSystem}
                sx = {{
                  height: "auto",
                  width: "100%"
              }}>
                {toggleGradingSystem ? (
                  <Button variant = "contained" 
                  startIcon = {<Grading/>}
                  sx = {{
                  width: "100%",
                  color: "#3F3D56",
                  backgroundColor: "transparent",
                  borderRadius: "0em 0.3em 0.3em 0em",
                  fontSize: "0.7em",
                  fontWeight: "600",
                  textTransform: "Capitalize",
                  padding: "0.3em 2em",
                  boxShadow: "none",
                  "&: hover": {
                    boxShadow: "none",
                    backgroundColor: "#FCFCFC"
                  }
                  }}>
                  Grading System
                  </Button>
                ) : (
                  <Button variant = "contained" 
                  startIcon = {<Grading/>}
                  sx = {{
                  width: "100%",
                  color: "white",
                  backgroundColor: "#0069D3",
                  borderRadius: "0em 0.3em 0.3em 0em",
                  fontSize: "0.7em",
                  fontWeight: "600",
                  textTransform: "Capitalize",
                  padding: "0.3em 2em",
                  boxShadow: "none",
                  "&: hover": {
                    boxShadow: "none",
                    backgroundColor: "#005DC3"
                  }
                  }}>
                  Grading System
                  </Button>
                )}
              </Box>
            </Grid>   
            </Grid>
            
            <Divider sx = {{ margin: "0.8em 0em" }}/>
            
            <Grid container columnSpacing = {1} rowSpacing = {1}>
              <Grid item md = {3} sm = {4} xs = {12}>
                <FormControl
                  variant="standard"
                  sx={{
                    width: '100%',
                    paddingTop: '0em'
                  }}>

                  <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={selectRoom}
                      onChange={handleChangeRoom}
                      label="SelectRoom"
                      disableUnderline
                      sx={{
                      width: '100%',
                      fontSize: '0.8em',
                      fontWeight: '400',
                      color: '#3F3D56',
                      border: "1px solid #DBDBDB",
                      borderRadius: "0.2em",
                      paddingLeft: "0.5em",
                      "&: hover": {
                        border: "1px solid #212121"
                      }
                      }}>

                      {dataRoom.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                          {' '}
                          {label}{' '}
                      </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item md = {3} sm = {4} xs = {12}>
                <FormControl
                  variant="standard"
                  sx={{
                    width: '100%',
                    paddingTop: '0em'
                  }}>

                  <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={selectCourseYearSection}
                      onChange={handleChangeCourseYearSection}
                      label="SelectCourseYearSection"
                      disableUnderline
                      sx={{
                      width: '100%',
                      fontSize: '0.8em',
                      fontWeight: '400',
                      color: '#3F3D56',
                      border: "1px solid #DBDBDB",
                      borderRadius: "0.2em",
                      paddingLeft: "0.5em",
                      "&: hover": {
                        border: "1px solid #212121"
                      }
                      }}>

                      {dataCourseYearSection.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                          {' '}
                          {label}{' '}
                      </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item md = {3} sm = {4} xs = {12}>
                <FormControl
                  variant="standard"
                  sx={{
                    width: '100%',
                    paddingTop: '0em'
                  }}>

                  <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={selectTerm}
                      onChange={handleChangeTerm}
                      label="SelectTerm"
                      disableUnderline
                      sx={{
                      width: '100%',
                      fontSize: '0.8em',
                      fontWeight: '400',
                      color: '#3F3D56',
                      border: "1px solid #DBDBDB",
                      borderRadius: "0.2em",
                      paddingLeft: "0.5em",
                      "&: hover": {
                        border: "1px solid #212121"
                      }
                      }}>

                      {dataTerm.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                          {' '}
                          {label}{' '}
                      </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item md = {3} sm = {12} xs = {12}>
                <Box sx = {{
                  border: "1px solid #DBDBDB",
                  backgroundColor: "#FAFBFC",
                  borderRadius: "0.3em",
                  padding: "0.1em 1em 0.1em 0.8em",
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                  height: "auto", 
                  width: "100%",
                  "&: hover": {
                      border: "1px solid #007FFF",
                      transition: "all 300ms"
                  }
                }}>
                  <IconButton
                  aria-label="search"
                  sx={{
                      backgroundColor: 'transparent',
                      height: '1em',
                      width: '1em',
                      "&: hover": {
                        backgroundColor: "#FCF9FB"
                      }
                  }}>
                  <Search
                      sx={{
                      color: '#82818E',
                      fontSize: '0.7em',
                      }}/>
                  </IconButton>

                  <Input
                  variant="standard"
                  placeholder="Search student..."
                  disableUnderline
                  sx={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      fontSize: '0.7em',
                      fontWeight: '500',
                      color: '#3F3D56',
                  }}/>
                </Box>
              </Grid>

              <Grid item xs = {12}>
              <Records_tableClassRecords/>
              </Grid>
            </Grid>
            
            
          </Box>
        </Grid>
      </Grid>
    </Container>

    // <Container maxWidth="md"><Grading/></Container>
  )
  }
export default Records;
