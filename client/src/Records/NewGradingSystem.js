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
  Input,
  Tooltip
} from '@mui/material';
import { Remove, Add, ExpandMore, Wysiwyg, DeleteOutlined, BeenhereOutlined, BorderColorOutlined } from '@mui/icons-material';
import NewGrade from "../assets/ImageJaven/NewGrade.png";

function NewGradingSystem({ data, name, counter }) {
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

  const handleRename = (event) => {
    event.stopPropagation();
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
          id="panel1bh-header"> 

          <Box
          sx = {{
            width: "auto",
            flexGrow: 1,
            display: "flex",
            gap: "0.5em",
            alignItems: "center"
          }}>
            <Wysiwyg sx = {{ color: "#007FFF", fontSize: "1.8em" }}/>

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
              }}
            >
              {name.current[counter]
                ? name.current[counter]['GradingName']
                : 'New Grading System'}
            </Typography>
            
            <Tooltip title = "Rename" placement = "left">
              <IconButton onClick={(event) => handleRename(event)}
                sx = {{ marginRight: "0.5em" }}>
                <BorderColorOutlined sx = {{ color: "#707070", fontSize: "0.8em"}}/>
              </IconButton>
            </Tooltip>
          </Box>
          
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

              <TextField
              defaultValue = "60"
              autoComplete="off"
              size = "small"
              variant="standard"
              inputProps={{
                style: {
                  width: "3em",
                  height: '1em',
                  fontSize: '1em',
                  color: '#007FFF',
                  fontWeight: 600,
                  textAlign: "center"
                },
              }}/>

              <Typography 
                sx = {{ 
                color: "#007FFF",
                fontSize: "1em",
                fontWeight: 600,
                width: "auto",
                }}>
                %
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
              <Typography children = "Grade categories must add up to 60%"
              sx = {{ 
              color: "#8E8E8E",
              fontSize: "0.8em",
              fontWeight: 500,
              width: "relative",
              marginBottom: "1em"
              }}/>

            {input.map((item, index) => (
              <Box key={index} 
                  sx = {{ 
                  marginBottom: "0.5em",
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center"
                  }}>

                <TextField
                    name={`Category ${index}`}
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
                    name={`Percentage ${index}`}
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

                {index > 0 && (
                  <IconButton onClick={() => handleRemoveFields(index)}
                    sx = {{
                      borderRadius: "0.1em",
                      backgroundColor: "#F3F3F3",
                      border: "1px solid #C4C4C4",
                      color: "#707070",
                      "&: hover": {
                        backgroundColor: "#EDEDED",
                        color: "#707070",
                        boxShadow: "none"
                      }
                    }}>
                    <DeleteOutlined sx = {{ fontSize: "0.8em" }}/>
                  </IconButton>
                )}
                <Button onClick={() => handleAddFields()} 
                variant = "contained"
                children = "Add another category"
                sx = {{
                  backgroundColor: "#F3F3F3",
                  border: "1px solid #C4C4C4",
                  color: "#707070",
                  fontSize: "0.8em",
                  fontWeight: "600",
                  boxShadow: "none",
                  textTransform: "none",
                  "&: hover": {
                    backgroundColor: "#EDEDED",
                    color: "#707070",
                    boxShadow: "none"
                  }
                }}/>
              </Box>
            ))}
            </Box>

            <Box flexGrow = {1}/>
            
            <Box 
            sx = {{
              height: "relative",
              width: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.8em 3em 0em 0em"
            }}>
              <img src = {NewGrade} alt = "New Grade" style = {{ height: "15em" }}/>
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

              <TextField
              defaultValue = "40"
              autoComplete="off"
              size = "small"
              variant="standard"
              inputProps={{
                style: {
                  width: "3em",
                  height: '1em',
                  fontSize: '1em',
                  color: '#007FFF',
                  fontWeight: 600,
                  textAlign: "center"
                },
              }}/>

              <Typography 
                sx = {{ 
                color: "#007FFF",
                fontSize: "1em",
                fontWeight: 600,
                width: "auto",
                }}>
                %
              </Typography>
          </Box>
        </AccordionDetails>
        <Divider />
        <AccordionActions sx = {{ paddingLeft: "1.5em", paddingRight: "1.5em" }}>
          <Button
            variant="text"
            startIcon = {<DeleteOutlined/>}
            sx={{
              padding: '0.4em 1em',
              color: '#3F3D56',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              boxShadow: 'none',
              '&: hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            delete grading system
          </Button>

          <Button
            onClick={() => console.log(data.current)}
            startIcon = {<BeenhereOutlined/>}
            children = "Save Changes"
            variant="contained"
            sx={{
              backgroundColor: "#4CAF50",
              padding: '0.4em 1em',
              color: 'white',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              boxShadow: 'none',
              "&: hover": {
                backgroundColor: "#43A047"
              }
            }}/>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

export default NewGradingSystem;
