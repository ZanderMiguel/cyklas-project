import React from 'react';
import './Styles/ClassCards_table_stylesheet.css';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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

function ClassCards_table() {
  return (
    <>
      <table className="classcards-table">
        <thead>
          <tr>
            {/* <th> Room ID </th> */}
            <th> Room Name </th>
            {/* <th> MIDTERM Grade </th>
            <th> FINAL TERM Grade </th> */}
            <th> FINAL Grade </th>
            <th> Actions </th>
          </tr>
        </thead>

        <tbody>
          {dataTable.map(function (items, index) {
            return (
              <tr key={index}>
                {/* <td data-label="Room ID"> {items.roomID} </td> */}
                <td data-label="Room Name"> {items.roomName} </td>
                {/* <td data-label="MIDTERM Grade"> {items.midtermGrade} </td>
                <td data-label="FINAL TERM Grade"> {items.finaltermGrade} </td> */}
                <td data-label="FINAL Grade"> {items.finalGrade} </td>
                <td data-label="Actions">
                  <Button 
                  // disabled
                  component = {Link}
                  to = "/Evaluation"
                  variant = "contained" children = "Evaluate"
                  sx = {{
                    padding: "0.3em 1em",
                    fontWeight: "600",
                    fontSize: "0.9em",
                    boxShadow: "none",
                    textTransform: "Capitalize",
                    textDecoration: "none",
                    "&: hover": {
                      boxShadow: "none"
                    }
                  }}/>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            {/* <td> </td> */}
            <td> </td>
            {/* <td> </td>
            <td> </td> */}
            <td> Total Rooms: </td>
            <td data-label="Total Rooms"> 5 </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ClassCards_table;
