import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Divider,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';

const dataRatingKeys = [
  {
    value: '1',
  },
  {
    value: '2',
  },
  {
    value: '3',
  },
  {
    value: '4',
  },
  {
    value: '5',
  },
];

function EvaluationTable() {
  const rating = React.useState({});
  const handleChange = (e) => {
    rating.current[e.target.name] = e.target.value;
    console.log(rating);
  };
  const dataAttributes = [
    {
      attribute: 'Introduction given (of both self and topic)',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r1">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Dress, neatness and appearance',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r2">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Writing on the board, figures/ diagrams (visual aids)',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r3">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Usage of classroom language',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r4">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Circulated during class to check all the students',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r5">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Eye contact with the students',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r6">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Gesture and Posture',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r7">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Spoke loudly and clearly',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r8">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute:
        'Communication (language, choice of words, grammar and influency)',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r9">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Encouraged students to ask questions',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r10">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute:
        "Aroused students' interests and encourages them for participation",
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r11">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute:
        'Used words and expressions within the student level of understanding',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r12">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute:
        'Was there any element of creativity (by way of certain examples)',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r13">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Subject matter knowledge/ command on subject/ topic',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Presented subject matter clearly an systematically',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r15">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Aptitude (ability, skill and talent) displayed',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r16">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Methodology, taught for student understanding',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r17">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Answered questions',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r18">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Class control',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row>
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Time management',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} name="r20">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Was organized one',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r21">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Conclusion/ summarization made; or lecture abruptly ended',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r22">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Confidence level exhibited',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r23">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
    {
      attribute: 'Showed dynamism and enthusiasm',
      choices: (
        <FormControl>
          <RadioGroup onChange={handleChange} row name="r24">
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="3"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="4"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="5"
              control={
                <Radio
                  sx={{
                    width: '1.7em',
                    height: '1.7em',
                  }}
                />
              }
              label=""
            />
          </RadioGroup>
        </FormControl>
      ),
    },
  ];

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          padding: '0.3em',
          margin: '0.5em 0em',
        }}
      >
        <Box
          sx={{
            width: 'relative',
            height: 'auto',
            backgroundColor: 'white',
          }}
        >
          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              backgroundColor: '#007FFF',
              display: 'flex',
              alignItems: 'center',
              padding: '0.3em 1.2em',
            }}
          >
            <Typography
              children="Attributes & Performances"
              sx={{
                color: 'white',
                textTransform: 'Uppercase',
                fontSize: '1em',
                fontWeight: '600',
                width: 'auto',
                flexGrow: 1,
              }}
            />

            <Typography
              children="Ratings"
              sx={{
                color: 'white',
                textTransform: 'Uppercase',
                textAlign: 'center',
                fontSize: '1em',
                fontWeight: '600',
                width: '20em',
              }}
            />
          </Box>

          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              padding: '0.6em 1.2em',
            }}
          >
            <Typography
              children=""
              sx={{
                color: 'white',
                textTransform: 'Uppercase',
                fontSize: '1em',
                fontWeight: '600',
                width: 'auto',
                flexGrow: 1,
              }}
            />

            <Box
              sx={{
                width: '20em',
                display: 'flex',
                gap: '0.5em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {dataRatingKeys.map(function (items, index) {
                return (
                  <Box
                    key={index}
                    sx={{
                      borderRadius: '5em',
                      width: '1.5em',
                      height: '1.5em',
                      backgroundColor: '#007FFF',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      children={items.value}
                      sx={{
                        color: 'White',
                        fontSize: '0.8em',
                        fontWeight: '500',
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Divider />

          {dataAttributes.map(function (items, index) {
            return (
              <>
                <Box
                  key={index}
                  sx={{
                    width: 'relative',
                    height: 'auto',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5em 1.2em',
                    gap: '5em',
                  }}
                >
                  <Typography
                    children={items.attribute}
                    sx={{
                      color: '#3F3D56',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      width: 'auto',
                      flexGrow: 1,
                    }}
                  />

                  <Box
                    sx={{
                      width: '18.4em',
                      display: 'flex',
                      gap: '0.8em',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {items.choices}
                  </Box>
                </Box>

                <Divider />
              </>
            );
          })}
        </Box>
      </Grid>
    </>
  );
}

export default EvaluationTable;
