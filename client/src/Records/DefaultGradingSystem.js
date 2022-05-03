import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
  Box,
  Divider,
  TextField,
  IconButton,
  Button,
  Input
} from '@mui/material';
import { Remove, Add, ExpandMore, Wysiwyg, DeleteOutlined, BeenhereOutlined } from '@mui/icons-material';
import DefaultGrade from "../assets/ImageJaven/DefaultGrade.png";

const dataCategories = [
  {
    categoryName: "Attendance",
    categoryPercentage: "20"
  },
  {
    categoryName: "Activities",
    categoryPercentage: "10"
  },
  {
    categoryName: "Quizzes",
    categoryPercentage: "10"
  },
  {
    categoryName: "Seatworks",
    categoryPercentage: "10"
  },
  {
    categoryName: "Homeworks",
    categoryPercentage: "10"
  }
];

function DefaultGradingSystem({ data }) {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState([{ category: '', percentage: '' }]);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeInput = (index, event) => {
    data.current[index][event.target.name] = event.target.value;
  };

  const handleAddFields = () => {
    setInput([...input, { cateory: '', percentage: '' }]);
    data.current.push({});
  };
  const handleRemoveFields = (index) => {
    const values = [...input];
    values.splice(index, 1);
    setInput(values);
  };
  return (
    <div>
      <Accordion
        sx={{
          boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
          '&: hover': {
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
          },
        }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        > 
          <Wysiwyg sx = {{ color: "#007FFF", marginRight: "0.3em", fontSize: "1.8em" }}/>

          <Typography
            sx={{
              color: "#007FFF",
              fontSize: '0.9em',
              fontWeight: '600',
              width: 'auto',
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              height: "relative"
            }}>
            Default Grading System
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails sx = {{ paddingLeft: "1.5em", paddingRight: "1.5em" }}>
          <Box  
            sx = {{ 
            display: "flex",
            alignItems: "center",
            margin: "0.2em 0em 0.5em 0em",
            paddingBottom: "0.4em",
            borderBottom: "1px solid #DBDBDB"
            }}>
              <Typography 
                sx = {{ 
                color: "#3F3D56",
                fontSize: "1em",
                fontWeight: 600,
                width: "13em",
                }}>
                Class Standing
              </Typography>

              <Box flexGrow = {1}/>

              <Typography 
                sx = {{ 
                color: "#007FFF",
                fontSize: "1em",
                fontWeight: 600,
                width: "3em",
                textAlign: "right"
                }}>
                60%
              </Typography>
          </Box>
          
          <Box 
          sx = {{
            width: "relative",
            height: "auto",
            paddingBottom: "0.5em",
            display: "flex",
            gap: "0.8em"
          }}>
            <Box sx = {{
              height: "auto",
              width: "auto"
            }}>

            {dataCategories.map(function(items, index) {
              return (
                <Box key={index} 
                sx = {{ 
                margin: "0.5em 0em 0.8em 0em",
                display: "flex",
                gap: "0.8em",
                alignItems: "center"
                }}>

                <TextField
                  disabled
                  defaultValue = {items.categoryName}
                  label = "Category"
                  autoComplete="off"
                  size = "small"
                  variant="outlined"
                  onChange={(event) => handleChangeInput(index, event)}
                  inputProps={{
                    style: {
                      height: '2em',
                      fontSize: '0.9em',
                      color: '#3F3D56',
                      fontWeight: 500,
                    },
                  }}
                  InputLabelProps = {{
                    style: {
                      color: "#8E8E8E"
                    }
                  }}/>

                <TextField
                  disabled
                  defaultValue = {items.categoryPercentage}
                  label = "Percentage"
                  autoComplete="off"
                  size = "small"
                  variant="outlined"
                  onChange={(event) => handleChangeInput(index, event)}
                  inputProps={{
                    style: {
                      height: '2em',
                      fontSize: '0.9em',
                      color: '#3F3D56',
                      fontWeight: 500,
                    },
                  }}
                  InputLabelProps = {{
                    style: {
                      color: "#8E8E8E"
                    }
                  }}/>

                <Typography 
                  children = "%"
                  sx = {{ 
                  color: "#3F3D56",
                  fontSize: "0.8em",
                  fontWeight: 600,
                  width: "auto",
                  height: "relative",
                  marginRight: "0.8em"
                  }}/>
            </Box>
              )
            })}
            </Box>

            <Box flexGrow = {1}/>
            
            <Box 
            sx = {{
              height: "relative",
              width: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.8em 4em 0em 0em"
            }}>
              <img src = {DefaultGrade} alt = "Default Grade" style = {{ height: "15em" }}/>
            </Box>
            
          </Box>
          
          <Box  
            sx = {{ 
            display: "flex",
            alignItems: "center"
            }}>
              <Typography 
                sx = {{ 
                color: "#3F3D56",
                fontSize: "1em",
                fontWeight: 600,
                width: "13em",
                }}>
                Major Exam
              </Typography>

              <Box flexGrow = {1}/>

              <Typography 
                sx = {{ 
                color: "#007FFF",
                fontSize: "1em",
                fontWeight: 600,
                width: "3em",
                textAlign: "right"
                }}>
                40%
              </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DefaultGradingSystem;
