import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import NoRecords from '../assets/ImageJaven/NoRecords.png';
import './Styles/Records_tableClassRecords_stylesheet.css';
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
import axios from 'axios';

function Records_tableClassRecords({ rooms }) {
  const [selectRoom, setSelectRoom] = useState('Embedded Programming');
  const [members, setMembers] = useState(null);
  const [category, setCategory] = useState(null);
  const [records, setRecords] = useState(null);
  const stdRecord = React.useRef([]);
  const [overall, setOverall] = useState(null);
  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
    axios
      .post('http://localhost:5000/records', {
        userID: JSON.parse(localStorage.userData).data.user._id,
        roomID: rooms[event.target.value]._id,
      })
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .post('http://localhost:5000/get/members', {
        members: rooms[event.target.value].members,
      })
      .then((res) => {
        setMembers(res.data);
        axios
          .post('http://localhost:5000/gradingSystem/record', {
            roomID: rooms[event.target.value]._id,
          })
          .then((res) => {
            axios
              .post('http://localhost:5000/records/overall', {
                category: res.data[0].Category,
                roomID: rooms[event.target.value]._id,
                userID: JSON.parse(localStorage.userData).data.user._id,
              })
              .then((res) => {
                stdRecord.current = [];
                setOverall(res.data);
              })
              .catch((err) => console.log(err));
            setCategory(res.data[0].Category);
          });
      })
      .catch((err) => console.log(err));
  };

  const [selectCourseYearSection, setSelectCourseYearSection] =
    useState('BSCS 3A');

  const handleChangeCourseYearSection = (event) => {
    setSelectCourseYearSection(event.target.value);
  };
  const [selectTerm, setSelectTerm] = useState('MID TERM');

  const handleChangeTerm = (event) => {
    setSelectTerm(event.target.value);
  };

  return (
    <>
      <Grid container columnSpacing={1} rowSpacing={1}>
        <Grid item xs={4}>
          <FormControl
            variant="standard"
            sx={{
              width: '100%',
              paddingTop: '0em',
            }}
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectRoom}
              onChange={(event) => {
                handleChangeRoom(event);
              }}
              label="SelectRoom"
              disableUnderline
              sx={{
                width: '100%',
                fontSize: '0.9em',
                fontWeight: '400',
                color: '#3F3D56',
                border: '1px solid #DBDBDB',
                backgroundColor: 'white',
                textTransform: 'Uppercase',
                borderRadius: '0.2em',
                padding: '0.2em 0em 0.2em 0.6em',
                '&: hover': {
                  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                  transition: 'all 300ms',
                },
              }}
            >
              {rooms &&
                rooms.map((item, index) => (
                  <MenuItem key={item._id} value={index}>
                    {item.RoomName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} />

        <Grid item xs={4}>
          <Box
            sx={{
              border: '1px solid #DBDBDB',
              backgroundColor: 'white',
              borderRadius: '0.3em',
              padding: '0.3em 1em 0.3em 0.8em',
              display: 'flex',
              gap: '0.5em',
              alignItems: 'center',
              height: 'auto',
              width: '100%',
              '&: hover': {
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                transition: 'all 300ms',
              },
            }}
          >
            <IconButton
              aria-label="search"
              sx={{
                backgroundColor: 'transparent',
                height: '1em',
                width: '1em',
                '&: hover': {
                  backgroundColor: '#FCF9FB',
                },
              }}
            >
              <Search
                sx={{
                  color: '#82818E',
                  fontSize: '0.9em',
                }}
              />
            </IconButton>

            <Input
              variant="standard"
              placeholder="Search student..."
              disableUnderline
              sx={{
                width: '100%',
                backgroundColor: 'transparent',
                fontSize: '0.8em',
                fontWeight: '500',
                color: '#3F3D56',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <table className="records-table">
            <thead>
              <tr>
                <th> Student Name </th>
                <th> Overall Grade </th>
                {/*map some shit */}
                {category &&
                  category.map((item, index) => {
                    stdRecord.current.push({ [Object.entries(item)[0][0]]: 0 });
                    return <th key={index}> {Object.entries(item)[0][0]} </th>;
                  })}
                <th> Class Standing </th>
              </tr>
            </thead>

            <tbody>
              {records && overall && records.length > 0 ? (
                records.map((items, index) => {
                  if (items.gradingSystem.length === 0) {
                    axios
                      .put('http://localhost:5000/records/applyGS', {
                        crID: items._id,
                        gradingSystem: stdRecord.current,
                      })
                      .then((res) => {})
                      .catch((err) => console.log(err));
                  }

                  return (
                    <tr key={index}>
                      <td>
                        <div className="student-name">
                          <Avatar
                            src={items.student.image}
                            sx={{ height: '1.5em', width: '1.5em' }}
                          />
                          {items.student.name}
                        </div>
                      </td>
                      <td data-label="Overall">
                        {' '}
                        {Math.round(overall[items.student.stdID])}{' '}
                      </td>
                      {/*map some shit*/}
                      {items.gradingSystem.map((item, ind) => (
                        <td key={ind}>{item[Object.entries(item)[0][0]]}</td>
                      ))}

                      <td data-label="Class Standing">
                        {' '}
                        {items.classStanding}{' '}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <Box
                  sx={{
                    width: '220%',
                    height: '70vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <img
                    src={NoRecords}
                    alt="No Records"
                    style={{
                      height: '17em',
                      margin: '0em 0em 1.5em 0em',
                    }}
                  />
                  <Typography
                    children="You did not have any records from your students yet."
                    sx={{
                      fontSize: '1.2em',
                      fontWeight: '600',
                      color: '#3F3D56',
                      marginBottom: '0.3em',
                    }}
                  />

                  <Typography
                    children="Please check/ return any classworks of your students."
                    sx={{
                      fontSize: '1em',
                      fontWeight: '500',
                      color: '#8E8E8E',
                    }}
                  />
                </Box>
              )}
            </tbody>

            <tfoot>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> Total Students: </td>
                <td data-label="Total Students"> 5 </td>
              </tr>
            </tfoot>
          </table>
        </Grid>
      </Grid>
    </>
  );
}

export default Records_tableClassRecords;
