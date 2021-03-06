import React, { useState } from 'react';

import {
  Typography,
  IconButton,
  Box,
  Container,
  Grid,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  InputLabel,
  Checkbox
} from '@mui/material';
import useStyle from './Styles/ExamQuestionOptionspopover_style';
import { Delete, ContentCopyOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";

const dataAnswerType = [
  {
    value: 'Multiple Choice',
    label: 'Multiple Choice',
  },
  {
    value: 'True or False',
    label: 'True or False',
  },
  {
    value: 'Checkboxes',
    label: 'Checkboxes',
  },
  {
    value: 'Enumeration',
    label: 'Enumeration',
  },
  {
    value: 'Short Answer',
    label: 'Short Answer',
  }
];

const dataPoints = [
  {
    value: '0 point',
    label: '0 point',
  },
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
];

const answertypeoptions = [
  {
    value: 'Multiple Choice',
    label: 'Multiple Choice',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

function ExamQuestionOptionspopover() {
    const {designs} = useStyle();
    
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [selectAnswerType, setAnswerType] = useState('Multiple Choice');
  const [selectPoints, setPoints] = useState('');

  const handleChange1 = (event) => {
    setAnswerType(event.target.value);
  };
  const handleChange2 = (event) => {
    setPoints(event.target.value);
  };

  return (
    <>
      <Box
          className="Exam-options"
          sx={designs.Exam_Options_Style}
        >
          <Box
            className="Other-buttons"
            sx={designs.Other_Buttons_Style}
          >
            <Box
              className="Button-container"
              sx={designs.Button_Container_Style}
            >  
                <Box className = "Required-button" sx = {designs.Required_Button_Style}>
                    <Checkbox sx={designs.Required_Checkbox_Style}/>
                    <Typography sx = {designs.Required_Typography_Style}>
                        Required
                </Typography>
            </Box>

            <Box flexGrow = {1} sx = {{ height: "relative" }}/>

            <IconButton aria-label="duplicate" sx={designs.Duplicate_IconButton_Style}>
                <ContentCopyOutlined sx={designs.DuplicateIcon_Style}/>
            </IconButton>

          <IconButton
            aria-label="delete"
            sx={designs.Delete_IconButton_Style}
          >
            <Delete sx={designs.DeleteIcon_Style} />
          </IconButton>
        </Box>

        <FormControl
          variant="standard"
          sx={designs.FormControl_Style}
        >
          <InputLabel
            id="demo-simple-select-standard-label"
            sx={designs.InputLabel_Style}
          >
            Answer Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selectAnswerType}
            onChange={handleChange1}
            label="SelectAnswerType"
            disableUnderline
            sx={designs.Select_Style}
          >
            {dataAnswerType.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {' '}
                {label}{' '}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={designs.FormControl_Style}
        >
          <InputLabel
            id="demo-simple-select-standard-label"
            sx={designs.InputLabel_Style}
          >
            Points
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selectPoints}
            onChange={handleChange2}
            label="SelectPoints"
            disableUnderline
            sx={designs.Select_Style}
          >
            {dataPoints.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {' '}
                {label}{' '}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
    </>
  );
}

export default ExamQuestionOptionspopover;
