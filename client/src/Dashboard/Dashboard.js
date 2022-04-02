import React, { useState } from 'react';
import { Avatar, Container, Grid, Box, Typography, Button, Input, IconButton, InputAdornment, TextField, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SchoolOutlined, PostAdd, AssignmentOutlined, Star, WorkspacePremium, Search } from "@mui/icons-material";
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import useStyle from "./Styles/Dashboard_style";

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
  }
];

const dataRange = [
  {
    value: 'This week',
    label: 'This week',
  },
  {
    value: 'This month',
    label: 'This month',
  },
  {
    value: 'This year',
    label: 'This year',
  }
];

const dataStats = [
  {
    icon: <Box sx = {{ height: "2.8em", width: "2.8em", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "3em", backgroundColor: "#FF8000"}}>
          <SchoolOutlined sx = {{ color: "white", fontSize: "2em" }}/>
          </Box>,
    label: 'Total Enrolled Students',
    total: '22',
    updateValue: '',
    updateText: 'No New Added Student Today'
  },
  {
    icon: <Box sx = {{ height: "2.8em", width: "2.8em", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "3em", backgroundColor: "#47B753"}}>
          <PostAdd sx = {{ color: "white", fontSize: "2em" }}/>
          </Box>,
    label: 'Total Posted Announcements',
    total: '103',
    updateValue: '2',
    updateText: 'New Post Today'
  },
  {
    icon:  <Box sx = {{ height: "2.8em", width: "2.8em", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "3em", backgroundColor: "#007FFF"}}>
            <AssignmentOutlined sx = {{ color: "white", fontSize: "2em" }}/>
            </Box>,
    label: 'Total Returned Activities',
    total: '56',
    updateValue: '4',
    updateText: 'Returned Activities Today'
  }
];

const dataTable = [
  {
    roomID: '0',
    roomName: 'Embedded Programming',
    course: 'Computer Science',
    yearSection: '3A  ',
    classTime: '10:00 AM',
    Terms: '2'
  },
  {
    roomID: '1',
    roomName: 'Sotware Engineering 2',
    course: 'Computer Science',
    yearSection: '3B  ',
    classTime: '1:00 PM',
    Terms: '2'
  },
  {
    roomID: '2',
    roomName: 'Science, Technology and Society',
    course: 'Information Technology',
    yearSection: '3c  ',
    classTime: '2:00 pM',
    Terms: '2'
  },
  {
    roomID: '3',
    roomName: 'Digital Graphics',
    course: 'Computer Science',
    yearSection: '2A  ',
    classTime: '9:00 AM',
    Terms: '2'
  },
  {
    roomID: '4',
    roomName: 'Introduction to Programming',
    course: 'Computer Science',
    yearSection: '1B  ',
    classTime: '9:30 AM',
    Terms: '2'
  },
  {
    roomID: '5',
    roomName: 'Alpaca panot',
    course: 'Computer Science',
    yearSection: '3A  ',
    classTime: '11:30 AM',
    Terms: '2'
  },
  {
    roomID: '6',
    roomName: 'Business Application Software',
    course: 'Computer Science',
    yearSection: '1C  ',
    classTime: '7:00 AM',
    Terms: '2'
  },
  {
    roomID: '7',
    roomName: 'College Algebra',
    course: 'Computer Science',
    yearSection: '2B  ',
    classTime: '8:00 AM',
    Terms: '2'
  },
  {
    roomID: '8',
    roomName: 'Data Structure',
    course: 'Computer Science',
    yearSection: '3C  ',
    classTime: '3:00 pM',
    Terms: '2'
  }
];

const dataProfessorRatings = [
  {
    avatar: <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>,
    professorName: "Isko",
    room: "Sotware Engineering 2",
    rate: "95.4",
    rateIcon: <Star sx = {{ fontSize: "1.2em", color: "#FFC700" }}/>
  },
  {
    avatar: <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>,
    professorName: "Yorme",
    room: "College Algebra",
    rate: "94.0",
    rateIcon: <Star sx = {{ fontSize: "1.2em", color: "#FFC700" }}/>
  },
  {
    avatar: <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>,
    professorName: "Bossing",
    room: "Paro paro G",
    rate: "93.8",
    rateIcon: <Star sx = {{ fontSize: "1.2em", color: "#FFC700" }}/>
  },
  {
    avatar: <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>,
    professorName: "Wally",
    room: "Thesis Writing",
    rate: "90.1",
    rateIcon: <Star sx = {{ fontSize: "1.2em", color: "#FFC700" }}/>
  }
];

