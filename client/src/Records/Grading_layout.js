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
} from '@mui/material';
import { Remove, Add, ExpandMore } from '@mui/icons-material';

function Grading_layout({ data, name, counter }) {
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
          '&: hover': {
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
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
          <Typography
            sx={{
              fontSize: '0.9em',
              fontWeight: '600',
              width: 'auto',
              flexShrink: 0,
            }}
          >
            {name.current[counter]
              ? name.current[counter]['GradingName']
              : 'Default'}
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Box display="flex" sx={{ mb: 1 }}>
            <Box flexGrow={1}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Class Standing
              </Typography>
            </Box>
            <Box>
              <Typography>
                <TextField variant="standard" />%
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ mb: 2, color: '#8E8E8E', fontSize: '0.9em' }}>
            The Grade categories must be a total of 60%
          </Typography>
          {input.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <TextField
                name={`Category ${index}`}
                label="Category"
                autoComplete="off"
                size="small"
                variant="outlined"
                sx={{ mr: 2 }}
                onChange={(event) => handleChangeInput(index, event)}
              />
              <TextField
                name={`Percentage ${index}`}
                label="Percentage"
                autoComplete="off"
                size="small"
                variant="outlined"
                onChange={(event) => handleChangeInput(index, event)}
              />
              {index > 0 && (
                <IconButton
                  sx={{ ml: 2 }}
                  onClick={() => handleRemoveFields(index)}
                >
                  <Remove />
                </IconButton>
              )}
              <IconButton sx={{ ml: 2 }} onClick={() => handleAddFields()}>
                <Add />
              </IconButton>
            </Box>
          ))}
          <Box display="flex" sx={{ mb: 2 }}>
            <Box flexGrow={1}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Major Exam
              </Typography>
            </Box>
            <Box>
              <Typography>40%</Typography>
            </Box>
          </Box>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button
            variant="text"
            sx={{
              padding: '0.3em 2em',
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
            delete
          </Button>
          <Button
            onClick={() => console.log(data.current)}
            variant="contained"
            sx={{
              padding: '0.3em 2em',
              color: 'white',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              boxShadow: 'none',
            }}
          >
            save
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

export default Grading_layout;
