import React from 'react';
import './Styles/ClassCards_table_stylesheet.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const dataTable = [
  {
    roomID: 'C20234',
    roomName: 'Embedded Programming',
    midtermGrade: '1.50',
    finaltermGrade: '0',
    finalGrade: '0',
    actions: '',
  },
  {
    roomID: 'C20242',
    roomName: 'Software Engineering 2',
    midtermGrade: '1.00',
    finaltermGrade: '0',
    finalGrade: '0',
    actions: '',
  },
  {
    roomID: 'C20248',
    roomName: 'Embedded Programming',
    midtermGrade: '1.50',
    finaltermGrade: '0',
    finalGrade: '0',
    actions: '',
  },
  {
    roomID: 'C20234',
    roomName: 'Architecture and Organization',
    midtermGrade: '1.00',
    finaltermGrade: '0',
    finalGrade: '0',
    actions: '',
  },
  {
    roomID: 'C20249',
    roomName: 'Methods of Research',
    midtermGrade: '1.75',
    finaltermGrade: '0',
    finalGrade: '0',
    actions: '',
  },
  {
    roomID: 'C20253',
    roomName: 'Operating System',
    midtermGrade: '1.75',
    finaltermGrade: '0',
    finalGrade: '0',
    actions: '',
  },
];



const ClassCards_table = ( { roomsdata } ) => 
{
  

  return (
    <>
      <table className="classcards-table">
        <thead>
          <tr>
            <th> ROOM NAME </th>
            <th> FINAL GRADE </th>
            <th> ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {roomsdata && roomsdata.map(function (items, index) {
            console.log(items.finalGrade);
            return (
              <tr key={index}>
                <td data-label="Room Name"> {items.RoomName} </td>
                <td data-label="FINAL Grade"> {items.finalGrade} </td>
                <td data-label="Actions">
                  <Button
                    // disabled
                    component={Link}
                    to="/Evaluation"
                    variant="contained"
                    children="Evaluate"
                    sx={{
                      padding: '0.3em 1em',
                      fontWeight: '600',
                      fontSize: '0.9em',
                      boxShadow: 'none',
                      textTransform: 'Capitalize',
                      textDecoration: 'none',
                      '&: hover': {
                        boxShadow: 'none',
                      },
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td>
            </td>
            <td> Total Rooms: </td>
            <td data-label="Total Rooms"> {roomsdata.length} </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ClassCards_table;
