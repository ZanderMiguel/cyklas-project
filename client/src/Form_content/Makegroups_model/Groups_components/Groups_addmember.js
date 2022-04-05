import React from 'react';
import Dialogform from '../../../components/Dialogform';
import { Grid, Typography, Avatar, Box, Checkbox, Button, FormControlLabel } from '@mui/material';
import AvatarIcon from '../../../assets/ImageJaven/Avatar.png';
import GroupsIcon from '../../../assets/ImageJaven/GroupsIcon.png';

const dataStudentList = [
    {
        avatar: <Avatar src={AvatarIcon} sx={{ margin: '0em 0.5em' }} />,
        studentName: "Paul Rudd",
        userType: "Student",
        courseYearSec: "BSCS 3A"
    },
    {
        avatar: <Avatar src={AvatarIcon} sx={{ margin: '0em 0.5em' }} />,
        studentName: "Tom Holland",
        userType: "Student",
        courseYearSec: "BSCS 3A"
    },
    {
        avatar: <Avatar src={AvatarIcon} sx={{ margin: '0em 0.5em' }} />,
        studentName: "Tom Hiddleston",
        userType: "Student",
        courseYearSec: "BSCS 3A"
    },
    {
        avatar: <Avatar src={AvatarIcon} sx={{ margin: '0em 0.5em' }} />,
        studentName: "Sebastian Stan",
        userType: "Student",
        courseYearSec: "BSCS 3A"
    },
    {
        avatar: <Avatar src={AvatarIcon} sx={{ margin: '0em 0.5em' }} />,
        studentName: "Robert Downey Jr.",
        userType: "Student",
        courseYearSec: "BSCS 3A"
    }
];

function Groups_addmember({ open, close, maxWidth }) {
  return (
      <>
      <Dialogform open={open} close={close} maxWidth={maxWidth}
      btn={
        <Button variant="contained" sx = {{ 
            backgroundColor: "#0069D3",
            color: "white",
            fontSize: "0.8em",
            fontWeight: "600",
            textTransform: "Capitalize",
            padding: "0.3em 3em",
            "&: hover": {
                backgroundColor: "#005DC3"
            }
            }}>
              Add
          </Button>
      }
      >
        <Grid container sx = {{ height: "auto", padding: "0em 2em" }}>
          <Grid item xs = {12}>
                <Box sx = {{ width: "relative", height: "auto", display: "flex", flexGrow: 1, gap: "0.8em" }}>
                  <img src = {GroupsIcon} style = {{ width: "2em", height: "2em" }}/>

                  <Typography sx = {{
                      color: "#3F3D56",
                      fontSize: "1em",
                      fontWeight: "600",
                      height: "relative",
                      width: "40em",
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center"
                  }}>
                      Untitled Group 1
                  </Typography>
                </Box>
            
                <Typography sx = {{
                    color: "#3F3D56",
                    fontSize: "0.8em",
                    fontWeight: "500",
                    width: "relative",
                    textAlign: "right",
                    height: "max-content",
                    padding: "0em 0em 0.5em 0em",
                    borderBottom: "1px solid #DBDBDB"
                }}>
                    5 / 5
                </Typography>

                <Box sx = {{ padding: "0.5em 0em", marginTop: "0.8em", width: "relative", height: "auto", display: "flex", gap: "0.8em", alignItems: "center" }}>
                    <Checkbox sx={{ color: '#BABABA', height: "1em", width: "1em", "&: hover": { backgroundColor: "transparent" } }}/>
                    <Typography sx = {{
                        color: "#3F3D56",
                        fontSize: "0.9em",
                        fontWeight: "500",
                        width: "auto",
                        height: "relative"
                    }}>
                        All Students
                    </Typography>
                </Box>
                
                {dataStudentList.map(function(items, index) {
                    return (
                        <Box key = {index} sx = {{
                            display: "flex",
                            alignItems: "center",
                            width: "relative",
                            height: "auto",
                            padding: "0.5em 0em"
                        }}>
                            <Checkbox sx={{ color: '#BABABA', height: "1em", width: "1em", "&: hover": { backgroundColor: "transparent" } }}/>

                            {items.avatar}
        
                            <Typography
                              sx={{
                                color: '#3F3D56',
                                fontSize: '0.8em',
                                fontWeight: '500',
                                width: '20em',
                                height: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {items.studentName}
                            </Typography>
                            
                            <Box flexGrow = {1}/>

                            <Typography
                            sx={{
                              color: '#007FFF',
                              fontSize: '0.8em',
                              fontWeight: '500',
                              width: '5em',
                              height: 'relative',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            {items.userType}
                          </Typography>

                          <Box flexGrow = {1}/>
        
                          <Typography
                            noWrap
                            sx={{
                              color: '#3F3D56',
                              fontSize: '0.8em',
                              fontWeight: '500',
                              width: '15em',
                              height: 'relative',
                              display: 'flex',
                              justifyContent: "flex-end",
                              alignItems: 'center'
                            }}
                          >
        
                            {items.courseYearSec}
                          </Typography>
        
                        </Box>
                    )
                })}

                <Typography sx=  {{ 
                    backgroundColor: "#EDF3F9",
                    color: "#007FFF",
                    fontSize: "0.8em",
                    fontWeight: "600",
                    display: "flex",
                    width: "relative",
                    height: "max-content",
                    padding: "0.5em 0em",
                    margin: "0.8em 0em 0em 0em",
                    alignItems: "center",
                    justifyContent: "center"
                    }}>
                    Selected students will be added to this group.
                </Typography>
                
          </Grid>
      </Grid>
      </Dialogform>
      </>
      
  );
}

export default Groups_addmember;