const dataStudentRankings = [
  {
    avatar: <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>,
    studentName: "Isko",
    courseSec: "3A",
    place: "2nd",
    placeIcon: <WorkspacePremium sx = {{ fontSize: "1.2em", color: "#EB7E42" }}/>
  },
  {
    avatar: <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>,
    studentName: "Yorme",
    courseSec: "College Algebra",
    place: "3rd"
  },
  {
    avatar: <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>,
    studentName: "Bossing",
    courseSec: "Paro paro G",
    place: "4th"
  },
  {
    avatar: <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>,
    studentName: "Wally",
    courseSec: "Thesis Writing",
    place: "5th"
  }
];

function Dashboard() {
  const {designs} = useStyle();

  const [selectRoom, setSelectRoom] = useState('');

  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
  };

  const [selectRange, setSelectRange] = useState('This week');

  const handleChangeRange = (event) => {
    setSelectRange(event.target.value);
  };

  return (
    <Container maxWidth = "lg">
      <Grid container rowSpacing = {1} sx = {{ margin: "0.5em 0em" }}>
        <Grid item xs = {12}>
          <Box sx = {{ width: "relative", height: "auto", display: "flex" }}>
          <FormControl variant="standard" sx={{
            width: '35%',
            paddingTop: "0em"
          }}>
              <InputLabel id="demo-simple-select-standard-label"
               sx={{
                fontSize: '0.9em',
                fontWeight: '500',
                color: '#3F3D56',
                textTransform: "uppercase"
               }}>
               Select Room
              </InputLabel>
                              
              <Select labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectRoom}
                onChange={handleChangeRoom}
                label="SelectRoom"
                disableUnderline
                sx={{
                  width: '100%',
                  fontSize: '0.9em',
                  fontWeight: '400',
                  color: '#3F3D56',
                  borderBottom: "1px solid #DBDBDB"
                }}>

              {dataRoom.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {' '}
                  {label}{' '}
                </MenuItem>
              ))}
              </Select>
          </FormControl>
          
          <IconButton aria-label="search" sx = {{
              backgroundColor: "#FCF9FB",
              margin: "0.6em 0.5em 0em 1em",
              height: "1.3em",
              width: "1.3em"
              }}>
          <Search
          sx= {{
              color: "#82818E",
              fontSize: "0.9em"

          }}/>
          </IconButton>

          <Input variant="standard"
            placeholder="Search dashboard..."
            sx={{
              height: "2.5em",
              width: "30.5em",
              marginTop: "1.1em",
              backgroundColor: "transparent",
              fontSize: "0.8em",
              fontWeight: "600",
              color: "#3F3D56"
            }}/>
          </Box>

          {/* <TextField id="filled-basic" placeholder="Search People" variant="filled" 
                    sx = {designs.Search_TextField_Style}
                    inputProps={{style: {height: "0em", fontSize: "0.8em", fontWeight: "500", paddingBottom: "1.8em", margin: "0em 1.5em 0em 0.5em", color: "#3F3D56"}}}
                    InputProps={{disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton aria-label="search" sx = {{
                                    height: "1.3em",
                                    width: "1.3em",
                                    margin: "0em 0em 0.6em 0em"
                                    }}>
                                <Search
                                sx= {{
                                    color: "#82818E",
                                    fontSize: "0.9em"

                                }}/>
                            </IconButton>
                        </InputAdornment>
            ),}}/> */}
        </Grid>
        
        <Grid container columnSpacing = {1} sx = {{ marginTop: "1em" }}>
          {dataStats.map(function(items, index) {
            return (
            <Grid key = {index} item xs = {3} sx = {{ height: "relative" }}>
              <Box className = "Announcements" sx = {{
                width: "relative",
                height: "auto",
                padding: "0.7em 0em 0em 0em",
                backgroundColor: "#FCFCFC",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
              }}>
                <Box className = "New-announcement" sx = {{
                  display: "flex",
                  gap: "1em",
                  width: "relative",
                  margin: "0em 0.8em"
                }}>
                  <Box sx = {{ height: "auto", width: "auto"}}>
                    {items.icon}
                  </Box>
                  
                  <Box sx = {{ height: "auto", width: "relative" }}>
                    <Typography sx = {{
                      color: "#8E8E8E",
                      fontSize: "0.8em",
                      fontWeight: "500",
                      height: "relative",
                      textTransform: "Capitalize"
                    }}>
                      {items.label}
                    </Typography>

                    <Typography sx = {{
                      color: "#615F79",
                      fontSize: "1.8em",
                      fontWeight: "600",
                      height: "relative",
                      textTransform: "Capitalize"
                    }}>
                      {items.total}
                    </Typography>
                  </Box>
                  
                </Box>

                <Box sx = {{
                  display: "flex",
                  gap: "0.5em",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "relative",
                  margin: "0.5em 0em 0em 0em",
                  padding: "0.4em",
                  backgroundColor: "#EDF3F9",
                  "&: hover": {
                    cursor: "pointer",
                    transition: "all 300ms",
                    backgroundColor: "#D8E9F9"
                  }
                }}>
                  <Typography sx = {{
                      color: "#007FFF",
                      fontSize: "0.7em",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      height: "relative"
                    }}>
                      {items.updateValue}
                  </Typography>

                  <Typography sx = {{
                      color: "#007FFF",
                      fontSize: "0.7em",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      height: "relative"
                    }}>
                      {items.updateText}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            )
          })}
            <Grid item xs = {3} sx = {{ height: "auto" }}>
              <Box sx = {designs.MainContainer_Style}>
                <Box sx = {{ marginBottom: "0.3em", display: "flex", width: "relative", height: "auto" }}>
                  <Typography sx = {{
                  color: "#615F79",
                  fontSize: "0.8em",
                  fontWeight: "600",
                  width: "auto",
                  height: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "Uppercase"
                }}>
                  Professor Ratings
                </Typography>

                <Box flexGrow = {1}/>

                  <FormControl variant="standard" sx={{
                    width: '32%',
                    padding: "0em"
                  }}>
                {/* <InputLabel id="demo-simple-select-standard-label"
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: "none"
                }}>
                This week
                </InputLabel> */}
                                
                <Select labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectRange}
                  onChange={handleChangeRange}
                  label="SelectRoom"
                  disableUnderline
                  sx={{
                    width: '100%',
                    fontSize: '0.7em',
                    fontWeight: '400',
                    color: '#8E8E8E'
                  }}>

                {dataRange.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {' '}
                    {label}{' '}
                  </MenuItem>
                ))}
                </Select>
            </FormControl>
                </Box>
                
                <Box sx = {designs.OverFlow_Style}>
                  <Box sx = {{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", backgroundColor: "#FCFCFC", marginBottom: "0.3em", width: "relative", height: "auto", display: "flex", padding: "0.3em 0.5em"}}>
                    <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>

                    <Box sx = {{ marginTop: "0.2em", width: "8em", height: "max-content" }}>
                      <Typography noWrap sx = {{ 
                          color: "#615F79",
                          fontSize: "0.7em",
                          fontWeight: "600",
                          width: "relative",
                          height: "max-content"
                      }}>
                        Mark Andrei (You)
                      </Typography>

                      <Typography noWrap sx = {{ 
                          color: "#8E8E8E",
                          fontSize: "0.6em",
                          fontWeight: "400",
                          width: "relative",
                          height: "max-content"
                      }}>
                        Embedded Programming
                      </Typography>
                    </Box>

                    <Box flexGrow = {1}/>
                    
                    <Typography sx = {{ 
                          color: "#FF9100",
                          fontSize: "0.9em",
                          fontWeight: "600",
                          width: "relative",
                          height: "relative",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                      }}>
                        96.7
                    </Typography>
                    
                    <Box sx = {{ height: "relative", width: "auto", marginTop: "0.5em" }}>
                      <Star sx = {{ fontSize: "1.2em", color: "#FFC700" }}/>
                    </Box>
                    
                  </Box>
                    
                  {dataProfessorRatings.map(function(items, index) {
                    return (
                      <Box key = {index} sx = {{ backgroundColor: "#FDFDFD", marginBottom: "0.3em", width: "relative", height: "auto", display: "flex", padding: "0.3em 0.5em"}}>
                        {items.avatar}

                        <Box sx = {{ marginTop: "0.2em", width: "10em", height: "max-content" }}>
                          <Typography sx = {{ 
                              color: "#615F79",
                              fontSize: "0.7em",
                              fontWeight: "600",
                              width: "relative",
                              height: "max-content"
                          }}>
                            {items.professorName}
                          </Typography>

                          <Typography sx = {{ 
                              color: "#8E8E8E",
                              fontSize: "0.6em",
                              fontWeight: "400",
                              width: "relative",
                              height: "max-content"
                          }}>
                            {items.room}
                          </Typography>
                        </Box>

                        <Box flexGrow = {1}/>
                        
                        <Typography sx = {{ 
                              color: "#FF9100",
                              fontSize: "0.9em",
                              fontWeight: "600",
                              width: "relative",
                              height: "relative",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                          }}>
                            {items.rate}
                        </Typography>
                        
                        <Box sx = {{ height: "relative", width: "auto", marginTop: "0.5em" }}>
                          {items.rateIcon}
                        </Box>
                        
                      </Box>
                    )
                  })}
                </Box>
                
                
              </Box>

              <Box sx = {designs.MainContainer2_Style}>
                <Box sx = {{ marginBottom: "0.3em", display: "flex", width: "relative", height: "auto" }}>
                  <Typography sx = {{
                  color: "#615F79",
                  fontSize: "0.8em",
                  fontWeight: "600",
                  width: "auto",
                  height: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "Uppercase"
                }}>
                  Student Rankings
                </Typography>

                <Box flexGrow = {1}/>

                  <FormControl variant="standard" sx={{
                    width: '32%',
                    padding: "0em"
                  }}>
                {/* <InputLabel id="demo-simple-select-standard-label"
                sx={{
                  fontSize: '0.7em',
                  fontWeight: '500',
                  color: '#8E8E8E',
                  textTransform: "none"
                }}>
                This week
                </InputLabel> */}
                                
                <Select labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectRange}
                  onChange={handleChangeRange}
                  label="SelectRoom"
                  disableUnderline
                  sx={{
                    width: '100%',
                    fontSize: '0.7em',
                    fontWeight: '400',
                    color: '#8E8E8E'
                  }}>

                {dataRange.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {' '}
                    {label}{' '}
                  </MenuItem>
                ))}
                </Select>
            </FormControl>
                </Box>
                
                <Box sx = {designs.OverFlow2_Style}>
                  <Box sx = {{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", backgroundColor: "#FCFCFC", marginBottom: "0.3em", width: "relative", height: "auto", display: "flex", padding: "0.3em 0.5em"}}>
                    <Avatar src = {AvatarIcon} sx = {{ marginRight: "0.5em", height: "2em", width: "2em" }}/>

                    <Box sx = {{ marginTop: "0.2em", width: "8em", height: "max-content" }}>
                      <Typography noWrap sx = {{ 
                          color: "#615F79",
                          fontSize: "0.7em",
                          fontWeight: "600",
                          width: "relative",
                          height: "max-content"
                      }}>
                        Paul Rudd
                      </Typography>

                      <Typography noWrap sx = {{ 
                          color: "#8E8E8E",
                          fontSize: "0.6em",
                          fontWeight: "400",
                          width: "relative",
                          height: "max-content"
                      }}>
                        3A
                      </Typography>
                    </Box>

                    <Box flexGrow = {1}/>
                    
                    <Typography sx = {{ 
                          color: "#F9A826",
                          fontSize: "0.9em",
                          fontWeight: "600",
                          width: "relative",
                          height: "relative",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                      }}>
                        1st
                    </Typography>
                    
                    <Box sx = {{ height: "relative", width: "auto", marginTop: "0.5em" }}>
                      <WorkspacePremium sx = {{ fontSize: "1.2em", color: "#F9A826" }}/>
                    </Box>
                    
                  </Box>
                    
                  {dataStudentRankings.map(function(items, index) {
                    return (
                      <Box key = {index} sx = {{ backgroundColor: "#FDFDFD", marginBottom: "0.3em", width: "relative", height: "auto", display: "flex", padding: "0.3em 0.5em"}}>
                        {items.avatar}

                        <Box sx = {{ marginTop: "0.2em", width: "10em", height: "max-content" }}>
                          <Typography sx = {{ 
                              color: "#615F79",
                              fontSize: "0.7em",
                              fontWeight: "600",
                              width: "relative",
                              height: "max-content"
                          }}>
                            {items.studentName}
                          </Typography>

                          <Typography sx = {{ 
                              color: "#8E8E8E",
                              fontSize: "0.6em",
                              fontWeight: "400",
                              width: "relative",
                              height: "max-content"
                          }}>
                            {items.courseSec}
                          </Typography>
                        </Box>

                        <Box flexGrow = {1}/>
                        
                        <Typography sx = {{ 
                              color: "#8582A0",
                              fontSize: "0.7em",
                              fontWeight: "600",
                              width: "5em",
                              height: "relative",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              textAlign: "center"
                          }}>
                            {items.place}
                        </Typography>
                      </Box>
                    )
                  })}
                </Box>
                
                
              </Box>
            </Grid>
        </Grid>
        
        <Grid item xs = {7} sx = {{ position: "absolute", top: 250, zIndex: 1 }}>
          <Box sx = {{ width: "108%"}}>

          <Box sx = {{
            marginTop: "1em",
            width: "relative",
            height: "auto",
            display: "flex"
          }}>
            <Typography sx = {{
              color: "#615F79",
              fontSize: "0.9em",
              fontWeight: "600",
              width: "auto",
              height: "max-content",
              textTransform: "uppercase"
            }}>
              Rooms and Classes Schedule
            </Typography>

            <Box flexGrow = {1}/>

            <Button sx = {{
              padding: "0em 2em",
              fontSize: "0.8em",
              fontWeight: "500",
              textTransform: "none",
              backgroundColor: "transparent",
              color: "#007FFF",
              width: "max-content",
              "&: hover": {
                backgroundColor: "transparent"
              }
            }}>
              View all
            </Button>
          </Box>
          
          <Box sx = {{ marginTop: "0.5em", padding: "0.2em 0em 0.8em 0em", width: "relative", height: "auto", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
          <Box sx = {{
              width: "relative",
              height: "auto",
              margin: "0.5em 1em 0em 1em",
              display: "flex",
              gap: "0.5em",
              padding: "0.5em 1em"
            }}>
              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                textAlign: "center",
                height: "max-content",
                width: "8em"
              }}>
                Room Id
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                textAlign: "center",
                height: "max-content",
                width: "15em"
              }}>
                Room name
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                textAlign: "center",
                height: "max-content",
                width: "13em"
              }}>
                Course
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                textAlign: "center",
                height: "max-content",
                width: "10em"
              }}>
                year and section
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                textAlign: "center",
                height: "max-content",
                width: "10em"
              }}>
                class time
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                textAlign: "center",
                height: "max-content",
                width: "6em"
              }}>
                terms
              </Typography>
            </Box>
            
          <Box sx = {{ width: "relative", height: "17em", padding: "0em 0em 0em 1em", overflowY: "auto" }}>
          {dataTable.map(function(items, index) {
            return (
            <Box key = {index} sx = {{
              width: "relative",
              height: "auto",
              marginTop: "0.3em",
              display: "flex",
              gap: "0.5em",
              backgroundColor: "#FAF8F9",
              padding: "0.8em 1em"
            }}>
              <Typography sx = {{
                color: "#007FFF",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "relative",
                width: "8em"
              }}>
                {items.roomID}
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "500",
                textTransform: "Capitalize",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "relative",
                width: "15em"
              }}>
                {items.roomName}
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "500",
                textTransform: "Capitalize",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "relative",
                width: "13em"
              }}>
                {items.course}
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "500",
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "relative",
                width: "10em"
              }}>
                {items.yearSection}
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "500",
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "relative",
                width: "10em"
              }}>
                {items.classTime}
              </Typography>

              <Typography sx = {{
                color: "#615F79",
                fontSize: "0.8em",
                fontWeight: "500",
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "relative",
                width: "6em"
              }}>
                {items.Terms}
              </Typography>
            </Box>
            )
          })}
          </Box>
          </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Dashboard;
