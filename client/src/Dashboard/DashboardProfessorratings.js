import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import './Styles/DashboardProfessorratingsStylesheet.css';
import { Star, Search } from '@mui/icons-material';
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
  },
];

const dataTable = [
  {
    professorAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    professorName: 'Paul Rudd',
    roomClass: 'Software Engineering',
    // ratings: '98.7',
    icon: <Star sx={{ fontSize: '1.7em', color: '#F9A826'  }} />
  },
  {
    professorAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    professorName: 'Tom Holland',
    roomClass: 'Programming Language',
    // ratings: '98.5',
    icon: <Star sx={{ fontSize: '1.7em', color: '#F9A826'  }} />
  },
  {
    professorAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    professorName: 'Tom Hiddleston',
    roomClass: 'Introduction to Computing',
    // ratings: '98.2',
    icon: <Star sx={{ fontSize: '1.7em', color: '#F9A826'  }} />
  },
  {
    professorAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    professorName: 'Robert Downey Jr.',
    roomClass: 'College Algebra',
    // ratings: '98.1',
    icon: <Star sx={{ fontSize: '1.7em', color: '#F9A826'  }} />
  }
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

function DashboardProfessorratings() {
  const [selectRange, setSelectRange] = useState('This week');
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
            marginBottom: "0.3em"
            }}>
                <Typography children = "Professor Ratings"
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
                }}/>

                <FormControl
                    variant="standard"
                    sx={{
                    width: 'auto',
                    padding: '0em',
                    }}>
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

        <Grid item xs={12}>
          <table className="professorRatings-table">
            <thead>
              <tr>
                <th> Professor Name </th>
                <th> Room/ Class </th>
                <th> Ratings </th>
                {/* <th>  </th> */}
              </tr>
            </thead>

            <tbody>
              {dataTable.map(function (items, index) {
                return (
                  <tr key={index}>
                    <td>
                      <div className="professor-name">
                        {items.professorAvatar}
                        {items.professorName}
                      </div>
                    </td>
                    <td data-label="Room/ Class"> {items.roomClass} </td>
                    <td data-label="Ratings"> {items.icon} </td>
                    {/* <td> {items.icon} </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Grid>
    </>
  );
}

export default DashboardProfessorratings;
