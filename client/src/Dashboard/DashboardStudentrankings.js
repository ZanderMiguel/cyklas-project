import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import './Styles/DashboardStudentrankingsStylesheet.css';
import { WorkspacePremium, Search } from '@mui/icons-material';
import {
  Container,
  Grid,
  Divider,
  Typography,
  Button,
  IconButton,
  Box,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const dataRange = [
  // {
  //   value: "ROOM NAME",
  //   label: "ROOM NAME",
  // },
  // {
  //   value: "THIS MONTH",
  //   label: "THIS MONTH",
  // },
  // {
  //   value: "THIS YEAR",
  //   label: "THIS YEAR",
  // },
];

const dataTable = [
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Paul Rudd',
    yearSection: '3A',
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Tom Holland',
    yearSection: '3A',
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Tom Hiddleston',
    yearSection: '3A',
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Robert Downey Jr.',
    yearSection: '3A',
  },
];

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

function DashboardStudentrankings() {
  const [selectRange, setSelectRange] = useState('');
  const handleChangeRange = (event) => {
    setSelectRange(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'transparent',
          display: 'flex',
          width: 'relative',
          height: 'auto',
          marginBottom: '0.3em',
        }}
      >
        <Typography
          children="Student Rankings"
          sx={{
            color: '#8E8E8E',
            fontSize: '0.8em',
            fontWeight: '500',
            width: 'auto',
            flexGrow: 1,
            height: 'relative',
            display: 'flex',
            alignItems: 'center',
            textTransform: 'Uppercase',
          }}
        />

        <FormControl
          variant="standard"
          sx={{
            width: 'auto',
            padding: '0em',
          }}
        >
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selectRange}
            onChange={handleChangeRange}
            label="SelectRoom"
            disableUnderline
            sx={{
              width: '100%',
              fontSize: '0.7em',
              fontWeight: '500',
              color: '#007FFF',
              textTransform: 'Uppercase',
            }}
          >
            {dataRange.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {' '}
                {label}{' '}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid item xs={12}>
        <table className="studentRankings-table">
          <thead>
            <tr>
              <th> Student Name </th>
              <th> Rank </th>
            </tr>
          </thead>

          <tbody>
            {dataTable.map(function (items, index) {
              return (
                <tr key={index}>
                  <td>
                    <div className="student-name">
                      {items.studentAvatar}
                      {items.studentName}
                    </div>
                  </td>
                  {/* <td data-label="Class Performance"> {items.course} </td> */}
                  <td data-label="Major Exam"> {items.yearSection} </td>
                  {/* <td data-label="Class Standing"> {items.classStanding} </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Grid>
    </>
  );
}

export default DashboardStudentrankings;
