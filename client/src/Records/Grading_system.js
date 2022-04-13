import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Divider,
  TextField,
  IconButton,
} from '@mui/material';
import { ExpandMore, Remove, Add } from '@mui/icons-material';

function Grading_system() {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState([{ category: '', percentage: '' }]);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeInput = (index, event) => {
    const values = [...input];
    values[index][event.target.name] = event.target.value;
    setInput(values);
  };

  const handleAddFields = () => {
    setInput([...input, { cateory: '', percentage: '' }]);
  };
  const handleRemoveFields = (index) => {
    const values = [...input];
    values.splice(index, 1);
    setInput(values);
  };
  console.log(input);

  return (
    <>
      <Grid container>
        <Box width="100%" display="flex" marginBottom={2}>
          <Box flexGrow={1} />
          <Box>
            <Button variant="contained">Add Grading</Button>
          </Box>
        </Box>
        <Grid item xs={12}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                General settings
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Box display="flex" sx={{ mb: 2 }}>
                <Box flexGrow={1}>
                  <Typography variant="h6"> Class Standing</Typography>
                </Box>
                <Box>
                  <Typography>60%</Typography>
                </Box>
              </Box>
              {input.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <TextField
                    name="category"
                    label="Category"
                    value={item.category}
                    variant="outlined"
                    sx={{ mr: 2 }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="percentage"
                    label="Percentage"
                    value={item.percentage}
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
                  <Typography variant="h5"> Class Standing</Typography>
                </Box>
                <Box>
                  <Typography>60%</Typography>
                </Box>
              </Box>
              {input.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <TextField
                    name="category"
                    label="Category"
                    value={item.category}
                    variant="outlined"
                    sx={{ mr: 2 }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="percentage"
                    label="Percentage"
                    value={item.percentage}
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
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Button variant="text">delete</Button>
              <Button variant="contained"> save</Button>
            </AccordionActions>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}

export default Grading_system;
