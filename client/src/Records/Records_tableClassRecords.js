import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
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

const dataTable = [
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Paul Rudd',
    overallGrade: '93.2%',
    attendance: '100',
    activities: '96%',
    quizzes: '99.8%',
    recitations: '95%',
    classPerformance: '97.1%',
    majorExam: '96/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#F9A826' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Tom Holland',
    overallGrade: '90.7%',
    attendance: '100',
    activities: '94%',
    quizzes: '93.2%',
    recitations: '94%',
    classPerformance: '96.1%',
    majorExam: '94/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Tom Hiddleston',
    overallGrade: '89%',
    attendance: '100',
    activities: '93.7%',
    quizzes: '93.1%',
    recitations: '93%',
    classPerformance: '95.8%',
    majorExam: '93/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Robert Downey Jr.',
    overallGrade: '89.9%',
    attendance: '100',
    activities: '90%',
    quizzes: '91.6%',
    recitations: '93%',
    classPerformance: '93.5%',
    majorExam: '90/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Sebastian Stann',
    overallGrade: '84%',
    attendance: '85',
    activities: '92.9%',
    quizzes: '89.2%',
    recitations: '80%',
    classPerformance: '91.9%',
    majorExam: '86/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Paul Rudd',
    overallGrade: '93.2%',
    attendance: '100',
    activities: '96%',
    quizzes: '99.8%',
    recitations: '95%',
    classPerformance: '97.1%',
    majorExam: '96/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Tom Holland',
    overallGrade: '90.7%',
    attendance: '100',
    activities: '94%',
    quizzes: '93.2%',
    recitations: '94%',
    classPerformance: '96.1%',
    majorExam: '94/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Tom Hiddleston',
    overallGrade: '89%',
    attendance: '100',
    activities: '93.7%',
    quizzes: '93.1%',
    recitations: '93%',
    classPerformance: '95.8%',
    majorExam: '93/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Robert Downey Jr.',
    overallGrade: '89.9%',
    attendance: '100',
    activities: '90%',
    quizzes: '91.6%',
    recitations: '93%',
    classPerformance: '93.5%',
    majorExam: '90/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
  },
  {
    studentAvatar: (
      <Avatar src={AvatarIcon} sx={{ height: '1.5em', width: '1.5em' }} />
    ),
    studentName: 'Sebastian Stann',
    overallGrade: '84%',
    attendance: '85',
    activities: '92.9%',
    quizzes: '89.2%',
    recitations: '80%',
    classPerformance: '91.9%',
    majorExam: '86/100',
    classStanding: (
      <WorkspacePremium sx={{ fontSize: '1.7em', color: '#8584A6' }} />
    ),
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

const dataCourseYearSection = [
  {
    value: 'BSCS 3A',
    label: 'BSCS 3A',
  },
  {
    value: 'BSIT 3A',
    label: 'BSIT 3A',
  },
  {
    value: 'BSIT 3A',
    label: 'BSIT 3A',
  },
  {
    value: 'BSCS 3A',
    label: 'BSCS 3A',
  },
];

const dataTerm = [
  {
    value: 'MID TERM',
    label: 'MID TERM',
  },
  {
    value: 'FINAL TERM',
    label: 'FINAL TERM',
  },
];

function Records_tableClassRecords() {
  const [selectRoom, setSelectRoom] = useState('Embedded Programming');

  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
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
              onChange={handleChangeRoom}
              label="SelectRoom"
              disableUnderline
              sx={{
                width: '100%',
                fontSize: '0.9em',
                fontWeight: '400',
                color: '#3F3D56',
                border: '1px solid #DBDBDB',
                backgroundColor: "white",
                textTransform: "Uppercase",
                borderRadius: '0.2em',
                padding: '0.2em 0em 0.2em 0.6em',
                '&: hover': {
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  transition: 'all 300ms',
                },
              }}
            >
              {dataRoom.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item md={3} sm={4} xs={12}>
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
              value={selectCourseYearSection}
              onChange={handleChangeCourseYearSection}
              label="SelectCourseYearSection"
              disableUnderline
              sx={{
                width: '100%',
                fontSize: '0.9em',
                fontWeight: '400',
                color: '#3F3D56',
                border: '1px solid #DBDBDB',
                borderRadius: '0.2em',
                paddingLeft: '0.5em',
                '&: hover': {
                  border: '1px solid #212121',
                },
              }}
            >
              {dataCourseYearSection.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}
        {/* <Grid item md={3} sm={4} xs={12}>
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
              value={selectTerm}
              onChange={handleChangeTerm}
              label="SelectTerm"
              disableUnderline
              sx={{
                width: '100%',
                fontSize: '0.8em',
                fontWeight: '400',
                color: '#3F3D56',
                border: '1px solid #DBDBDB',
                borderRadius: '0.2em',
                paddingLeft: '0.5em',
                '&: hover': {
                  border: '1px solid #212121',
                },
              }}
            >
              {dataTerm.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}

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
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
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
                <th> Attendance </th>
                <th> Activities </th>
                <th> Quizzes </th>
                <th> Recitations </th>
                <th> Class Performance </th>
                <th> Major Exam </th>
                <th> Class Standing </th>
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
                    <td data-label="Overall Grade"> {items.overallGrade} </td>
                    <td data-label="Attendance"> {items.attendance} </td>
                    <td data-label="Activities"> {items.activities} </td>
                    <td data-label="Quizzes"> {items.quizzes} </td>
                    <td data-label="Recitations"> {items.recitations} </td>
                    <td data-label="Class Performance">
                      {' '}
                      {items.classPerformance}{' '}
                    </td>
                    <td data-label="Major Exam"> {items.majorExam} </td>
                    <td data-label="Class Standing"> {items.classStanding} </td>
                  </tr>
                );
              })}
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
