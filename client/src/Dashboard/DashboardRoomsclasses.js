import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import './Styles/DashboardRoomsclassesStylesheet.css';
import { Star, Search } from '@mui/icons-material';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from '@mui/material';

const dataTable = [
  {
      roomName: "Software Engineering",
      course: "BSCS",
      yearSection: "3A",
      classDay: "Tuesday",
      classTime: "10:00 AM"
  },
  {
      roomName: "Software Engineering",
      course: "BSCS",
      yearSection: "3A",
      classDay: "Tuesday",
      classTime: "10:00 AM"
  },
  {
      roomName: "Software Engineering",
      course: "BSCS",
      yearSection: "3A",
      classDay: "Tuesday",
      classTime: "10:00 AM"
  },
  {
      roomName: "Software Engineering",
      course: "BSCS",
      yearSection: "3A",
      classDay: "Tuesday",
      classTime: "10:00 AM"
  },
  {
      roomName: "Software Engineering",
      course: "BSCS",
      yearSection: "3A",
      classDay: "Tuesday",
      classTime: "10:00 AM"
  }
];

function DashboardRoomsclasses() {
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
                <Typography children = "Rooms and Classes Schedules"
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

                <Button variant = "contained" children = "View all"
                sx= {{
                    backgroundColor: "Transparent",
                    color: "#007FFF",
                    fontSize: "0.7em",
                    fontWeight: "500",
                    boxShadow: "none",
                    "&: hover": {
                        backgroundColor: "#EDF3F9",
                        color: "#007FFF",
                        boxShadow: "none"
                    }
                }}/>
        </Box>

        <Grid item xs={12}>
          <table className="professorRatings-table">
            <thead>
              <tr>
                <th> Room Name </th>
                <th> Course </th>
                <th> Year and Section </th>
                <th> Class Day </th>
                <th> Class Time </th>
                <th> Actions </th>
              </tr>
            </thead>

            <tbody>
              {dataTable.map(function (items, index) {
                return (
                  <tr key={index}>
                    <td> {items.roomName} </td>
                    <td> {items.course} </td>
                    <td> {items.yearSection} </td>
                    <td> {items.classDay} </td>
                    <td> {items.classTime} </td>
                    <td>
                        <Button variant = "contained" children = "View"
                        sx= {{
                            color: "white",
                            fontSize: "0.8em",
                            fontWeight: "500",
                            boxShadow: "none",
                            marginRight: "0.5em",
                            padding: "0.3em 1em",
                            textTransform: "capitalize",
                            "&: hover": {
                                color: "#007FFF",
                                boxShadow: "none"
                            }
                        }}/>

                        <Button variant = "contained" children = "Leave"
                        sx= {{
                            backgroundColor: "Transparent",
                            border: "1px solid Transparent",
                            color: "#007FFF",
                            fontSize: "0.8em",
                            fontWeight: "500",
                            boxShadow: "none",
                            padding: "0.3em 1em",
                            textTransform: "capitalize",
                            "&: hover": {
                                backgroundColor: "Transparent",
                                border: "1px solid #007FFF",
                                color: "#007FFF",
                                boxShadow: "none"
                            }
                        }}/>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Grid>
    </>
  );
}

export default DashboardRoomsclasses;
